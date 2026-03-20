# Testing Rules

## Backend: Jest (NestJS)

### Test Structure

```
server/src/
├── auth/
│   ├── auth.service.spec.ts       # Unit test for AuthService
│   └── auth.controller.spec.ts    # Unit test for AuthController
├── user/
│   └── user.service.spec.ts
└── test/
    └── app.e2e-spec.ts            # E2E test
```

### Running Tests

```bash
cd server

# Run all unit tests
pnpm test

# Run with coverage report
pnpm test:cov

# Run in watch mode (development)
pnpm test:watch

# Run E2E tests
pnpm test:e2e

# Run specific test file
pnpm test -- auth.service.spec.ts

# Run with filter
pnpm test -- --testNamePattern="should hash password"
```

### NestJS Test Pattern (Jest)

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../libs/prisma/prisma.service';

describe('AuthService', () => {
  let service: AuthService;
  let prismaService: jest.Mocked<PrismaService>;

  const mockPrismaService = {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prismaService = module.get(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('should throw if email already exists', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue({ id: '1' } as any);

      await expect(service.register({ email: 'test@test.com', password: '123' }))
        .rejects.toThrow();
    });
  });
});
```

### What to Test

- Service business logic (happy path + edge cases)
- Controller route handlers (request/response mapping)
- Guard authentication logic
- DTO validation rules (custom validators)
- Custom decorators and interceptors

### What NOT to Test

- Prisma client internals (mock PrismaService)
- Express/NestJS framework behavior
- Third-party library implementations (argon2, passport)
- Simple DTOs with only `class-validator` decorators (no custom logic)

## Frontend: Vitest (if configured)

Use Vitest with `@nuxt/test-utils` for frontend unit testing when needed.

```bash
cd client
pnpm test
```

## E2E Testing: Playwright MCP

All E2E and browser automation uses the `qa` agent with **Playwright MCP tools**.

### E2E Test Commands (when Playwright is configured)

```bash
cd server
pnpm test:e2e
```

## Testing Philosophy

- **Unit tests first**: Test services in isolation with mocked dependencies
- **No redundant tests**: Don't test NestJS DI container wiring
- **Meaningful assertions**: Test behavior, not implementation details
- **Mock boundaries**: Mock Prisma, Redis, external services — test business logic
- **Descriptive names**: `describe('AuthService > register')`, `it('should reject duplicate email')`
