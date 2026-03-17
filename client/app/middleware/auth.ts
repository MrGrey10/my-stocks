import { getCookie } from 'h3';

export default defineNuxtRouteMiddleware(async () => {
	const config = useRuntimeConfig();
	const sessionCookieName = config.public.sessionCookieName as string;
	const baseURL = config.public.apiBase as string;

	const auth = useState<{ isAuthenticated: boolean }>('auth', () => ({
		isAuthenticated: false,
	}));

	if (import.meta.server) {
		const event = useRequestEvent();
		const sessionValue = event ? getCookie(event, sessionCookieName) : null;
		auth.value = { isAuthenticated: !!sessionValue?.length };
	}

	if (import.meta.client && !auth.value.isAuthenticated) {
		try {
			await $fetch(`${baseURL}/users/profile`, { credentials: 'include' });
			auth.value = { isAuthenticated: true };
		} catch {
			auth.value = { isAuthenticated: false };
		}
	}

	if (!auth.value.isAuthenticated) {
		return navigateTo('/login', { replace: true });
	}
});
