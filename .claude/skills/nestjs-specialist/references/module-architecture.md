# NestJS Module Architecture

## Module Anatomy

```typescript
@Module({
  imports: [    // Other modules this module needs
    PrismaModule,
    ConfigModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    // Custom providers:
    { provide: 'CUSTOM_TOKEN', useValue: 'some-value' },
    { provide: UserRepository, useClass: UserRepositoryImpl },
  ],
  exports: [UserService],  // What other modules can inject
})
export class UserModule {}
```

## Module Types

### Feature Module (most common)
```typescript
@Module({
  imports: [PrismaModule],
  controllers: [PortfolioController],
  providers: [PortfolioService],
  exports: [PortfolioService],
})
export class PortfolioModule {}
```

### Global Infrastructure Module
```typescript
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

### Dynamic Module with Config
```typescript
@Module({})
export class RedisModule {
  static forRootAsync(options: RedisModuleOptions): DynamicModule {
    return {
      module: RedisModule,
      providers: [
        {
          provide: 'REDIS_CLIENT',
          useFactory: (config: ConfigService) =>
            new Redis(config.get('REDIS_URL')),
          inject: [ConfigService],
        },
      ],
      exports: ['REDIS_CLIENT'],
    };
  }
}
```

## Module Organization Pattern (This Project)

```
src/
├── app.module.ts              # Root: imports all feature modules
├── auth/auth.module.ts        # Feature: auth logic
├── user/user.module.ts        # Feature: user management
├── portfolio/portfolio.module.ts   # Feature: portfolio (future)
└── libs/
    ├── prisma/prisma.module.ts     # @Global() — PrismaService
    └── redis/redis.module.ts       # @Global() — RedisService
```

## Circular Dependency Resolution

```typescript
// If ModuleA needs ModuleB and ModuleB needs ModuleA:
@Module({
  imports: [forwardRef(() => ModuleB)],
})
export class ModuleA {}
```
