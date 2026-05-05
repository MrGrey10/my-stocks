// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	ssr: false,
	devtools: { enabled: true },
	modules: ['@nuxt/ui', '@pinia/nuxt'],
	colorMode: {
		preference: 'light',
		forced: true,
		storageKey: 'color-mode',
	},
	app: {
		head: {
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap' },
			],
		},
	},
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
