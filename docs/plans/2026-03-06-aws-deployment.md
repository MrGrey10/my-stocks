# AWS Deployment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Deploy NestJS API on EC2 (Docker Compose) and Nuxt 3 SPA on S3 + CloudFront with GitHub Actions CI/CD.

**Architecture:** EC2 t3.small runs NestJS + PostgreSQL + Redis via Docker Compose with Nginx as reverse proxy. Nuxt 3 is statically generated and served from S3 via CloudFront. GitHub Actions deploys server via SSH and client via AWS CLI on every push to `main`.

**Tech Stack:** AWS EC2, S3, CloudFront, IAM, Docker, Docker Compose, Nginx, GitHub Actions, NestJS, Nuxt 3, pnpm, Prisma.

---

## Prerequisites

- AWS account with console access
- GitHub repository with the monorepo code
- Local machine with AWS CLI installed (`aws configure` with admin credentials)
- SSH key pair (will be created in Task 1)

---

### Task 1: Create EC2 Key Pair and Launch Instance

**Files:**

- No code files — AWS Console + CLI steps

**Step 1: Create SSH key pair**

In AWS Console → EC2 → Key Pairs → Create key pair:

- Name: `mystocks`
- Type: RSA
- Format: `.pem`
- Download and save to `~/.ssh/mystocks.pem`

```bash
chmod 400 ~/.ssh/mystocks.pem
```

**Step 2: Create Security Group**

AWS Console → EC2 → Security Groups → Create:

- Name: `fullstack-auth-sg`
- Inbound rules:
  - SSH (22) — My IP
  - HTTP (80) — Anywhere (0.0.0.0/0)
- Outbound: All traffic

**Step 3: Launch EC2 instance**

AWS Console → EC2 → Launch Instance:

- Name: `fullstack-auth-server`
- AMI: Ubuntu Server 24.04 LTS
- Instance type: `t3.small`
- Key pair: `mystocks`
- Security group: `fullstack-auth-sg`
- Storage: 20 GiB gp3

**Step 4: Note the public DNS**

After launch, copy the Public IPv4 DNS from the instance details panel.
Format: `ec2-XX-XX-XX-XX.compute-1.amazonaws.com`

**Step 5: Verify SSH access**

```bash
ssh -i ~/.ssh/mystocks.pem ubuntu@<EC2_PUBLIC_DNS>
ssh -i ~/.ssh/mystocks.pem ubuntu@ec2-44-192-67-232.compute-1.amazonaws.com
```

Expected: You are connected to the EC2 instance shell.

**Step 6: Commit nothing — infrastructure only**

---

### Task 2: Install Docker and Clone Repo on EC2

**Files:**

- No code files — EC2 shell commands

**Step 1: SSH into EC2**

```bash
ssh -i ~/.ssh/mystocks.pem ubuntu@<EC2_PUBLIC_DNS>
ssh -i ~/.ssh/mystocks.pem ubuntu@ec2-44-192-67-232.compute-1.amazonaws.com
```

**Step 2: Install Docker**

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu
```

Log out and back in for group change to take effect:

```bash
exit
ssh -i ~/.ssh/mystocks.pem ubuntu@<EC2_PUBLIC_DNS>
ssh -i ~/.ssh/mystocks.pem ubuntu@ec2-44-192-67-232.compute-1.amazonaws.com
```

**Step 3: Verify Docker and Docker Compose**

```bash
docker --version
docker compose version
```

Expected: Both commands print version numbers (Docker Compose plugin is included with Docker CE).

**Step 4: Install Git and pnpm**

```bash
sudo apt install -y git
curl -fsSL https://get.pnpm.io/install.sh | sh -
source ~/.bashrc
pnpm --version
```

**Step 5: Clone the repository**

```bash
sudo mkdir -p /app
sudo chown ubuntu:ubuntu /app
cd /app
git clone https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git mystocks
cd mystocks
```

**Step 6: Verify directory structure**

```bash
ls
```

Expected: `server/  client/  docs/` (and other repo files)

---

### Task 3: Create Production Docker Compose File

**Files:**

- Create: `server/docker-compose.prod.yml`
- Create: `server/nginx/nginx.conf`

**Step 1: Create nginx config directory and file**

Create `server/nginx/nginx.conf`:

```nginx
events {
    worker_connections 1024;
}

http {
    upstream nestjs {
        server nestjs:3001;
    }

    server {
        listen 80;

        location /api/ {
            proxy_pass http://nestjs/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_cache_bypass $http_upgrade;
        }

        location /health {
            return 200 'ok';
            add_header Content-Type text/plain;
        }
    }
}
```

**Step 2: Create production docker-compose file**

Create `server/docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  db:
    container_name: db
    image: postgres:15.2
    restart: always
    environment:
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DB=${POSTGRES_DB}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - backend

  redis:
    container_name: redis
    image: redis:5.0
    restart: always
    command: redis-server --requirepass ${REDIS_PASSWORD}
    volumes:
      - redis_data:/data
    networks:
      - backend

  nestjs:
    container_name: nestjs
    build:
      context: .
      dockerfile: Dockerfile
    restart: always
    environment:
      - NODE_ENV=production
    env_file:
      - .env
    depends_on:
      - db
      - redis
    networks:
      - backend

  nginx:
    container_name: nginx
    image: nginx:alpine
    restart: always
    ports:
      - 80:80
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - nestjs
    networks:
      - backend

volumes:
  postgres_data:
  redis_data:

networks:
  backend:
```

**Step 3: Commit**

```bash
git add server/docker-compose.prod.yml server/nginx/nginx.conf
git commit -m "feat: add production docker compose and nginx config"
```

---

### Task 4: Create Server Dockerfile

**Files:**

- Create: `server/Dockerfile`

**Step 1: Create Dockerfile**

Create `server/Dockerfile`:

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

RUN npm install prisma --save-dev

EXPOSE 3001

CMD ["node", "dist/main"]
```

**Step 2: Verify build locally (optional)**

```bash
cd server
docker build -t fullstack-auth-server .
```

Expected: Image builds successfully.

**Step 3: Commit**

```bash
git add server/Dockerfile
git commit -m "feat: add server Dockerfile"
```

---

### Task 5: Create .env File on EC2

**Files:**

- No code files — EC2 shell only (never commit .env)

**Step 1: SSH into EC2**

```bash
ssh -i ~/.ssh/mystocks.pem ubuntu@<EC2_PUBLIC_DNS>
ssh -i ~/.ssh/mystocks.pem ubuntu@ec2-44-192-67-232.compute-1.amazonaws.com
```

**Step 2: Create .env in server directory**

```bash
cd /app/mystocks/server
nano .env
```

Paste the following (fill in real values):

```env
# Database
POSTGRES_USER=auth_user
POSTGRES_PASSWORD=<strong_password>
POSTGRES_DB=auth_db

# Redis
REDIS_PASSWORD=<strong_password>

# NestJS
NODE_ENV=production
PORT=3001
DATABASE_URL=postgresql://auth_user:<password>@db:5432/auth_db

# Session
SESSION_SECRET=<long_random_string>
SESSION_NAME=session

# App
ALLOWED_ORIGINS=<CLOUDFRONT_URL>
```

**Step 3: Do first manual deploy to verify**

```bash
cd /app/fullstack-auth/server
docker compose -f docker-compose.prod.yml up -d --build
```

**Step 4: Run Prisma migrations**

```bash
docker exec server-nestjs-1 npx prisma migrate deploy
```

**Step 5: Verify containers are running**

```bash
docker compose -f docker-compose.prod.yml ps
```

Expected: All 4 containers (db, redis, nestjs, nginx) show `running`.

**Step 6: Test API health**

```bash
curl http://localhost/health
```

Expected: `ok`

---

### Task 6: Create S3 Bucket and CloudFront Distribution

**Files:**

- No code files — AWS Console steps

**Step 1: Create S3 bucket**

AWS Console → S3 → Create bucket:

- Name: `fullstack-auth-client` (must be globally unique, add suffix if needed)
- Region: same as EC2 (e.g. `us-east-1`)
- Block all public access: ON (CloudFront uses OAC)

**Step 2: Create CloudFront Origin Access Control**

AWS Console → CloudFront → Origin Access → Create OAC:

- Name: `fullstack-auth-oac`
- Origin type: S3
- Signing behavior: Sign requests

**Step 3: Create CloudFront distribution**

AWS Console → CloudFront → Create distribution:

- Origin domain: select your S3 bucket
- Origin access: Origin Access Control → select `fullstack-auth-oac`
- Copy the S3 bucket policy when prompted and apply it to the bucket
- Viewer protocol policy: Redirect HTTP to HTTPS
- Default root object: `index.html`
- Error pages → Create custom error response:
  - HTTP error code: 403 → Response: `/index.html`, HTTP 200 (SPA routing)
  - HTTP error code: 404 → Response: `/index.html`, HTTP 200 (SPA routing)

**Step 4: Note the CloudFront domain**

After creation (takes ~5 min), copy the Distribution domain name:
`dXXXXXXXXXXXX.cloudfront.net`

**Step 5: Update .env on EC2**

```bash
ssh -i ~/.ssh/mystocks.pem ubuntu@<EC2_PUBLIC_DNS>
cd /app/fullstack-auth/server
nano .env
# Update ALLOWED_ORIGINS=https://dXXXXXXXXXXXX.cloudfront.net
```

Restart NestJS:

```bash
docker compose -f docker-compose.prod.yml restart nestjs
```

---

### Task 7: Create IAM User for GitHub Actions

**Files:**

- No code files — AWS Console + CLI steps

**Step 1: Create IAM policy**

AWS Console → IAM → Policies → Create policy → JSON:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:DeleteObject", "s3:ListBucket"],
      "Resource": ["arn:aws:s3:::fullstack-auth-client", "arn:aws:s3:::fullstack-auth-client/*"]
    },
    {
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::<ACCOUNT_ID>:distribution/<DISTRIBUTION_ID>"
    }
  ]
}
```

- Policy name: `fullstack-auth-github-actions`

**Step 2: Create IAM user**

AWS Console → IAM → Users → Create user:

- Username: `fullstack-auth-github-actions`
- Attach policy: `fullstack-auth-github-actions`

**Step 3: Create access key**

IAM → Users → `fullstack-auth-github-actions` → Security credentials → Create access key:

- Use case: Application running outside AWS
- Save `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`

---

### Task 8: Add GitHub Actions Secrets

**Files:**

- No code files — GitHub repository settings

**Step 1: Navigate to repo secrets**

GitHub → Repository → Settings → Secrets and variables → Actions → New repository secret

**Step 2: Add all secrets**

Add each of these:

| Name                    | Value                                                 |
| ----------------------- | ----------------------------------------------------- |
| `EC2_HOST`              | `ec2-XX-XX-XX-XX.compute-1.amazonaws.com`             |
| `EC2_SSH_KEY`           | Contents of `~/.ssh/mystocks.pem` (full file content) |
| `EC2_USER`              | `ubuntu`                                              |
| `AWS_ACCESS_KEY_ID`     | From Task 7                                           |
| `AWS_SECRET_ACCESS_KEY` | From Task 7                                           |
| `AWS_S3_BUCKET`         | `fullstack-auth-client`                               |
| `AWS_CLOUDFRONT_ID`     | CloudFront distribution ID (from Task 6)              |
| `AWS_REGION`            | `us-east-1` (or your region)                          |
| `EC2_PUBLIC_DNS`        | EC2 public DNS (also used as API base)                |

---

### Task 9: Create GitHub Actions Workflow — Server Deploy

**Files:**

- Create: `.github/workflows/deploy-server.yml`

**Step 1: Create the workflow file**

Create `.github/workflows/deploy-server.yml`:

```yaml
name: Deploy Server

on:
  push:
    branches: [main]
    paths:
      - 'server/**'
      - '.github/workflows/deploy-server.yml'

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Deploy to EC2 via SSH
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_SSH_KEY }}
          script: |
            cd /app/fullstack-auth
            git pull origin main
            cd server
            docker compose -f docker-compose.prod.yml build --no-cache
            docker compose -f docker-compose.prod.yml up -d
            docker exec nestjs npx prisma migrate deploy
            echo "Server deployed successfully"
```

**Step 2: Commit**

```bash
git add .github/workflows/deploy-server.yml
git commit -m "feat: add server deploy GitHub Actions workflow"
```

---

### Task 10: Create GitHub Actions Workflow — Client Deploy

**Files:**

- Create: `.github/workflows/deploy-client.yml`

**Step 1: Create the workflow file**

Create `.github/workflows/deploy-client.yml`:

```yaml
name: Deploy Client

on:
  push:
    branches: [main]
    paths:
      - 'client/**'
      - '.github/workflows/deploy-client.yml'

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: latest

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
          cache-dependency-path: client/auth/pnpm-lock.yaml

      - name: Install dependencies
        working-directory: client/auth
        run: pnpm install --frozen-lockfile

      - name: Build static site
        working-directory: client/auth
        env:
          NUXT_PUBLIC_API_BASE: http://${{ secrets.EC2_PUBLIC_DNS }}/api
        run: pnpm run generate

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Sync to S3
        run: |
          aws s3 sync client/auth/.output/public s3://${{ secrets.AWS_S3_BUCKET }} --delete

      - name: Invalidate CloudFront cache
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.AWS_CLOUDFRONT_ID }} \
            --paths "/*"
```

**Step 2: Commit**

```bash
git add .github/workflows/deploy-client.yml
git commit -m "feat: add client deploy GitHub Actions workflow"
```

---

### Task 11: Push and Verify Full Pipeline

**Step 1: Push all commits to main**

```bash
git push origin main
```

**Step 2: Monitor GitHub Actions**

GitHub → Repository → Actions tab

Expected: Both `Deploy Server` and `Deploy Client` workflows trigger and pass (green checkmark).

**Step 3: Verify server is running**

```bash
curl http://<EC2_PUBLIC_DNS>/health
```

Expected: `ok`

**Step 4: Verify client is live**

Open browser: `https://<CLOUDFRONT_DOMAIN>`

Expected: Nuxt app loads, login/register pages work.

**Step 5: Verify API calls from client**

Attempt login/register in the app.

Expected: Requests reach NestJS API successfully (check network tab — `/api/*` calls return expected responses).

**Step 6: Final commit (if any fixes needed)**

```bash
git add -A
git commit -m "fix: resolve deployment issues"
git push origin main
```

---

## Rollback Procedure

If a server deploy breaks the API:

```bash
ssh -i ~/.ssh/mystocks.pem ubuntu@<EC2_PUBLIC_DNS>
cd /app/fullstack-auth
git log --oneline -5          # find last good commit
git checkout <good-commit>
cd server
docker compose -f docker-compose.prod.yml up -d --build
```

If a client deploy breaks the SPA — re-run the previous successful `Deploy Client` workflow from GitHub Actions → Re-run jobs.
