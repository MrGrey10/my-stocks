// client/app/stores/portfolio.ts
import { defineStore } from 'pinia';

export interface Holding {
  id: string;
  ticker: { symbol: string; name: string; type: string };
  quantity: number;
  avgBuyPrice: number;
  purchasedAt: string;
  currentPrice: number;
  currentValue: number;
  pnl: number;
  pnlPercent: number;
  change: number;
  changePercent: number;
  totalInvested: number;
  allocationPercent: number;
}

export const usePortfolioStore = defineStore('portfolio', () => {
  const config = useRuntimeConfig();
  const base = config.public.apiBase as string;

  const holdings = ref<Holding[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchHoldings(portfolioId: string) {
    loading.value = true;
    error.value = null;
    try {
      holdings.value = await $fetch<Holding[]>(`${base}/portfolio/${portfolioId}/holdings`, {
        credentials: 'include',
      });
    } catch (e: any) {
      error.value = e?.data?.message ?? 'Failed to load holdings';
    } finally {
      loading.value = false;
    }
  }

  async function addHolding(
    portfolioId: string,
    payload: { symbol: string; quantity: number; avgBuyPrice: number; purchasedAt?: string },
  ) {
    await $fetch(`${base}/portfolio/${portfolioId}/holdings`, {
      method: 'POST',
      body: payload,
      credentials: 'include',
    });
    await fetchHoldings(portfolioId);
  }

  async function removeHolding(portfolioId: string, id: string) {
    await $fetch(`${base}/portfolio/${portfolioId}/holdings/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });
    holdings.value = holdings.value.filter((h) => h.id !== id);
  }

  return { holdings, loading, error, fetchHoldings, addHolding, removeHolding };
});
