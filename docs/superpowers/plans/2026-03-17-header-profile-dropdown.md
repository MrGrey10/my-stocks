# Header Profile Dropdown Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the plain `<UAvatar />` in the header's `#right` slot with a `UDropdownMenu` containing Profile, Settings, and Logout items.

**Architecture:** Single file change to `header.vue` — add `profileMenuItems` computed, destructure `logout` from `useAuth()` at the top level, and wrap `UAvatar` in a `UDropdownMenu` trigger.

**Tech Stack:** Nuxt 3, @nuxt/ui v3 (Reka UI), Vue 3 Composition API

---

## Chunk 1: Implement the profile dropdown

**Spec:** `docs/superpowers/specs/2026-03-17-header-profile-dropdown-design.md`

### Task 1: Add profileMenuItems and logout to header.vue

**Files:**
- Modify: `client/app/components/header.vue`

- [ ] **Step 1: Open the file and locate the script setup block**

  Read `client/app/components/header.vue`. Confirm:
  - Line 4: `const route = useRoute();`
  - Line 8: `const items = computed<NavigationMenuItem[]>(...)` — note this name is taken; dropdown items will be `profileMenuItems`
  - Line 65: `useAuth()` called inside search callback — leave that untouched

- [ ] **Step 2: Destructure `logout` from `useAuth()` at the top of `<script setup>`**

  Add after `const isSearchOpen = ref(false);` (line 7):

  ```ts
  const { logout } = useAuth();
  ```

- [ ] **Step 3: Add the `profileMenuItems` computed**

  Add after the `logout` line:

  ```ts
  const profileMenuItems = computed(() => [
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
  ]);
  ```

- [ ] **Step 4: Replace `<UAvatar />` in the template**

  In the `<template #right>` slot, replace:

  ```vue
  <UAvatar />
  ```

  With:

  ```vue
  <UDropdownMenu :items="profileMenuItems" :content="{ align: 'end' }">
    <span class="cursor-pointer">
      <UAvatar />
    </span>
  </UDropdownMenu>
  ```

- [ ] **Step 5: Verify the result visually**

  Run the dev server:
  ```bash
  cd client && npm run dev
  ```
  Navigate to the app (requires being logged in — auth middleware guards `/`).
  - Click the avatar in the top-right corner
  - Confirm dropdown opens with: Profile, Settings (divider), Logout
  - Click Profile → navigates to `/profile`
  - Click Logout → navigates to `/login`
  - Confirm dropdown is right-aligned (does not overflow viewport edge)

- [ ] **Step 6: Commit**

  ```bash
  git add client/app/components/header.vue
  git commit -m "feat: add profile dropdown to header with profile, settings, and logout"
  ```
