<template>
	<div>
		<div class="page-header">
			<div>
				<div class="page-title">Discover</div>
				<div class="page-sub">Search for stocks, ETFs, and more</div>
			</div>
		</div>

		<!-- Search bar -->
		<div class="search-section">
			<div class="ms-input-wrap search-bar">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="color:var(--ink-3);flex-shrink:0;">
					<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>
				</svg>
				<input
					v-model="query"
					class="ms-input"
					placeholder="Search tickers, company names…"
					@keydown.enter="search"
				/>
				<button class="ms-btn ms-btn-sm ms-btn-primary" @click="search" :disabled="loading">
					<span v-if="loading" class="spinner-sm" />
					Search
				</button>
			</div>
		</div>

		<!-- Results -->
		<div v-if="results.length" class="ms-card" style="padding:0;margin-top:20px;">
			<div class="results-header">
				<span style="font-weight:600;font-size:15px;">Results</span>
				<span class="ms-pill ms-pill-neutral">{{ results.length }}</span>
			</div>
			<div
				v-for="(r, i) in results"
				:key="r.symbol"
				class="result-row"
				:class="{ 'result-row--last': i === results.length - 1 }"
				@click="navigateTo(`/stocks/${r.symbol}`)"
			>
				<div class="symbol-badge" :style="symbolBadgeStyle(r.symbol)">
					{{ r.symbol.slice(0, 3) }}
				</div>
				<div class="result-info">
					<div class="result-sym">{{ r.symbol }}</div>
					<div class="result-name">{{ r.name }}</div>
				</div>
				<div class="result-meta">
					<span class="ms-pill ms-pill-neutral" style="font-size:10.5px;padding:2px 6px;">{{ r.type }}</span>
					<span class="result-exch">{{ r.exchange }}</span>
				</div>
			</div>
		</div>

		<div v-else-if="searched && !loading" class="empty-state">
			<div class="empty-icon">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
			</div>
			<div style="font-size:15px;font-weight:500;color:var(--ink);">No results found</div>
			<div style="font-size:13px;color:var(--ink-3);margin-top:4px;">Try a different symbol or company name</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth', layout: 'dashboard' });

const config = useRuntimeConfig();
const base = config.public.apiBase as string;

interface SearchResult { symbol: string; name: string; exchange: string; type: string; }

const query = ref('');
const results = ref<SearchResult[]>([]);
const loading = ref(false);
const searched = ref(false);

async function search() {
	if (!query.value.trim()) return;
	loading.value = true;
	searched.value = true;
	try {
		results.value = await $fetch<SearchResult[]>(`${base}/stocks/search?q=${encodeURIComponent(query.value)}`, { credentials: 'include' });
	} catch {
		results.value = [];
	} finally {
		loading.value = false;
	}
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
	return { background: bg, color: fg, width: '40px', height: '40px', fontSize: '11px', borderRadius: '11px', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontWeight: '600', letterSpacing: '-0.02em', flexShrink: '0' };
}
</script>

<style scoped>
.page-header { margin-bottom: 24px; }
.page-title { font-size: 28px; font-weight: 600; letter-spacing: -0.02em; color: var(--ink); }
.page-sub { font-size: 13px; color: var(--ink-3); margin-top: 4px; }

.search-section { max-width: 640px; }

.search-bar {
	height: 48px;
	border-radius: 12px;
	gap: 12px;
	padding: 0 8px 0 16px;
}

.results-header {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 16px 24px;
	border-bottom: 1px solid var(--line);
}

.result-row {
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 14px 24px;
	border-bottom: 1px solid var(--line);
	cursor: pointer;
	transition: background .15s;
}

.result-row:hover { background: var(--bg-sunken); }
.result-row--last { border-bottom: none; }

.result-info { flex: 1; min-width: 0; }
.result-sym { font-weight: 600; font-size: 14px; color: var(--ink); }
.result-name { font-size: 12px; color: var(--ink-3); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.result-meta { display: flex; align-items: center; gap: 8px; }
.result-exch { font-size: 12px; color: var(--ink-3); }

.empty-state {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 80px 20px;
	text-align: center;
}

.empty-icon {
	width: 52px;
	height: 52px;
	border-radius: 14px;
	background: var(--bg-sunken);
	border: 1px solid var(--line);
	display: grid;
	place-items: center;
	margin-bottom: 16px;
}

.spinner-sm {
	width: 12px; height: 12px;
	border: 2px solid rgba(255,255,255,.3);
	border-top-color: white;
	border-radius: 50%;
	animation: spin .6s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>
