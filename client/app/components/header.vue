<script setup lang="ts">
const isSearchOpen = ref(false);
const searchTerm = ref('');

const config = useRuntimeConfig();
const base = config.public.apiBase as string;

type StockItem = {
	id: string;
	label: string;
	suffix: string;
	icon: string;
	to: string;
};

const DEFAULT_STOCK_ITEMS: StockItem[] = [
	{ symbol: 'AAPL', name: 'Apple Inc' },
	{ symbol: 'MSFT', name: 'Microsoft Corp' },
	{ symbol: 'NVDA', name: 'NVIDIA Corp' },
	{ symbol: 'GOOGL', name: 'Alphabet Inc' },
	{ symbol: 'AMZN', name: 'Amazon.com Inc' },
	{ symbol: 'META', name: 'Meta Platforms Inc' },
	{ symbol: 'TSLA', name: 'Tesla Inc' },
	{ symbol: 'SPY', name: 'SPDR S&P 500 ETF Trust' },
].map((s: { symbol: string; name: string }) => ({
	id: s.symbol,
	label: s.symbol,
	suffix: s.name,
	icon: 'i-heroicons-chart-bar',
	to: `/stocks/${s.symbol}`,
}));

const stockItems = ref<StockItem[]>(DEFAULT_STOCK_ITEMS);
const stocksLoading = ref(false);

let searchTimeout: ReturnType<typeof setTimeout> | null = null;

watch(searchTerm, (q) => {
	if (searchTimeout) clearTimeout(searchTimeout);
	if (!q) {
		stockItems.value = DEFAULT_STOCK_ITEMS;
		return;
	}
	searchTimeout = setTimeout(async () => {
		stocksLoading.value = true;
		try {
			const results = await $fetch<Array<{ symbol: string; name: string }>>(
				`${base}/stocks/search?q=${encodeURIComponent(q)}`,
				{ credentials: 'include' },
			);
			stockItems.value = results.map((r) => ({
				id: r.symbol,
				label: r.symbol,
				suffix: r.name,
				icon: 'i-heroicons-chart-bar',
				to: `/stocks/${r.symbol}`,
			}));
		} finally {
			stocksLoading.value = false;
		}
	}, 300);
});

const groups = computed(() => [
	{
		id: 'stocks',
		label: 'Stocks',
		ignoreFilter: true,
		items: stockItems.value,
	},
]);
</script>

<template>
	<header class="topbar">
		<!-- Search trigger -->
		<button class="search-trigger" @click="isSearchOpen = true">
			<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>
			</svg>
			<span class="search-placeholder">Search stocks, ETFs, news…</span>
			<div class="search-kbd">
				<kbd>⌘</kbd>
				<kbd>K</kbd>
			</div>
		</button>

		<UDashboardSearch
			v-model:open="isSearchOpen"
			v-model:search-term="searchTerm"
			shortcut="meta_k"
			:groups="groups"
			:loading="stocksLoading"
			:color-mode="false"
			:fuse="{ resultLimit: 42 }"
		/>

		<div class="topbar-spacer" />

		<!-- Market status -->
		<div class="market-status">
			<span class="market-dot" />
			<span>Markets open</span>
		</div>

		<!-- Notifications -->
		<button class="icon-btn" title="Notifications">
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
				<path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8z"/><path d="M10.3 21a2 2 0 0 0 3.4 0"/>
			</svg>
		</button>
	</header>
</template>

<style scoped>
.topbar {
	position: sticky;
	top: 0;
	z-index: 10;
	background: oklch(0.985 0.004 70 / 0.85);
	backdrop-filter: blur(8px);
	border-bottom: 1px solid var(--line);
	padding: 12px 32px;
	display: flex;
	align-items: center;
	gap: 16px;
}

.search-trigger {
	flex: 1;
	max-width: 480px;
	display: flex;
	align-items: center;
	gap: 10px;
	height: 38px;
	padding: 0 12px;
	background: var(--bg-elev);
	border: 1px solid var(--line);
	border-radius: 10px;
	color: var(--ink-3);
	font-size: 13px;
	text-align: left;
	cursor: pointer;
	transition: border-color .15s;
	font-family: inherit;
}

.search-trigger:hover {
	border-color: var(--line-2);
}

.search-placeholder {
	flex: 1;
}

.search-kbd {
	display: flex;
	gap: 2px;
	font-size: 10.5px;
	font-family: var(--font-mono);
}

.search-kbd kbd {
	padding: 2px 5px;
	background: var(--bg-sunken);
	border: 1px solid var(--line);
	border-radius: 4px;
}

.topbar-spacer {
	flex: 1;
}

.market-status {
	display: flex;
	align-items: center;
	gap: 6px;
	font-size: 12px;
	color: var(--ink-3);
}

.market-dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--pos);
	flex-shrink: 0;
}

.icon-btn {
	width: 32px;
	height: 32px;
	border-radius: 8px;
	display: grid;
	place-items: center;
	color: var(--ink-2);
	border: 1px solid transparent;
	transition: background .15s, color .15s;
	font-family: inherit;
}

.icon-btn:hover {
	background: var(--bg-sunken);
	color: var(--ink);
}
</style>
