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
				<ForgotPasswordForm v-if="!token" />
				<NewPasswordForm v-else :token="token" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import ForgotPasswordForm from '~/features/auth/forgot-password-form.vue';
import NewPasswordForm from '~/features/auth/new-password-form.vue';

const route = useRoute();

const token = computed(() => {
	const raw = route.query.token;
	// Handles duplicate query params (?token=a&token=b) — take first value.
	// Vue Router never produces an empty array for query values, so raw[0] is safe.
	return Array.isArray(raw) ? raw[0] : (raw as string | undefined);
});
</script>
