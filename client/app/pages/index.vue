<template>
	<UContainer class="py-8">
		<div class="flex items-center justify-between mb-6">
			<h1 class="text-2xl font-bold text-gray-900 dark:text-white">
				My Portfolios
			</h1>
			<UButton icon="i-heroicons-plus" @click="startCreate"
				>New Portfolio</UButton
			>
		</div>

		<div v-if="creating" class="mb-6 flex gap-2 items-center">
			<UInput
				ref="createInputRef"
				v-model="newName"
				placeholder="Portfolio name"
				class="w-64"
				@keydown.enter="submitCreate"
				@keydown.esc="cancelCreate"
			/>
			<UButton :loading="submittingCreate" @click="submitCreate"
				>Create</UButton
			>
			<UButton variant="ghost" color="gray" @click="cancelCreate"
				>Cancel</UButton
			>
		</div>

		<div v-if="store.loading" class="text-center py-16 text-gray-400">
			Loading...
		</div>

		<div
			v-else-if="store.portfolios.length"
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
		>
			<UCard
				v-for="p in store.portfolios"
				:key="p.id"
				class="hover:ring-2 transition"
			>
				<div class="flex items-center justify-between mb-4">
					<input
						v-if="renamingId === p.id"
						v-model="renameValue"
						class="text-lg font-semibold bg-transparent border-b border-primary-500 outline-none flex-1 mr-2"
						@blur="submitRename(p.id)"
						@keydown.enter="submitRename(p.id)"
						@keydown.esc="renamingId = null"
						@click.stop
					/>
					<span
						v-else
						class="text-lg font-semibold text-gray-900 dark:text-white cursor-text"
						:title="'Click to rename'"
						@click.stop="startRename(p)"
						>{{ p.name }}</span
					>

					<UButton
						variant="ghost"
						color="error"
						size="xs"
						icon="i-heroicons-trash"
						@click.stop="remove(p.id)"
					/>
				</div>

				<div
					class="space-y-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer"
					@click="navigateTo(`/portfolio/${p.id}`)"
				>
					<div class="flex justify-between">
						<span>Total Value</span>
						<span class="font-medium text-gray-900 dark:text-white"
							>${{ fmt(p.totalValue) }}</span
						>
					</div>
					<div class="flex justify-between">
						<span>Invested</span>
						<span class="font-medium text-gray-900 dark:text-white"
							>${{ fmt(p.totalInvested) }}</span
						>
					</div>
					<div class="flex justify-between">
						<span>Total P&amp;L</span>
						<span :class="pnlClass(p.totalPnl)" class="font-medium">
							{{ p.totalPnl >= 0 ? '+' : '' }}${{
								fmt(Math.abs(p.totalPnl))
							}}
							({{ p.totalPnlPercent.toFixed(2) }}%)
						</span>
					</div>
					<div class="flex justify-between">
						<span>Holdings</span>
						<span class="font-medium text-gray-900 dark:text-white">{{
							p.holdingCount
						}}</span>
					</div>
				</div>
			</UCard>
		</div>

		<div v-else class="text-center py-16 text-gray-400">
			No portfolios yet. Create your first portfolio above.
		</div>
	</UContainer>
</template>

<script setup lang="ts">
import type { PortfolioListItem } from '~/stores/portfolio-list';

definePageMeta({ middleware: 'auth', layout: 'dashboard' });

const store = usePortfolioListStore();

onMounted(() => store.fetchPortfolios());

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
	if (!renameValue.value.trim()) {
		renamingId.value = null;
		return;
	}
	await store.renamePortfolio(id, renameValue.value.trim());
	renamingId.value = null;
}

// Delete
async function remove(id: string) {
	if (!confirm('Delete this portfolio and all its holdings?')) return;
	await store.deletePortfolio(id);
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
