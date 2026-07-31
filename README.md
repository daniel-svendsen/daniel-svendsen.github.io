# Svendsén Photography

Public photography website for Svendsén Photography, based in Kungälv and
serving Kungälv, Gothenburg and Stenungsund. The repository also contains
customer galleries, protected administration and a separate `/work`
CV/portfolio area.

## System overview

- `src/`: React, TypeScript, Vite and Tailwind frontend.
- `src/config/publicRoutes.ts`: canonical manifest for indexable public routes.
- `src/admin/`: admin and customer-gallery user interfaces.
- `src/admin/worker/worker.ts`: Cloudflare Worker for authentication, gallery
  APIs, R2/KV access, uploads, downloads, likes, folders, renames and deletes.
- `src/work/`: CV/portfolio interface and PDF generation through
  `@react-pdf/renderer`.
- `scripts/`: local Worker startup, prerendering, SEO verification, pricing
  verification and IndexNow submission.
- `backend/`: historical Spring Boot CV/content backend retained as a possible
  reference or fallback. The current `/work` area reads `src/data/cvData.json`.

Public pages are prerendered during the production build. Private and dynamic
routes such as `/admin`, `/galleri/:galleryId` and `/work` use the generated app
shell and are excluded from indexing.

## Requirements

- Node.js 22 or later
- npm

The Spring Boot backend, if needed separately, requires Java 17.

## Local development

```powershell
git clone https://github.com/daniel-svendsen/daniel-svendsen.github.io.git
cd daniel-svendsen.github.io
npm install
npm run dev
```

`npm run dev` starts the Vite frontend and the local Cloudflare Worker in
parallel. The frontend normally runs at `http://localhost:5173`, and Vite
proxies `/api` requests to the Worker on port `8787`.

To run only one side:

```powershell
npm run dev:frontend
npm run dev:backend
```

Local Worker authentication and storage may require development bindings or
environment values. Do not commit or print secret files.

## Verification

```powershell
npx tsc --noEmit
npx eslint .
npm run build
```

`npm run build` performs the client build, SSR build, public-page prerendering,
SEO assertions and sitemap generation.

Additional focused checks:

```powershell
npm run test:pricing
npm run test:images
```

Do not run deployment or IndexNow submission commands unless the corresponding
external action is intended and approved.
