<template>
	<div class="form-wrap anim-in">
		<div class="form-logo">
			<div class="star-mark">
				<svg viewBox="0 0 24 24" width="20" height="20">
					<defs>
						<linearGradient id="star-g-reg" x1="0" x2="0" y1="0" y2="1">
							<stop offset="0%" stop-color="oklch(0.78 0.18 60)" />
							<stop offset="100%" stop-color="oklch(0.65 0.19 45)" />
						</linearGradient>
					</defs>
					<path d="M12 2.5l2.92 5.92 6.54.95-4.73 4.61 1.12 6.51L12 17.42l-5.85 3.07 1.12-6.51L2.54 9.37l6.54-.95L12 2.5z" fill="url(#star-g-reg)" />
				</svg>
			</div>
			<span class="form-brand">MyStocks</span>
		</div>

		<h1 class="form-heading">Create an account</h1>
		<p class="form-sub">Track your portfolio, discover new stocks, and invest with intent.</p>

		<UForm :state="state" @submit="handleSubmit" class="form-fields">
			<UFormField label="Name" :error="errors.name">
				<div class="ms-input-wrap">
					<input v-model="state.name" placeholder="Your name" class="ms-input" :disabled="loading" autocomplete="name" />
				</div>
			</UFormField>
			<UFormField label="Email" :error="errors.email">
				<div class="ms-input-wrap">
					<input v-model="state.email" type="email" placeholder="you@example.com" class="ms-input" :disabled="loading" autocomplete="email" />
				</div>
			</UFormField>
			<UFormField label="Password" :error="errors.password">
				<div class="ms-input-wrap">
					<input v-model="state.password" type="password" placeholder="••••••••" class="ms-input" :disabled="loading" autocomplete="new-password" />
				</div>
			</UFormField>
			<UFormField label="Confirm Password" :error="errors.passwordRepeat">
				<div class="ms-input-wrap">
					<input v-model="state.passwordRepeat" type="password" placeholder="Confirm password" class="ms-input" :disabled="loading" autocomplete="new-password" />
				</div>
			</UFormField>

			<button type="submit" class="ms-btn ms-btn-primary ms-btn-lg btn-full" :disabled="loading">
				<span v-if="loading" class="spinner" />
				Create account
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
			Already have an account?
			<NuxtLink to="/login" class="form-link">Sign in</NuxtLink>
		</p>
	</div>
</template>

<script setup lang="ts">
const { register, connectOAuth } = useAuth();
const toast = useToast();

const state = ref({ name: '', email: '', password: '', passwordRepeat: '' });
const loading = ref(false);
const oauthLoading = ref(false);
const errors = ref<Record<string, string>>({});

const handleSubmit = async () => {
	if (!state.value.email || !state.value.password || !state.value.passwordRepeat) return;

	errors.value = {};
	loading.value = true;

	try {
		const { data, error } = await register({
			name: state.value.name,
			email: state.value.email,
			password: state.value.password,
			passwordRepeat: state.value.passwordRepeat,
		});

		if (error) {
			if (Array.isArray(error.message)) {
				error.message.forEach((msg: string) => {
					const field = msg.toLowerCase().includes('email') ? 'email'
						: msg.toLowerCase().includes('password') ? (msg.toLowerCase().includes('repeat') || msg.toLowerCase().includes('match') ? 'passwordRepeat' : 'password')
						: msg.toLowerCase().includes('name') ? 'name' : 'general';
					errors.value[field] = msg;
				});
			} else {
				errors.value.general = error.message as string;
			}
			return;
		}

		if (data) {
			toast.add({ title: 'Email sent', description: 'We sent a verification link to your email address.', color: 'success' });
			await navigateTo('/verify-email');
		}
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
.form-wrap { width: 100%; max-width: 380px; }

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

.divider { display: flex; align-items: center; gap: 12px; margin: 18px 0; }
.divider-line { flex: 1; height: 1px; background: var(--line); }
.divider-text { color: var(--ink-3); font-size: 12px; white-space: nowrap; }

.form-footer { margin-top: 24px; font-size: 13px; color: var(--ink-3); }
.form-link { color: var(--accent-deep); font-weight: 500; text-decoration: none; }
.form-link:hover { text-decoration: underline; }
</style>
