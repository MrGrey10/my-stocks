# TypeScript & Code Style

## TypeScript Strict Mode

- All files must use TypeScript with strict mode enabled (`"strict": true` in tsconfig)
- Full type annotations required for function parameters and return types
- No `any` types — use `unknown`, generics, or proper interfaces/types
- Use `===` for all comparisons (never `==`)
- Prefer `const` over `let`, never `var`
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Leverage TypeScript 5.x features: decorators, `satisfies`, template literal types

## NestJS Backend Conventions

- Every class decorator required: `@Injectable()`, `@Controller()`, `@Module()`
- Feature modules: `auth/`, `user/`, `portfolio/`, `stock/` etc.
- Use `class-validator` + `class-transformer` for all DTO validation
- DTOs in dedicated `dto/` folder per module, suffixed: `CreateUserDto`, `UpdateUserDto`
- Services contain ALL business logic — controllers only handle HTTP request/response
- Use `ConfigService` for env variables — **never `process.env` directly** in app code
- Guards handle auth/authz: `@UseGuards(AuthGuard)`, `@UseGuards(RolesGuard)`
- Interceptors for cross-cutting concerns (response transform, logging)
- Exception filters for error handling

## Nuxt / Vue Frontend Conventions

- `<script setup lang="ts">` in all Vue components — TypeScript everywhere
- Composition API only — no Options API
- Typed props: `defineProps<{ title: string; count?: number }>()`
- Typed emits: `defineEmits<{ submit: [data: FormData]; close: [] }>()`
- Composables in `app/composables/` with `use` prefix: `useAuth`, `useFetch`
- Pages in `app/pages/` following Nuxt file-based routing conventions
- Components in `app/components/` with PascalCase naming
- API calls via `$fetch` with `runtimeConfig.public.apiBase` as base
- Use `@nuxt/ui` components (UButton, UInput, UModal, etc.) over custom HTML

## Prisma ORM Conventions

- All DB changes go through Prisma migrations (`prisma migrate dev --name <name>`)
- Schema uses `camelCase` field names, `@map("snake_case")` for DB columns
- Tables mapped with `@@map("snake_case_table_name")`
- Use `uuid` primary keys: `@id @default(uuid())`
- Include `createdAt` and `updatedAt` on every model
- Never use `prisma.$queryRaw` unless absolutely necessary — use Prisma query API

## Code Quality Tools

| Tool | Purpose | Config |
|------|---------|--------|
| TypeScript | Static type checking | `strict: true` |
| ESLint | Linting | `@typescript-eslint` + NestJS rules |
| Prettier | Code formatting | Consistent across all files |

## Naming Conventions

- **Backend files**: `kebab-case.ts` (e.g., `auth.service.ts`, `create-user.dto.ts`)
- **Frontend files**: `PascalCase.vue` (components), `kebab-case.vue` (pages)
- **Classes/Decorators**: `PascalCase`
- **Interfaces/Types**: `PascalCase` (no `I` prefix)
- **Variables/Functions**: `camelCase`
- **Enums**: `PascalCase` for name, `SCREAMING_SNAKE_CASE` for values
- **Constants**: `SCREAMING_SNAKE_CASE`
- **DTOs**: `{Action}{Entity}Dto` — `CreateUserDto`, `LoginDto`, `UpdateProfileDto`
