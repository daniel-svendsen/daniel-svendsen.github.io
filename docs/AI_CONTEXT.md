# AI Context

Short context for agents. Prefer source code over this file when details matter.

## System Shape

- React/TypeScript/Vite/Tailwind frontend in `src/`.
- `src/config/publicRoutes.ts` is the canonical manifest for indexable public
  routes used by the routers, prerendering and sitemap generation.
- Public surfaces include the main photography pages, `/om`, service pages,
  guides, case studies, `/contact`, `/faq`, and `/privacy`.
- The retired `/webservices` route redirects permanently to `/services/`.
- `/work` is a separate CV/portfolio area with PDF generation.
- `/work`, `/admin`, `/galleri/*`, `/app-shell`, unknown routes and the
  generated 404 page are excluded from indexing.
- Admin and customer gallery code lives under `src/admin/`.
- Cloudflare Worker is `src/admin/worker/worker.ts`; it owns `/api/*`, admin auth, customer gallery access, uploads, deletes, renames, downloads, likes, and R2/KV access.
- The current `/work` content comes from `src/data/cvData.json`. The Spring Boot
  backend in `backend/` is historical but may still be useful as
  reference/fallback.

## High-Risk Areas

- Secrets and env files.
- Worker auth, cookies, CORS, admin/customer access boundaries.
- R2 object keys, gallery IDs, folder placeholders, rename/delete behavior.
- KV likes and sessions.
- Public routes, SEO metadata, images, alt text, lazy loading, and downloads.
- `/work` content, navigation, and PDF output.
- Shared components/hooks/utils used by multiple surfaces.

## Current Command Facts

- Root package has dev/build scripts but no `test` or `lint` script.
- Use `npx tsc --noEmit` for TypeScript validation and `npx eslint .` for lint when relevant.
- Build uses `npm run build`, which runs client build, SSR build, and prerender.
- Worker dev uses Wrangler locally; deploy is available but requires explicit approval.
- Backend uses Maven wrapper and Java 17.

## Documentation Notes

- Keep agent docs short and self-contained.
- Do not add real environment values, Cloudflare IDs, tokens, cookies, or passwords to docs.
- Prefer updating existing docs over creating new ones.
- Current SEO architecture and deployment checks are documented in `docs/SEO_SETUP.md`.
