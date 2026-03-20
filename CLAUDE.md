# Claude Instructions (Index)

## Claude-Specific Behavior

- Use available Skills for code style, testing, architecture, DevOps
- If a Skill applies, prefer it over repeating rules here

## IMPORTANT

1. Before writing any code, describe your approach and wait for approval.
2. If requirements are ambiguous, ask clarifying questions before writing code.
3. After finishing code, list edge cases and suggest test cases.
4. If a task requires changes to more than 3 files, stop and break it into smaller tasks.
5. When there's a bug, start by writing a test that reproduces it, then fix it.
6. Every time I correct you, reflect on what went wrong and plan to prevent it.

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

## Task Management

1. **Plan First**: Write plan to `docs/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `docs/todo.md`
6. **Capture Lessons**: Update `docs/lessons.md` after corrections

## Agent Dispatch (MANDATORY)

- **ALWAYS** follow the agent pipeline defined in `.claude/rules/workflow.md`
- **ALWAYS** run independent pipeline steps in parallel (e.g., Security Scanner + QA + Tester can run simultaneously after Developer completes)
- **ALWAYS** autonomously determine which agents from `.claude/agents/` should execute each part of the user's task — do NOT ask the user which agent to use
- Available agents: `ba`, `developer`, `backend`, `frontend`, `tester`, `qa`, `reviewer`, `debugger`, `security-scanner`, `dba`, `ddd-architect`, `devops`, `ci-cd-engineer`, `docs-writer`
- For every non-trivial task: analyze → select agents → dispatch in parallel where possible → collect results → verify

## Rules (auto-loaded from `.claude/rules/`)

- `code-style.md` — TypeScript strict mode, NestJS/Nuxt conventions, code quality tools
- `architecture.md` — NestJS modules, Nuxt 4 pages, Prisma ORM, monorepo structure
- `testing.md` — Jest for backend, Vitest for frontend, test strategy
- `git-operations.md` — Commit/push rules, PR description format
- `workflow.md` — Agent pipeline: BA → Developer → Security → QA → Tester → DocsWriter

# AI Agent Guidelines

This file contains canonical development guidelines for ALL AI coding assistants
used in this repository (Copilot, Codex, Gemini, Claude, others).

If you are an AI agent:

- Read this file before suggesting code
- Follow these rules unless explicitly instructed otherwise

## Build/Configuration Instructions

### System Requirements

- **Node.js 20+**
- **pnpm 9+** (package manager)
- **PostgreSQL 15** (via Docker)
- **Redis 7** (via Docker)
- **Docker & Docker Compose** (for infrastructure services)

### Project Structure

```
my-stocks/                   # Monorepo root
├── server/                  # NestJS backend
│   ├── src/                 # Source code (modules)
│   ├── prisma/              # Prisma schema & migrations
│   └── docker-compose.yml   # PostgreSQL + Redis infrastructure
├── client/                  # Nuxt 4 frontend (SPA mode)
│   ├── app/                 # Pages, components, composables
│   └── nuxt.config.ts
├── packages/                # Shared packages (@auth/types)
├── pnpm-workspace.yaml
└── turbo.json
```

### Environment Setup

```bash
# Start infrastructure (PostgreSQL + Redis)
cd server && docker compose up -d

# Install all dependencies (from root)
pnpm install

# Setup backend environment
cp server/.env.example server/.env
# Edit server/.env with DB/Redis credentials

# Run Prisma migrations
cd server && npx prisma migrate dev

# Start all services (from root — Turborepo)
pnpm dev
```

### Development Scripts

**Root (Turborepo):**
- `pnpm dev` — Start all services (backend + frontend)
- `pnpm build` — Build all packages
- `pnpm lint` — Lint all packages

**Backend (`cd server`):**
- `pnpm dev` — Start NestJS in watch mode (port 4000)
- `pnpm build` — Build for production
- `pnpm test` — Run Jest unit tests
- `pnpm test:cov` — Tests with coverage
- `pnpm test:e2e` — E2E tests
- `pnpm lint` — ESLint check
- `pnpm format` — Prettier format

**Frontend (`cd client`):**
- `pnpm dev` — Start Nuxt dev server (port 3000)
- `pnpm build` — Build for production
- `pnpm format` — Prettier format

**Database (from `server/`):**
- `npx prisma migrate dev --name <name>` — Create + apply migration
- `npx prisma generate` — Regenerate Prisma client
- `npx prisma studio` — Visual DB editor
- `npx prisma migrate reset` — Reset DB (dev only)

### Infrastructure

```bash
# Start PostgreSQL (port 5433) + Redis (port 6379)
cd server && docker compose up -d

# Stop infrastructure
cd server && docker compose down

# View logs
cd server && docker compose logs -f
```
