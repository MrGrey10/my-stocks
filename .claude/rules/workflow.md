# Agent Workflow Orchestration

## Workflow Orchestration

### 1. Plan Node Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately — don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update `docs/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Run tests, check logs, demonstrate correctness
- Ask yourself: "Would a staff engineer approve this?"

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- Skip this for simple, obvious fixes — don't over-engineer

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests — then resolve them

## Task Management

1. **Plan First**: Write plan to `docs/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `docs/todo.md`
6. **Capture Lessons**: Update `docs/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

## Standard Feature Pipeline

### Step 1: Analysis (BA Agent)
- Analyze requirements, break into user stories with acceptance criteria
- Identify affected NestJS modules and Nuxt pages
- Output: clear requirements, scope, implementation roadmap

### Step 2: Implementation
- **Full-stack**: Developer Agent (NestJS service/controller + Nuxt page)
- **Backend only**: Backend Agent (NestJS module, service, controller, DTO, guard)
- **Frontend only**: Frontend Agent (Nuxt pages, Vue components, Pinia stores)

### Step 3: Security Review (Security Scanner Agent)
- OWASP Top 10 vulnerabilities in new code
- Auth/authz checks (Guards, session security)
- No credential leaks, no PII in logs

### Step 4: Test Coverage (Tester Agent)
- Unit tests for NestJS services
- Controller tests for HTTP endpoints
- Output: test files, coverage summary

### Step 5: E2E Verification (QA Agent)
- User flows via Playwright MCP
- Auth flows, form validation, navigation
- Output: E2E results, screenshots

### Step 6: Report & PR (DocsWriter Agent)
- Summary of all changes made
- PR description (what changed, why, which files)
- Create PR via `gh pr create`
- PR rules: no AI mentions, no stats, no test checklists

## Architecture Tasks

For tasks involving architectural decisions or domain modeling:
- Insert **DDD Architect** between BA (Step 1) and Developer (Step 2)

## CI/CD Tasks

For infrastructure, Docker, or deployment tasks:
- Use **DevOps Agent** or **CI/CD Engineer Agent**

## Bug Fix Pipeline (Simplified)

1. **Debugger Agent** — investigate root cause in NestJS logs/errors
2. **Backend/Developer Agent** — implement fix
3. **Tester Agent** — write regression test

## General Rules

- Enter **plan mode** for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan — don't keep pushing
- Use subagents liberally to keep main context clean
- Never mark a task complete without proving it works
- After ANY user correction: update `docs/lessons.md`
