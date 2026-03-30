<template>
	<UContainer class="py-8">
		<div class="flex items-center justify-between mb-6">
			<div class="flex items-center gap-3">
				<UButton
					variant="ghost"
					color="gray"
					icon="i-heroicons-arrow-left"
					size="sm"
					to="/"
				/>
				<h1 class="text-2xl font-bold text-gray-900 dark:text-white">
					{{ portfolioName }}
				</h1>
			</div>
			<UButton icon="i-heroicons-plus" @click="showAddModal = true"
				>Add Holding</UButton
			>
		</div>

		<UTable :data="store.holdings" :columns="columns" :loading="store.loading">
			<template #symbol-cell="{ row }">
				<NuxtLink
					:to="`/stocks/${row.original.ticker.symbol}`"
					class="font-semibold text-primary-600 hover:underline"
				>
					{{ row.original.ticker.symbol }}
				</NuxtLink>
			</template>
			<template #currentPrice-cell="{ row }">
				${{ row.original.currentPrice.toFixed(2) }}
			</template>
			<template #pnl-cell="{ row }">
				<div :class="pnlClass(row.original.pnl)">
					{{ row.original.pnl >= 0 ? '+' : '-' }}${{ fmt(row.original.pnl) }}
					<span class="text-xs ml-1"
						>({{ row.original.pnlPercent.toFixed(2) }}%)</span
					>
				</div>
			</template>
			<template #totalInvested-cell="{ row }">
				${{ fmt(row.original.totalInvested) }}
			</template>
			<template #allocationPercent-cell="{ row }">
				{{ row.original.allocationPercent.toFixed(2) }}%
			</template>
			<template #actions-cell="{ row }">
				<UButton
					variant="ghost"
					color="error"
					size="xs"
					icon="i-heroicons-trash"
					@click="promptRemove(row.original)"
				/>
			</template>
		</UTable>

		<div
			v-if="!store.loading && !store.holdings.length"
			class="text-center py-16 text-gray-400"
		>
			No holdings yet. Add your first holding above.
		</div>

		<UModal v-model:open="showConfirmModal">
			<template #content>
				<UCard>
					<template #header>
						<div class="flex items-center gap-3">
							<div
								class="w-9 h-9 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0"
							>
								<UIcon name="i-heroicons-trash" class="text-red-500 w-4 h-4" />
							</div>
							<div>
								<p class="font-semibold text-gray-900 dark:text-white text-sm">
									Remove holding
								</p>
								<p class="text-xs text-gray-400 mt-0.5">
									This action cannot be undone
								</p>
							</div>
						</div>
					</template>

					<p class="text-sm text-gray-600 dark:text-gray-400">
						Remove
						<span class="font-semibold text-gray-900 dark:text-white">{{
							holdingToRemove?.ticker.symbol
						}}</span>
						<span v-if="holdingToRemove?.ticker.name" class="text-gray-400">
							— {{ holdingToRemove.ticker.name }}</span
						>
						from your portfolio?
					</p>

					<template #footer>
						<div class="flex justify-end gap-2">
							<UButton
								variant="ghost"
								color="gray"
								@click="showConfirmModal = false"
								>Cancel</UButton
							>
							<UButton color="error" :loading="removing" @click="confirmRemove"
								>Remove</UButton
							>
						</div>
					</template>
				</UCard>
			</template>
		</UModal>

		<UModal v-model:open="showAddModal">
			<template #content>
				<UCard>
					<template #header>
						<div class="flex items-center justify-between">
							<span>Add Holding</span>
							<UButton variant="ghost" color="gray" size="xs" icon="i-heroicons-x-mark" @click="showAddModal = false" />
						</div>
					</template>
					<form class="flex flex-col gap-[8px]" @submit.prevent="submitAdd">
						<UFormGroup label="Symbol">
							<Label>Symbol</Label>
							<div class="relative">
								<UInput
									class="w-full"
									v-model="form.symbol"
									placeholder="AAPL"
									autocomplete="off"
									@input="onSymbolInput"
									@blur="closeDropdownDelayed"
								/>
								<div
									v-if="showDropdown"
									class="absolute z-50 w-full mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto"
								>
									<div
										v-if="searchLoading"
										class="px-3 py-2 text-sm text-gray-400"
									>
										Searching...
									</div>
									<template v-else>
										<button
											v-for="r in searchResults"
											:key="r.symbol"
											type="button"
											class="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-between items-center gap-2"
											@click="selectResult(r)"
										>
											<span class="font-semibold shrink-0">{{ r.symbol }}</span>
											<span class="text-gray-500 truncate">{{ r.name }}</span>
											<span class="text-gray-400 text-xs shrink-0">{{
												r.exchange
											}}</span>
										</button>
										<div
											v-if="!searchResults.length"
											class="px-3 py-2 text-sm text-gray-400"
										>
											No results
										</div>
									</template>
								</div>
							</div>
						</UFormGroup>
						<UFormGroup label="Quantity">
							<Label>Quantity</Label>
							<UInput
								class="w-full"
								v-model.number="form.quantity"
								type="number"
								step="0.00000001"
								@input="onQuantityInput"
							/>
						</UFormGroup>
						<UFormGroup label="Avg Buy Price ($)">
							<Label>Avg Buy Price ($)</Label>
							<UInput
								class="w-full"
								v-model.number="form.avgBuyPrice"
								type="number"
								step="0.01"
							/>
						</UFormGroup>
						<UFormGroup label="Purchase Date (optional)">
							<Label>Purchase Date (optional)</Label>
							<UInput class="w-full" v-model="form.purchasedAt" type="date" />
						</UFormGroup>
						<UButton type="submit" :loading="submitting" block>Add</UButton>
					</form>
				</UCard>
			</template>
		</UModal>
	</UContainer>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui';
import type { Holding } from '~/stores/portfolio';

definePageMeta({ middleware: 'auth', layout: 'dashboard' });

const route = useRoute();
const portfolioId = route.params.id as string;
const config = useRuntimeConfig();
const base = config.public.apiBase as string;

const store = usePortfolioStore();
const listStore = usePortfolioListStore();
const toast = useToast();

const portfolioName = computed(
	() =>
		listStore.portfolios.find((p) => p.id === portfolioId)?.name ?? 'Portfolio',
);

onMounted(async () => {
	if (!listStore.portfolios.length) await listStore.fetchPortfolios();
	await store.fetchHoldings(portfolioId);
});

const showAddModal = ref(false);
const submitting = ref(false);

const showConfirmModal = ref(false);
const holdingToRemove = ref<Holding | null>(null);
const removing = ref(false);

function promptRemove(holding: Holding) {
	holdingToRemove.value = holding;
	showConfirmModal.value = true;
}

async function confirmRemove() {
	if (!holdingToRemove.value) return;
	removing.value = true;
	try {
		await store.removeHolding(portfolioId, holdingToRemove.value.id);
		toast.add({ title: 'Holding removed', color: 'success' });
		showConfirmModal.value = false;
	} catch {
		toast.add({ title: 'Failed to remove holding', color: 'error' });
	} finally {
		removing.value = false;
		holdingToRemove.value = null;
	}
}

// Symbol search
interface SearchResult {
	symbol: string;
	name: string;
	exchange: string;
	type: string;
}
const searchResults = ref<SearchResult[]>([]);
const searchLoading = ref(false);
const showDropdown = ref(false);
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

function onSymbolInput() {
	const q = form.symbol.trim();
	if (!q) {
		searchResults.value = [];
		showDropdown.value = false;
		return;
	}
	if (debounceTimer) clearTimeout(debounceTimer);
	showDropdown.value = true;
	debounceTimer = setTimeout(() => doSearch(q), 300);
}

function onQuantityInput() {
	if (form.quantity < 0) form.quantity = 0;
	//form.avgBuyPrice = form.avgBuyPrice * form.quantity;
}

async function doSearch(q: string) {
	searchLoading.value = true;
	try {
		searchResults.value = await $fetch<SearchResult[]>(
			`${base}/stocks/search?q=${encodeURIComponent(q)}`,
			{ credentials: 'include' },
		);
	} catch {
		searchResults.value = [];
	} finally {
		searchLoading.value = false;
	}
}

async function selectResult(r: SearchResult) {
	showDropdown.value = false;
	searchResults.value = [];
	form.symbol = r.symbol;
	try {
		// const details = await $fetch<{ price: number | null }>(
		// 	`${base}/stocks/${r.symbol}`,
		// 	{ credentials: 'include' },
		// );
		// if (details.price != null) form.avgBuyPrice = details.price;
	} catch {
		/* leave avgBuyPrice as-is */
	}
}

function closeDropdownDelayed() {
	setTimeout(() => {
		showDropdown.value = false;
	}, 150);
}
const form = reactive({
	symbol: '',
	quantity: 0,
	avgBuyPrice: 0,
	purchasedAt: '',
});

const columns: TableColumn<Holding>[] = [
	{ id: 'symbol', accessorFn: (row) => row.ticker.symbol, header: 'Symbol' },
	{ id: 'name', accessorFn: (row) => row.ticker.name, header: 'Name' },
	{ accessorKey: 'quantity', header: 'Qty' },
	{ accessorKey: 'avgBuyPrice', header: 'Avg Buy' },
	{ accessorKey: 'currentPrice', header: 'Current Price' },
	{ accessorKey: 'totalInvested', header: 'Invested' },
	{ accessorKey: 'pnl', header: 'P&L' },
	{ accessorKey: 'allocationPercent', header: 'Allocation' },
	{ id: 'actions', header: '' },
];

async function submitAdd() {
	submitting.value = true;
	try {
		await store.addHolding(portfolioId, {
			symbol: form.symbol,
			quantity: form.quantity,
			avgBuyPrice: form.avgBuyPrice,
			...(form.purchasedAt && { purchasedAt: form.purchasedAt }),
		});
		showAddModal.value = false;
		Object.assign(form, {
			symbol: '',
			quantity: 0,
			avgBuyPrice: 0,
			purchasedAt: '',
		});
		toast.add({ title: 'Holding added', color: 'success' });
	} catch (e: any) {
		toast.add({
			title: e?.data?.message ?? 'Failed to add holding',
			color: 'error',
		});
	} finally {
		submitting.value = false;
	}
}

function fmt(n: number) {
	return Math.abs(n).toLocaleString('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
}

function pnlClass(n: number) {
	return n >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-500';
}
</script>
