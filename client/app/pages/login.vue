<template>
	<div class="container">
		<div class="grid grid-cols-1 gap-[12px] min-h-screen">
			<div class="flex items-center justify-center">
				<LoginForm />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import LoginForm from '~/features/auth/login-form.vue';

// definePageMeta({
// 	middleware: 'guest',
// });

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
