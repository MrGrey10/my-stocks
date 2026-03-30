import { defineStore } from 'pinia';

interface WatchlistItem {
  id: string;
  ticker: { symbol: string; name: string; type: string };
  price: string | null;
  change: string | null;
  changePercent: string | null;
}

export const useWatchlistStore = defineStore('watchlist', () => {
  const config = useRuntimeConfig();
  const base = config.public.apiBase as string;

  const items = ref<WatchlistItem[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchWatchlist() {
    loading.value = true;
    error.value = null;
    try {
      items.value = await $fetch<WatchlistItem[]>(`${base}/watchlist`, { credentials: 'include' });
    } catch (e: any) {
      error.value = e?.data?.message ?? 'Failed to load watchlist';
    } finally {
      loading.value = false;
    }
  }

  async function addTicker(symbol: string) {
    await $fetch(`${base}/watchlist`, { method: 'POST', body: { symbol }, credentials: 'include' });
    await fetchWatchlist();
  }

  async function removeTicker(itemId: string) {
    await $fetch(`${base}/watchlist/${itemId}`, { method: 'DELETE', credentials: 'include' });
    items.value = items.value.filter((i) => i.id !== itemId);
  }

  return { items, loading, error, fetchWatchlist, addTicker, removeTicker };
});
