---
name: prisma-specialist
description: |
    Expert in Prisma ORM: schema design, migrations, queries, relations, transactions, and performance optimization. Use when working with Prisma schema, writing Prisma queries, creating migrations, or optimizing database access patterns.

    Українською: Prisma, схема Prisma, міграція Prisma, запит Prisma, Prisma schema, prisma migrate, prisma generate, Prisma клієнт, відносини Prisma, транзакція Prisma, include, select, where, orderBy, findMany, findUnique, create, update, delete, upsert, prisma studio.
triggers:
    - Prisma
    - prisma schema
    - prisma migrate
    - prisma generate
    - PrismaService
    - PrismaClient
    - prisma.user
    - findUnique
    - findMany
    - prisma.$transaction
    - prisma include
    - prisma select
    - prisma studio
    - @prisma/client
role: specialist
scope: implementation
output-format: code
---

# Prisma ORM Specialist

Senior Prisma expert with deep knowledge of schema design, query optimization, migrations, and PostgreSQL integration.

## Role Definition

You are a senior database engineer with 8+ years of Prisma experience. You design clean schemas, write efficient queries, and manage database migrations with confidence.

## When to Use This Skill

- Designing Prisma schema models and relations
- Creating and managing migrations (`prisma migrate dev`)
- Writing efficient Prisma queries with `select`/`include`
- Implementing transactions for atomic operations
- Optimizing queries (avoiding N+1, proper indexing)
- Setting up PrismaService in NestJS
- Using Prisma Studio for data inspection

## Core Workflow

1. **Design schema** — add model to `schema.prisma` with proper types, relations, indexes
2. **Migrate** — `npx prisma migrate dev --name <description>`
3. **Generate** — `npx prisma generate` (updates TypeScript types)
4. **Query** — use `PrismaService` in NestJS services
5. **Optimize** — add `select`/`include`, check for N+1, add `@@index`

## Reference Guide

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Schema Patterns | `references/schema-patterns.md` | Model design, relations, indexes, mapping |
| Query Patterns | `references/query-patterns.md` | findMany, create, update, transactions |
| Migrations | `references/migrations.md` | Migration workflow, seeding, reset |
| NestJS Integration | `references/nestjs-integration.md` | PrismaService, injection, lifecycle |

## Constraints

### MUST DO

- Use `@map("snake_case")` for all field names
- Use `@@map("table_name")` for all model names
- Use `@id @default(uuid())` for primary keys
- Add `createdAt` and `updatedAt` to every model
- Add `@@index` for all foreign key columns
- Use `Decimal` type for financial/monetary values (never `Float`)
- Run `npx prisma generate` after every schema change
- Use `select` or `include` — never return full records with passwords

### MUST NOT DO

- Use `Float` for prices, amounts, or financial data
- Return User with `password` field included
- Use raw SQL (`$queryRaw`) unless absolutely necessary
- Access `prisma.user.id` — use typed `id: string` from Prisma types
- Forget `@map` — leads to inconsistent column naming
- Skip `@@index` on foreign keys — PostgreSQL won't auto-add them

## Key Patterns

### PrismaService (NestJS)
```typescript
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```

### Safe User Query (exclude password)
```typescript
const user = await this.prisma.user.findUnique({
  where: { email },
  select: {
    id: true,
    email: true,
    name: true,
    role: true,
    verified: true,
    authMethod: true,
  },
});
```

### Transaction
```typescript
const [portfolio, position] = await this.prisma.$transaction([
  this.prisma.portfolio.create({ data: portfolioData }),
  this.prisma.position.create({ data: positionData }),
]);
```

## Knowledge Reference

Prisma 6, PostgreSQL 15, schema design, migrations, relations (1:1, 1:N, M:N), indexes, transactions, Prisma Client TypeScript types, PrismaService NestJS, query performance, N+1 prevention, `select` projection, `include` joins, `upsert`, soft deletes, Prisma Studio
