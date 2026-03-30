<template>
	<UContainer class="py-8">
		<h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
			Search
		</h1>

		<div class="flex gap-3 mb-6 max-w-md">
			<UInput
				v-model="query"
				placeholder="Search tickers (e.g. Apple, AAPL)"
				class="flex-1"
				@keydown.enter="search"
			/>
			<UButton :loading="loading" @click="search">Search</UButton>
		</div>

		<UTable v-if="results.length" :rows="results" :columns="columns">
			<template #symbol-data="{ row }">
				<NuxtLink
					:to="`/stocks/${row.symbol}`"
					class="font-semibold text-primary-600 hover:underline"
				>
					{{ row.symbol }}
				</NuxtLink>
			</template>
		</UTable>

		<div v-else-if="searched && !loading" class="text-gray-400 text-sm">
			No results found.
		</div>
	</UContainer>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth', layout: 'dashboard' });

const config = useRuntimeConfig();
const base = config.public.apiBase as string;

interface SearchResult {
	symbol: string;
	name: string;
	exchange: string;
	type: string;
}

const query = ref('');
const results = ref<SearchResult[]>([]);
const loading = ref(false);
const searched = ref(false);

const columns = [
	{ key: 'symbol', label: 'Symbol' },
	{ key: 'name', label: 'Name' },
	{ key: 'exchange', label: 'Exchange' },
	{ key: 'type', label: 'Type' },
];

async function search() {
	if (!query.value.trim()) return;
	loading.value = true;
	searched.value = true;
	try {
		results.value = await $fetch<SearchResult[]>(
			`${base}/stocks/search?q=${encodeURIComponent(query.value)}`,
			{
				credentials: 'include',
			},
		);
	} catch {
		results.value = [];
	} finally {
		loading.value = false;
	}
}
</script>
