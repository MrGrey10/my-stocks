# Header Profile Dropdown — Design Spec

**Date:** 2026-03-17
**Status:** Approved

## Summary

Replace the plain `<UAvatar />` in `client/app/components/header.vue` with a `UDropdownMenu` that uses the avatar as its trigger. The dropdown provides navigation to Profile and Settings, plus a Logout action.

## Scope

Single file change: `client/app/components/header.vue`

## Dropdown Structure

Two item groups (rendered with a divider between them):

**Group 1 — Navigation**
- Profile → `/profile` (icon: `i-heroicons-user`)
- Settings → `/settings` (icon: `i-heroicons-cog-6-tooth`)

**Group 2 — Actions**
- Logout → calls `logout()` from `useAuth()` (icon: `i-heroicons-arrow-right-on-rectangle`)

## Implementation

- Use `UDropdownMenu` with the `items` prop (array of arrays — one sub-array per group)
- `UAvatar` placed in the default trigger slot of `UDropdownMenu`
- `logout` destructured from `useAuth()` in `<script setup>` (top-level, not inside a callback)
- No new files, no new composables

## Out of Scope

- Displaying user name/email in the dropdown header
- Avatar image / initials (left as default for now)
