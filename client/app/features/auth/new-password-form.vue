<template>
	<div class="form-wrap anim-in">
		<div class="form-logo">
			<div class="star-mark">
				<svg viewBox="0 0 24 24" width="20" height="20">
					<defs>
						<linearGradient id="star-g-np" x1="0" x2="0" y1="0" y2="1">
							<stop offset="0%" stop-color="oklch(0.78 0.18 60)" />
							<stop offset="100%" stop-color="oklch(0.65 0.19 45)" />
						</linearGradient>
					</defs>
					<path d="M12 2.5l2.92 5.92 6.54.95-4.73 4.61 1.12 6.51L12 17.42l-5.85 3.07 1.12-6.51L2.54 9.37l6.54-.95L12 2.5z" fill="url(#star-g-np)" />
				</svg>
			</div>
			<span class="form-brand">MyStocks</span>
		</div>

		<template v-if="status === 'idle'">
			<h1 class="form-heading">New password</h1>
			<p class="form-sub">Enter your new password below.</p>

			<UForm :state="state" @submit="handleSubmit" class="form-fields">
				<UFormField label="New password">
					<div class="ms-input-wrap">
						<input v-model="state.password" type="password" placeholder="New password" class="ms-input" :disabled="loading" autocomplete="new-password" />
					</div>
					<p v-if="state.password.length > 0 && state.password.length < 8" class="field-hint">
						Password must be at least 8 characters
					</p>
				</UFormField>
				<UFormField
					label="Confirm password"
					:error="passwordRepeatTouched && state.password !== state.passwordRepeat ? 'Passwords do not match' : undefined"
				>
					<div class="ms-input-wrap">
						<input
							v-model="state.passwordRepeat"
							type="password"
							placeholder="Confirm password"
							class="ms-input"
							:disabled="loading"
							autocomplete="new-password"
							@blur="passwordRepeatTouched = true"
						/>
					</div>
				</UFormField>
				<button
					type="submit"
					class="ms-btn ms-btn-primary ms-btn-lg btn-full"
					:disabled="loading || state.password.length < 8"
				>
					<span v-if="loading" class="spinner" />
					Reset password
				</button>
			</UForm>
		</template>

		<template v-else-if="status === 'error'">
			<div class="error-icon">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--neg)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
				</svg>
			</div>
			<h1 class="form-heading">Link expired</h1>
			<p class="form-sub">This reset link is invalid or has expired.</p>
			<NuxtLink to="/forgot-password" class="ms-btn ms-btn-primary ms-btn-lg btn-full" style="text-decoration:none;">Request a new link</NuxtLink>
		</template>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{ token: string }>();
const { newPassword } = useAuth();
const toast = useToast();

const state = ref({ password: '', passwordRepeat: '' });
const loading = ref(false);
const passwordRepeatTouched = ref(false);
const status = ref<'idle' | 'error'>('idle');

const handleSubmit = async () => {
	if (state.value.password.length < 8) return;
	if (state.value.password !== state.value.passwordRepeat) return;

	loading.value = true;
	try {
		const { error } = await newPassword(props.token, {
			password: state.value.password,
			passwordRepeat: state.value.passwordRepeat,
		});

		if (!error) {
			toast.add({ title: 'Password reset successfully', color: 'success' });
			await navigateTo('/login');
		} else {
			status.value = 'error';
		}
	} finally {
		loading.value = false;
	}
};
</script>

<style scoped>
.form-wrap { width: 100%; max-width: 380px; }

.form-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 32px; }

.star-mark {
	width: 36px; height: 36px; border-radius: 10px;
	background: oklch(0.18 0.012 60);
	display: grid; place-items: center; flex-shrink: 0;
	box-shadow: 0 1px 0 rgba(255,255,255,.04) inset, 0 0 0 1px oklch(0.22 0.012 60);
}

.form-brand { font-size: 18px; font-weight: 600; letter-spacing: -0.01em; color: var(--ink); }
.form-heading { font-size: 32px; font-weight: 600; letter-spacing: -0.025em; margin-bottom: 6px; color: var(--ink); }
.form-sub { color: var(--ink-3); margin-bottom: 28px; font-size: 14px; }

.form-fields { display: grid; gap: 14px; margin-bottom: 18px; }
.field-hint { font-size: 11.5px; color: var(--ink-3); margin-top: 5px; }

.btn-full { width: 100%; justify-content: center; }

.spinner {
	width: 14px; height: 14px;
	border: 2px solid rgba(255,255,255,.3);
	border-top-color: white;
	border-radius: 50%;
	animation: spin .6s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.error-icon {
	width: 56px; height: 56px; border-radius: 14px;
	background: var(--neg-soft);
	display: grid; place-items: center;
	margin-bottom: 20px;
}
</style>
