import { Test } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { TickerService } from './ticker.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TwelveDataClient } from 'src/market-data/twelve-data.client';
import { TickerType } from 'prisma/generated';

const mockPrisma = {
  ticker: { findUnique: jest.fn(), create: jest.fn() },
  dailyPrice: { createMany: jest.fn() },
};
const mockTwelveData = { batchQuote: jest.fn(), timeSeries: jest.fn() };

describe('TickerService', () => {
  let service: TickerService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TickerService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: TwelveDataClient, useValue: mockTwelveData },
      ],
    }).compile();

    service = module.get(TickerService);
    jest.clearAllMocks();
  });

  describe('upsertTicker', () => {
    it('returns existing ticker without calling Twelve Data', async () => {
      const ticker = { id: 't-1', symbol: 'AAPL', name: 'Apple Inc', type: TickerType.STOCK };
      mockPrisma.ticker.findUnique.mockResolvedValue(ticker);

      const result = await service.upsertTicker('AAPL');

      expect(result).toEqual(ticker);
      expect(mockTwelveData.batchQuote).not.toHaveBeenCalled();
    });

    it('creates ticker when not found in DB', async () => {
      mockPrisma.ticker.findUnique.mockResolvedValue(null);
      mockTwelveData.batchQuote.mockResolvedValue({
        AAPL: { name: 'Apple Inc', type: 'Common Stock', exchange: 'NASDAQ', price: '175' },
      });
      mockPrisma.ticker.create.mockResolvedValue({ id: 't-new', symbol: 'AAPL', name: 'Apple Inc', type: TickerType.STOCK });
      mockTwelveData.timeSeries.mockResolvedValue([]);

      const result = await service.upsertTicker('AAPL');

      expect(mockPrisma.ticker.create).toHaveBeenCalledWith({
        data: { symbol: 'AAPL', name: 'Apple Inc', type: TickerType.STOCK, exchange: 'NASDAQ' },
      });
      expect(result.symbol).toBe('AAPL');
    });

    it('throws NotFoundException when Twelve Data returns error status', async () => {
      mockPrisma.ticker.findUnique.mockResolvedValue(null);
      mockTwelveData.batchQuote.mockResolvedValue({
        INVALID: { status: 'error' },
      });

      await expect(service.upsertTicker('INVALID')).rejects.toThrow(NotFoundException);
    });
  });
});
