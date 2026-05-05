<template>
	<div>
		<!-- Page header -->
		<div class="page-header">
			<div>
				<NuxtLink to="/" class="back-link">
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
					Portfolios
				</NuxtLink>
				<div class="page-title-row">
					<div class="portfolio-dot" :style="{ background: portfolioColor(portfolioId) }" />
					<h1 class="page-title">{{ portfolioName }}</h1>
					<span class="ms-pill ms-pill-neutral">{{ store.holdings.length }} holdings</span>
				</div>
			</div>
			<div class="header-actions">
				<button class="ms-btn ms-btn-ghost ms-btn-sm" @click="showAddModal = true">
					<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
					Add Holding
				</button>
			</div>
		</div>

		<!-- Summary tiles -->
		<div class="ms-card summary-card">
			<div class="summary-grid">
				<div class="stat-tile">
					<div class="stat-label">Total Value</div>
					<div class="stat-value num">{{ fmtMoney(totalValue) }}</div>
					<div class="stat-sub">
						<span :class="['ms-pill ms-pill-sm', todayPnl >= 0 ? 'ms-pill-pos' : 'ms-pill-neg']">
							<svg v-if="todayPnl >= 0" width="8" height="8" viewBox="0 0 10 10"><path d="M5 1l4 5H1z" fill="currentColor"/></svg>
							<svg v-else width="8" height="8" viewBox="0 0 10 10"><path d="M5 9L1 4h8z" fill="currentColor"/></svg>
							{{ todayPnl >= 0 ? '+' : '' }}{{ todayPnlPct.toFixed(2) }}% today
						</span>
					</div>
				</div>
				<div class="stat-tile">
					<div class="stat-label">Invested</div>
					<div class="stat-value num">{{ fmtMoney(totalInvested) }}</div>
				</div>
				<div class="stat-tile">
					<div class="stat-label">Total P&amp;L</div>
					<div class="stat-value num" :class="totalPnl >= 0 ? 'pos' : 'neg'">
						{{ totalPnl >= 0 ? '+' : '' }}{{ fmtMoney(totalPnl) }}
					</div>
					<div class="stat-sub">
						<span class="num" :class="totalPnl >= 0 ? 'pos' : 'neg'" style="font-size:12px;font-weight:500;">
							{{ totalPnlPct.toFixed(2) }}%
						</span>
					</div>
				</div>
				<div class="stat-tile">
					<div class="stat-label">Best Performer</div>
					<div class="stat-value" style="font-family:var(--font-sans);">{{ bestPerformer?.ticker.symbol ?? '—' }}</div>
					<div class="stat-sub" v-if="bestPerformer">
						<span class="ms-pill ms-pill-pos ms-pill-sm">+{{ bestPerformer.pnlPercent.toFixed(2) }}%</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Holdings table -->
		<div class="ms-card" style="padding:0;margin-top:20px;">
			<div class="table-header">
				<div style="font-weight:600;font-size:15px;">Holdings</div>
			</div>

			<div v-if="store.loading" class="table-loading">
				<div class="loading-spinner" />
			</div>

			<div v-else-if="!store.holdings.length" class="table-empty">
				No holdings yet. Add your first holding.
			</div>

			<div v-else class="table-wrap">
				<div class="table-head">
					<div></div>
					<div>Symbol / Name</div>
					<div class="text-right">Qty</div>
					<div class="text-right">Avg Buy</div>
					<div class="text-right">Price</div>
					<div class="text-right">Invested</div>
					<div class="text-right">P&amp;L</div>
					<div>Allocation</div>
					<div></div>
				</div>
				<div
					v-for="(h, i) in store.holdings"
					:key="h.id"
					class="table-row"
					:class="{ 'table-row--last': i === store.holdings.length - 1 }"
					@click="navigateTo(`/stocks/${h.ticker.symbol}`)"
				>
					<div>
						<div class="symbol-badge" :style="symbolBadgeStyle(h.ticker.symbol)">
							{{ h.ticker.symbol.slice(0, 3) }}
						</div>
					</div>
					<div>
						<div class="row-sym">{{ h.ticker.symbol }}</div>
						<div class="row-name">{{ h.ticker.name }}</div>
					</div>
					<div class="num text-right row-val">{{ h.quantity }}</div>
					<div class="num text-right row-val row-muted">${{ h.avgBuyPrice.toFixed(2) }}</div>
					<div class="num text-right row-val">{{ fmtMoney(h.currentPrice) }}</div>
					<div class="num text-right row-val row-muted">{{ fmtMoney(h.totalInvested) }}</div>
					<div class="text-right">
						<div class="num row-val" :class="h.pnl >= 0 ? 'pos' : 'neg'">
							{{ h.pnl >= 0 ? '+' : '-' }}{{ fmtMoney(h.pnl) }}
						</div>
						<div class="num" style="font-size:11px;opacity:.8;" :class="h.pnl >= 0 ? 'pos' : 'neg'">
							({{ h.pnl >= 0 ? '+' : '' }}{{ h.pnlPercent.toFixed(2) }}%)
						</div>
					</div>
					<div class="allocation-cell">
						<div class="alloc-bar">
							<div class="alloc-fill" :style="{ width: Math.min(h.allocationPercent, 100) + '%' }" />
						</div>
						<span class="num alloc-val">{{ h.allocationPercent.toFixed(1) }}%</span>
					</div>
					<div @click.stop>
						<button class="row-action" title="Remove" @click="promptRemove(h)">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
								<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Remove confirm modal -->
		<UModal v-model:open="showConfirmModal">
			<template #content>
				<div class="ms-card" style="padding:24px;max-width:400px;">
					<div style="font-size:16px;font-weight:600;margin-bottom:8px;">Remove holding</div>
					<p style="font-size:14px;color:var(--ink-2);margin-bottom:20px;">
						Remove <strong>{{ holdingToRemove?.ticker.symbol }}</strong>
						<span v-if="holdingToRemove?.ticker.name" style="color:var(--ink-3)"> — {{ holdingToRemove.ticker.name }}</span>
						from your portfolio? This cannot be undone.
					</p>
					<div style="display:flex;gap:8px;justify-content:flex-end;">
						<button class="ms-btn ms-btn-ghost ms-btn-sm" @click="showConfirmModal = false">Cancel</button>
						<button class="ms-btn ms-btn-sm danger-btn" :disabled="removing" @click="confirmRemove">
							<span v-if="removing" class="spinner-sm" />
							Remove
						</button>
					</div>
				</div>
			</template>
		</UModal>

		<!-- Add holding modal -->
		<UModal v-model:open="showAddModal">
			<template #content>
				<div class="ms-card add-modal">
					<div class="modal-header">
						<span style="font-size:16px;font-weight:600;">Add Holding</span>
						<button class="icon-btn" @click="showAddModal = false">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
						</button>
					</div>

					<form class="modal-form" @submit.prevent="submitAdd">
						<div>
							<label class="field-label">Symbol</label>
							<div class="symbol-search-wrap">
								<div class="ms-input-wrap">
									<input v-model="form.symbol" placeholder="AAPL" class="ms-input" autocomplete="off" @input="onSymbolInput" @blur="closeDropdownDelayed" />
								</div>
								<div v-if="showDropdown" class="symbol-dropdown">
									<div v-if="searchLoading" class="dropdown-loading">Searching…</div>
									<template v-else>
										<button
											v-for="r in searchResults"
											:key="r.symbol"
											type="button"
											class="dropdown-item"
											@click="selectResult(r)"
										>
											<span class="dropdown-sym">{{ r.symbol }}</span>
											<span class="dropdown-name">{{ r.name }}</span>
											<span class="dropdown-exch">{{ r.exchange }}</span>
										</button>
										<div v-if="!searchResults.length" class="dropdown-loading">No results</div>
									</template>
								</div>
							</div>
						</div>
						<div>
							<label class="field-label">Quantity</label>
							<div class="ms-input-wrap">
								<input v-model.number="form.quantity" type="number" step="0.00000001" class="ms-input" @input="onQuantityInput" />
							</div>
						</div>
						<div>
							<label class="field-label">Avg Buy Price ($)</label>
							<div class="ms-input-wrap">
								<input v-model.number="form.avgBuyPrice" type="number" step="0.01" class="ms-input" />
							</div>
						</div>
						<div>
							<label class="field-label">Purchase Date (optional)</label>
							<div class="ms-input-wrap">
								<input v-model="form.purchasedAt" type="date" class="ms-input" />
							</div>
						</div>
						<button type="submit" class="ms-btn ms-btn-primary" style="width:100%;justify-content:center;" :disabled="submitting">
							<span v-if="submitting" class="spinner-sm" />
							Add Holding
						</button>
					</form>
				</div>
			</template>
		</UModal>
	</div>
</template>

<script setup lang="ts">
import type { Holding } from '~/stores/portfolio';
import type { PortfolioListItem } from '~/stores/portfolio-list';

definePageMeta({ middleware: 'auth', layout: 'dashboard' });

const route = useRoute();
const portfolioId = route.params.id as string;
const config = useRuntimeConfig();
const base = config.public.apiBase as string;

const store = usePortfolioStore();
const listStore = usePortfolioListStore();
const toast = useToast();

const portfolioName = computed(
	() => listStore.portfolios.find((p: PortfolioListItem) => p.id === portfolioId)?.name ?? 'Portfolio',
);

onMounted(async () => {
	if (!listStore.portfolios.length) await listStore.fetchPortfolios();
	await store.fetchHoldings(portfolioId);
});

const totalValue = computed(() => store.holdings.reduce((s: number, h: Holding) => s + h.currentPrice * h.quantity, 0));
const totalInvested = computed(() => store.holdings.reduce((s: number, h: Holding) => s + h.totalInvested, 0));
const totalPnl = computed(() => totalValue.value - totalInvested.value);
const totalPnlPct = computed(() => totalInvested.value ? (totalPnl.value / totalInvested.value) * 100 : 0);
const todayPnl = computed(() => listStore.portfolios.find((p: PortfolioListItem) => p.id === portfolioId)?.todayPnl ?? 0);
const todayPnlPct = computed(() => listStore.portfolios.find((p: PortfolioListItem) => p.id === portfolioId)?.todayPnlPercent ?? 0);
const bestPerformer = computed(() => {
	if (!store.holdings.length) return null;
	return [...store.holdings].sort((a, b) => b.pnlPercent - a.pnlPercent)[0];
});

// Remove
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

// Add holding
const showAddModal = ref(false);
const submitting = ref(false);
const form = reactive({ symbol: '', quantity: 0, avgBuyPrice: 0, purchasedAt: '' });

interface SearchResult { symbol: string; name: string; exchange: string; type: string; }
const searchResults = ref<SearchResult[]>([]);
const searchLoading = ref(false);
const showDropdown = ref(false);
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

function onSymbolInput() {
	const q = form.symbol.trim();
	if (!q) { searchResults.value = []; showDropdown.value = false; return; }
	if (debounceTimer) clearTimeout(debounceTimer);
	showDropdown.value = true;
	debounceTimer = setTimeout(() => doSearch(q), 300);
}

function onQuantityInput() {
	if (form.quantity < 0) form.quantity = 0;
}

async function doSearch(q: string) {
	searchLoading.value = true;
	try {
		searchResults.value = await $fetch<SearchResult[]>(`${base}/stocks/search?q=${encodeURIComponent(q)}`, { credentials: 'include' });
	} catch {
		searchResults.value = [];
	} finally {
		searchLoading.value = false;
	}
}

function selectResult(r: SearchResult) {
	showDropdown.value = false;
	searchResults.value = [];
	form.symbol = r.symbol;
}

function closeDropdownDelayed() {
	setTimeout(() => { showDropdown.value = false; }, 150);
}

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
		Object.assign(form, { symbol: '', quantity: 0, avgBuyPrice: 0, purchasedAt: '' });
		toast.add({ title: 'Holding added', color: 'success' });
	} catch (e: any) {
		toast.add({ title: e?.data?.message ?? 'Failed to add holding', color: 'error' });
	} finally {
		submitting.value = false;
	}
}

function fmtMoney(n: number) {
	return '$' + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const symbolPalette: [string, string][] = [
	['oklch(0.95 0.04 65)', 'oklch(0.55 0.16 50)'],
	['oklch(0.95 0.04 240)', 'oklch(0.50 0.13 240)'],
	['oklch(0.94 0.05 150)', 'oklch(0.45 0.13 150)'],
	['oklch(0.95 0.04 290)', 'oklch(0.48 0.14 290)'],
	['oklch(0.95 0.04 25)', 'oklch(0.55 0.15 25)'],
	['oklch(0.95 0.04 200)', 'oklch(0.48 0.10 200)'],
];

function symbolBadgeStyle(sym: string) {
	let h = 0;
	for (let i = 0; i < sym.length; i++) h = (h * 31 + sym.charCodeAt(i)) >>> 0;
	const [bg, fg] = symbolPalette[h % symbolPalette.length]!;
	return { background: bg, color: fg, width: '36px', height: '36px', fontSize: '11px', borderRadius: '10px', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontWeight: '600', letterSpacing: '-0.02em' };
}

const portfolioColors = ['#e8823a', '#5478c8', '#4aac7a', '#9060d0', '#d05050', '#40a0b8', '#c09030'];
function portfolioColor(id: string): string {
	let h = 0;
	for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
	return portfolioColors[h % portfolioColors.length]!;
}
</script>

<style scoped>
.page-header {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	flex-wrap: wrap;
	gap: 16px;
	margin-bottom: 24px;
}

.back-link {
	display: flex;
	align-items: center;
	gap: 6px;
	color: var(--ink-3);
	font-size: 13px;
	text-decoration: none;
	margin-bottom: 8px;
	transition: color .15s;
}
.back-link:hover { color: var(--ink); }

.page-title-row {
	display: flex;
	align-items: center;
	gap: 12px;
}

.portfolio-dot { width: 12px; height: 12px; border-radius: 3px; flex-shrink: 0; }

.page-title {
	font-size: 28px;
	font-weight: 600;
	letter-spacing: -0.02em;
	color: var(--ink);
}

.header-actions { display: flex; gap: 8px; }

/* Summary */
.summary-card { padding: 24px; }

.summary-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 32px;
}

@media (max-width: 900px) {
	.summary-grid { grid-template-columns: repeat(2, 1fr); }
}

.stat-label {
	font-size: 11.5px;
	color: var(--ink-3);
	text-transform: uppercase;
	letter-spacing: 0.05em;
	font-weight: 500;
}

.stat-value {
	font-size: 24px;
	font-weight: 600;
	margin-top: 6px;
	letter-spacing: -0.02em;
	color: var(--ink);
}

.stat-sub { margin-top: 6px; }

.ms-pill-sm { font-size: 10.5px !important; padding: 2px 6px !important; }

/* Table */
.table-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 18px 24px;
	border-bottom: 1px solid var(--line);
}

.table-loading, .table-empty {
	padding: 48px;
	text-align: center;
	color: var(--ink-3);
	font-size: 13px;
}

.table-loading { display: flex; justify-content: center; }

.loading-spinner {
	width: 24px;
	height: 24px;
	border: 2px solid var(--line);
	border-top-color: var(--accent);
	border-radius: 50%;
	animation: spin .8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.table-wrap { overflow: auto; }

.table-head {
	display: grid;
	grid-template-columns: 44px minmax(0,2fr) 70px 90px 90px 100px 130px 1fr 36px;
	gap: 12px;
	padding: 10px 24px;
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: var(--ink-3);
	font-weight: 500;
	background: var(--bg-sunken);
	border-bottom: 1px solid var(--line);
	align-items: center;
}

.table-row {
	display: grid;
	grid-template-columns: 44px minmax(0,2fr) 70px 90px 90px 100px 130px 1fr 36px;
	gap: 12px;
	padding: 14px 24px;
	align-items: center;
	border-bottom: 1px solid var(--line);
	cursor: pointer;
	transition: background .15s;
}

.table-row:hover { background: var(--bg-sunken); }
.table-row--last { border-bottom: none; }

.row-sym { font-weight: 600; font-size: 13.5px; color: var(--ink); }
.row-name { font-size: 12px; color: var(--ink-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.row-val { font-size: 13px; color: var(--ink); }
.row-muted { color: var(--ink-2) !important; }
.text-right { text-align: right; }

.allocation-cell {
	display: flex;
	align-items: center;
	gap: 8px;
}

.alloc-bar {
	flex: 1;
	height: 6px;
	border-radius: 3px;
	background: var(--bg-sunken);
	overflow: hidden;
}

.alloc-fill {
	height: 100%;
	background: var(--accent);
	border-radius: 3px;
}

.alloc-val { font-size: 12px; color: var(--ink-2); min-width: 44px; text-align: right; }

.row-action {
	width: 28px;
	height: 28px;
	border-radius: 6px;
	display: grid;
	place-items: center;
	color: var(--ink-3);
	border: none;
	background: transparent;
	transition: background .15s, color .15s;
}

.row-action:hover { background: var(--neg-soft); color: var(--neg); }

/* Modals */
.danger-btn {
	background: var(--neg-soft);
	color: var(--neg);
	border: 1px solid oklch(0.88 0.06 25);
}

.icon-btn {
	width: 28px;
	height: 28px;
	border-radius: 6px;
	display: grid;
	place-items: center;
	color: var(--ink-3);
	border: none;
	background: transparent;
	transition: background .15s;
}
.icon-btn:hover { background: var(--bg-sunken); }

.add-modal { padding: 24px; width: min(480px, 92vw); }
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.modal-form { display: grid; gap: 14px; }

.field-label { display: block; font-size: 12.5px; font-weight: 500; color: var(--ink-2); margin-bottom: 6px; }

.symbol-search-wrap { position: relative; }

.symbol-dropdown {
	position: absolute;
	top: calc(100% + 4px);
	left: 0;
	right: 0;
	background: var(--bg-elev);
	border: 1px solid var(--line);
	border-radius: 10px;
	box-shadow: var(--shadow-lg);
	z-index: 50;
	max-height: 200px;
	overflow-y: auto;
	padding: 4px;
}

.dropdown-loading { padding: 12px 16px; font-size: 13px; color: var(--ink-3); }

.dropdown-item {
	display: flex;
	align-items: center;
	gap: 8px;
	width: 100%;
	padding: 8px 12px;
	border-radius: 7px;
	border: none;
	background: transparent;
	text-align: left;
	cursor: pointer;
	font-family: inherit;
	transition: background .12s;
}

.dropdown-item:hover { background: var(--bg-sunken); }

.dropdown-sym { font-weight: 600; font-size: 13px; flex-shrink: 0; color: var(--ink); }
.dropdown-name { flex: 1; font-size: 12px; color: var(--ink-3); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dropdown-exch { font-size: 11px; color: var(--ink-4); flex-shrink: 0; }

.spinner-sm {
	width: 12px; height: 12px;
	border: 2px solid rgba(255,255,255,.3);
	border-top-color: white;
	border-radius: 50%;
	animation: spin .6s linear infinite;
}
</style>
