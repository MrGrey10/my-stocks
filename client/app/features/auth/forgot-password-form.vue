<template>
	<div class="flex flex-col gap-[12px] w-full max-w-[420px]">
		<Logo />
		<template v-if="!submitted">
			<h1 class="text-[48px] font-bold text-[#2c2b2b]">Forgot password</h1>
			<p class="text-[16px] text-[#313030] mb-[12px]">
				Enter your email and we'll send you a reset link.
			</p>
			<UForm
				:state="state"
				@submit="handleSubmit"
				class="flex flex-col gap-[12px]"
			>
				<UFormField label="Email">
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
				<UButton
					type="submit"
					size="xl"
					class="flex items-center justify-center mt-[12px]"
					:loading="loading"
					:disabled="loading"
				>
					Send reset link
				</UButton>
			</UForm>
			<p>
				<NuxtLink to="/login" class="text-sm text-gray-600">Back to login</NuxtLink>
			</p>
		</template>

		<template v-else>
			<div class="flex items-center gap-[12px] mb-[8px]">
				<UIcon name="i-lucide-mail" class="size-8 text-orange-500" />
				<h1 class="text-[32px] font-bold text-[#2c2b2b]">Check your email</h1>
			</div>
			<p class="text-[16px] text-[#313030] mb-[12px]">
				We sent a password reset link to your email. The link expires in 1 hour.
			</p>
			<UButton
				size="xl"
				variant="outline"
				class="flex items-center justify-center"
				to="/login"
			>
				Back to login
			</UButton>
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
		if (!error) {
			submitted.value = true;
		}
	} finally {
		loading.value = false;
	}
};
</script>
