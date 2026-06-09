# SEO Setup

Current technical SEO setup for Svendsén Photography.

## Publishing And Discovery

- Production site: `https://www.svendsenphotography.com`
- Hosting: Cloudflare Pages from GitHub branch `main`
- Public pages are prerendered during `npm run build`.
- `scripts/prerender.mjs` generates the prerendered HTML, `404.html`,
  the private app shell, and `sitemap.xml`.
- `public/robots.txt` allows crawling and points to the sitemap.
- Google Search Console and Bing Webmaster Tools use:
  `https://www.svendsenphotography.com/sitemap.xml`
- Cloudflare Crawler Hints is enabled for IndexNow-style discovery.

## Indexing Rules

All routes in the `prerenderRoutes` list in `scripts/prerender.mjs` are
included in the sitemap and intended for indexing.

These routes must remain excluded from the sitemap and use `noindex`:

- `/admin` and all admin subroutes
- `/galleri/*`
- `/work`
- `/app-shell`
- The generated 404 page

`privacy` is currently indexable.

When adding or removing an indexable public route, update the route list in
`scripts/prerender.mjs` and verify the generated `dist/sitemap.xml`.

## Metadata And Entity Data

- Shared metadata component: `src/components/SEO.tsx`
- Canonical site URL and business data: `src/config/seo.ts`
- Business schema types: `LocalBusiness` and `ProfessionalService`
- Business name: Svendsén Photography
- Owner: Daniel Svendsén
- Service areas: Kungälv, Stenungsund, and Göteborg
- The business has no public customer reception or published street address.
- Missing optional `telephone`, `priceRange`, and `address` fields in Google
  Rich Results Test are intentional unless the business details change.

Keep the business name, email, logo, service areas, and social URLs consistent
across pages and structured data. Do not add a private address to the schema.

## Cloudflare Routing

Cloudflare Pages uses `public/_redirects` to serve the client app shell for
dynamic routes while preserving the requested browser URL.

The app shell is generated as `dist/app-shell/index.html`. Do not change it
back to `app-shell.html`; Cloudflare may canonicalize that file path and
redirect `/admin` to `/app-shell`.

`src/AppRoutes.tsx` also keeps a compatibility redirect from `/app-shell` to
`/admin/login` for browsers that cached the previous permanent redirect.

## Verification After Deployment

1. Run `npx tsc --noEmit`.
2. Run `npm run build`.
3. Confirm `dist/sitemap.xml` contains only intended public routes.
4. Confirm `dist/404.html` contains `noindex`.
5. Confirm `dist/app-shell/index.html` contains `noindex`.
6. Verify an unknown production URL returns HTTP `404`.
7. Verify `/admin`, `/admin/login`, `/work`, and a real `/galleri/*` URL load.
8. Verify `sitemap.xml` is accepted by Google Search Console and Bing
   Webmaster Tools.
9. Test the home page in Google Rich Results Test after schema changes.

## Expected Limitations

Technical SEO helps search engines crawl and understand the site, but it does
not guarantee indexing or rankings. Content quality, links, competition,
search intent, and search-engine decisions still affect visibility.
