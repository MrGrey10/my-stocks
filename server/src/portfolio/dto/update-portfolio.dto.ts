import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdatePortfolioDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;
}
