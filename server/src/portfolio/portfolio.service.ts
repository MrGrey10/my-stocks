// server/src/portfolio/portfolio.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PriceService } from 'src/market-data/price.service';
import { TwelveDataClient } from 'src/market-data/twelve-data.client';
import { TickerService } from 'src/stock/ticker.service';
import { CreateHoldingDto } from './dto/create-holding.dto';
import { UpdateHoldingDto } from './dto/update-holding.dto';

export interface PortfolioSummary {
	id: string;
	name: string;
	createdAt: Date;
	holdingCount: number;
	totalValue: number;
	todayPnl: number;
	todayPnlPercent: number;
	totalInvested: number;
	totalPnl: number;
	totalPnlPercent: number;
}

export interface HoldingResponse {
	id: string;
	ticker: { symbol: string; name: string; type: string };
	quantity: number;
	avgBuyPrice: number;
	purchasedAt: Date;
	currentPrice: number;
	currentValue: number;
	pnl: number;
	pnlPercent: number;
	change: number;
	changePercent: number;
	totalInvested: number;
	allocationPercent: number;
}

@Injectable()
export class PortfolioService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly priceService: PriceService,
		private readonly twelveData: TwelveDataClient,
		private readonly tickerService: TickerService,
	) {}

	async listPortfolios(userId: string): Promise<PortfolioSummary[]> {
		const portfolios = await this.prisma.portfolio.findMany({
			where: { userId },
			include: { holdings: { include: { ticker: true } } },
			orderBy: { createdAt: 'asc' },
		});

		const allSymbols = [...new Set(portfolios.flatMap((p) => p.holdings.map((h) => h.ticker.symbol)))];
		const uncachedSymbols = await Promise.all(
			allSymbols.map(async (s) => {
				const hit = await this.priceService.getPrice(s);
				return hit ? null : s;
			}),
		).then((results) => results.filter((s): s is string => s !== null));

		if (uncachedSymbols.length > 0) {
			const quotes = await this.twelveData.batchQuote(uncachedSymbols);
			await Promise.all(
				uncachedSymbols.map(async (s) => {
					const q = quotes[s];
					if (q && q.status !== 'error' && (q.price ?? q.close)) {
						await this.priceService.setPrice(s, {
							price: q.price ?? q.close,
							change: q.change,
							changePercent: q.percent_change,
							updatedAt: new Date().toISOString(),
						});
					}
				}),
			);
		}

		const summaries = await Promise.all(
			portfolios.map(async (p) => {
				const prices = await Promise.all(
					p.holdings.map((h) => this.priceService.getPrice(h.ticker.symbol)),
				);

				let totalValue = 0;
				let todayPnl = 0;
				let totalPnl = 0;
				let totalCost = 0;

				p.holdings.forEach((h, i) => {
					const cached = prices[i];
					const qty = parseFloat(h.quantity.toString());
					const avgBuy = parseFloat(h.avgBuyPrice.toString());
					totalCost += avgBuy * qty;
					if (cached) {
						const currentPrice = parseFloat(cached.price);
						totalValue += currentPrice * qty;
						todayPnl += parseFloat(cached.change) * qty;
						totalPnl += (currentPrice - avgBuy) * qty;
					}
				});

				const baseValue = totalValue - todayPnl;
				const todayPnlPercent =
					baseValue > 0 ? (todayPnl / baseValue) * 100 : 0;
				const totalPnlPercent =
					totalCost > 0 ? (totalPnl / totalCost) * 100 : 0;

				return {
					id: p.id,
					name: p.name,
					createdAt: p.createdAt,
					holdingCount: p.holdings.length,
					totalValue,
					totalInvested: totalCost,
					todayPnl,
					todayPnlPercent,
					totalPnl,
					totalPnlPercent,
				};
			}),
		);

		return summaries;
	}

	async createPortfolio(
		userId: string,
		name: string,
	): Promise<PortfolioSummary> {
		const portfolio = await this.prisma.portfolio.create({
			data: { userId, name },
		});
		return {
			id: portfolio.id,
			name: portfolio.name,
			createdAt: portfolio.createdAt,
			holdingCount: 0,
			totalValue: 0,
			totalInvested: 0,
			todayPnl: 0,
			todayPnlPercent: 0,
			totalPnl: 0,
			totalPnlPercent: 0,
		};
	}

	async renamePortfolio(
		portfolioId: string,
		userId: string,
		name: string,
	): Promise<{ id: string; name: string }> {
		const portfolio = await this.prisma.portfolio.findFirst({
			where: { id: portfolioId, userId },
		});
		if (!portfolio) throw new NotFoundException('Portfolio not found');

		const updated = await this.prisma.portfolio.update({
			where: { id: portfolioId },
			data: { name },
		});
		return { id: updated.id, name: updated.name };
	}

	async deletePortfolio(portfolioId: string, userId: string): Promise<void> {
		const portfolio = await this.prisma.portfolio.findFirst({
			where: { id: portfolioId, userId },
		});
		if (!portfolio) throw new NotFoundException('Portfolio not found');

		await this.prisma.portfolio.delete({ where: { id: portfolioId } });
	}

	async getHoldings(
		userId: string,
		portfolioId: string,
	): Promise<HoldingResponse[]> {
		const portfolio = await this.prisma.portfolio.findFirst({
			where: { id: portfolioId, userId },
			include: { holdings: { include: { ticker: true } } },
		});
		if (!portfolio) throw new NotFoundException('Portfolio not found');
		if (!portfolio.holdings.length) return [];

		const symbols = portfolio.holdings.map((h) => h.ticker.symbol);
		const uncached = await Promise.all(
			symbols.map(async (s) => {
				const hit = await this.priceService.getPrice(s);
				return hit ? null : s;
			}),
		).then((results) => results.filter((s): s is string => s !== null));

		if (uncached.length > 0) {
			const quotes = await this.twelveData.batchQuote(uncached);
			await Promise.all(
				uncached.map(async (s) => {
					const q = quotes[s];
					if (q && q.status !== 'error' && (q.price ?? q.close)) {
						await this.priceService.setPrice(s, {
							price: q.price ?? q.close,
							change: q.change,
							changePercent: q.percent_change,
							updatedAt: new Date().toISOString(),
						});
					}
				}),
			);
		}

		const holdings = await Promise.all(
			portfolio.holdings.map(async (h) => {
				const cached = await this.priceService.getPrice(h.ticker.symbol);
				const currentPrice = cached ? parseFloat(cached.price) : 0;
				const change = cached ? parseFloat(cached.change) : 0;
				const changePercent = cached ? parseFloat(cached.changePercent) : 0;
				const qty = parseFloat(h.quantity.toString());
				const avgBuy = parseFloat(h.avgBuyPrice.toString());

				return {
					id: h.id,
					ticker: {
						symbol: h.ticker.symbol,
						name: h.ticker.name,
						type: h.ticker.type,
					},
					quantity: qty,
					avgBuyPrice: avgBuy,
					purchasedAt: h.purchasedAt,
					currentPrice,
					currentValue: currentPrice * qty,
					pnl: (currentPrice - avgBuy) * qty,
					pnlPercent: avgBuy > 0 ? ((currentPrice - avgBuy) / avgBuy) * 100 : 0,
					change,
					changePercent,
					totalInvested: avgBuy * qty,
					allocationPercent: 0,
				};
			}),
		);

		const totalPortfolioValue = holdings.reduce((sum, h) => sum + h.currentValue, 0);
		return holdings.map((h) => ({
			...h,
			allocationPercent: totalPortfolioValue > 0 ? (h.currentValue / totalPortfolioValue) * 100 : 0,
		}));
	}

	async addHolding(userId: string, portfolioId: string, dto: CreateHoldingDto) {
		const portfolio = await this.prisma.portfolio.findFirst({
			where: { id: portfolioId, userId },
		});
		if (!portfolio) throw new NotFoundException('Portfolio not found');

		const ticker = await this.tickerService.upsertTicker(
			dto.symbol.toUpperCase(),
		);

		const cached = await this.priceService.getPrice(ticker.symbol);
		if (!cached) {
			const quotes = await this.twelveData.batchQuote([ticker.symbol]);
			const quote = quotes[ticker.symbol];
			if (quote && quote.status !== 'error' && (quote.price ?? quote.close)) {
				await this.priceService.setPrice(ticker.symbol, {
					price: quote.price ?? quote.close,
					change: quote.change,
					changePercent: quote.percent_change,
					updatedAt: new Date().toISOString(),
				});
			}
		}

		const existing = await this.prisma.portfolioHolding.findFirst({
			where: { portfolioId, tickerId: ticker.id },
		});

		if (existing) {
			const existingQty = parseFloat(existing.quantity.toString());
			const existingAvg = parseFloat(existing.avgBuyPrice.toString());
			const newQty = existingQty + dto.quantity;
			const newAvg = (existingQty * existingAvg + dto.quantity * dto.avgBuyPrice) / newQty;

			return this.prisma.portfolioHolding.update({
				where: { id: existing.id },
				data: { quantity: newQty, avgBuyPrice: newAvg },
				include: { ticker: true },
			});
		}

		return this.prisma.portfolioHolding.create({
			data: {
				portfolioId,
				tickerId: ticker.id,
				quantity: dto.quantity,
				avgBuyPrice: dto.avgBuyPrice,
				purchasedAt: dto.purchasedAt ? new Date(dto.purchasedAt) : new Date(),
			},
			include: { ticker: true },
		});
	}

	async updateHolding(
		id: string,
		userId: string,
		portfolioId: string,
		dto: UpdateHoldingDto,
	) {
		const holding = await this.prisma.portfolioHolding.findFirst({
			where: { id, portfolioId, portfolio: { userId } },
		});
		if (!holding) throw new NotFoundException('Holding not found');

		return this.prisma.portfolioHolding.update({
			where: { id },
			data: {
				...(dto.quantity !== undefined && { quantity: dto.quantity }),
				...(dto.avgBuyPrice !== undefined && { avgBuyPrice: dto.avgBuyPrice }),
				...(dto.purchasedAt !== undefined && {
					purchasedAt: new Date(dto.purchasedAt),
				}),
			},
			include: { ticker: true },
		});
	}

	async removeHolding(
		id: string,
		userId: string,
		portfolioId: string,
	): Promise<void> {
		const holding = await this.prisma.portfolioHolding.findFirst({
			where: { id, portfolioId, portfolio: { userId } },
		});
		if (!holding) throw new NotFoundException('Holding not found');

		await this.prisma.portfolioHolding.delete({ where: { id } });
	}
}
