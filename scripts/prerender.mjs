import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const projectRoot = process.cwd()
const distDir = path.join(projectRoot, 'dist')
const serverEntryPath = path.join(projectRoot, 'dist-server', 'entry-server.js')
const templatePath = path.join(distDir, 'index.html')
const siteUrl = 'https://www.svendsenphotography.com'

function assertBuild(condition, message) {
  if (!condition) {
    throw new Error(`SEO build verification failed: ${message}`)
  }
}

function countMatches(value, pattern) {
  return value.match(pattern)?.length ?? 0
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function getMetaContent(html, attribute, value) {
  const tag = html.match(
    new RegExp(`<meta[^>]+${attribute}="${escapeRegExp(value)}"[^>]*>`),
  )?.[0]

  return tag?.match(/content="([^"]*)"/)?.[1]
}

function getCanonicalHref(html) {
  return html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/)?.[1]
}

function getJsonLdDocuments(html) {
  return Array.from(
    html.matchAll(
      /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    ),
    (match) => JSON.parse(match[1]),
  ).flatMap((document) => (Array.isArray(document) ? document : [document]))
}

function getPageContentHtml(html) {
  return (
    html.match(/<main(?:\s[^>]*)?>([\s\S]*?)<\/main>/)?.[1] ??
    html.match(/<\/header>([\s\S]*?)<footer(?:\s[^>]*)?>/)?.[1]
  )
}

async function verifyGeneratedSeo() {
  assertBuild(
    new Set(prerenderRoutes).size === prerenderRoutes.length,
    'prerender routes must be unique',
  )

  const renderedMetadata = []
  const faqRoutes = new Set([
    '/faq/',
    '/portraits/',
    '/familjefotografering/',
    '/weddings/',
    '/brollopsfotograf-kungalv/',
    '/guider/brollopsplanerare/',
    '/guider/brollopsbilder-promenad/',
    '/guider/brollopstidslinje/',
  ])
  const faqOwners = new Map()
  const requiredMainLinks = new Map([
    ['/', ['/foretagsfotografering/']],
    [
      '/services/',
      [
        '/weddings/',
        '/portraits/',
        '/familjefotografering/',
        '/foretagsfotografering/',
        '/produktfotografering/',
        '/contact/',
      ],
    ],
    [
      '/weddings/',
      [
        '/brollop/',
        '/brollopsfotograf-kungalv/',
        '/guider/brollopsplanerare/',
        '/guider/brollopsbilder-promenad/',
        '/guider/brollopstidslinje/',
        '/contact/',
      ],
    ],
    [
      '/brollopsfotograf-kungalv/',
      ['/brollop/kungalv/', '/weddings/', '/contact/'],
    ],
    [
      '/brollop/',
      [
        '/brollop/kungalv/',
        '/brollop/stenungsund/',
        '/weddings/',
        '/contact/',
      ],
    ],
    [
      '/brollop/kungalv/',
      ['/brollopsfotograf-kungalv/', '/brollop/', '/contact/'],
    ],
    [
      '/brollop/stenungsund/',
      ['/weddings/', '/brollop/', '/contact/'],
    ],
    [
      '/guider/',
      [
        '/guider/brollopsplanerare/',
        '/guider/brollopsbilder-promenad/',
        '/guider/brollopstidslinje/',
        '/weddings/',
        '/contact/',
      ],
    ],
    [
      '/guider/brollopsplanerare/',
      ['/weddings/', '/contact/'],
    ],
    [
      '/guider/brollopsbilder-promenad/',
      ['/weddings/', '/contact/'],
    ],
    [
      '/guider/brollopstidslinje/',
      ['/weddings/', '/contact/'],
    ],
    [
      '/portraits/',
      ['/familjefotografering/', '/services/', '/contact/'],
    ],
    [
      '/familjefotografering/',
      [
        '/familjefotografering/eventladan-romelanda/',
        '/services/',
        '/contact/',
      ],
    ],
    [
      '/familjefotografering/eventladan-romelanda/',
      ['/familjefotografering/', '/contact/'],
    ],
    ['/foretagsfotografering/', ['/services/', '/contact/']],
    [
      '/produktfotografering/',
      ['/produktfotografering/for-pros/', '/services/', '/contact/'],
    ],
    [
      '/produktfotografering/for-pros/',
      ['/produktfotografering/', '/contact/'],
    ],
  ])

  for (const route of prerenderRoutes) {
    const outputPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route.replace(/^\/|\/$/g, ''), 'index.html')
    const html = await fs.readFile(outputPath, 'utf8')
    const canonical = `${siteUrl}${route}`
    const title = html.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/)?.[1]
    const description = getMetaContent(html, 'name', 'description')
    const canonicalHref = getCanonicalHref(html)
    const ogTitle = getMetaContent(html, 'property', 'og:title')
    const ogDescription = getMetaContent(html, 'property', 'og:description')
    const ogUrl = getMetaContent(html, 'property', 'og:url')
    const ogImage = getMetaContent(html, 'property', 'og:image')
    const ogImageAlt = getMetaContent(html, 'property', 'og:image:alt')
    const twitterTitle = getMetaContent(html, 'name', 'twitter:title')
    const twitterDescription = getMetaContent(
      html,
      'name',
      'twitter:description',
    )
    const twitterImage = getMetaContent(html, 'name', 'twitter:image')
    const twitterImageAlt = getMetaContent(html, 'name', 'twitter:image:alt')

    assertBuild(
      countMatches(html, /<title(?:\s[^>]*)?>[\s\S]*?<\/title>/g) === 1,
      `${route} must contain exactly one title`,
    )
    assertBuild(
      countMatches(html, /<meta[^>]+name="description"/g) === 1,
      `${route} must contain exactly one meta description`,
    )
    assertBuild(
      countMatches(html, /<link[^>]+rel="canonical"/g) === 1 &&
        canonicalHref === canonical,
      `${route} must contain exactly one matching canonical`,
    )
    assertBuild(
      ogTitle === title && twitterTitle === title,
      `${route} OG and Twitter titles must match the page title`,
    )
    assertBuild(
      ogDescription === description && twitterDescription === description,
      `${route} OG and Twitter descriptions must match the meta description`,
    )
    assertBuild(ogUrl === canonical, `${route} OG URL must match the canonical`)
    assertBuild(
      Boolean(ogImage) && ogImage.startsWith('https://'),
      `${route} must contain one absolute OG image`,
    )
    assertBuild(Boolean(ogImageAlt), `${route} must contain OG image alt text`)
    assertBuild(
      twitterImage === ogImage && twitterImageAlt === ogImageAlt,
      `${route} Twitter image metadata must match Open Graph`,
    )
    assertBuild(
      countMatches(html, /<meta[^>]+name="robots"/g) === 0,
      `${route} must remain indexable`,
    )
    assertBuild(
      !html.includes('<div id="root"></div>'),
      `${route} must contain prerendered app content`,
    )

    const expectedMainLinks = requiredMainLinks.get(route) ?? []
    if (expectedMainLinks.length > 0) {
      const mainHtml = getPageContentHtml(html)
      assertBuild(
        Boolean(mainHtml),
        `${route} must contain a page-content region for link verification`,
      )

      for (const expectedLink of expectedMainLinks) {
        assertBuild(
          mainHtml.includes(`href="${expectedLink}"`),
          `${route} main content must link to ${expectedLink}`,
        )
      }
    }

    const faqDocuments = getJsonLdDocuments(html).filter(
      (document) => document['@type'] === 'FAQPage',
    )
    assertBuild(
      faqDocuments.length === (faqRoutes.has(route) ? 1 : 0),
      `${route} must contain the expected number of FAQPage schemas`,
    )

    for (const faqDocument of faqDocuments) {
      assertBuild(
        Array.isArray(faqDocument.mainEntity) &&
          faqDocument.mainEntity.length > 0,
        `${route} FAQPage schema must contain questions`,
      )

      for (const entity of faqDocument.mainEntity) {
        const question = entity.name
        const answer = entity.acceptedAnswer?.text
        assertBuild(
          entity['@type'] === 'Question' &&
            entity.acceptedAnswer?.['@type'] === 'Answer' &&
            Boolean(question) &&
            Boolean(answer),
          `${route} FAQPage entries must contain a question and answer`,
        )
        assertBuild(
          html.includes(question) && html.includes(answer),
          `${route} FAQPage content must also be visible on the page`,
        )
        assertBuild(
          !faqOwners.has(question),
          `${route} FAQ question already belongs to ${faqOwners.get(question)}`,
        )
        faqOwners.set(question, route)
      }
    }

    renderedMetadata.push({
      route,
      title,
      description,
      canonical: canonicalHref,
      image: ogImage,
      imageAlt: ogImageAlt,
    })
  }

  assertBuild(
    faqRoutes.size === new Set(Array.from(faqOwners.values())).size,
    'every FAQ route must own at least one visible schema question',
  )

  for (const field of [
    'title',
    'description',
    'canonical',
    'image',
    'imageAlt',
  ]) {
    const values = renderedMetadata.map((metadata) => metadata[field])
    assertBuild(
      values.every(Boolean) && new Set(values).size === values.length,
      `public route ${field} values must be complete and unique`,
    )
  }

  for (const relativePath of ['404.html', 'app-shell/index.html']) {
    const html = await fs.readFile(path.join(distDir, relativePath), 'utf8')

    assertBuild(
      /<meta[^>]+name="robots"[^>]+content="noindex, nofollow"/.test(html),
      `${relativePath} must be noindex`,
    )
    assertBuild(
      /<meta[^>]+name="googlebot"[^>]+content="noindex, nofollow"/.test(html),
      `${relativePath} must be noindex for Googlebot`,
    )
  }

  const sitemapXml = await fs.readFile(
    path.join(distDir, 'sitemap.xml'),
    'utf8',
  )
  const sitemapLocations = Array.from(
    sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g),
    (match) => match[1],
  )
  const expectedLocations = prerenderRoutes.map((route) => `${siteUrl}${route}`)

  assertBuild(
    sitemapLocations.length === expectedLocations.length &&
      sitemapLocations.every(
        (location, index) => location === expectedLocations[index],
      ),
    'sitemap routes must exactly match prerender routes',
  )

  const robots = await fs.readFile(path.join(distDir, 'robots.txt'), 'utf8')
  assertBuild(
    robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`),
    'robots.txt must reference the generated sitemap',
  )

  const redirects = await fs.readFile(path.join(distDir, '_redirects'), 'utf8')
  const privateRouteRewrites = [
    '/galleri/* /app-shell/ 200',
    '/admin /app-shell/ 200',
    '/admin/* /app-shell/ 200',
    '/work /app-shell/ 200',
    '/work/ /app-shell/ 200',
  ]

  for (const rewrite of privateRouteRewrites) {
    assertBuild(
      redirects.includes(rewrite),
      `private route rewrite is missing: ${rewrite}`,
    )
  }
}

const { prerenderRoutes, render } = await import(
  pathToFileURL(serverEntryPath).href
)
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
  .replace(/<title>[\s\S]*?<\/title>/, '<title>Svendsén Photography</title>')
  .replace(
    '<!--app-head-->',
    '<meta name="robots" content="noindex, nofollow"><meta name="googlebot" content="noindex, nofollow">',
  )
const appShellPath = path.join(distDir, 'app-shell', 'index.html')
await fs.mkdir(path.dirname(appShellPath), { recursive: true })
await fs.writeFile(appShellPath, appShell, 'utf8')

const buildDate = new Date().toISOString().slice(0, 10)
const sitemapUrls = prerenderRoutes
  .map((route) =>
    [
      '  <url>',
      `    <loc>${siteUrl}${route}</loc>`,
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

await verifyGeneratedSeo()
console.log(
  `SEO build verification passed for ${prerenderRoutes.length} public routes, 404 and app shell.`,
)
