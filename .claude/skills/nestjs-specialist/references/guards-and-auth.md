# NestJS Guards & Authentication

## Session-Based Auth (This Project)

This project uses `express-session` stored in Redis — NOT JWT.

### Auth Guard
```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return !!request.session?.userId;
  }
}
```

### Roles Guard
```typescript
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) return true;

    const request = context.switchToHttp().getRequest();
    const userRole = request.session?.userRole;
    return roles.includes(userRole);
  }
}

// Usage with decorator
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Get('admin')
@UseGuards(AuthGuard, RolesGuard)
@Roles('ADMIN')
getAdminData() { ... }
```

### Current User Decorator
```typescript
export const CurrentUserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();
    return request.session.userId;
  },
);

// Usage
@Get('profile')
@UseGuards(AuthGuard)
async getProfile(@CurrentUserId() userId: string) {
  return this.userService.findById(userId);
}
```

### Session Type Declaration
```typescript
// src/express-session.d.ts
declare module 'express-session' {
  interface SessionData {
    userId: string;
    userRole: string;
  }
}
```

## Session Configuration (main.ts)
```typescript
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: configService.get('SESSION_SECRET'),
    resave: false,
    saveUninitialized: false,
    name: configService.get('SESSION_NAME', 'session'),
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
  }),
);
```

## CORS Configuration (main.ts)
```typescript
app.enableCors({
  origin: configService.get('FRONTEND_URL'),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
});
```
