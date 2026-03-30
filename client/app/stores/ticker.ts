import { defineStore } from 'pinia';

interface TickerDetails {
  symbol: string;
  name: string;
  type: string;
  exchange: string | null;
  price: string | null;
  change: string | null;
  changePercent: string | null;
  metrics: { pe: string | null; marketCap: string | null; dividendYield: string | null };
  news: Array<{ title: string; url: string; publishedAt: string; source: string }>;
}

interface ChartCandle {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export const useTickerStore = defineStore('ticker', () => {
  const config = useRuntimeConfig();
  const base = config.public.apiBase as string;

  const details = ref<TickerDetails | null>(null);
  const chart = ref<ChartCandle[]>([]);
  const chartRange = ref<'1M' | '3M' | '1Y'>('1M');
  const loading = ref(false);
  const chartLoading = ref(false);

  async function fetchDetails(symbol: string) {
    loading.value = true;
    details.value = null;
    try {
      details.value = await $fetch<TickerDetails>(`${base}/stocks/${symbol}`, { credentials: 'include' });
    } finally {
      loading.value = false;
    }
  }

  async function fetchChart(symbol: string, range: '1M' | '3M' | '1Y' = '1M') {
    chartLoading.value = true;
    chartRange.value = range;
    try {
      chart.value = await $fetch<ChartCandle[]>(`${base}/stocks/${symbol}/chart?range=${range}`, {
        credentials: 'include',
      });
    } finally {
      chartLoading.value = false;
    }
  }

  return { details, chart, chartRange, loading, chartLoading, fetchDetails, fetchChart };
});
