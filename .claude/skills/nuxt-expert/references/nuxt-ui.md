# @nuxt/ui Component Reference

## Form Components

```vue
<UForm :schema="schema" :state="state" @submit="onSubmit">
  <UFormGroup label="Email" name="email" required>
    <UInput v-model="state.email" type="email" placeholder="you@example.com" />
  </UFormGroup>

  <UFormGroup label="Password" name="password" required>
    <UInput v-model="state.password" type="password" />
  </UFormGroup>

  <UButton type="submit" :loading="isLoading" block>
    Sign In
  </UButton>
</UForm>
```

## Common Components

```vue
<!-- Button -->
<UButton color="primary" variant="solid" size="md" :loading="isLoading" :disabled="disabled">
  Click me
</UButton>

<!-- Input -->
<UInput v-model="value" placeholder="Enter text" :error="errorMessage" />

<!-- Card -->
<UCard>
  <template #header>
    <h3 class="text-lg font-semibold">Card Title</h3>
  </template>
  Card content here
  <template #footer>
    <UButton>Action</UButton>
  </template>
</UCard>

<!-- Modal -->
<UModal v-model="isOpen">
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h3>Modal Title</h3>
        <UButton icon="i-heroicons-x-mark" color="gray" variant="ghost" @click="isOpen = false" />
      </div>
    </template>
    Modal content
  </UCard>
</UModal>

<!-- Table -->
<UTable :rows="data" :columns="columns" :loading="pending" />

<!-- Badge -->
<UBadge color="green" variant="soft">Active</UBadge>
<UBadge color="red" variant="soft">Inactive</UBadge>

<!-- Alert -->
<UAlert
  icon="i-heroicons-information-circle"
  color="blue"
  variant="soft"
  title="Info"
  description="Something happened"
/>

<!-- Skeleton -->
<USkeleton class="h-10 w-full rounded" />

<!-- Container -->
<UContainer class="py-8">
  <slot />
</UContainer>

<!-- Dropdown -->
<UDropdown :items="menuItems">
  <UButton icon="i-heroicons-ellipsis-vertical" color="gray" variant="ghost" />
</UDropdown>

<!-- Tabs -->
<UTabs :items="tabItems" v-model="selectedTab">
  <template #item="{ item }">
    <div>{{ item.content }}</div>
  </template>
</UTabs>
```

## Color Modes

App is configured with `preference: 'light'` and `forced: true` — always light mode.

## Icons

Use Heroicons: `i-heroicons-{icon-name}` — e.g., `i-heroicons-user`, `i-heroicons-trash`

```vue
<UButton icon="i-heroicons-plus" trailing-icon="i-heroicons-chevron-right">
  Add Item
</UButton>
```
