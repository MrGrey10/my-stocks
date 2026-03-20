# Nuxt 4 Routing

## File-Based Routing

Files in `app/pages/` automatically become routes:

```
app/pages/
├── index.vue              → /
├── about.vue              → /about
├── auth/
│   ├── login.vue          → /auth/login
│   └── register.vue       → /auth/register
├── dashboard.vue          → /dashboard
└── portfolio/
    ├── index.vue          → /portfolio
    ├── [id].vue           → /portfolio/:id
    └── [id]/
        └── edit.vue       → /portfolio/:id/edit
```

## Dynamic Routes

```vue
<!-- app/pages/portfolio/[id].vue -->
<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string
</script>
```

## Page Meta

```vue
<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',       // Uses app/layouts/dashboard.vue
  middleware: 'auth',        // Runs app/middleware/auth.ts
  // middleware: ['auth', 'role-check'],  // Multiple middlewares
})
</script>
```

## Layouts

```
app/layouts/
├── default.vue     # Used when no layout specified
└── dashboard.vue   # Used with definePageMeta({ layout: 'dashboard' })
```

```vue
<!-- app/layouts/default.vue -->
<template>
  <div>
    <AppHeader />
    <main>
      <slot />   <!-- Page content renders here -->
    </main>
    <AppFooter />
  </div>
</template>
```

## Navigation

```vue
<template>
  <!-- Declarative -->
  <NuxtLink to="/dashboard">Dashboard</NuxtLink>
  <NuxtLink :to="{ name: 'portfolio-id', params: { id: '123' } }">Portfolio</NuxtLink>
</template>

<script setup lang="ts">
// Programmatic
await navigateTo('/dashboard')
await navigateTo('/auth/login', { replace: true })
</script>
```
