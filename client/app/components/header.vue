<script setup lang="ts">
const isSearchOpen = ref(false);
const searchTerm = ref('');
const { logout } = useAuth();

const userStore = useUserStore();

const initials = (name: string) =>
	name
		.split(' ')
		.filter(Boolean)
		.map((n) => n[0])
		.join('')
		.toUpperCase()
		.slice(0, 2);

onMounted(async () => {
	try {
		await userStore.fetchProfile();
	} catch {
		// Non-critical: avatar falls back to default placeholder
	}
});

const profileMenuItems = [
	[
		{
			label: 'Profile',
			icon: 'i-heroicons-user',
			to: '/',
		},
		// {
		// 	label: 'Settings',
		// 	icon: 'i-heroicons-cog-6-tooth',
		// 	to: '/settings',
		// },
	],
	[
		{
			label: 'Logout',
			icon: 'i-heroicons-arrow-right-on-rectangle',
			onSelect: async () => {
				await logout();
			},
		},
	],
];

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
].map((s) => ({
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

const openSearch = () => {
	isSearchOpen.value = true;
};
</script>

<template>
	<UHeader>
		<template #title>
			<Logo text="MyStocks" class="h-6 w-auto" />
		</template>

		<UDashboardSearchButton @click="openSearch" class="w-[460px]" size="xl" />
		<UDashboardSearch
			v-model:open="isSearchOpen"
			v-model:search-term="searchTerm"
			shortcut="meta_k"
			:groups="groups"
			:loading="stocksLoading"
			:color-mode="false"
			:fuse="{ resultLimit: 42 }"
		/>

		<template #right>
			<UDropdownMenu :items="profileMenuItems" :content="{ align: 'end' }">
				<span class="cursor-pointer">
					<UAvatar
						:src="userStore.profile?.picture || undefined"
						:text="
							userStore.profile?.name
								? initials(userStore.profile.name)
								: undefined
						"
						:alt="userStore.profile?.name"
					/>
				</span>
			</UDropdownMenu>
		</template>
	</UHeader>
</template>
