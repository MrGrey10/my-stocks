import { IsString } from 'class-validator';

export class AddWatchlistDto {
  @IsString()
  symbol: string;
}
