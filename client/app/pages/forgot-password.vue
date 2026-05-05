<template>
	<div class="auth-shell">
		<div class="auth-form-side">
			<ForgotPasswordForm v-if="!token" />
			<NewPasswordForm v-else :token="token" />
		</div>
		<AuthPanel />
	</div>
</template>

<script setup lang="ts">
import ForgotPasswordForm from '~/features/auth/forgot-password-form.vue';
import NewPasswordForm from '~/features/auth/new-password-form.vue';
import AuthPanel from '~/features/auth/auth-panel.vue';

const route = useRoute();
const token = computed(() => {
	const raw = route.query.token;
	return Array.isArray(raw) ? raw[0] : (raw as string | undefined);
});
</script>

<style scoped>
.auth-shell {
	min-height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	background: var(--bg);
}

.auth-form-side {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 48px;
}

@media (max-width: 768px) {
	.auth-shell { grid-template-columns: 1fr; }
}
</style>
