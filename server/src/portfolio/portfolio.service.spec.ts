// server/src/portfolio/portfolio.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PriceService } from 'src/market-data/price.service';
import { TickerService } from 'src/stock/ticker.service';

const mockPrisma = {
  portfolio: {
    findMany: jest.fn(),
    findFirst: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
  portfolioHolding: {
    findFirst: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

const mockPriceService = { getPrice: jest.fn() };
const mockTickerService = { upsertTicker: jest.fn() };

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PortfolioService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: PriceService, useValue: mockPriceService },
        { provide: TickerService, useValue: mockTickerService },
      ],
    }).compile();

    service = module.get<PortfolioService>(PortfolioService);
  });

  afterEach(() => jest.clearAllMocks());

  describe('listPortfolios', () => {
    it('returns portfolios with computed summary', async () => {
      mockPrisma.portfolio.findMany.mockResolvedValue([
        {
          id: 'p1',
          name: 'My Portfolio',
          createdAt: new Date('2024-01-01'),
          holdings: [
            {
              quantity: '10',
              avgBuyPrice: '100',
              ticker: { symbol: 'AAPL' },
            },
          ],
        },
      ]);
      mockPriceService.getPrice.mockResolvedValue({ price: '150', change: '5', changePercent: '3.45' });

      const result = await service.listPortfolios('user1');

      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({
        id: 'p1',
        name: 'My Portfolio',
        holdingCount: 1,
        totalValue: 1500,
        todayPnl: 50,
      });
    });

    it('returns empty array when user has no portfolios', async () => {
      mockPrisma.portfolio.findMany.mockResolvedValue([]);
      const result = await service.listPortfolios('user1');
      expect(result).toEqual([]);
    });
  });

  describe('createPortfolio', () => {
    it('creates a portfolio and returns summary with zeros', async () => {
      const now = new Date();
      mockPrisma.portfolio.create.mockResolvedValue({ id: 'p1', name: 'Growth', createdAt: now });

      const result = await service.createPortfolio('user1', 'Growth');

      expect(mockPrisma.portfolio.create).toHaveBeenCalledWith({
        data: { userId: 'user1', name: 'Growth' },
      });
      expect(result).toEqual({
        id: 'p1',
        name: 'Growth',
        createdAt: now,
        holdingCount: 0,
        totalValue: 0,
        todayPnl: 0,
        todayPnlPercent: 0,
      });
    });
  });

  describe('renamePortfolio', () => {
    it('throws NotFoundException when portfolio not found', async () => {
      mockPrisma.portfolio.findFirst.mockResolvedValue(null);
      await expect(service.renamePortfolio('p1', 'user1', 'New Name')).rejects.toThrow(NotFoundException);
    });

    it('renames portfolio and returns id and name', async () => {
      mockPrisma.portfolio.findFirst.mockResolvedValue({ id: 'p1', name: 'Old' });
      mockPrisma.portfolio.update.mockResolvedValue({ id: 'p1', name: 'New Name' });

      const result = await service.renamePortfolio('p1', 'user1', 'New Name');

      expect(mockPrisma.portfolio.update).toHaveBeenCalledWith({
        where: { id: 'p1' },
        data: { name: 'New Name' },
      });
      expect(result).toEqual({ id: 'p1', name: 'New Name' });
    });
  });

  describe('deletePortfolio', () => {
    it('throws NotFoundException when portfolio not found', async () => {
      mockPrisma.portfolio.findFirst.mockResolvedValue(null);
      await expect(service.deletePortfolio('p1', 'user1')).rejects.toThrow(NotFoundException);
    });

    it('deletes portfolio when found', async () => {
      mockPrisma.portfolio.findFirst.mockResolvedValue({ id: 'p1' });
      mockPrisma.portfolio.delete.mockResolvedValue({});

      await service.deletePortfolio('p1', 'user1');

      expect(mockPrisma.portfolio.delete).toHaveBeenCalledWith({ where: { id: 'p1' } });
    });
  });

  describe('getHoldings', () => {
    it('throws NotFoundException when portfolio not found', async () => {
      mockPrisma.portfolio.findFirst.mockResolvedValue(null);
      await expect(service.getHoldings('user1', 'p1')).rejects.toThrow(NotFoundException);
    });

    it('returns empty array when portfolio has no holdings', async () => {
      mockPrisma.portfolio.findFirst.mockResolvedValue({ id: 'p1', holdings: [] });
      const result = await service.getHoldings('user1', 'p1');
      expect(result).toEqual([]);
    });

    it('returns enriched holdings with price data', async () => {
      mockPrisma.portfolio.findFirst.mockResolvedValue({
        id: 'p1',
        holdings: [
          {
            id: 'h1',
            quantity: '10',
            avgBuyPrice: '100',
            purchasedAt: new Date(),
            ticker: { symbol: 'AAPL', name: 'Apple', type: 'STOCK' },
          },
        ],
      });
      mockPriceService.getPrice.mockResolvedValue({ price: '150', change: '5', changePercent: '3.45' });

      const result = await service.getHoldings('user1', 'p1');

      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({
        id: 'h1',
        currentPrice: 150,
        pnl: 500,
        pnlPercent: 50,
      });
    });
  });

  describe('addHolding', () => {
    it('throws NotFoundException when portfolio not found', async () => {
      mockPrisma.portfolio.findFirst.mockResolvedValue(null);
      await expect(
        service.addHolding('user1', 'p1', { symbol: 'AAPL', quantity: 10, avgBuyPrice: 100 }),
      ).rejects.toThrow(NotFoundException);
    });

    it('creates holding in specified portfolio', async () => {
      mockPrisma.portfolio.findFirst.mockResolvedValue({ id: 'p1' });
      mockTickerService.upsertTicker.mockResolvedValue({ id: 't1' });
      mockPrisma.portfolioHolding.create.mockResolvedValue({ id: 'h1' });

      await service.addHolding('user1', 'p1', { symbol: 'AAPL', quantity: 10, avgBuyPrice: 100 });

      expect(mockTickerService.upsertTicker).toHaveBeenCalledWith('AAPL');
      expect(mockPrisma.portfolioHolding.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ portfolioId: 'p1', tickerId: 't1', quantity: 10 }),
        }),
      );
    });
  });

  describe('removeHolding', () => {
    it('throws NotFoundException when holding not found', async () => {
      mockPrisma.portfolioHolding.findFirst.mockResolvedValue(null);
      await expect(service.removeHolding('h1', 'user1', 'p1')).rejects.toThrow(NotFoundException);
    });

    it('deletes holding when found', async () => {
      mockPrisma.portfolioHolding.findFirst.mockResolvedValue({ id: 'h1' });
      mockPrisma.portfolioHolding.delete.mockResolvedValue({});

      await service.removeHolding('h1', 'user1', 'p1');

      expect(mockPrisma.portfolioHolding.delete).toHaveBeenCalledWith({ where: { id: 'h1' } });
    });
  });
});
