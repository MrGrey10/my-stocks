<template>
	<div class="auth-shell">
		<!-- Left: form -->
		<div class="auth-form-side">
			<LoginForm />
		</div>

		<!-- Right: dark panel -->
		<AuthPanel />
	</div>
</template>

<script setup lang="ts">
import LoginForm from '~/features/auth/login-form.vue';
import AuthPanel from '~/features/auth/auth-panel.vue';

const toast = useToast();
const route = useRoute();

onMounted(() => {
	const error = route.query.error as string | undefined;
	if (error) {
		toast.add({ title: 'Login failed', description: error, color: 'error' });
		navigateTo('/login', { replace: true });
	}
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
	.auth-shell {
		grid-template-columns: 1fr;
	}

	.auth-panel {
		display: none;
	}
}
</style>
