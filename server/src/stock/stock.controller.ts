import { Controller, Get, HttpCode, HttpStatus, Param, Query, UseGuards } from '@nestjs/common';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { Authorization } from 'src/auth/decorators/auth.decorator';
import { StockService } from './stock.service';
import { ChartQueryDto } from './dto/chart-query.dto';

@Authorization()
@Controller('stocks')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Throttle({ default: { limit: 10, ttl: 60000 } })
  @UseGuards(ThrottlerGuard)
  @HttpCode(HttpStatus.OK)
  @Get('search')
  search(@Query('q') q: string) {
    return this.stockService.search(q);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':symbol')
  getDetails(@Param('symbol') symbol: string) {
    return this.stockService.getDetails(symbol.toUpperCase());
  }

  @HttpCode(HttpStatus.OK)
  @Get(':symbol/chart')
  getChart(@Param('symbol') symbol: string, @Query() query: ChartQueryDto) {
    return this.stockService.getChart(symbol.toUpperCase(), query.range);
  }
}
