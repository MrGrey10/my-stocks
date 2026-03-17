<template>
	<div class="flex flex-col gap-[12px] w-full max-w-[420px]">
		<Logo />
		<template v-if="status === 'idle'">
			<h1 class="text-[48px] font-bold text-[#2c2b2b]">New password</h1>
			<p class="text-[16px] text-[#313030] mb-[12px]">
				Enter your new password below.
			</p>
			<UForm
				:state="state"
				@submit="handleSubmit"
				class="flex flex-col gap-[12px]"
			>
				<UFormField label="New password">
					<UInput
						class="w-full"
						v-model="state.password"
						name="password"
						type="password"
						placeholder="New password"
						size="xl"
						:disabled="loading"
					/>
					<p
						v-if="state.password.length > 0 && state.password.length < 8"
						class="text-sm text-gray-500 mt-1"
					>
						Password must be at least 8 characters
					</p>
				</UFormField>
				<UFormField
					label="Confirm password"
					:error="passwordRepeatTouched && state.password !== state.passwordRepeat ? 'Passwords do not match' : undefined"
				>
					<UInput
						class="w-full"
						v-model="state.passwordRepeat"
						name="passwordRepeat"
						type="password"
						placeholder="Confirm password"
						size="xl"
						:disabled="loading"
						@blur="passwordRepeatTouched = true"
					/>
				</UFormField>
				<UButton
					type="submit"
					size="xl"
					class="flex items-center justify-center mt-[12px]"
					:loading="loading"
					:disabled="loading || state.password.length < 8"
				>
					Reset password
				</UButton>
			</UForm>
		</template>

		<template v-else-if="status === 'error'">
			<div class="flex items-center gap-[12px] mb-[8px]">
				<UIcon name="i-lucide-circle-x" class="size-8 text-red-500" />
				<h1 class="text-[32px] font-bold text-[#2c2b2b]">Link invalid or expired</h1>
			</div>
			<p class="text-[16px] text-[#313030] mb-[12px]">
				This reset link is invalid or has expired.
			</p>
			<UButton
				size="xl"
				class="flex items-center justify-center"
				to="/forgot-password"
			>
				Request a new link
			</UButton>
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
