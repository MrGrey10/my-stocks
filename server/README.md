## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker

### Development (тільки БД і Redis)

Запускає PostgreSQL та Redis локально. NestJS запускається окремо через `npm run start:dev`.

```bash
# Запустити контейнери
docker compose up -d

# Зупинити контейнери
docker compose down

# Зупинити і видалити volumes (дані БД)
docker compose down -v
```

### Production (повний стек)

Запускає NestJS + PostgreSQL + Redis + Nginx.

```bash
# Збудувати і запустити
docker compose -f docker-compose.prod.yml --env-file .env.production up -d --build

# Переглянути логи
docker compose -f docker-compose.prod.yml logs -f

# Зупинити
docker compose -f docker-compose.prod.yml down
```

> Перед запуском production переконайся що файл `.env.production` заповнений.

### Корисні команди

```bash
# Статус контейнерів
docker compose ps

# Логи конкретного сервісу
docker compose logs -f nestjs

# Зайти в контейнер
docker exec -it nestjs sh

# Зайти в PostgreSQL
docker exec -it db psql -U root -d full-authorization
```

## Database (Prisma)

Schema is located at `prisma/schema.prisma`. It defines three models: `User`, `Session`, and `Token`.

### Apply migrations (create/update tables)

```bash
npx prisma migrate dev --name <migration-name>
```

Run this after any change to `schema.prisma`. It creates a migration file and applies it to the database.

### Push schema without a migration file

```bash
npx prisma db push
```

Useful for quick prototyping — syncs the schema directly without creating migration history.

### Regenerate Prisma client

```bash
npx prisma generate
```

Run this if you changed the schema but don't want to run a migration yet (e.g. after pulling changes).

### Open Prisma Studio

```bash
npx prisma studio
``
```
