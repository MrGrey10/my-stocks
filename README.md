# mystocks

Monorepo for a fullstack authentication system built with Turborepo and pnpm workspaces.

## Apps & Packages

| Package           | Path                | Tech                      | Port |
| ----------------- | ------------------- | ------------------------- | ---- |
| `@auth/auth`      | `client/auth/`      | Nuxt 4 + Nuxt UI          | 3000 |
| `@auth/dashboard` | `client/dashboard/` | Next.js 15 + React 19     | 3001 |
| `@auth/api`       | `server/`           | NestJS                    | 3002 |
| `@auth/types`     | `packages/types/`   | TypeScript (shared types) | —    |

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) >= 10

```bash
npm install -g pnpm@10
```

---

## Installation

Install all dependencies from the root:

```bash
pnpm install
```

This installs dependencies for all workspaces and links `@auth/types` into the apps that depend on it.

---

## Development

### Run everything

Start all apps in parallel:

```bash
pnpm dev
```

### Run individual apps

```bash
# Auth app (Nuxt 4) — http://localhost:3000
pnpm --filter @auth/auth dev

# Dashboard (Next.js 15) — http://localhost:3001
pnpm --filter @auth/dashboard dev

# API (NestJS) — http://localhost:3002
pnpm --filter @auth/api dev
```

### Environment variables

Each app reads its own `.env` file. Copy the examples and fill in the values:

```bash
cp server/.env.example server/.env
cp client/auth/.env.example client/auth/.env
cp client/dashboard/.env.example client/dashboard/.env
```

---

## Production

### Build everything

Build all packages in the correct dependency order (`@auth/types` → apps):

```bash
pnpm build
```

### Build individual apps

```bash
# Auth app
pnpm --filter @auth/auth build

# Dashboard
pnpm --filter @auth/dashboard build

# API
pnpm --filter @auth/api build
```

### Start in production

```bash
# Auth app (Nuxt SSR)
pnpm --filter @auth/auth preview

# API (NestJS)
pnpm --filter @auth/api start:prod
```

> The Next.js dashboard is served by `next start` after build. Use a process manager (PM2, Docker) or deploy to a hosting platform.

---

## Project Structure

```
fullstack-auth/
├── client/
│   ├── auth/             # Nuxt 4 — auth pages (/login, /register, etc.)
│   └── dashboard/        # Next.js 15 — dashboard (/dashboard/*)
├── server/               # NestJS — REST API
├── packages/
│   └── types/            # Shared TypeScript interfaces
├── package.json          # Root scripts (delegates to turbo)
├── pnpm-workspace.yaml
└── turbo.json
```

## Routing

Both client apps share the same domain, split by path prefix:

| Path                                                                          | App                         |
| ----------------------------------------------------------------------------- | --------------------------- |
| `/login`, `/register`, `/verify-email`, `/forgot-password`, `/reset-password` | `@auth/auth` (Nuxt)         |
| `/dashboard/*`                                                                | `@auth/dashboard` (Next.js) |

A reverse proxy (Nginx or similar) routes requests to the correct app in production.

---

## Useful Commands

```bash
# Lint all packages
pnpm lint

# Format all packages
pnpm format

# Run a command in a specific package
pnpm --filter <package-name> <script>

# Show workspace dependency graph
pnpm exec turbo run build --dry
```

# EC2

# Connect

ssh -i ~/.ssh/mystocks.pem ubuntu@ec2-54-221-161-252.compute-1.amazonaws.com

# Copy from local terminal

scp -i ~/.ssh/mystocks.pem .env.production ubuntu@ec2-54-221-161-252.compute-1.amazonaws.com:/app/mystocks/server

# PRISMA

npx prisma studio
