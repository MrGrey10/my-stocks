<template>
	<div class="auth-panel">
		<div class="panel-glow" />

		<div class="panel-top">
			<span class="market-line">
				<span class="market-dot" />
				Markets open · NYSE
			</span>
		</div>

		<div class="panel-main">
			<h2 class="panel-headline">
				Track every dollar.<br />Trade with intent.
			</h2>
			<p class="panel-sub">
				A clean, friendly home for your portfolio — with the data you need and none of the noise you don't.
			</p>

			<!-- Mini market preview card -->
			<div class="market-card">
				<div class="market-card-header">
					<span>S&amp;P 500 · 1D</span>
					<span class="market-card-change">+0.42%</span>
				</div>
				<svg class="market-chart" viewBox="0 0 340 60" preserveAspectRatio="none">
					<polyline
						fill="none"
						stroke="oklch(0.78 0.18 60)"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
						points="0,45 34,40 68,42 102,35 136,30 170,33 204,25 238,20 272,22 306,15 340,12"
					/>
				</svg>
				<div class="market-card-times">
					<span>09:30</span><span>11:00</span><span>13:00</span><span>16:00</span>
				</div>
			</div>
		</div>

		<div class="panel-footer">
			<span>SOC 2 Type II</span>
			<span>·</span>
			<span>SIPC Insured</span>
			<span>·</span>
			<span>256-bit encryption</span>
		</div>
	</div>
</template>

<style scoped>
.auth-panel {
	background: var(--ink);
	color: oklch(0.95 0 0);
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 48px;
}

.panel-glow {
	position: absolute;
	inset: 0;
	background: radial-gradient(ellipse at 70% 30%, oklch(0.30 0.10 50) 0%, transparent 60%);
	opacity: 0.6;
	pointer-events: none;
}

.panel-top {
	position: relative;
}

.market-line {
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 13px;
	opacity: 0.7;
}

.market-dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--pos);
	flex-shrink: 0;
}

.panel-main {
	position: relative;
}

.panel-headline {
	font-size: 48px;
	font-weight: 600;
	letter-spacing: -0.03em;
	line-height: 1.05;
	margin-bottom: 24px;
	max-width: 460px;
}

.panel-sub {
	font-size: 15px;
	opacity: 0.7;
	max-width: 420px;
	line-height: 1.55;
}

.market-card {
	margin-top: 36px;
	background: oklch(0.22 0.012 60);
	border: 1px solid oklch(0.28 0.012 60);
	border-radius: 14px;
	padding: 16px;
	max-width: 380px;
}

.market-card-header {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	font-size: 12px;
	opacity: 0.6;
	font-family: var(--font-mono);
}

.market-card-change {
	color: var(--pos);
	opacity: 1;
}

.market-chart {
	width: 100%;
	height: 60px;
	display: block;
}

.market-card-times {
	display: flex;
	justify-content: space-between;
	margin-top: 8px;
	font-size: 11px;
	opacity: 0.5;
	font-family: var(--font-mono);
}

.panel-footer {
	position: relative;
	display: flex;
	gap: 16px;
	font-size: 12px;
	opacity: 0.55;
}
</style>
