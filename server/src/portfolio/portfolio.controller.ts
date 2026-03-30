// server/src/portfolio/portfolio.controller.ts
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Authorization } from 'src/auth/decorators/auth.decorator';
import { Authorized } from 'src/auth/decorators/authorized.decorator';
import { PortfolioService } from './portfolio.service';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { CreateHoldingDto } from './dto/create-holding.dto';
import { UpdateHoldingDto } from './dto/update-holding.dto';

@Authorization()
@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  // Portfolio CRUD

  @HttpCode(HttpStatus.OK)
  @Get()
  listPortfolios(@Authorized('id') userId: string) {
    return this.portfolioService.listPortfolios(userId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createPortfolio(@Authorized('id') userId: string, @Body() dto: CreatePortfolioDto) {
    return this.portfolioService.createPortfolio(userId, dto.name);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':portfolioId')
  renamePortfolio(
    @Param('portfolioId') portfolioId: string,
    @Authorized('id') userId: string,
    @Body() dto: UpdatePortfolioDto,
  ) {
    return this.portfolioService.renamePortfolio(portfolioId, userId, dto.name);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':portfolioId')
  deletePortfolio(@Param('portfolioId') portfolioId: string, @Authorized('id') userId: string) {
    return this.portfolioService.deletePortfolio(portfolioId, userId);
  }

  // Holdings (scoped to portfolio)

  @HttpCode(HttpStatus.OK)
  @Get(':portfolioId/holdings')
  getHoldings(@Param('portfolioId') portfolioId: string, @Authorized('id') userId: string) {
    return this.portfolioService.getHoldings(userId, portfolioId);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post(':portfolioId/holdings')
  addHolding(
    @Param('portfolioId') portfolioId: string,
    @Authorized('id') userId: string,
    @Body() dto: CreateHoldingDto,
  ) {
    return this.portfolioService.addHolding(userId, portfolioId, dto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':portfolioId/holdings/:id')
  updateHolding(
    @Param('portfolioId') portfolioId: string,
    @Param('id') id: string,
    @Authorized('id') userId: string,
    @Body() dto: UpdateHoldingDto,
  ) {
    return this.portfolioService.updateHolding(id, userId, portfolioId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':portfolioId/holdings/:id')
  removeHolding(
    @Param('portfolioId') portfolioId: string,
    @Param('id') id: string,
    @Authorized('id') userId: string,
  ) {
    return this.portfolioService.removeHolding(id, userId, portfolioId);
  }
}
