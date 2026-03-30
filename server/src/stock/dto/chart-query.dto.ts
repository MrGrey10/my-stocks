import { IsIn, IsOptional } from 'class-validator';

export class ChartQueryDto {
  @IsOptional()
  @IsIn(['1M', '3M', '1Y'], { message: 'range must be one of: 1M, 3M, 1Y' })
  range: '1M' | '3M' | '1Y' = '1M';
}
