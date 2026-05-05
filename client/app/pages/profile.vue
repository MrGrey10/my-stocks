<template>
	<div>
		<div class="page-header">
			<div class="page-title">Settings</div>
			<div class="page-sub">Manage your account preferences</div>
		</div>

		<div v-if="userStore.profile" class="settings-grid">
			<!-- Profile card -->
			<div class="ms-card profile-card">
				<div class="card-section-title">Profile</div>
				<div class="profile-row">
					<div class="profile-avatar">{{ initials }}</div>
					<div>
						<div class="profile-name">{{ userStore.profile.name }}</div>
						<div class="profile-email">{{ userStore.profile.email }}</div>
					</div>
				</div>
			</div>

			<!-- Account info -->
			<div class="ms-card">
				<div class="card-section-title">Account</div>
				<div class="info-list">
					<div class="info-row">
						<span class="info-label">Auth method</span>
						<span class="ms-pill ms-pill-neutral">{{ userStore.profile.authMethod }}</span>
					</div>
					<div class="info-row">
						<span class="info-label">Email verified</span>
						<span :class="['ms-pill', userStore.profile.verified ? 'ms-pill-pos' : 'ms-pill-neg']">
							{{ userStore.profile.verified ? 'Verified' : 'Not verified' }}
						</span>
					</div>
					<div class="info-row">
						<span class="info-label">Two-factor auth</span>
						<span :class="['ms-pill', userStore.profile.twoFactorEnabled ? 'ms-pill-pos' : 'ms-pill-neutral']">
							{{ userStore.profile.twoFactorEnabled ? 'Enabled' : 'Disabled' }}
						</span>
					</div>
				</div>
			</div>
		</div>

		<div v-else class="page-loading">
			<div class="loading-spinner" />
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth', layout: 'dashboard' });

const userStore = useUserStore();

onMounted(async () => {
	try {
		await userStore.fetchProfile();
	} catch {}
});

const initials = computed(() => {
	const name = userStore.profile?.name ?? '';
	return name.split(' ').filter(Boolean).map((n: string) => n[0]).join('').toUpperCase().slice(0, 2) || '?';
});
</script>

<style scoped>
.page-header { margin-bottom: 28px; }
.page-title { font-size: 28px; font-weight: 600; letter-spacing: -0.02em; color: var(--ink); }
.page-sub { font-size: 13px; color: var(--ink-3); margin-top: 4px; }

.settings-grid { display: grid; gap: 16px; max-width: 560px; }

.profile-card { padding: 24px; }
.ms-card { padding: 20px; }

.card-section-title {
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: var(--ink-3);
	margin-bottom: 16px;
}

.profile-row {
	display: flex;
	align-items: center;
	gap: 16px;
}

.profile-avatar {
	width: 48px;
	height: 48px;
	border-radius: 50%;
	background: linear-gradient(135deg, oklch(0.55 0.13 240), oklch(0.55 0.14 290));
	color: #fff;
	display: grid;
	place-items: center;
	font-weight: 600;
	font-size: 16px;
	flex-shrink: 0;
}

.profile-name { font-size: 16px; font-weight: 600; color: var(--ink); }
.profile-email { font-size: 13px; color: var(--ink-3); margin-top: 2px; }

.info-list { display: grid; gap: 12px; }

.info-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 12px;
	border-bottom: 1px solid var(--line);
}

.info-row:last-child { border-bottom: none; padding-bottom: 0; }

.info-label { font-size: 13px; color: var(--ink-2); }

.page-loading {
	display: flex;
	justify-content: center;
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
</style>
