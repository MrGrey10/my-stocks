<template>
	<UContainer class="py-8">
		<div v-if="store.loading" class="flex items-center justify-center py-24">
			<UIcon
				name="i-heroicons-arrow-path"
				class="animate-spin w-8 h-8 text-gray-400"
			/>
		</div>

		<template v-else-if="store.details">
			<div class="mb-6">
				<div class="flex items-start justify-between">
					<div>
						<h1 class="text-3xl font-bold text-gray-900 dark:text-white">
							{{ store.details.symbol }}
						</h1>
						<p class="text-gray-500">
							{{ store.details.name }} · {{ store.details.exchange }}
						</p>
					</div>
					<div class="text-right">
						<div class="text-3xl font-bold">
							{{
								store.details.price
									? '$' + parseFloat(store.details.price).toFixed(2)
									: '—'
							}}
						</div>
						<div
							v-if="store.details.change"
							:class="changeClass(store.details.change)"
							class="text-sm"
						>
							{{ parseFloat(store.details.change) >= 0 ? '+' : ''
							}}{{ parseFloat(store.details.change).toFixed(2) }} ({{
								parseFloat(store.details.changePercent ?? '0').toFixed(2)
							}}%)
						</div>
					</div>
				</div>
			</div>

			<div class="flex gap-2 mb-2">
				<UButton
					v-for="r in ['1M', '3M', '1Y'] as const"
					:key="r"
					:variant="store.chartRange === r ? 'solid' : 'outline'"
					size="xs"
					@click="loadChart(r)"
					>{{ r }}</UButton
				>
			</div>

			<UCard class="mb-6 relative">
				<div ref="chartContainer" class="w-full h-72" />
				<div
					v-if="store.chartLoading"
					class="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-gray-900/50"
				>
					<UIcon name="i-heroicons-arrow-path" class="animate-spin w-6 h-6" />
				</div>
			</UCard>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<UCard>
					<template #header
						><span class="font-semibold">Key Metrics</span></template
					>
					<dl class="space-y-2 text-sm">
						<div class="flex justify-between">
							<dt class="text-gray-500">P/E Ratio</dt>
							<dd class="font-medium">{{ store.details.metrics.pe ?? '—' }}</dd>
						</div>
						<div class="flex justify-between">
							<dt class="text-gray-500">Market Cap</dt>
							<dd class="font-medium">
								{{ fmtMarketCap(store.details.metrics.marketCap) }}
							</dd>
						</div>
						<div class="flex justify-between">
							<dt class="text-gray-500">Dividend Yield</dt>
							<dd class="font-medium">
								{{
									store.details.metrics.dividendYield
										? store.details.metrics.dividendYield + '%'
										: '—'
								}}
							</dd>
						</div>
					</dl>
				</UCard>

				<UCard class="lg:col-span-2">
					<template #header><span class="font-semibold">News</span></template>
					<ul class="space-y-3">
						<li
							v-for="item in store.details.news"
							:key="item.url"
							class="border-b last:border-0 pb-3 last:pb-0"
						>
							<a
								:href="item.url"
								target="_blank"
								rel="noopener noreferrer"
								class="text-sm font-medium hover:text-primary-600 hover:underline line-clamp-2"
							>
								{{ item.title }}
							</a>
							<p class="text-xs text-gray-400 mt-1">
								{{ item.source }} · {{ fmtDate(item.publishedAt) }}
							</p>
						</li>
						<li v-if="!store.details.news.length" class="text-gray-400 text-sm">
							No recent news
						</li>
					</ul>
				</UCard>
			</div>
		</template>
	</UContainer>
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

watch(
	() => store.chart,
	() => {
		renderChart();
	},
);

onUnmounted(() => {
	chartInstance?.remove();
});

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
			textColor: '#6b7280',
		},
		grid: {
			vertLines: { color: '#f0f0f0' },
			horzLines: { color: '#f0f0f0' },
		},
		timeScale: { timeVisible: true },
	});

	const series = chartInstance.addSeries(CandlestickSeries, {
		upColor: '#22c55e',
		downColor: '#ef4444',
		borderVisible: false,
		wickUpColor: '#22c55e',
		wickDownColor: '#ef4444',
	});

	series.setData(
		store.chart.map((c) => ({
			time: c.date.split('T')[0] as any,
			open: parseFloat(c.open),
			high: parseFloat(c.high),
			low: parseFloat(c.low),
			close: parseFloat(c.close),
		})),
	);

	chartInstance.timeScale().fitContent();
}

function changeClass(change: string | null) {
	if (!change) return '';
	return parseFloat(change) >= 0
		? 'text-green-600 dark:text-green-400'
		: 'text-red-500';
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
	return new Date(dateStr).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
}
</script>
