export default defineNuxtRouteMiddleware(async (to) => {
	if (to.path === '/login') return;

	const config = useRuntimeConfig();
	const baseURL = config.public.apiBase as string;

	const auth = useState<{ isAuthenticated: boolean }>('auth', () => ({
		isAuthenticated: false,
	}));

	if (!auth.value.isAuthenticated) {
		try {
			await $fetch(`${baseURL}/users/profile`, { credentials: 'include' });
			auth.value = { isAuthenticated: true };
		} catch {
			auth.value = { isAuthenticated: false };
			return navigateTo('/login');
		}
	}
});
