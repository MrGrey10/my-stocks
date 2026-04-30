import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'src/prisma/prisma.service';
import { PriceService, CachedPrice } from './price.service';
import { TwelveDataClient } from './twelve-data.client';

@Injectable()
export class MarketDataCron implements OnModuleInit {
	private readonly logger = new Logger(MarketDataCron.name);

	constructor(
		private readonly prisma: PrismaService,
		private readonly priceService: PriceService,
		private readonly twelveData: TwelveDataClient,
	) {}

	async onModuleInit(): Promise<void> {
		await this.refreshPrices();
	}

	/** Refresh all ticker prices in Redis once daily at midnight UTC. */
	@Cron('0 0 0 * * *')
	async refreshPrices(): Promise<void> {
		const tickers = await this.prisma.ticker.findMany({
			select: { symbol: true },
		});
		if (!tickers.length) return;

		const symbols = tickers.map((t) => t.symbol);
		this.logger.log(`Refreshing prices for ${symbols.length} tickers`);

		for (let i = 0; i < symbols.length; i += 100) {
			const chunk = symbols.slice(i, i + 100);
			try {
				const quotes = await this.twelveData.batchQuote(chunk);
				const prices: Record<string, CachedPrice> = {};

				for (const [symbol, quote] of Object.entries(quotes)) {
					const price = quote.price ?? quote.close;
					if (quote.status === 'error' || !price) continue;
					prices[symbol] = {
						price,
						change: quote.change,
						changePercent: quote.percent_change,
						updatedAt: new Date().toISOString(),
					};
				}

				await this.priceService.setManyPrices(prices);
			} catch (err) {
				this.logger.error(
					`Failed to refresh price chunk starting at ${chunk[0]}: ${err}`,
				);
			}
		}
	}

	async getTickerPrice(symbol: string): Promise<CachedPrice | null> {
		return this.priceService.getPrice(symbol);
	}

	/** Save EOD OHLCV snapshot on weekdays at 22:00 UTC (after US market close). */
	@Cron('0 22 * * 1-5')
	async saveEodPrices(): Promise<void> {
		const tickers = await this.prisma.ticker.findMany({
			select: { id: true, symbol: true },
		});
		if (!tickers.length) return;

		const today = new Date();
		today.setUTCHours(0, 0, 0, 0);

		this.logger.log(`Saving EOD prices for ${tickers.length} tickers`);

		for (let i = 0; i < tickers.length; i += 100) {
			const chunk = tickers.slice(i, i + 100);
			const chunkSymbols = chunk.map((t) => t.symbol);

			try {
				const quotes = await this.twelveData.batchQuote(chunkSymbols);

				for (const ticker of chunk) {
					const quote = quotes[ticker.symbol];
					if (!quote || quote.status === 'error' || !quote.close) continue;

					await this.prisma.dailyPrice.upsert({
						where: { tickerId_date: { tickerId: ticker.id, date: today } },
						create: {
							tickerId: ticker.id,
							date: today,
							open: quote.open,
							high: quote.high,
							low: quote.low,
							close: quote.close,
							volume: BigInt(quote.volume ?? 0),
						},
						update: {
							open: quote.open,
							high: quote.high,
							low: quote.low,
							close: quote.close,
							volume: BigInt(quote.volume ?? 0),
						},
					});
				}
			} catch (err) {
				this.logger.error(`Failed to save EOD prices for chunk: ${err}`);
			}
		}
	}
}
