<template>
	<div class="flex flex-col gap-[12px] w-full max-w-[420px]">
		<!-- <Logo /> -->
		<h1 class="text-[48px] font-bold text-[#2c2b2b]">Create an account</h1>
		<p class="text-[16px] text-[#313030] mb-[12px]">
			Create an account to get started. You will be able to manage your stocks
			and investments.
		</p>
		<UForm
			:state="state"
			@submit="handleSubmit"
			class="flex flex-col gap-[12px]"
		>
			<UFormField label="Name" :error="errors.name">
				<UInput
					class="w-full"
					v-model="state.name"
					name="name"
					placeholder="Your name"
					size="xl"
					:disabled="loading"
				/>
			</UFormField>
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
			<UFormField label="Confirm Password" :error="errors.passwordRepeat">
				<UInput
					class="w-full"
					v-model="state.passwordRepeat"
					name="passwordRepeat"
					type="password"
					placeholder="Confirm password"
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
				Create account
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
			Already have an account?
			<NuxtLink to="/login" class="text-orange-500">Sign in</NuxtLink>
		</p>
	</div>
</template>

<script setup lang="ts">
const { register, connectOAuth } = useAuth();
const toast = useToast();

const state = ref({
	name: '',
	email: '',
	password: '',
	passwordRepeat: '',
});

const loading = ref(false);
const oauthLoading = ref(false);
const errors = ref<Record<string, string>>({});

const handleSubmit = async () => {
	if (
		!state.value.email ||
		!state.value.password ||
		!state.value.passwordRepeat
	) {
		return;
	}

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
					const field = msg.toLowerCase().includes('email')
						? 'email'
						: msg.toLowerCase().includes('password')
							? msg.toLowerCase().includes('repeat') ||
								msg.toLowerCase().includes('match')
								? 'passwordRepeat'
								: 'password'
							: msg.toLowerCase().includes('name')
								? 'name'
								: 'general';
					errors.value[field] = msg;
				});
			} else {
				errors.value.general = error.message as string;
			}
			return;
		}

		if (data) {
			toast.add({
				title: 'Email sent',
				description: 'We sent a verification link to your email address.',
				color: 'success',
			});
			await navigateTo('/verify-email');
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
