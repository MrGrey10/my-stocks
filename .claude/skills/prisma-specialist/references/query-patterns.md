# Prisma Query Patterns

## Read Operations

```typescript
// Find one (returns null if not found)
const user = await prisma.user.findUnique({ where: { id } });
const user = await prisma.user.findUnique({ where: { email } });

// Find one or throw NotFoundException
const user = await prisma.user.findUniqueOrThrow({ where: { id } });

// Find many with filters
const portfolios = await prisma.portfolio.findMany({
  where: { userId },
  select: { id: true, name: true, createdAt: true },
  orderBy: { createdAt: 'desc' },
  take: 20,
  skip: (page - 1) * 20,
});

// Count
const total = await prisma.portfolio.count({ where: { userId } });

// Include relations
const portfolio = await prisma.portfolio.findUnique({
  where: { id },
  include: {
    positions: {
      select: { id: true, ticker: true, shares: true },
      orderBy: { ticker: 'asc' },
    },
  },
});
```

## Write Operations

```typescript
// Create
const user = await prisma.user.create({
  data: {
    email,
    password: hashedPassword,
    name,
    authMethod: 'EMAIL',
  },
  select: { id: true, email: true, name: true },
});

// Update
const user = await prisma.user.update({
  where: { id: userId },
  data: { verified: true },
  select: { id: true, email: true, verified: true },
});

// Upsert (create or update)
const token = await prisma.token.upsert({
  where: { token: existingToken },
  update: { expiresIn: newExpiry },
  create: { email, type, token: newToken, expiresIn: expiry },
});

// Delete
await prisma.token.delete({ where: { id: tokenId } });
await prisma.token.deleteMany({ where: { email, type } });

// Create with nested relation
const portfolio = await prisma.portfolio.create({
  data: {
    name,
    userId,
    positions: {
      create: [{ ticker: 'AAPL', shares: 10 }],
    },
  },
});
```

## Transactions

```typescript
// Sequential transaction (each step uses previous result)
const result = await prisma.$transaction(async (tx) => {
  const portfolio = await tx.portfolio.create({ data: { name, userId } });
  const position = await tx.position.create({
    data: { portfolioId: portfolio.id, ticker, shares },
  });
  return { portfolio, position };
});

// Batch transaction (all or nothing)
const [deleted, created] = await prisma.$transaction([
  prisma.token.deleteMany({ where: { email, type } }),
  prisma.token.create({ data: { email, type, token, expiresIn } }),
]);
```

## Pagination Pattern

```typescript
async function paginate<T>(
  model: { findMany: Function; count: Function },
  where: object,
  page: number,
  limit: number,
): Promise<{ data: T[]; total: number; pages: number }> {
  const [data, total] = await prisma.$transaction([
    model.findMany({ where, skip: (page - 1) * limit, take: limit }),
    model.count({ where }),
  ]);
  return { data, total, pages: Math.ceil(total / limit) };
}
```

## Security: Never Return Passwords

```typescript
// BAD — exposes password hash
const user = await prisma.user.findUnique({ where: { id } });

// GOOD — use select to exclude password
const user = await prisma.user.findUnique({
  where: { id },
  select: {
    id: true, email: true, name: true,
    role: true, verified: true, picture: true,
  },
});
```
