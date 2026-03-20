# NestJS Testing

## Unit Testing with TestingModule

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';

describe('AuthService', () => {
  let service: AuthService;

  const mockPrisma = {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    token: {
      create: jest.fn(),
      findFirst: jest.fn(),
      deleteMany: jest.fn(),
    },
  };

  const mockConfig = {
    get: jest.fn().mockImplementation((key: string) => ({
      SESSION_SECRET: 'test-secret',
      FRONTEND_URL: 'http://localhost:3000',
    }[key])),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: ConfigService, useValue: mockConfig },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jest.clearAllMocks();
  });
});
```

## E2E Testing with Supertest

```typescript
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/auth/register (POST) 201', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({ email: 'test@test.com', password: 'pass1234', name: 'Test' })
      .expect(201)
      .expect(res => {
        expect(res.body).toHaveProperty('id');
        expect(res.body.email).toBe('test@test.com');
      });
  });

  it('/auth/register (POST) 409 on duplicate', async () => {
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({ email: 'dup@test.com', password: 'pass1234', name: 'Test' });

    return request(app.getHttpServer())
      .post('/auth/register')
      .send({ email: 'dup@test.com', password: 'pass1234', name: 'Test' })
      .expect(409);
  });
});
```

## Mocking Strategies

```typescript
// Mock the entire Prisma service
const mockPrismaService = {
  user: { findUnique: jest.fn(), create: jest.fn() },
};

// Mock only specific methods with spy
jest.spyOn(service, 'hashPassword').mockResolvedValue('hashed');

// Mock argon2
jest.mock('argon2', () => ({
  hash: jest.fn().mockResolvedValue('$argon2id$...'),
  verify: jest.fn().mockResolvedValue(true),
}));
```
