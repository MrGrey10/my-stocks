export default defineNuxtRouteMiddleware(() => {
	const config = useRuntimeConfig();
	const sessionCookieName = config.public.sessionCookieName as string;

	const sessionCookie = useCookie(sessionCookieName);

	const auth = useState<{ isAuthenticated: boolean }>('auth', () => ({
		isAuthenticated: !!sessionCookie.value,
	}));

	auth.value = { isAuthenticated: !!sessionCookie.value };

	if (!auth.value.isAuthenticated) {
		return navigateTo('/login', { replace: true });
	}
});
