# Architecture Patterns

## Backend: NestJS Modular Architecture

### Module Organization

```
server/src/
├── app.module.ts              # Root module
├── auth/                      # Auth feature module
│   ├── auth.module.ts
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── dto/                   # LoginDto, RegisterDto, etc.
│   ├── guards/                # AuthGuard, etc.
│   └── strategies/            # Passport strategies (Google, etc.)
├── user/                      # User feature module
│   ├── user.module.ts
│   ├── user.controller.ts
│   ├── user.service.ts
│   └── dto/
├── libs/                      # Shared infrastructure
│   ├── prisma/                # PrismaService (extends PrismaClient)
│   └── redis/                 # Redis connection
└── main.ts                    # Bootstrap
```

### Key Architectural Rules

- **Controllers**: HTTP layer only — validate input (via DTO), call service, return response
- **Services**: All business logic lives here — inject PrismaService, other services
- **Modules**: Feature-based isolation — explicit `imports`, `providers`, `exports`
- **DTOs**: Input validation with `class-validator` decorators
- **Guards**: Authentication (`AuthGuard`) and authorization (`RolesGuard`) checks
- **PrismaService**: Injected into services — never instantiated directly

### Authentication Architecture

- Session-based auth via `express-session` stored in Redis
- Password hashing with `argon2` (not bcrypt)
- Google OAuth via Passport strategy
- Two-factor authentication (2FA) via `TwoFactorAuth` token type
- Token model for: email verification, password reset, 2FA codes
- Session model tracks active sessions with `accessToken` and `refreshToken`

### Database: Prisma ORM

```typescript
// Inject PrismaService
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
```

- Every schema change → `npx prisma migrate dev --name <description>`
- After schema changes → `npx prisma generate` to update client types
- Use `prisma.$transaction()` for atomic multi-step operations
- Relations in schema define the data model; always add indexes for FK columns

## Frontend: Nuxt 4 Architecture

### Module Organization

```
client/app/
├── pages/                 # File-based routing (Nuxt convention)
│   ├── index.vue          # → /
│   ├── auth/
│   │   ├── login.vue      # → /auth/login
│   │   └── register.vue   # → /auth/register
│   └── dashboard.vue      # → /dashboard
├── components/            # Reusable Vue components
│   ├── auth/              # Auth-specific components
│   └── ui/                # Custom UI wrappers (if needed)
├── composables/           # Shared composable logic
│   ├── useAuth.ts         # Auth state/actions
│   └── useApi.ts          # API request helper
├── stores/                # Pinia state stores
│   └── auth.store.ts      # Auth store
├── layouts/               # Page layouts
│   └── default.vue        # Default layout
└── middleware/            # Route middleware
    └── auth.ts            # Auth guard middleware
```

### Key Frontend Patterns

- **SPA mode**: `ssr: false` in `nuxt.config.ts` — fully client-rendered
- **API calls**: `$fetch(runtimeConfig.public.apiBase + '/endpoint')` for HTTP requests
- **Component library**: `@nuxt/ui` — use its components (`UButton`, `UInput`, `UModal`, etc.)
- **State management**: Pinia stores for global state (auth, notifications)
- **Route guards**: Nuxt middleware for protected routes
- **Type sharing**: Import shared types from `@auth/types` workspace package

### API Call Pattern

```typescript
// In composables/useApi.ts
const config = useRuntimeConfig()

async function post<T>(path: string, body: unknown): Promise<T> {
  return $fetch<T>(config.public.apiBase + path, {
    method: 'POST',
    body,
    credentials: 'include', // Send session cookie
  })
}
```

## Monorepo: pnpm Workspaces + Turborepo

- Shared types in `packages/` workspace (e.g., `@auth/types`)
- Backend and frontend both import shared types from workspace packages
- Turborepo orchestrates builds with caching (`turbo.json`)
- Run everything from root: `pnpm dev` starts all services

## Infrastructure

| Component | Details |
|-----------|---------|
| Database | PostgreSQL 15 (Docker, port 5433) |
| Cache/Sessions | Redis 7 (Docker, port 6379) |
| ORM | Prisma 6 |
| Session Storage | express-session + connect-redis |
| Backend Port | 4000 (NestJS) |
| Frontend Port | 3000 (Nuxt) |
