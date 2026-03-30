import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { REDIS_CLIENT } from 'src/libs/redis/redis.constants';

export interface CachedPrice {
  price: string;
  change: string;
  changePercent: string;
  updatedAt: string;
}

@Injectable()
export class PriceService {
  constructor(@Inject(REDIS_CLIENT) private readonly redis: Redis) {}

  async getPrice(symbol: string): Promise<CachedPrice | null> {
    const raw = await this.redis.get(`price:${symbol}`);
    return raw ? (JSON.parse(raw) as CachedPrice) : null;
  }

  async setPrice(symbol: string, data: CachedPrice): Promise<void> {
    await this.redis.set(`price:${symbol}`, JSON.stringify(data), 'EX', 900);
  }

  async setManyPrices(prices: Record<string, CachedPrice>): Promise<void> {
    const pipeline = this.redis.pipeline();
    for (const [symbol, data] of Object.entries(prices)) {
      pipeline.set(`price:${symbol}`, JSON.stringify(data), 'EX', 900);
    }
    await pipeline.exec();
  }
}
