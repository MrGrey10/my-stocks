import { getCookie } from 'h3';

export default defineNuxtRouteMiddleware(() => {
	const config = useRuntimeConfig();
	const sessionCookieName = config.public.sessionCookieName as string;

	const auth = useState<{ isAuthenticated: boolean }>('auth', () => ({
		isAuthenticated: false,
	}));

	if (import.meta.server) {
		const event = useRequestEvent();
		const sessionValue = event ? getCookie(event, sessionCookieName) : null;
		auth.value = { isAuthenticated: !!sessionValue?.length };
	}

	// if (!auth.value.isAuthenticated) {
	// 	return navigateTo('/login', { replace: true });
	// }
});
