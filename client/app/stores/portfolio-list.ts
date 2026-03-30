// client/app/stores/portfolio-list.ts
import { defineStore } from 'pinia';

export interface PortfolioListItem {
	id: string;
	name: string;
	createdAt: string;
	holdingCount: number;
	totalValue: number;
	totalInvested: number;
	todayPnl: number;
	todayPnlPercent: number;
	totalPnl: number;
	totalPnlPercent: number;
}

export const usePortfolioListStore = defineStore('portfolio-list', () => {
	const config = useRuntimeConfig();
	const base = config.public.apiBase as string;

	const portfolios = ref<PortfolioListItem[]>([]);
	const loading = ref(false);
	const error = ref<string | null>(null);

	async function fetchPortfolios() {
		loading.value = true;
		error.value = null;
		try {
			portfolios.value = await $fetch<PortfolioListItem[]>(
				`${base}/portfolio`,
				{
					credentials: 'include',
				},
			);
		} catch (e: any) {
			error.value = e?.data?.message ?? 'Failed to load portfolios';
		} finally {
			loading.value = false;
		}
	}

	async function createPortfolio(name: string): Promise<PortfolioListItem> {
		const created = await $fetch<PortfolioListItem>(`${base}/portfolio`, {
			method: 'POST',
			body: { name },
			credentials: 'include',
		});
		portfolios.value.push(created);
		return created;
	}

	async function renamePortfolio(id: string, name: string) {
		const result = await $fetch<{ id: string; name: string }>(
			`${base}/portfolio/${id}`,
			{
				method: 'PATCH',
				body: { name },
				credentials: 'include',
			},
		);
		const p = portfolios.value.find((p) => p.id === id);
		if (p) p.name = result.name;
	}

	async function deletePortfolio(id: string) {
		await $fetch(`${base}/portfolio/${id}`, {
			method: 'DELETE',
			credentials: 'include',
		});
		portfolios.value = portfolios.value.filter((p) => p.id !== id);
	}

	return {
		portfolios,
		loading,
		error,
		fetchPortfolios,
		createPortfolio,
		renamePortfolio,
		deletePortfolio,
	};
});
