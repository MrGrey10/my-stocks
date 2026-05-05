<template>
	<div>
		<!-- Loading -->
		<div v-if="store.loading" class="page-loading">
			<div class="loading-spinner" />
		</div>

		<template v-else-if="store.details">
			<!-- Page header -->
			<div class="page-header">
				<div class="header-left">
					<div class="symbol-badge" :style="symbolBadgeStyle(store.details.symbol)">
						{{ store.details.symbol.slice(0, 3) }}
					</div>
					<div>
						<div class="symbol-title">{{ store.details.symbol }}</div>
						<div class="symbol-sub">{{ store.details.name }} · {{ store.details.exchange }}</div>
					</div>
				</div>
				<div class="header-right">
					<div class="price-value num">
						{{ store.details.price ? '$' + parseFloat(store.details.price).toFixed(2) : '—' }}
					</div>
					<div v-if="store.details.change" class="price-change">
						<span :class="['ms-pill', parseFloat(store.details.change) >= 0 ? 'ms-pill-pos' : 'ms-pill-neg']">
							<svg v-if="parseFloat(store.details.change) >= 0" width="8" height="8" viewBox="0 0 10 10"><path d="M5 1l4 5H1z" fill="currentColor"/></svg>
							<svg v-else width="8" height="8" viewBox="0 0 10 10"><path d="M5 9L1 4h8z" fill="currentColor"/></svg>
							{{ parseFloat(store.details.change) >= 0 ? '+' : '' }}{{ parseFloat(store.details.change).toFixed(2) }}
							({{ parseFloat(store.details.changePercent ?? '0').toFixed(2) }}%)
						</span>
					</div>
				</div>
			</div>

			<!-- Chart card -->
			<div class="ms-card chart-card">
				<div class="chart-controls">
					<div style="font-size:11.5px;color:var(--ink-3);text-transform:uppercase;letter-spacing:0.05em;font-weight:500;">Price Chart</div>
					<div class="range-tabs">
						<button
							v-for="r in (['1M', '3M', '1Y'] as const)"
							:key="r"
							class="range-tab"
							:class="{ 'range-tab--active': store.chartRange === r }"
							@click="loadChart(r)"
						>{{ r }}</button>
					</div>
				</div>
				<div style="position:relative;">
					<div ref="chartContainer" class="chart-area" />
					<div v-if="store.chartLoading" class="chart-loading">
						<div class="loading-spinner" />
					</div>
				</div>
			</div>

			<!-- Bottom row -->
			<div class="bottom-grid">
				<!-- Key Metrics -->
				<div class="ms-card metrics-card">
					<div class="section-title">Key Metrics</div>
					<div class="metrics-list">
						<div class="metric-row">
							<span class="metric-label">P/E Ratio</span>
							<span class="metric-val num">{{ store.details.metrics.pe ?? '—' }}</span>
						</div>
						<div class="metric-row">
							<span class="metric-label">Market Cap</span>
							<span class="metric-val num">{{ fmtMarketCap(store.details.metrics.marketCap) }}</span>
						</div>
						<div class="metric-row">
							<span class="metric-label">Dividend Yield</span>
							<span class="metric-val num">
								{{ store.details.metrics.dividendYield ? store.details.metrics.dividendYield + '%' : '—' }}
							</span>
						</div>
					</div>
				</div>

				<!-- News -->
				<div class="ms-card news-card">
					<div class="section-title">News</div>
					<div class="news-list">
						<div
							v-for="item in store.details.news"
							:key="item.url"
							class="news-item"
						>
							<a :href="item.url" target="_blank" rel="noopener noreferrer" class="news-title">
								{{ item.title }}
							</a>
							<div class="news-meta">
								{{ item.source }} · {{ fmtDate(item.publishedAt) }}
							</div>
						</div>
						<div v-if="!store.details.news.length" class="news-empty">No recent news</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
import { createChart, ColorType, CandlestickSeries } from 'lightweight-charts';

definePageMeta({ middleware: 'auth', layout: 'dashboard' });

const route = useRoute();
const store = useTickerStore();
const symbol = computed(() => (route.params.symbol as string).toUpperCase());
const chartContainer = ref<HTMLElement | null>(null);

let chartInstance: ReturnType<typeof createChart> | null = null;

onMounted(async () => {
	await store.fetchDetails(symbol.value);
	await store.fetchChart(symbol.value, '1M');
	renderChart();
});

watch(() => store.chart, () => { renderChart(); });

onUnmounted(() => { chartInstance?.remove(); });

async function loadChart(range: '1M' | '3M' | '1Y') {
	await store.fetchChart(symbol.value, range);
}

function renderChart() {
	if (!chartContainer.value || !store.chart.length) return;
	chartInstance?.remove();

	chartInstance = createChart(chartContainer.value, {
		width: chartContainer.value.clientWidth,
		height: 288,
		layout: {
			background: { type: ColorType.Solid, color: 'transparent' },
			textColor: 'oklch(0.62 0.012 60)',
		},
		grid: {
			vertLines: { color: 'oklch(0.92 0.005 70)' },
			horzLines: { color: 'oklch(0.92 0.005 70)' },
		},
		timeScale: { timeVisible: true },
	});

	const series = chartInstance.addSeries(CandlestickSeries, {
		upColor: 'oklch(0.62 0.14 150)',
		downColor: 'oklch(0.62 0.18 25)',
		borderVisible: false,
		wickUpColor: 'oklch(0.62 0.14 150)',
		wickDownColor: 'oklch(0.62 0.18 25)',
	});

	series.setData(
		store.chart.map((c: { date: string; open: string; high: string; low: string; close: string }) => ({
			time: c.date.split('T')[0] as any,
			open: parseFloat(c.open),
			high: parseFloat(c.high),
			low: parseFloat(c.low),
			close: parseFloat(c.close),
		})),
	);

	chartInstance.timeScale().fitContent();
}

function fmtMarketCap(mc: string | null) {
	if (!mc) return '—';
	const n = parseFloat(mc);
	if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
	if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
	if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
	return `$${n.toFixed(0)}`;
}

function fmtDate(dateStr: string) {
	return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
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
	return { background: bg, color: fg, width: '48px', height: '48px', fontSize: '13px', borderRadius: '13px', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontWeight: '600', letterSpacing: '-0.02em', flexShrink: '0' };
}
</script>

<style scoped>
.page-loading {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 80px;
}

.loading-spinner {
	width: 28px;
	height: 28px;
	border: 2px solid var(--line);
	border-top-color: var(--accent);
	border-radius: 50%;
	animation: spin .8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* Header */
.page-header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 16px;
	margin-bottom: 24px;
}

.header-left {
	display: flex;
	align-items: center;
	gap: 16px;
}

.symbol-title {
	font-size: 28px;
	font-weight: 600;
	letter-spacing: -0.02em;
	color: var(--ink);
}

.symbol-sub {
	font-size: 13px;
	color: var(--ink-3);
	margin-top: 2px;
}

.header-right { text-align: right; }

.price-value {
	font-size: 32px;
	font-weight: 600;
	letter-spacing: -0.025em;
	color: var(--ink);
}

.price-change { margin-top: 6px; }

/* Chart */
.chart-card {
	padding: 24px;
	margin-bottom: 20px;
}

.chart-controls {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
}

.range-tabs {
	display: inline-flex;
	gap: 2px;
	padding: 3px;
	background: var(--bg-sunken);
	border-radius: 10px;
	border: 1px solid var(--line);
}

.range-tab {
	padding: 5px 12px;
	font-size: 12px;
	font-weight: 500;
	border-radius: 7px;
	background: transparent;
	color: var(--ink-3);
	border: none;
	transition: all .15s ease;
	font-family: inherit;
	cursor: pointer;
}

.range-tab--active {
	background: var(--bg-elev);
	color: var(--ink);
	box-shadow: var(--shadow-sm), 0 0 0 1px var(--line);
}

.chart-area {
	width: 100%;
	height: 288px;
}

.chart-loading {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: oklch(1 0 0 / 0.6);
	border-radius: var(--r-lg);
}

/* Bottom grid */
.bottom-grid {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 20px;
}

@media (max-width: 768px) {
	.bottom-grid { grid-template-columns: 1fr; }
}

.metrics-card, .news-card { padding: 20px; }

.section-title {
	font-size: 15px;
	font-weight: 600;
	margin-bottom: 16px;
	color: var(--ink);
}

.metrics-list { display: grid; gap: 12px; }

.metric-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 12px;
	border-bottom: 1px solid var(--line);
}

.metric-row:last-child { border-bottom: none; padding-bottom: 0; }

.metric-label { font-size: 13px; color: var(--ink-3); }
.metric-val { font-size: 13px; font-weight: 500; color: var(--ink); }

.news-list { display: grid; gap: 0; }

.news-item {
	padding: 12px 0;
	border-bottom: 1px solid var(--line);
}

.news-item:last-child { border-bottom: none; }

.news-title {
	display: block;
	font-size: 13px;
	font-weight: 500;
	color: var(--ink);
	text-decoration: none;
	line-height: 1.4;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.news-title:hover { color: var(--accent-deep); }

.news-meta {
	font-size: 11.5px;
	color: var(--ink-3);
	margin-top: 4px;
}

.news-empty { font-size: 13px; color: var(--ink-3); padding: 12px 0; }
</style>
