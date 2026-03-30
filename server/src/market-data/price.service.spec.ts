import { Test } from '@nestjs/testing';
import { PriceService, CachedPrice } from './price.service';
import { REDIS_CLIENT } from 'src/libs/redis/redis.constants';

const mockRedis = {
  get: jest.fn(),
  set: jest.fn(),
  pipeline: jest.fn(),
};

describe('PriceService', () => {
  let service: PriceService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        PriceService,
        { provide: REDIS_CLIENT, useValue: mockRedis },
      ],
    }).compile();

    service = module.get(PriceService);
    jest.clearAllMocks();
  });

  describe('getPrice', () => {
    it('returns parsed price on cache hit', async () => {
      const cached: CachedPrice = {
        price: '175.43',
        change: '1.23',
        changePercent: '0.71',
        updatedAt: '2026-03-24T10:00:00.000Z',
      };
      mockRedis.get.mockResolvedValue(JSON.stringify(cached));

      const result = await service.getPrice('AAPL');

      expect(result).toEqual(cached);
      expect(mockRedis.get).toHaveBeenCalledWith('price:AAPL');
    });

    it('returns null on cache miss', async () => {
      mockRedis.get.mockResolvedValue(null);

      const result = await service.getPrice('AAPL');

      expect(result).toBeNull();
    });
  });

  describe('setPrice', () => {
    it('writes serialized price to Redis with 900s TTL', async () => {
      const data: CachedPrice = {
        price: '175.43',
        change: '1.23',
        changePercent: '0.71',
        updatedAt: '2026-03-24T10:00:00.000Z',
      };
      mockRedis.set.mockResolvedValue('OK');

      await service.setPrice('AAPL', data);

      expect(mockRedis.set).toHaveBeenCalledWith('price:AAPL', JSON.stringify(data), 'EX', 900);
    });
  });

  describe('setManyPrices', () => {
    it('writes all prices using a pipeline', async () => {
      const execMock = jest.fn().mockResolvedValue([]);
      const setMock = jest.fn().mockReturnThis();
      mockRedis.pipeline.mockReturnValue({ set: setMock, exec: execMock });

      const prices: Record<string, CachedPrice> = {
        AAPL: { price: '175.43', change: '1.23', changePercent: '0.71', updatedAt: '2026-03-24' },
        MSFT: { price: '420.00', change: '-2.00', changePercent: '-0.47', updatedAt: '2026-03-24' },
      };

      await service.setManyPrices(prices);

      expect(setMock).toHaveBeenCalledTimes(2);
      expect(execMock).toHaveBeenCalled();
    });
  });
});
