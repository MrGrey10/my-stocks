# Nuxt 4 Data Fetching

## `useAsyncData` — Page-Level Data

Best for initial page data. Runs once, cached by key.

```vue
<script setup lang="ts">
const config = useRuntimeConfig()

// Basic usage
const { data, pending, error, refresh } = await useAsyncData('portfolios', () =>
  $fetch(`${config.public.apiBase}/portfolios`, { credentials: 'include' }),
)

// With typed response
interface Portfolio { id: string; name: string; createdAt: string }

const { data: portfolios } = await useAsyncData<Portfolio[]>('portfolios', () =>
  $fetch(`${config.public.apiBase}/portfolios`, { credentials: 'include' }),
)

// With params (re-fetches when params change)
const route = useRoute()
const { data: portfolio } = await useAsyncData(
  () => `portfolio-${route.params.id}`,
  () => $fetch(`${config.public.apiBase}/portfolios/${route.params.id}`, {
    credentials: 'include',
  }),
  { watch: [() => route.params.id] },
)
</script>
```

## `$fetch` — Mutations and Client Actions

Best for POST/PUT/DELETE, or data not needed on initial load.

```vue
<script setup lang="ts">
const config = useRuntimeConfig()
const { refresh } = await useAsyncData('portfolios', ...)

const form = reactive({ name: '' })
const isLoading = ref(false)
const error = ref<string | null>(null)

async function createPortfolio() {
  isLoading.value = true
  error.value = null
  try {
    await $fetch(`${config.public.apiBase}/portfolios`, {
      method: 'POST',
      body: form,
      credentials: 'include',
    })
    form.name = ''
    await refresh()  // Re-fetch list
  } catch (e: any) {
    error.value = e.data?.message ?? 'Something went wrong'
  } finally {
    isLoading.value = false
  }
}
</script>
```

## Error Handling

```typescript
// $fetch throws FetchError with .data, .status, .statusMessage
try {
  await $fetch('/api/protected', { credentials: 'include' })
} catch (error: any) {
  if (error.status === 401) navigateTo('/auth/login')
  if (error.status === 409) toast.error(error.data?.message)
}
```

## Using Composable (Recommended Pattern)

```typescript
// app/composables/useApi.ts
export function useApi() {
  const config = useRuntimeConfig()
  const base = config.public.apiBase

  async function request<T>(path: string, options: Parameters<typeof $fetch>[1] = {}): Promise<T> {
    return $fetch<T>(`${base}${path}`, {
      credentials: 'include',
      ...options,
    })
  }

  return {
    get: <T>(path: string) => request<T>(path),
    post: <T>(path: string, body: unknown) => request<T>(path, { method: 'POST', body }),
    patch: <T>(path: string, body: unknown) => request<T>(path, { method: 'PATCH', body }),
    delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
  }
}
```
