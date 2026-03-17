import type { UserProfile } from '~/types'

export const useUserStore = defineStore('user', () => {
  // useRuntimeConfig() called synchronously at setup time — before any await
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase

  const profile = ref<UserProfile | null>(null)

  async function fetchProfile() {
    if (profile.value) return  // idempotent: no-op if already loaded

    const raw = await $fetch<any>(`${baseURL}/users/profile`, {
      credentials: 'include',
    })

    // Explicit field mapping — the API may return extra fields in future.
    // $fetch<any> is intentional to avoid importing server-side Prisma types.
    profile.value = {
      id: raw.id,
      name: raw.name,
      email: raw.email,
      picture: raw.picture ?? null,
      role: raw.role,
      verified: raw.verified,
      twoFactorEnabled: raw.twoFactorEnabled,
      authMethod: raw.authMethod,
    }
  }

  function clearProfile() {
    profile.value = null
  }

  return { profile, fetchProfile, clearProfile }
})
