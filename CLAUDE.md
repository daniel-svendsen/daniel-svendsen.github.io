# CLAUDE.md

Claude Code instructions for this repository.

## Project
Svendsen Photography is a React/TypeScript/Vite/Tailwind site with public photography pages, customer galleries/admin flows via a Cloudflare Worker, and a `/work` CV/portfolio area. `backend/` contains a Spring Boot app that may be legacy/reference/fallback and should not be removed without verification.

## Claude Rules
- Read the smallest relevant set of files for the task.
- Reuse existing components, hooks, utils, commands, and style patterns.
- Make small, focused changes; avoid unrelated cleanup.
- Think through assumptions, ambiguity, tradeoffs, and verification before coding.
- Do not read or print `.env`, `.env.*`, `.dev.vars`, `backend/env.properties`, secrets, cookies, tokens, API keys, DB credentials, or session IDs.
- Ask before DB schema changes, auth/session changes, production config, public API changes, destructive scripts, file deletion, deploys, Cloudflare/R2/KV changes, route changes, visual/copy/CTA/CV positioning changes, or new dependencies.
- For behavior changes, add/update practical tests. For documented behavior changes, update relevant docs in the same task.
- Follow commit policy in `docs/COMMIT_GUIDELINES.md`.

## Commands
- Install: `npm install`
- Dev: `npm run dev`
- Frontend dev: `npm run dev:frontend`
- Worker dev: `npm run dev:backend`
- Build: `npm run build`
- Type check: `npx tsc --noEmit`
- Lint: `npx eslint .`
- Backend tests: `cd backend`, then `.\mvnw.cmd test` on Windows or `./mvnw test` on Unix.

## Optional References
- `docs/AI_CONTEXT.md` for condensed architecture and risk context.
- `docs/COMMIT_GUIDELINES.md` for commit message format.
- `backend/AGENTS.md` and `scripts/AGENTS.md` when changing those folders.
