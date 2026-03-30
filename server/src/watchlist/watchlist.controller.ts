import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { Authorization } from 'src/auth/decorators/auth.decorator';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import { WatchlistService } from './watchlist.service';
import { AddWatchlistDto } from './dto/add-watchlist.dto';

@Authorization()
@Controller('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getWatchlist(@Authorized('id') userId: string) {
    return this.watchlistService.getWatchlist(userId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  addToWatchlist(@Authorized('id') userId: string, @Body() dto: AddWatchlistDto) {
    return this.watchlistService.addToWatchlist(userId, dto.symbol);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':itemId')
  removeFromWatchlist(@Authorized('id') userId: string, @Param('itemId') itemId: string) {
    return this.watchlistService.removeFromWatchlist(userId, itemId);
  }
}
