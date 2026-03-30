import { IsDateString, IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateHoldingDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  quantity?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  avgBuyPrice?: number;

  @IsOptional()
  @IsDateString()
  purchasedAt?: string;
}
