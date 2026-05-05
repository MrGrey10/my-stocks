<template>
	<div class="form-wrap anim-in">
		<!-- Logo -->
		<div class="form-logo">
			<div class="star-mark">
				<svg viewBox="0 0 24 24" width="20" height="20">
					<defs>
						<linearGradient id="star-g-form" x1="0" x2="0" y1="0" y2="1">
							<stop offset="0%" stop-color="oklch(0.78 0.18 60)" />
							<stop offset="100%" stop-color="oklch(0.65 0.19 45)" />
						</linearGradient>
					</defs>
					<path d="M12 2.5l2.92 5.92 6.54.95-4.73 4.61 1.12 6.51L12 17.42l-5.85 3.07 1.12-6.51L2.54 9.37l6.54-.95L12 2.5z" fill="url(#star-g-form)" />
				</svg>
			</div>
			<span class="form-brand">MyStocks</span>
		</div>

		<h1 class="form-heading">Welcome back</h1>
		<p class="form-sub">Sign in to your account to continue.</p>

		<UForm :state="state" @submit="handleSubmit" class="form-fields">
			<UFormField label="Email" :error="errors.email">
				<div class="ms-input-wrap">
					<input
						v-model="state.email"
						type="email"
						placeholder="you@example.com"
						class="ms-input"
						:disabled="loading"
						autocomplete="email"
					/>
				</div>
			</UFormField>

			<UFormField label="Password" :error="errors.password">
				<div class="ms-input-wrap">
					<input
						v-model="state.password"
						type="password"
						placeholder="••••••••"
						class="ms-input"
						:disabled="loading"
						autocomplete="current-password"
					/>
				</div>
				<template #hint>
					<NuxtLink to="/forgot-password" class="forgot-link">Forgot password?</NuxtLink>
				</template>
			</UFormField>

			<UFormField v-if="needsTwoFactor" label="Two-Factor Code" :error="errors.code">
				<div class="ms-input-wrap">
					<input v-model="state.code" placeholder="Enter 2FA code" class="ms-input" :disabled="loading" />
				</div>
			</UFormField>

			<button type="submit" class="ms-btn ms-btn-primary ms-btn-lg btn-full" :disabled="loading">
				<span v-if="loading" class="spinner" />
				Sign in
			</button>
		</UForm>

		<div class="divider">
			<div class="divider-line" />
			<span class="divider-text">or continue with</span>
			<div class="divider-line" />
		</div>

		<button class="ms-btn ms-btn-ghost ms-btn-lg btn-full" @click="handleGoogleLogin" :disabled="oauthLoading">
			<img src="/google-icon.svg" alt="Google" style="width:16px;height:16px;" />
			Continue with Google
		</button>

		<p class="form-footer">
			Don't have an account?
			<NuxtLink to="/register" class="form-link">Sign up</NuxtLink>
		</p>
	</div>
</template>

<script setup lang="ts">
const { login, connectOAuth } = useAuth();
const toast = useToast();

const state = ref({ email: '', password: '', code: '' });
const loading = ref(false);
const oauthLoading = ref(false);
const needsTwoFactor = ref(false);
const errors = ref<Record<string, string>>({});

const handleSubmit = async () => {
	if (!state.value.email || !state.value.password) return;

	errors.value = {};
	loading.value = true;

	try {
		const { data, error } = await login({
			email: state.value.email,
			password: state.value.password,
			code: state.value.code || undefined,
		});

		if (error) {
			if (error.statusCode === 401 && error.message === 'Email not verified') {
				toast.add({ title: 'Email not verified', description: 'We sent a new verification link to your email address.', color: 'warning' });
				await navigateTo('/verify-email');
				return;
			}

			toast.add({
				title: 'Error',
				description: typeof error.message === 'string' ? error.message : error.message?.join(', ') || 'An error occurred',
				color: 'error',
			});

			if (error.statusCode === 401 && error.message?.includes('Two-factor')) {
				needsTwoFactor.value = true;
				return;
			}

			if (Array.isArray(error.message)) {
				error.message.forEach((msg: string) => {
					const field = msg.toLowerCase().includes('email') ? 'email' : msg.toLowerCase().includes('password') ? 'password' : 'code';
					errors.value[field] = msg;
				});
			} else {
				errors.value.general = error.message as string;
			}
			return;
		}

		if (data) await navigateTo('/');
	} catch {
		errors.value.general = 'An unexpected error occurred';
	} finally {
		loading.value = false;
	}
};

const handleGoogleLogin = async () => {
	oauthLoading.value = true;
	try {
		const { error } = await connectOAuth('google');
		if (error) errors.value.general = error.message as string;
	} catch {
		errors.value.general = 'Failed to connect with Google';
	} finally {
		setTimeout(() => { oauthLoading.value = false; }, 1000);
	}
};
</script>

<style scoped>
.form-wrap {
	width: 100%;
	max-width: 380px;
}

.form-logo {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 32px;
}

.star-mark {
	width: 36px;
	height: 36px;
	border-radius: 10px;
	background: oklch(0.18 0.012 60);
	display: grid;
	place-items: center;
	flex-shrink: 0;
	box-shadow: 0 1px 0 rgba(255,255,255,.04) inset, 0 0 0 1px oklch(0.22 0.012 60);
}

.form-brand {
	font-size: 18px;
	font-weight: 600;
	letter-spacing: -0.01em;
	color: var(--ink);
}

.form-heading {
	font-size: 32px;
	font-weight: 600;
	letter-spacing: -0.025em;
	margin-bottom: 6px;
	color: var(--ink);
}

.form-sub {
	color: var(--ink-3);
	margin-bottom: 28px;
}

.form-fields {
	display: grid;
	gap: 14px;
	margin-bottom: 18px;
}

.forgot-link {
	color: var(--accent-deep);
	text-decoration: none;
	font-size: 12.5px;
}

.btn-full {
	width: 100%;
	justify-content: center;
}

.spinner {
	width: 14px;
	height: 14px;
	border: 2px solid rgba(255,255,255,.3);
	border-top-color: white;
	border-radius: 50%;
	animation: spin .6s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.divider {
	display: flex;
	align-items: center;
	gap: 12px;
	margin: 18px 0;
}

.divider-line {
	flex: 1;
	height: 1px;
	background: var(--line);
}

.divider-text {
	color: var(--ink-3);
	font-size: 12px;
	white-space: nowrap;
}

.form-footer {
	margin-top: 24px;
	font-size: 13px;
	color: var(--ink-3);
}

.form-link {
	color: var(--accent-deep);
	font-weight: 500;
	text-decoration: none;
}

.form-link:hover {
	text-decoration: underline;
}
</style>
