// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	ssr: false,
	devtools: { enabled: true },
	modules: ['@nuxt/ui', '@pinia/nuxt'],
	build: {
		transpile: ['vue'],
	},
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASE,
			sessionCookieName:
				process.env.NUXT_PUBLIC_SESSION_COOKIE_NAME || 'session',
		},
	},
});
