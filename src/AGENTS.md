# src/AGENTS.md

Instructions for frontend changes under `src/`.

- Preserve current visual style, layout, copy, CTAs, route structure, and CV/business positioning unless the task explicitly asks to change them.
- Treat shared components, hooks, utils, and data as cross-surface code; check whether changes affect public pages, `/work`, admin, and customer galleries.
- Be careful with gallery routes, image paths, downloads, likes, lazy loading, SEO metadata, headings, alt text, and PDF output.
- Reuse existing React, TypeScript, Vite, Tailwind, routing, and component patterns.
- Ask before public route changes, API contract changes, visual redesign, copy changes, auth/session behavior changes, or destructive gallery/admin behavior.
- Relevant checks: `npx tsc --noEmit`, `npx eslint .`, `npm run build`, and route/UI verification for affected pages when practical.
