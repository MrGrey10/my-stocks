FROM node:20-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY package.json ./
RUN pnpm install

COPY . .
RUN pnpm add -D prisma@6.4.1
RUN pnpm exec prisma generate
RUN pnpm run build

FROM node:20-alpine AS production

RUN npm install -g pnpm

WORKDIR /app

COPY package.json ./
RUN pnpm install --prod

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

RUN pnpm add prisma@6.4.1 --save-dev

EXPOSE 4000

CMD ["node", "dist/main"]
