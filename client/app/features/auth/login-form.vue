<template>
	<div class="flex flex-col gap-[12px] w-full max-w-[420px]">
		<Logo />
		<h1 class="text-[48px] font-bold text-[#2c2b2b]">Sign in</h1>
		<p class="text-[16px] text-[#313030] mb-[12px]">
			Sign in to your account to continue.
		</p>
		<UForm
			:state="state"
			@submit="handleSubmit"
			class="flex flex-col gap-[12px]"
		>
			<UFormField label="Email" :error="errors.email">
				<UInput
					class="w-full"
					v-model="state.email"
					name="email"
					type="email"
					placeholder="Email"
					size="xl"
					:disabled="loading"
				/>
			</UFormField>
			<UFormField label="Password" :error="errors.password">
				<UInput
					class="w-full"
					v-model="state.password"
					name="password"
					type="password"
					placeholder="Password"
					size="xl"
					:disabled="loading"
				/>
			</UFormField>
			<UFormField
				v-if="needsTwoFactor"
				label="Two-Factor Code"
				:error="errors.code"
			>
				<UInput
					class="w-full"
					v-model="state.code"
					name="code"
					placeholder="Enter 2FA code"
					size="xl"
					:disabled="loading"
				/>
			</UFormField>
			<UButton
				type="submit"
				size="xl"
				class="flex items-center justify-center mt-[12px]"
				:loading="loading"
				:disabled="loading"
			>
				Sign in
			</UButton>
		</UForm>
		<USeparator class="my-[12px]" />
		<UButton
			variant="outline"
			size="xl"
			class="flex items-center justify-center hover:bg-gray-100"
			@click="handleGoogleLogin"
			:disabled="oauthLoading"
		>
			<img src="/google-icon.svg" alt="Google" class="size-5" />
			Continue with Google
		</UButton>
		<p>
			Don't have an account?
			<NuxtLink to="/register" class="text-orange-500">Sign up</NuxtLink>
		</p>
		<p>
			<NuxtLink to="/forgot-password" class="text-sm text-gray-600">
				Forgot password?
			</NuxtLink>
		</p>
	</div>
</template>

<script setup lang="ts">
const { login, connectOAuth } = useAuth();
const toast = useToast();

const state = ref({
	email: '',
	password: '',
	code: '',
});

const loading = ref(false);
const oauthLoading = ref(false);
const needsTwoFactor = ref(false);
const errors = ref<Record<string, string>>({});

const handleSubmit = async () => {
	if (!state.value.email || !state.value.password) {
		return;
	}

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
				toast.add({
					title: 'Email not verified',
					description: 'We sent a new verification link to your email address.',
					color: 'warning',
				});
				await navigateTo('/verify-email');
				return;
			}

			toast.add({
				title: 'Error',
				description:
					typeof error.message === 'string'
						? error.message
						: error.message?.join(', ') || 'An error occurred',
				color: 'error',
			});

			if (error.statusCode === 401 && error.message?.includes('Two-factor')) {
				needsTwoFactor.value = true;
				return;
			}

			if (Array.isArray(error.message)) {
				error.message.forEach((msg: string) => {
					const field = msg.toLowerCase().includes('email')
						? 'email'
						: msg.toLowerCase().includes('password')
							? 'password'
							: 'code';
					errors.value[field] = msg;
				});
			} else {
				errors.value.general = error.message as string;
			}
			return;
		}

		if (data) {
			await navigateTo('/');
		}
	} catch (err) {
		errors.value.general = 'An unexpected error occurred';
	} finally {
		loading.value = false;
	}
};

const handleGoogleLogin = async () => {
	oauthLoading.value = true;
	try {
		const { error } = await connectOAuth('google');
		if (error) {
			errors.value.general = error.message as string;
		}
	} catch (err) {
		errors.value.general = 'Failed to connect with Google';
	} finally {
		setTimeout(() => {
			oauthLoading.value = false;
		}, 1000);
	}
};
</script>
