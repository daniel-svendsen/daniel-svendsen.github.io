import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const projectRoot = process.cwd()
const distDir = path.join(projectRoot, 'dist')
const serverEntryPath = path.join(projectRoot, 'dist-server', 'entry-server.js')
const templatePath = path.join(distDir, 'index.html')

const prerenderRoutes = [
  '/',
  '/services',
  '/portraits',
  '/weddings',
  '/contact',
  '/faq',
  '/webservices',
  '/privacy',
]

const sitemapCanonicalRoutes = [
  '/services',
  '/portraits',
  '/weddings',
  '/contact',
  '/faq',
  '/webservices',
  '/privacy',
]

const { render } = await import(pathToFileURL(serverEntryPath).href)
const template = await fs.readFile(templatePath, 'utf8')

for (const route of prerenderRoutes) {
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

  const outputPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.slice(1), 'index.html')

  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, html, 'utf8')
}

const sitemapPath = path.join(distDir, 'sitemap.xml')
let sitemap = await fs.readFile(sitemapPath, 'utf8')

for (const route of sitemapCanonicalRoutes) {
  sitemap = sitemap.replaceAll(
    `https://www.svendsenphotography.com${route}</loc>`,
    `https://www.svendsenphotography.com${route}/</loc>`,
  )
}

await fs.writeFile(sitemapPath, sitemap, 'utf8')
