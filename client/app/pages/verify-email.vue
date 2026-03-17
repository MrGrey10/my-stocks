<template>
	<div class="container">
		<div
			class="grid grid-cols-1 gap-[12px] md:grid-cols-2 p-[16px] min-h-screen"
		>
			<div
				class="gradient-background rounded-[12px] p-[24px_24px_42px_24px] flex flex-col justify-between"
			>
				<Logo text="MyStocks" />
				<div>
					<h1 class="text-[20px] font-medium text-[#2c2b2b] mb-[12px]">
						Welcome to MyStocks
					</h1>
					<p class="text-[38px] font-bold text-black leading-[1.2]">
						MyStocks is a platform for managing your stocks and investments.
					</p>
				</div>
			</div>
			<div class="p-[24px] flex items-center justify-center">
				<div class="flex flex-col gap-[12px] w-full max-w-[420px]">
					<template v-if="!token">
						<h1 class="text-[48px] font-bold text-[#2c2b2b]">
							Verify your email
						</h1>
						<p class="text-[16px] text-[#313030] mb-[12px]">
							We sent you an email. Click the link in the email to verify your account.
						</p>
						<UButton
							size="xl"
							variant="outline"
							class="flex items-center justify-center"
							to="/"
						>
							Back to home
						</UButton>
					</template>

					<template v-else-if="status === 'pending'">
						<div class="flex items-center gap-[12px]">
							<UIcon
								name="i-lucide-loader-circle"
								class="size-8 animate-spin text-orange-500"
							/>
							<p class="text-[18px] text-[#313030]">Verifying...</p>
						</div>
					</template>

					<template v-else-if="status === 'success'">
						<div class="flex items-center gap-[12px] mb-[8px]">
							<UIcon
								name="i-lucide-circle-check"
								class="size-8 text-green-500"
							/>
							<h1 class="text-[32px] font-bold text-[#2c2b2b]">
								Email verified!
							</h1>
						</div>
						<p class="text-[16px] text-[#313030] mb-[12px]">
							Your account has been verified. Redirecting you...
						</p>
					</template>

					<template v-else-if="status === 'error'">
						<div class="flex items-center gap-[12px] mb-[8px]">
							<UIcon
								name="i-lucide-circle-x"
								class="size-8 text-red-500"
							/>
							<h1 class="text-[32px] font-bold text-[#2c2b2b]">
								Verification failed
							</h1>
						</div>
						<p class="text-[16px] text-[#313030] mb-[12px]">
							{{ errorMessage }}
						</p>
						<UButton
							size="xl"
							class="flex items-center justify-center"
							to="/login"
						>
							Go to login
						</UButton>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const { confirmEmail } = useAuth();

const token = computed(() => route.query.token as string | undefined);
const status = ref<'pending' | 'success' | 'error'>('pending');
const errorMessage = ref('Invalid or expired verification token.');

onMounted(async () => {
	if (!token.value) return;

	const { data, error } = await confirmEmail({ token: token.value });

	if (error) {
		errorMessage.value =
			typeof error.message === 'string'
				? error.message
				: 'Invalid or expired verification token.';
		status.value = 'error';
		return;
	}

	if (data) {
		status.value = 'success';
		await navigateTo('/');
	}
});
</script>
