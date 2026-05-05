<template>
	<div class="form-wrap anim-in">
		<div class="form-logo">
			<div class="star-mark">
				<svg viewBox="0 0 24 24" width="20" height="20">
					<defs>
						<linearGradient id="star-g-fp" x1="0" x2="0" y1="0" y2="1">
							<stop offset="0%" stop-color="oklch(0.78 0.18 60)" />
							<stop offset="100%" stop-color="oklch(0.65 0.19 45)" />
						</linearGradient>
					</defs>
					<path d="M12 2.5l2.92 5.92 6.54.95-4.73 4.61 1.12 6.51L12 17.42l-5.85 3.07 1.12-6.51L2.54 9.37l6.54-.95L12 2.5z" fill="url(#star-g-fp)" />
				</svg>
			</div>
			<span class="form-brand">MyStocks</span>
		</div>

		<template v-if="!submitted">
			<h1 class="form-heading">Forgot password</h1>
			<p class="form-sub">Enter your email and we'll send you a reset link.</p>

			<UForm :state="state" @submit="handleSubmit" class="form-fields">
				<UFormField label="Email">
					<div class="ms-input-wrap">
						<input v-model="state.email" type="email" placeholder="you@example.com" class="ms-input" :disabled="loading" autocomplete="email" />
					</div>
				</UFormField>
				<button type="submit" class="ms-btn ms-btn-primary ms-btn-lg btn-full" :disabled="loading">
					<span v-if="loading" class="spinner" />
					Send reset link
				</button>
			</UForm>

			<p class="form-footer">
				<NuxtLink to="/login" class="form-link">← Back to login</NuxtLink>
			</p>
		</template>

		<template v-else>
			<div class="success-icon">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-deep)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
				</svg>
			</div>
			<h1 class="form-heading">Check your email</h1>
			<p class="form-sub">We sent a password reset link to your email. The link expires in 1 hour.</p>
			<NuxtLink to="/login" class="ms-btn ms-btn-ghost ms-btn-lg btn-full" style="text-decoration:none;">Back to login</NuxtLink>
		</template>
	</div>
</template>

<script setup lang="ts">
const { resetPassword } = useAuth();

const state = ref({ email: '' });
const loading = ref(false);
const submitted = ref(false);

const handleSubmit = async () => {
	if (!state.value.email) return;
	loading.value = true;
	try {
		const { error } = await resetPassword({ email: state.value.email });
		if (!error) submitted.value = true;
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

.btn-full { width: 100%; justify-content: center; }

.spinner {
	width: 14px; height: 14px;
	border: 2px solid rgba(255,255,255,.3);
	border-top-color: white;
	border-radius: 50%;
	animation: spin .6s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.success-icon {
	width: 56px; height: 56px; border-radius: 14px;
	background: var(--accent-soft);
	display: grid; place-items: center;
	margin-bottom: 20px;
}

.form-footer { margin-top: 24px; font-size: 13px; }
.form-link { color: var(--accent-deep); font-weight: 500; text-decoration: none; }
.form-link:hover { text-decoration: underline; }
</style>
