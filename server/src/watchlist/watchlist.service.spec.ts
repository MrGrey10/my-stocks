import { Test } from '@nestjs/testing';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PriceService } from 'src/market-data/price.service';
import { TickerService } from 'src/stock/ticker.service';

const mockPrisma = {
  watchlistItem: {
    findUnique: jest.fn(),
    findFirst: jest.fn(),
    create: jest.fn(),
    findMany: jest.fn(),
    delete: jest.fn(),
  },
};
const mockPriceService = { getPrice: jest.fn() };
const mockTickerService = { upsertTicker: jest.fn() };

describe('WatchlistService', () => {
  let service: WatchlistService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        WatchlistService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: PriceService, useValue: mockPriceService },
        { provide: TickerService, useValue: mockTickerService },
      ],
    }).compile();

    service = module.get(WatchlistService);
    jest.clearAllMocks();
  });

  describe('addToWatchlist', () => {
    it('creates a watchlist item successfully', async () => {
      const ticker = { id: 't-1', symbol: 'AAPL', name: 'Apple Inc', type: 'STOCK' };
      mockTickerService.upsertTicker.mockResolvedValue(ticker);
      mockPrisma.watchlistItem.findUnique.mockResolvedValue(null);
      mockPrisma.watchlistItem.create.mockResolvedValue({ id: 'w-1', userId: 'u-1', tickerId: 't-1', ticker });

      const result = await service.addToWatchlist('u-1', 'AAPL');

      expect(mockPrisma.watchlistItem.create).toHaveBeenCalled();
      expect(result).toHaveProperty('id', 'w-1');
    });

    it('throws ConflictException when ticker is already in watchlist', async () => {
      const ticker = { id: 't-1', symbol: 'AAPL' };
      mockTickerService.upsertTicker.mockResolvedValue(ticker);
      mockPrisma.watchlistItem.findUnique.mockResolvedValue({ id: 'w-1' });

      await expect(service.addToWatchlist('u-1', 'AAPL')).rejects.toThrow(ConflictException);
    });
  });

  describe('removeFromWatchlist', () => {
    it('throws NotFoundException when item does not belong to user', async () => {
      mockPrisma.watchlistItem.findFirst.mockResolvedValue(null);

      await expect(service.removeFromWatchlist('u-1', 'item-1')).rejects.toThrow(NotFoundException);
    });
  });
});
