import { Module } from '@nestjs/common';
import { MarketDataModule } from 'src/market-data/market-data.module';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { TickerService } from './ticker.service';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';

@Module({
  imports: [MarketDataModule],
  providers: [TickerService, StockService, UserService, AuthGuard, RolesGuard],
  controllers: [StockController],
  exports: [TickerService],
})
export class StockModule {}
