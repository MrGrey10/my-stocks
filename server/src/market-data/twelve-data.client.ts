import { Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface TwelveDataQuote {
  symbol: string;
  name: string;
  exchange: string;
  type: string;
  price?: string;
  change: string;
  percent_change: string;
  volume: string;
  open: string;
  high: string;
  low: string;
  close: string;
  status?: string;
}

export interface TwelveDataCandle {
  datetime: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export interface TwelveDataSearchResult {
  symbol: string;
  instrument_name: string;
  exchange: string;
  instrument_type: string;
  currency: string;
}

export interface TwelveDataOverview {
  name?: string;
  pe_ratio?: string;
  market_capitalization?: string;
  dividend_yield?: string;
}

export interface TwelveDataNewsItem {
  title: string;
  url: string;
  published_at: string;
  source: string;
}

@Injectable()
export class TwelveDataClient {
  private readonly logger = new Logger(TwelveDataClient.name);
  private readonly baseUrl = 'https://api.twelvedata.com';
  private readonly apiKey: string;

  constructor(private readonly config: ConfigService) {
    this.apiKey = this.config.getOrThrow<string>('TWELVE_DATA_API_KEY');
  }

  /** Batch quote for up to 100 symbols. Returns a map symbol -> quote. */
  async batchQuote(symbols: string[]): Promise<Record<string, TwelveDataQuote>> {
    const symbolParam = symbols.join(',');
    const url = `${this.baseUrl}/quote?symbol=${symbolParam}&apikey=${this.apiKey}`;
    const data = await this.get<unknown>(url);

    // Single symbol returns the quote directly; multiple symbols return a map
    if (symbols.length === 1) {
      return { [symbols[0]]: data as TwelveDataQuote };
    }
    return data as Record<string, TwelveDataQuote>;
  }

  /** Fetch daily OHLCV candles. outputsize = number of trading days. */
  async timeSeries(symbol: string, outputsize: number): Promise<TwelveDataCandle[]> {
    const url = `${this.baseUrl}/time_series?symbol=${symbol}&interval=1day&outputsize=${outputsize}&apikey=${this.apiKey}`;
    const data = await this.get<{ values?: TwelveDataCandle[] }>(url);
    return data.values ?? [];
  }

  /** Search tickers by keyword. */
  async search(q: string): Promise<TwelveDataSearchResult[]> {
    const url = `${this.baseUrl}/symbol_search?symbol=${encodeURIComponent(q)}&apikey=${this.apiKey}`;
    const data = await this.get<{ data?: TwelveDataSearchResult[] }>(url);
    return data.data ?? [];
  }

  /** Get fundamental statistics (P/E, market cap, dividend yield). */
  async statistics(symbol: string): Promise<TwelveDataOverview> {
    const url = `${this.baseUrl}/statistics?symbol=${symbol}&apikey=${this.apiKey}`;
    const data = await this.get<{
      statistics?: {
        valuations_metrics?: { trailing_pe?: string; market_capitalization?: string };
        dividends_and_splits?: { forward_annual_dividend_yield?: string };
      };
    }>(url);

    const vm = data.statistics?.valuations_metrics;
    const ds = data.statistics?.dividends_and_splits;

    return {
      pe_ratio: vm?.trailing_pe ?? undefined,
      market_capitalization: vm?.market_capitalization ?? undefined,
      dividend_yield: ds?.forward_annual_dividend_yield ?? undefined,
    };
  }

  /** Get latest news for a symbol. Returns empty array if not available (e.g. ETFs). */
  async news(symbol: string): Promise<TwelveDataNewsItem[]> {
    const url = `${this.baseUrl}/news?symbol=${symbol}&apikey=${this.apiKey}`;
    const response = await fetch(url);
    if (response.status === 404) return [];
    if (!response.ok) {
      this.logger.error(`Twelve Data request failed: ${response.status} ${url}`);
      throw new ServiceUnavailableException('Market data temporarily unavailable');
    }
    const data = (await response.json()) as { data?: TwelveDataNewsItem[] };
    return data.data ?? [];
  }

  private async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      this.logger.error(`Twelve Data request failed: ${response.status} ${url}`);
      throw new ServiceUnavailableException('Market data temporarily unavailable');
    }
    return response.json() as Promise<T>;
  }
}
