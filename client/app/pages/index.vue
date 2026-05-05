<template>
	<div>
		<!-- Page header -->
		<div class="page-header">
			<div>
				<div class="page-title">My Portfolios</div>
				<div class="page-sub" v-if="store.portfolios.length">
					{{ store.portfolios.length }} portfolio{{ store.portfolios.length !== 1 ? 's' : '' }}
					· {{ fmtMoney(totalValue) }} total
				</div>
			</div>
			<div class="header-actions">
				<button class="ms-btn ms-btn-primary" @click="startCreate">
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
					New Portfolio
				</button>
			</div>
		</div>

		<!-- Loading -->
		<div v-if="store.loading" class="empty-state">
			<div class="loading-spinner" />
		</div>

		<!-- Portfolios grid -->
		<div v-else-if="store.portfolios.length" class="portfolios-grid">
			<div
				v-for="p in store.portfolios"
				:key="p.id"
				class="ms-card portfolio-card"
				@click="navigateTo(`/portfolio/${p.id}`)"
			>
				<!-- Card header -->
				<div class="card-header">
					<div class="card-title-row">
						<div class="portfolio-dot" :style="{ background: portfolioColor(p.id) }" />
						<span class="portfolio-name">{{ p.name }}</span>
					</div>
					<div class="card-actions" @click.stop>
						<button
							v-if="renamingId === p.id"
							class="card-action-btn"
							title="Cancel rename"
							@click="renamingId = null"
						>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
						</button>
						<button
							v-else
							class="card-action-btn card-action-btn--danger"
							title="Delete portfolio"
							@click="remove(p.id)"
						>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
								<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
							</svg>
						</button>
					</div>
				</div>

				<!-- Rename input -->
				<div v-if="renamingId === p.id" class="rename-wrap" @click.stop>
					<div class="ms-input-wrap" style="height:36px;">
						<input
							v-model="renameValue"
							class="ms-input"
							style="font-size:13px;"
							@blur="submitRename(p.id)"
							@keydown.enter="submitRename(p.id)"
							@keydown.esc="renamingId = null"
							@click.stop
						/>
					</div>
				</div>

				<!-- Name (click to rename) -->
				<div
					v-else
					class="portfolio-value num"
					@dblclick.stop="startRename(p)"
				>
					{{ fmtMoney(p.totalValue) }}
				</div>

				<!-- P&L -->
				<div class="portfolio-pnl">
					<span :class="['ms-pill', p.totalPnl >= 0 ? 'ms-pill-pos' : 'ms-pill-neg']">
						<svg v-if="p.totalPnl >= 0" width="8" height="8" viewBox="0 0 10 10"><path d="M5 1l4 5H1z" fill="currentColor"/></svg>
						<svg v-else width="8" height="8" viewBox="0 0 10 10"><path d="M5 9L1 4h8z" fill="currentColor"/></svg>
						{{ p.totalPnl >= 0 ? '+' : '' }}{{ fmtMoney(p.totalPnl) }}
						<span style="opacity:.8;">({{ p.totalPnlPercent.toFixed(2) }}%)</span>
					</span>
					<span class="pnl-label">all time</span>
				</div>

				<!-- Bottom stats -->
				<div class="card-stats">
					<div class="stat">
						<div class="stat-label">Invested</div>
						<div class="stat-value num">{{ fmtMoney(p.totalInvested) }}</div>
					</div>
					<div class="stat">
						<div class="stat-label">Holdings</div>
						<div class="stat-value num">{{ p.holdingCount }}</div>
					</div>
					<div class="stat">
						<div class="stat-label">Today</div>
						<div class="stat-value num" :class="p.todayPnl >= 0 ? 'pos' : 'neg'">
							{{ p.todayPnl >= 0 ? '+' : '' }}{{ p.todayPnlPercent.toFixed(2) }}%
						</div>
					</div>
				</div>
			</div>

			<!-- Create card -->
			<button class="create-card" @click="startCreate">
				<div class="create-icon">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
				</div>
				<div class="create-label">Create new portfolio</div>
				<div class="create-sub">Group holdings by strategy</div>
			</button>
		</div>

		<!-- Empty state -->
		<div v-else class="empty-state">
			<div class="empty-icon">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
					<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
				</svg>
			</div>
			<div class="empty-title">No portfolios yet</div>
			<div class="empty-sub">Create your first portfolio to start tracking your investments.</div>
			<button class="ms-btn ms-btn-primary" style="margin-top:16px;" @click="startCreate">
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
				New Portfolio
			</button>
		</div>

		<!-- Create modal -->
		<UModal v-model:open="creating">
			<template #content>
				<div class="ms-card" style="padding:24px;">
					<div style="font-size:16px;font-weight:600;margin-bottom:16px;">Create portfolio</div>
					<div class="ms-input-wrap" style="margin-bottom:16px;">
						<input
							ref="createInputRef"
							v-model="newName"
							class="ms-input"
							placeholder="Portfolio name"
							@keydown.enter="submitCreate"
							@keydown.esc="cancelCreate"
						/>
					</div>
					<div style="display:flex;gap:8px;justify-content:flex-end;">
						<button class="ms-btn ms-btn-ghost ms-btn-sm" @click="cancelCreate">Cancel</button>
						<button class="ms-btn ms-btn-primary ms-btn-sm" :disabled="submittingCreate" @click="submitCreate">
							<span v-if="submittingCreate" class="spinner-sm" />
							Create
						</button>
					</div>
				</div>
			</template>
		</UModal>
	</div>
</template>

<script setup lang="ts">
import type { PortfolioListItem } from '~/stores/portfolio-list';

definePageMeta({ middleware: 'auth', layout: 'dashboard' });

const store = usePortfolioListStore();

onMounted(() => store.fetchPortfolios());

const totalValue = computed(() => store.portfolios.reduce((sum: number, p: PortfolioListItem) => sum + p.totalValue, 0));

// Create
const creating = ref(false);
const newName = ref('');
const submittingCreate = ref(false);
const createInputRef = ref<HTMLInputElement | null>(null);

function startCreate() {
	creating.value = true;
	newName.value = '';
	nextTick(() => createInputRef.value?.focus());
}

function cancelCreate() {
	creating.value = false;
	newName.value = '';
}

async function submitCreate() {
	if (!newName.value.trim()) return;
	submittingCreate.value = true;
	try {
		await store.createPortfolio(newName.value.trim());
		cancelCreate();
	} finally {
		submittingCreate.value = false;
	}
}

// Rename
const renamingId = ref<string | null>(null);
const renameValue = ref('');

function startRename(p: PortfolioListItem) {
	renamingId.value = p.id;
	renameValue.value = p.name;
}

async function submitRename(id: string) {
	if (!renameValue.value.trim()) { renamingId.value = null; return; }
	await store.renamePortfolio(id, renameValue.value.trim());
	renamingId.value = null;
}

// Delete
async function remove(id: string) {
	if (!confirm('Delete this portfolio and all its holdings?')) return;
	await store.deletePortfolio(id);
}

function fmtMoney(n: number) {
	return '$' + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
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

.page-title {
	font-size: 28px;
	font-weight: 600;
	letter-spacing: -0.02em;
	color: var(--ink);
}

.page-sub {
	font-size: 13px;
	color: var(--ink-3);
	margin-top: 4px;
}

.header-actions {
	display: flex;
	gap: 8px;
}

.portfolios-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	gap: 16px;
}

.portfolio-card {
	padding: 20px;
	cursor: pointer;
	transition: transform .15s, box-shadow .15s, border-color .15s;
}

.portfolio-card:hover {
	box-shadow: var(--shadow-lg);
	transform: translateY(-2px);
}

.card-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 18px;
}

.card-title-row {
	display: flex;
	align-items: center;
	gap: 10px;
}

.portfolio-dot {
	width: 8px;
	height: 8px;
	border-radius: 2px;
	flex-shrink: 0;
}

.portfolio-name {
	font-weight: 600;
	font-size: 15px;
	color: var(--ink);
}

.card-actions {
	display: flex;
	gap: 4px;
}

.card-action-btn {
	width: 28px;
	height: 28px;
	border-radius: 6px;
	display: grid;
	place-items: center;
	color: var(--ink-3);
	transition: background .15s, color .15s;
	border: none;
	background: transparent;
}

.card-action-btn:hover { background: var(--bg-sunken); color: var(--ink); }
.card-action-btn--danger:hover { background: var(--neg-soft); color: var(--neg); }

.rename-wrap { margin-bottom: 8px; }

.portfolio-value {
	font-size: 28px;
	font-weight: 600;
	letter-spacing: -0.02em;
	color: var(--ink);
}

.portfolio-pnl {
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 6px;
}

.pnl-label {
	font-size: 11.5px;
	color: var(--ink-3);
}

.card-stats {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 8px;
	padding-top: 14px;
	border-top: 1px solid var(--line);
	margin-top: 16px;
}

.stat-label {
	font-size: 10.5px;
	color: var(--ink-3);
	text-transform: uppercase;
	letter-spacing: 0.04em;
}

.stat-value {
	font-size: 13px;
	font-weight: 500;
	margin-top: 2px;
	color: var(--ink);
}

/* Create card */
.create-card {
	border: 1.5px dashed var(--line-2);
	border-radius: var(--r-lg);
	padding: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	color: var(--ink-3);
	min-height: 220px;
	transition: all .15s;
	background: transparent;
	cursor: pointer;
	font-family: inherit;
}

.create-card:hover {
	border-color: var(--accent);
	color: var(--accent-deep);
}

.create-icon {
	width: 40px;
	height: 40px;
	border-radius: 10px;
	background: var(--bg-sunken);
	display: grid;
	place-items: center;
}

.create-label { font-weight: 500; font-size: 14px; }
.create-sub { font-size: 12px; }

/* Empty state */
.empty-state {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 80px 20px;
	text-align: center;
}

.empty-icon {
	width: 56px;
	height: 56px;
	border-radius: 14px;
	background: var(--bg-sunken);
	border: 1px solid var(--line);
	display: grid;
	place-items: center;
	margin-bottom: 16px;
}

.empty-title { font-size: 16px; font-weight: 600; color: var(--ink); }
.empty-sub { font-size: 13px; color: var(--ink-3); margin-top: 4px; max-width: 300px; }

.loading-spinner {
	width: 32px;
	height: 32px;
	border: 2px solid var(--line);
	border-top-color: var(--accent);
	border-radius: 50%;
	animation: spin .8s linear infinite;
}

.spinner-sm {
	width: 12px;
	height: 12px;
	border: 2px solid rgba(255,255,255,.3);
	border-top-color: white;
	border-radius: 50%;
	animation: spin .6s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }
</style>
