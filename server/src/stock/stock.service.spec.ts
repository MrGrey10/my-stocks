import { Test } from '@nestjs/testing';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { StockService } from './stock.service';
import { PriceService } from 'src/market-data/price.service';
import { TwelveDataClient } from 'src/market-data/twelve-data.client';
import { TickerService } from './ticker.service';
import { PrismaService } from 'src/prisma/prisma.service';

const mockPrisma = {
  ticker: { findUnique: jest.fn() },
  dailyPrice: { findMany: jest.fn() },
};
const mockPriceService = { getPrice: jest.fn() };
const mockTwelveData = { search: jest.fn(), statistics: jest.fn(), news: jest.fn() };
const mockTickerService = { upsertTicker: jest.fn() };

describe('StockService', () => {
  let service: StockService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        StockService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: PriceService, useValue: mockPriceService },
        { provide: TwelveDataClient, useValue: mockTwelveData },
        { provide: TickerService, useValue: mockTickerService },
      ],
    }).compile();

    service = module.get(StockService);
    jest.clearAllMocks();
  });

  describe('getChart', () => {
    it('returns daily prices for valid range 1M', async () => {
      mockPrisma.ticker.findUnique.mockResolvedValue({ id: 'ticker-1', symbol: 'AAPL' });
      mockPrisma.dailyPrice.findMany.mockResolvedValue([
        { date: new Date('2026-02-22'), open: '170', high: '176', low: '169', close: '175', volume: 50000000n },
      ]);

      const result = await service.getChart('AAPL', '1M');

      expect(mockPrisma.dailyPrice.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: expect.objectContaining({ tickerId: 'ticker-1' }) }),
      );
      expect(result).toHaveLength(1);
    });

    it('throws BadRequestException for invalid range', async () => {
      await expect(service.getChart('AAPL', 'INVALID' as any)).rejects.toThrow(BadRequestException);
    });

    it('throws NotFoundException when ticker does not exist in DB', async () => {
      mockPrisma.ticker.findUnique.mockResolvedValue(null);

      await expect(service.getChart('UNKNOWN', '1M')).rejects.toThrow(NotFoundException);
    });
  });
});
