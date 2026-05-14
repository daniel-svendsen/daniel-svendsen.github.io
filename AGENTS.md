# AGENTS.md

Primary instructions for coding agents in this repository. Keep changes small, safe, and verifiable.

## Project Overview
- Public photography website for Svendsen Photography.
- Customer galleries and admin flows backed by a Cloudflare Worker.
- Image storage and metadata use Cloudflare R2/KV bindings.
- `/work` is a separate CV/portfolio area for Daniel Svendsen.
- `backend/` is a Spring Boot app for CV/content data. Treat it as historical but potentially relevant until verified otherwise.

## Repo Layout
- `src/`: React, TypeScript, Vite, Tailwind frontend.
- `src/AGENTS.md`: local frontend instructions.
- `src/admin/`: admin UI, customer gallery UI, shared gallery hooks/utils.
- `src/admin/worker/worker.ts`: critical Cloudflare Worker for auth, gallery CRUD, R2/KV access, likes, image serving, rename/delete flows.
- `src/work/`: CV/portfolio UI and PDF generation.
- `backend/`: Spring Boot backend, possibly legacy/reference/fallback.
- `scripts/`: build and prerender helper scripts.
- `.github/workflows/`: currently commented deploy workflows; do not treat as active deploy automation without checking.
- `docs/AI_CONTEXT.md`: short architecture and workflow context.
- `docs/COMMIT_GUIDELINES.md`: shared commit message policy.

## Commands
- Install: `npm install`
- Frontend + Worker dev: `npm run dev`
- Frontend dev only: `npm run dev:frontend`
- Worker dev only: `npm run dev:backend`
- Build/prerender: `npm run build`
- Client build: `npm run build:client`
- Server build: `npm run build:server`
- Type check: `npx tsc --noEmit`
- Lint: `npx eslint .`
- Backend tests: from `backend/`, run `.\mvnw.cmd test` on Windows or `./mvnw test` on Unix.

Do not run deploy commands unless explicitly approved.

## Verification Expectations
- Run the smallest relevant check after changes.
- For behavior changes, add or update a test that locks the behavior when practical.
- For documented behavior changes, update the relevant existing docs/instruction files in the same task.
- If expected tests/docs are not updated, explain why in the final report.
- UI changes should be checked on relevant routes and mobile/desktop when practical.
- Worker/admin/gallery changes should verify auth, endpoint contracts, CORS/cookies, R2/KV key assumptions, and affected CRUD flows as closely as possible.

## Instruction Priority
1. Protect secrets and sensitive data.
2. Protect production customer, gallery, admin, auth, and storage flows.
3. Preserve current design, copy, routes, API formats, and data semantics unless the task asks to change them.
4. Make the smallest safe change and verify the affected surface.
5. Follow user instructions for the current task.

## Allowed Actions
- Read project docs, source, config, package metadata, and non-secret examples.
- Make surgical code/doc/test changes needed for the task.
- Run local checks such as build, lint, typecheck, and tests.
- Summarize sensitive-looking files at a high level without exposing values.
- Create focused docs only when they reduce ambiguity or duplication.

## Not Allowed Without Explicit Approval
- Reading or printing `.env`, `.env.*`, `.dev.vars`, `backend/env.properties`, Wrangler secrets, tokens, cookies, passwords, API keys, DB credentials, or session IDs.
- Running deploys, changing Cloudflare/R2/KV resources, changing Wrangler bindings, or making production-impacting environment changes.
- Destructive R2/KV/database operations.
- Deleting code, routes, assets, backend files, worker logic, or config that might still be used.
- Changing public API formats, DB schema, auth/session behavior, gallery IDs, R2 object key semantics, routes, visual style, copy, CTA text, or CV/business positioning without approval.
- Adding new dependencies unless necessary and approved.

## Security Rules
- Never include secret values in chat, commits, examples, logs, or docs.
- Use env-var names/placeholders only. Keep `.env.example` free of real values.
- Treat `ADMIN_PASSWORD`, `OPENAI_API_KEY`, `DATABASE_URL`, `PGUSER`, `PGPASSWORD`, Cloudflare bindings, cookies, and session IDs as sensitive.
- Avoid logging credentials, request cookies, tokens, or raw environment objects.
- Prefer local validation over external service calls.

## Existing Knowledge
- Public routes include `/`, `/services`, `/portraits`, `/weddings`, `/contact`, `/faq`, `/webservices`, and `/work`.
- Customer gallery route pattern: `/galleri/:galleryId`.
- Worker API routes live under `/api/*`.
- Shared components/hooks/utils can affect both public pages and CV/admin/gallery flows.
- R2 folder structure, object keys, gallery links, likes, downloads, and rename/delete behavior are product behavior.
- SEO metadata, headings, alt text, lazy loading, image quality, asset paths, and PDF output can be user-facing.

## Working Rules
- Think before coding: state assumptions, ambiguity, tradeoffs, and risk before risky changes.
- Simplicity first: prefer existing patterns and local helpers.
- Surgical changes only: avoid unrelated cleanup and broad refactors.
- Goal-driven checks: choose verification that proves the requested outcome.
- Reuse existing code before adding abstractions.
- If effects are uncertain, pause and propose a safe path.

## On Failure
- Stop escalating risk.
- Report what failed, likely cause, files touched, and what remains unverified.
- If a command fails because of missing secrets, env, network, or external services, do not print secret files; explain the dependency.

## Finish Response Format
- Summarize updated/created files.
- List checks run and results.
- Mention tests/docs not updated when normally expected, with reason.
- Note assumptions and anything not verified.
- Suggest a commit message. For non-trivial commits, follow `docs/COMMIT_GUIDELINES.md`.
