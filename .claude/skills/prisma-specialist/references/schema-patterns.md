# Prisma Schema Patterns

## Standard Model Template

```prisma
model Portfolio {
  id          String     @id @default(uuid())
  name        String
  description String?
  userId      String     @map("user_id")
  user        User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  positions   Position[]
  createdAt   DateTime   @default(now()) @map("created_at")
  updatedAt   DateTime   @updatedAt      @map("updated_at")

  @@index([userId])            // Always index FKs!
  @@index([userId, createdAt]) // Composite for common queries
  @@map("portfolios")
}
```

## Relation Types

### One-to-Many
```prisma
model User {
  id         String      @id @default(uuid())
  portfolios Portfolio[]
  @@map("users")
}

model Portfolio {
  userId String   @map("user_id")
  user   User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@index([userId])
  @@map("portfolios")
}
```

### Many-to-Many (explicit pivot)
```prisma
model Post {
  id   String      @id @default(uuid())
  tags PostTag[]
}

model Tag {
  id    String    @id @default(uuid())
  posts PostTag[]
}

model PostTag {
  postId String @map("post_id")
  tagId  String @map("tag_id")
  post   Post   @relation(fields: [postId], references: [id])
  tag    Tag    @relation(fields: [tagId], references: [id])

  @@id([postId, tagId])  // Composite PK instead of auto uuid
  @@map("post_tags")
}
```

### One-to-One
```prisma
model User {
  id      String   @id @default(uuid())
  profile Profile?
}

model Profile {
  id     String @id @default(uuid())
  userId String @unique @map("user_id")  // @unique enforces 1:1
  user   User   @relation(fields: [userId], references: [id])
  @@map("profiles")
}
```

## Data Types

| Use Case | Prisma Type | Notes |
|----------|-------------|-------|
| ID | `String @id @default(uuid())` | UUID primary key |
| Timestamps | `DateTime @default(now())` | With `@map` |
| Money/Price | `Decimal @db.Decimal(18, 4)` | NEVER use Float |
| Large Text | `String` | No size limit in Prisma |
| JSON | `Json` | PostgreSQL `jsonb` |
| Enum | `enum` + field | Prisma enum |
| Nullable | `String?` | Optional field |

## Indexes

```prisma
// Single index
@@index([userId])

// Composite index (most selective first)
@@index([userId, createdAt])

// Unique constraint
@@unique([portfolioId, ticker])

// Full-text search index (PostgreSQL)
// Requires raw migration
```

## Current Project Schema

```
User → Session (1:N)  — user sessions (OAuth + email)
User → Token (1:N)    — verification/reset/2FA tokens
```

Enums: `Role (ADMIN|USER)`, `AuthMethod (EMAIL|GOOGLE)`, `TokenType (VERIFICATION|PASSWORD_RESET|TWO_FACTOR)`
