import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PriceService } from 'src/market-data/price.service';
import { TickerService } from 'src/stock/ticker.service';

@Injectable()
export class WatchlistService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly priceService: PriceService,
    private readonly tickerService: TickerService,
  ) {}

  async getWatchlist(userId: string) {
    const items = await this.prisma.watchlistItem.findMany({
      where: { userId },
      include: { ticker: true },
      orderBy: { createdAt: 'asc' },
    });

    return Promise.all(
      items.map(async (item) => {
        const cached = await this.priceService.getPrice(item.ticker.symbol);
        return {
          id: item.id,
          ticker: { symbol: item.ticker.symbol, name: item.ticker.name, type: item.ticker.type },
          price: cached?.price ?? null,
          change: cached?.change ?? null,
          changePercent: cached?.changePercent ?? null,
        };
      }),
    );
  }

  async addToWatchlist(userId: string, symbol: string) {
    const ticker = await this.tickerService.upsertTicker(symbol.toUpperCase());

    const existing = await this.prisma.watchlistItem.findUnique({
      where: { userId_tickerId: { userId, tickerId: ticker.id } },
    });
    if (existing) {
      throw new ConflictException(`${symbol} is already in your watchlist`);
    }

    return this.prisma.watchlistItem.create({
      data: { userId, tickerId: ticker.id },
      include: { ticker: true },
    });
  }

  async removeFromWatchlist(userId: string, itemId: string) {
    const item = await this.prisma.watchlistItem.findFirst({
      where: { id: itemId, userId },
    });
    if (!item) throw new NotFoundException('Watchlist item not found');

    await this.prisma.watchlistItem.delete({ where: { id: itemId } });
  }
}
