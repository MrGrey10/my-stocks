import { IsDateString, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateHoldingDto {
  @IsString()
  symbol: string;

  @IsNumber()
  @Min(0)
  quantity: number;

  @IsNumber()
  @Min(0)
  avgBuyPrice: number;

  @IsOptional()
  @IsDateString()
  purchasedAt?: string;
}
