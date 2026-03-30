import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PriceService } from 'src/market-data/price.service';
import { TwelveDataClient } from 'src/market-data/twelve-data.client';
import { TickerService } from './ticker.service';

const RANGE_DAYS: Record<string, number> = { '1M': 30, '3M': 90, '1Y': 365 };

@Injectable()
export class StockService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly priceService: PriceService,
    private readonly twelveData: TwelveDataClient,
    private readonly tickerService: TickerService,
  ) {}

  async search(q: string) {
    const upper = q.toUpperCase();

    const [apiResults, localTickers] = await Promise.all([
      this.twelveData.search(upper).catch(() => []),
      this.prisma.ticker.findMany({
        where: {
          OR: [
            { symbol: { contains: upper } },
            { name: { contains: q, mode: 'insensitive' } },
          ],
        },
        take: 10,
      }),
    ]);

    const seen = new Set<string>();
    const merged: { symbol: string; name: string; exchange: string; type: string }[] = [];

    for (const r of apiResults) {
      if (!seen.has(r.symbol)) {
        seen.add(r.symbol);
        merged.push({ symbol: r.symbol, name: r.instrument_name, exchange: r.exchange, type: r.instrument_type });
      }
    }

    for (const t of localTickers) {
      if (!seen.has(t.symbol)) {
        seen.add(t.symbol);
        merged.push({ symbol: t.symbol, name: t.name ?? '', exchange: t.exchange ?? '', type: t.type });
      }
    }

    return merged;
  }

  async getDetails(symbol: string) {
    const ticker = await this.tickerService.upsertTicker(symbol);
    const [cached, overview, news] = await Promise.all([
      this.priceService.getPrice(symbol),
      this.twelveData.statistics(symbol),
      this.twelveData.news(symbol),
    ]);

    return {
      symbol: ticker.symbol,
      name: ticker.name,
      type: ticker.type,
      exchange: ticker.exchange,
      price: cached?.price ?? null,
      change: cached?.change ?? null,
      changePercent: cached?.changePercent ?? null,
      updatedAt: cached?.updatedAt ?? null,
      metrics: {
        pe: overview.pe_ratio ?? null,
        marketCap: overview.market_capitalization ?? null,
        dividendYield: overview.dividend_yield ?? null,
      },
      news: news.map((n) => ({
        title: n.title,
        url: n.url,
        publishedAt: n.published_at,
        source: n.source,
      })),
    };
  }

  async getChart(symbol: string, range: string) {
    const days = RANGE_DAYS[range];
    if (!days) {
      throw new BadRequestException('Invalid range. Valid values: 1M, 3M, 1Y');
    }

    const ticker = await this.prisma.ticker.findUnique({ where: { symbol } });
    if (!ticker) {
      throw new NotFoundException(`Ticker "${symbol}" not found`);
    }

    const from = new Date();
    from.setDate(from.getDate() - days);

    const candles = await this.prisma.dailyPrice.findMany({
      where: { tickerId: ticker.id, date: { gte: from } },
      orderBy: { date: 'asc' },
      select: { date: true, open: true, high: true, low: true, close: true, volume: true },
    });

    // Convert BigInt volume to string for JSON serialization
    return candles.map((c) => ({ ...c, volume: c.volume.toString() }));
  }
}
