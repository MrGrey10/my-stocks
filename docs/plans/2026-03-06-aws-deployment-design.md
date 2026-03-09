# AWS Deployment Design — Fullstack Auth App

**Date:** 2026-03-06
**Status:** Approved

## Overview

Deploy a NestJS API server and Nuxt 3 static SPA to AWS using a single EC2 instance for the backend and S3 + CloudFront for the frontend. CI/CD via GitHub Actions on push to `main`.

---

## Stack

- **Server:** NestJS + PostgreSQL + Redis (Docker Compose on EC2)
- **Client:** Nuxt 3 static SPA (S3 + CloudFront)
- **Monorepo:** pnpm workspace with shared `@auth/types` package
- **CI/CD:** GitHub Actions (SSH-based deploy)

---

## Architecture

```
GitHub Repo (main branch)
    │
    ├── GitHub Actions
    │       ├── Server job  → SSH → EC2 → git pull → docker compose up
    │       └── Client job  → nuxt generate → s3 sync → CloudFront invalidation
    │
    ├── EC2 (t3.small, Amazon Linux 2023)
    │       ├── Nginx (port 80, reverse proxy)
    │       ├── NestJS API (Docker, internal port 3001)
    │       ├── PostgreSQL (Docker, internal network only)
    │       └── Redis (Docker, internal network only)
    │
    └── S3 (private) + CloudFront
            └── Nuxt SPA static files (HTTPS via ACM)
```

---

## AWS Infrastructure

### EC2

| Property | Value |
|----------|-------|
| Instance type | t3.small |
| OS | Amazon Linux 2023 |
| Storage | 20GB gp3 EBS |
| SSH access | Your IP only (port 22) |
| HTTP access | Port 80 open (API) |

- Docker + Docker Compose installed on instance
- App code cloned to `/app/fullstack-auth`
- `.env` file placed manually on EC2 (not in git)
- Nginx proxies `/api` to NestJS container

### S3 + CloudFront

- S3 bucket: private, CloudFront Origin Access Control (OAC)
- CloudFront: HTTPS via ACM free certificate, HTTP → HTTPS redirect
- Cache invalidation (`/*`) triggered on every client deploy

### IAM (GitHub Actions user)

Minimal permissions:
- `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` — scoped to specific bucket
- `cloudfront:CreateInvalidation` — scoped to specific distribution

---

## CI/CD Pipeline

### Trigger
Push to `main` branch.

### Job 1: Deploy Server

```
1. SSH into EC2
2. cd /app/fullstack-auth
3. git pull origin main
4. docker compose build --no-cache
5. docker compose up -d
6. docker exec nestjs npx prisma migrate deploy
```

### Job 2: Deploy Client

```
1. Checkout code
2. pnpm install
3. Set NUXT_PUBLIC_API_BASE=http://<EC2-public-dns>/api
4. nuxt generate → .output/public
5. aws s3 sync .output/public s3://<bucket> --delete
6. aws cloudfront create-invalidation --paths "/*"
```

### GitHub Secrets

| Secret | Description |
|--------|-------------|
| `EC2_HOST` | EC2 public DNS |
| `EC2_SSH_KEY` | Private key PEM |
| `EC2_USER` | `ec2-user` |
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key |
| `AWS_S3_BUCKET` | S3 bucket name |
| `AWS_CLOUDFRONT_ID` | CloudFront distribution ID |
| `AWS_REGION` | e.g. `us-east-1` |

---

## Notes

- No domain configured yet — EC2 public DNS used for API base URL
- Domain + Route 53 + Let's Encrypt can be added later without redesign
- PostgreSQL and Redis ports are NOT exposed publicly (internal Docker network only)
- Prisma migrations run automatically on each server deploy
