<script setup lang="ts">
const route = useRoute();
const { logout } = useAuth();
const userStore = useUserStore();
const listStore = usePortfolioListStore();

onMounted(async () => {
	try {
		if (!userStore.profile) await userStore.fetchProfile();
		if (!listStore.portfolios.length) await listStore.fetchPortfolios();
	} catch {}
});

interface NavItem {
	id: string;
	label: string;
	icon: string;
	to: string | null;
	badge?: string;
}

const navItems: NavItem[] = [
	{ id: 'portfolios', label: 'Portfolios', icon: 'i-heroicons-briefcase', to: '/' },
	{ id: 'discover', label: 'Discover', icon: 'i-heroicons-magnifying-glass', to: '/stocks/search' },
	{ id: 'insights', label: 'Insights', icon: 'i-heroicons-sparkles', to: null, badge: 'soon' },
	{ id: 'analytics', label: 'Analytics', icon: 'i-heroicons-chart-pie', to: null, badge: 'soon' },
];

const bottomNav: NavItem[] = [
	{ id: 'settings', label: 'Settings', icon: 'i-heroicons-cog-6-tooth', to: '/profile' },
];

const activeNav = computed(() => {
	const path = route.path;
	if (path.startsWith('/stocks')) return 'discover';
	if (path === '/profile') return 'settings';
	return 'portfolios';
});

const initials = computed(() => {
	const name = userStore.profile?.name ?? '';
	return name.split(' ').filter(Boolean).map((n: string) => n[0]).join('').toUpperCase().slice(0, 2) || '?';
});

const portfolioColors = ['#e8823a', '#5478c8', '#4aac7a', '#9060d0', '#d05050', '#40a0b8', '#c09030'];

function portfolioColor(id: string): string {
	let h = 0;
	for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
	return portfolioColors[h % portfolioColors.length]!;
}
</script>

<template>
	<aside class="sidebar">
		<!-- Logo -->
		<div class="sidebar-logo">
			<div class="star-mark">
				<svg viewBox="0 0 24 24" width="17" height="17">
					<defs>
						<linearGradient id="star-gradient" x1="0" x2="0" y1="0" y2="1">
							<stop offset="0%" stop-color="oklch(0.78 0.18 60)" />
							<stop offset="100%" stop-color="oklch(0.65 0.19 45)" />
						</linearGradient>
					</defs>
					<path
						d="M12 2.5l2.92 5.92 6.54.95-4.73 4.61 1.12 6.51L12 17.42l-5.85 3.07 1.12-6.51L2.54 9.37l6.54-.95L12 2.5z"
						fill="url(#star-gradient)"
					/>
				</svg>
			</div>
			<span class="sidebar-brand">MyStocks</span>
		</div>

		<!-- Main nav -->
		<div class="nav-section">
			<div class="nav-label">Workspace</div>
			<nav class="nav-list">
				<template v-for="item in navItems" :key="item.id">
					<NuxtLink
						v-if="item.to"
						:to="item.to"
						class="nav-item"
						:class="{ 'nav-item--active': activeNav === item.id }"
					>
						<UIcon :name="item.icon" class="nav-icon" />
						<span class="nav-item-label">{{ item.label }}</span>
					</NuxtLink>
					<button
						v-else
						class="nav-item nav-item--disabled"
					>
						<UIcon :name="item.icon" class="nav-icon" />
						<span class="nav-item-label">{{ item.label }}</span>
						<span v-if="item.badge" class="nav-badge">{{ item.badge }}</span>
					</button>
				</template>
			</nav>
		</div>

		<!-- Portfolios mini list -->
		<div v-if="listStore.portfolios.length" class="sidebar-section">
			<div class="nav-label">Your Portfolios</div>
			<div class="portfolio-list">
				<NuxtLink
					v-for="p in listStore.portfolios.slice(0, 6)"
					:key="p.id"
					:to="`/portfolio/${p.id}`"
					class="portfolio-item"
				>
					<div class="portfolio-dot" :style="{ background: portfolioColor(p.id) }" />
					<span class="portfolio-name">{{ p.name }}</span>
				</NuxtLink>
			</div>
		</div>

		<div class="sidebar-spacer" />

		<!-- Bottom nav -->
		<nav class="nav-list" style="margin-bottom: 8px;">
			<NuxtLink
				v-for="item in bottomNav"
				:key="item.id"
				:to="item.to!"
				class="nav-item"
				:class="{ 'nav-item--active': activeNav === item.id }"
			>
				<UIcon :name="item.icon" class="nav-icon" />
				<span>{{ item.label }}</span>
			</NuxtLink>
		</nav>

		<!-- User card -->
		<button class="user-card" @click="logout()">
			<div class="user-avatar">{{ initials }}</div>
			<div class="user-info">
				<div class="user-name">{{ userStore.profile?.name || '—' }}</div>
				<div class="user-email">{{ userStore.profile?.email || '' }}</div>
			</div>
			<UIcon name="i-heroicons-arrow-right-on-rectangle" class="logout-icon" />
		</button>
	</aside>
</template>

<style scoped>
.sidebar {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	width: 232px;
	background: var(--bg-nav);
	border-right: 1px solid var(--line);
	padding: 16px 12px;
	display: flex;
	flex-direction: column;
	z-index: 20;
	overflow-y: auto;
}

.sidebar-logo {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 4px 8px 16px;
	flex-shrink: 0;
}

.star-mark {
	width: 32px;
	height: 32px;
	border-radius: 9px;
	background: oklch(0.18 0.012 60);
	display: grid;
	place-items: center;
	flex-shrink: 0;
	box-shadow: 0 1px 0 rgba(255,255,255,.04) inset, 0 0 0 1px oklch(0.22 0.012 60);
}

.sidebar-brand {
	font-size: 16px;
	font-weight: 600;
	letter-spacing: -0.01em;
	color: var(--ink);
}

.nav-section { margin-top: 8px; }

.nav-label {
	font-size: 10.5px;
	color: var(--ink-3);
	text-transform: uppercase;
	letter-spacing: 0.06em;
	font-weight: 600;
	padding: 8px 10px 4px;
}

.nav-list { display: grid; gap: 2px; }

.nav-item {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 9px 10px;
	border-radius: 8px;
	font-size: 13.5px;
	font-weight: 500;
	color: var(--ink-2);
	background: transparent;
	transition: background .15s, color .15s;
	text-decoration: none;
	width: 100%;
	text-align: left;
	border: none;
	font-family: inherit;
	cursor: pointer;
}

.nav-item:hover:not(.nav-item--disabled) { background: var(--bg-sunken); }

.nav-item--active {
	color: var(--ink);
	background: var(--bg-elev);
	box-shadow: var(--shadow-sm), 0 0 0 1px var(--line);
}

.nav-item--disabled { opacity: 0.55; cursor: default; }

.nav-icon {
	font-size: 18px;
	flex-shrink: 0;
	color: var(--ink-3);
}

.nav-item--active .nav-icon { color: var(--accent-deep); }
.nav-item-label { flex: 1; }

.nav-badge {
	font-size: 10px;
	font-weight: 600;
	padding: 1px 6px;
	border-radius: 4px;
	background: var(--bg-sunken);
	color: var(--ink-3);
	border: 1px solid var(--line);
	font-family: var(--font-mono);
}

.sidebar-section { margin-top: 20px; }

.portfolio-list { display: grid; gap: 2px; }

.portfolio-item {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 7px 10px;
	border-radius: 7px;
	font-size: 13px;
	color: var(--ink-2);
	text-decoration: none;
	transition: background .15s;
}

.portfolio-item:hover { background: var(--bg-sunken); }

.portfolio-dot { width: 8px; height: 8px; border-radius: 2px; flex-shrink: 0; }

.portfolio-name {
	flex: 1;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.sidebar-spacer { flex: 1; }

.user-card {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 8px;
	border-radius: 10px;
	background: var(--bg-elev);
	border: 1px solid var(--line);
	text-align: left;
	transition: background .15s;
	cursor: pointer;
	width: 100%;
	font-family: inherit;
}

.user-card:hover { background: var(--bg-sunken); }

.user-avatar {
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: linear-gradient(135deg, oklch(0.55 0.13 240), oklch(0.55 0.14 290));
	color: #fff;
	display: grid;
	place-items: center;
	font-weight: 600;
	font-size: 12px;
	flex-shrink: 0;
}

.user-info { flex: 1; min-width: 0; }

.user-name {
	font-size: 12.5px;
	font-weight: 600;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: var(--ink);
}

.user-email {
	font-size: 11px;
	color: var(--ink-3);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.logout-icon { color: var(--ink-3); font-size: 16px; flex-shrink: 0; }
</style>
