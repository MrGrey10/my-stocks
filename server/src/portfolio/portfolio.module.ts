import { Module } from '@nestjs/common';
import { MarketDataModule } from 'src/market-data/market-data.module';
import { StockModule } from 'src/stock/stock.module';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';

@Module({
  imports: [MarketDataModule, StockModule],
  providers: [PortfolioService, UserService, AuthGuard, RolesGuard],
  controllers: [PortfolioController],
})
export class PortfolioModule {}
