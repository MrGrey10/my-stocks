<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();
const searchTerm = ref('');
const isSearchOpen = ref(false);
const { logout } = useAuth();

const userStore = useUserStore()

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

onMounted(async () => {
  try {
    await userStore.fetchProfile()
  } catch {
    // Non-critical: avatar falls back to default placeholder
  }
})

const profileMenuItems = [
	[
		{
			label: 'Profile',
			icon: 'i-heroicons-user',
			to: '/profile',
		},
		{
			label: 'Settings',
			icon: 'i-heroicons-cog-6-tooth',
			to: '/settings',
		},
	],
	[
		{
			label: 'Logout',
			icon: 'i-heroicons-arrow-right-on-rectangle',
			onSelect: async () => {
				await logout();
			},
		},
	],
];

const items = computed<NavigationMenuItem[]>(() => [
	{
		label: 'Docs',
		to: '/docs/getting-started',
		active: route.path.startsWith('/docs/getting-started'),
	},
	{
		label: 'Components',
		to: '/docs/components',
		active: route.path.startsWith('/docs/components'),
	},
	{
		label: 'Figma',
		to: 'https://go.nuxt.com/figma-ui',
		target: '_blank',
	},
	{
		label: 'Releases',
		to: 'https://github.com/nuxt/ui/releases',
		target: '_blank',
	},
]);

const groups = computed(() => [
	{
		id: 'pages',
		label: 'Pages',
		search: async (q: string) => {
			const pages = [
				{
					id: 'dashboard',
					label: 'Dashboard',
					to: '/dashboard',
					icon: 'i-heroicons-home',
				},
				{
					id: 'profile',
					label: 'Profile',
					to: '/profile',
					icon: 'i-heroicons-user',
				},
				{
					id: 'settings',
					label: 'Settings',
					to: '/settings',
					icon: 'i-heroicons-cog-6-tooth',
				},
			];
			return pages.filter((page) =>
				page.label.toLowerCase().includes(q.toLowerCase()),
			);
		},
	},
	{
		id: 'actions',
		label: 'Actions',
		search: async (q: string) => {
			const actions = [
				{
					id: 'logout',
					label: 'Logout',
					icon: 'i-heroicons-arrow-right-on-rectangle',
					click: async () => {
						await logout();
					},
				},
				{
					id: 'settings-action',
					label: 'Settings',
					icon: 'i-heroicons-cog-6-tooth',
					to: '/settings',
				},
			];
			return actions.filter((action) =>
				action.label.toLowerCase().includes(q.toLowerCase()),
			);
		},
	},
]);

const openSearch = () => {
	isSearchOpen.value = true;
};
</script>

<template>
	<UHeader>
		<template #title>
			<Logo text="MyStocks" class="h-6 w-auto" />
		</template>

		<UDashboardSearchButton @click="openSearch" class="w-[400px]" size="xl" />
		<UDashboardSearch
			v-model:open="isSearchOpen"
			v-model:search-term="searchTerm"
			shortcut="meta_k"
			:groups="groups"
			:fuse="{ resultLimit: 42 }"
		/>

		<template #right>
			<UDropdownMenu :items="profileMenuItems" :content="{ align: 'end' }">
				<span class="cursor-pointer">
					<UAvatar
                  :src="userStore.profile?.picture || undefined"
                  :text="userStore.profile?.name ? initials(userStore.profile.name) : undefined"
                  :alt="userStore.profile?.name"
                />
				</span>
			</UDropdownMenu>
		</template>
	</UHeader>
</template>
