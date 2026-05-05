<template>
	<div class="auth-shell">
		<div class="auth-form-side">
			<RegisterForm />
		</div>
		<AuthPanel />
	</div>
</template>

<script setup lang="ts">
import RegisterForm from '~/features/auth/register-form.vue';
import AuthPanel from '~/features/auth/auth-panel.vue';
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
