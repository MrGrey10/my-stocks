import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Ticker, TickerType } from 'prisma/generated';
import { PrismaService } from 'src/prisma/prisma.service';
import { TwelveDataClient } from 'src/market-data/twelve-data.client';
import { PriceService } from 'src/market-data/price.service';

@Injectable()
export class TickerService {
	private readonly logger = new Logger(TickerService.name);

	constructor(
		private readonly prisma: PrismaService,
		private readonly twelveData: TwelveDataClient,
		private readonly priceService: PriceService,
	) {}

	/**
	 * Find existing ticker or create it from Twelve Data.
	 * On first creation, kicks off a background backfill of 1-year daily prices.
	 */
	async upsertTicker(symbol: string): Promise<Ticker> {
		const existing = await this.prisma.ticker.findUnique({ where: { symbol } });
		if (existing) return existing;

		const quotes = await this.twelveData.batchQuote([symbol]);
		const quote = quotes[symbol];
		if (!quote || (quote as any).status === 'error') {
			throw new NotFoundException(
				`Ticker "${symbol}" not found in Twelve Data`,
			);
		}

		const ticker = await this.prisma.ticker.create({
			data: {
				symbol,
				name: quote.name,
				type: this.mapTickerType(quote.type),
				exchange: quote.exchange || null,
			},
		});

		const price = quote.price ?? quote.close;
		if (price) {
			await this.priceService.setPrice(symbol, {
				price,
				change: quote.change ?? '0',
				changePercent: quote.percent_change ?? '0',
				updatedAt: new Date().toISOString(),
			});
		}

		this.backfillDailyPrices(ticker).catch((err) =>
			this.logger.error(`Backfill failed for ${symbol}: ${err}`),
		);

		return ticker;
	}

	private async backfillDailyPrices(ticker: Ticker): Promise<void> {
		const candles = await this.twelveData.timeSeries(ticker.symbol, 365);
		if (!candles.length) return;

		await this.prisma.dailyPrice.createMany({
			data: candles.map((c) => ({
				tickerId: ticker.id,
				date: new Date(c.datetime),
				open: c.open,
				high: c.high,
				low: c.low,
				close: c.close,
				volume: BigInt(c.volume ?? 0),
			})),
			skipDuplicates: true,
		});

		this.logger.log(
			`Backfilled ${candles.length} candles for ${ticker.symbol}`,
		);
	}

	private mapTickerType(twelveDataType: string): TickerType {
		const map: Record<string, TickerType> = {
			'Common Stock': TickerType.STOCK,
			ETF: TickerType.ETF,
			'Digital Currency': TickerType.CRYPTO,
			'Physical Currency': TickerType.CRYPTO,
		};
		return map[twelveDataType] ?? TickerType.OTHER;
	}
}
