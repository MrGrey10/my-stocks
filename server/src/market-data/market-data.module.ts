import { Module } from '@nestjs/common';
import { PriceService } from './price.service';
import { TwelveDataClient } from './twelve-data.client';
import { MarketDataCron } from './market-data.cron';

@Module({
  providers: [PriceService, TwelveDataClient, MarketDataCron],
  exports: [PriceService, TwelveDataClient],
})
export class MarketDataModule {}
