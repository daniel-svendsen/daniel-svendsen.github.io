import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const projectRoot = process.cwd()
const distDir = path.join(projectRoot, 'dist')
const serverEntryPath = path.join(projectRoot, 'dist-server', 'entry-server.js')
const templatePath = path.join(distDir, 'index.html')

const prerenderRoutes = [
  '/',
  '/services/',
  '/portraits/',
  '/weddings/',
  '/contact/',
  '/faq/',
  '/webservices/',
  '/guider/',
  '/guider/brollopsplanerare/',
  '/guider/brollopsbilder-promenad/',
  '/guider/brollopstidslinje/',
  '/brollopsfotograf-kungalv/',
  '/brollop/',
  '/brollop/kungalv/',
  '/brollop/stenungsund/',
  '/privacy/',
]

const { render } = await import(pathToFileURL(serverEntryPath).href)
const template = await fs.readFile(templatePath, 'utf8')

async function renderPage(route, outputPath) {
  const { appHtml, helmet } = render(route)
  const helmetData = helmet.helmet ?? {}
  const titleTag =
    helmetData.title?.toString() ?? '<title>Svendsén Photography</title>'
  const headTags = [
    helmetData.meta?.toString() ?? '',
    helmetData.link?.toString() ?? '',
    helmetData.script?.toString() ?? '',
  ].join('')

  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, titleTag)
    .replace('<!--app-head-->', headTags)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, html, 'utf8')
}

for (const route of prerenderRoutes) {
  const outputPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.replace(/^\/|\/$/g, ''), 'index.html')

  await renderPage(route, outputPath)
}

await renderPage('/404', path.join(distDir, '404.html'))

const appShell = template
  .replace(
    /<title>[\s\S]*?<\/title>/,
    '<title>Svendsén Photography</title>',
  )
  .replace(
    '<!--app-head-->',
    '<meta name="robots" content="noindex, nofollow"><meta name="googlebot" content="noindex, nofollow">',
  )
const appShellPath = path.join(distDir, 'app-shell', 'index.html')
await fs.mkdir(path.dirname(appShellPath), { recursive: true })
await fs.writeFile(appShellPath, appShell, 'utf8')

const buildDate = new Date().toISOString().slice(0, 10)
const sitemapUrls = prerenderRoutes
  .map(
    (route) =>
      [
        '  <url>',
        `    <loc>https://www.svendsenphotography.com${route}</loc>`,
        `    <lastmod>${buildDate}</lastmod>`,
        '  </url>',
      ].join('\n'),
  )
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`
await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8')
