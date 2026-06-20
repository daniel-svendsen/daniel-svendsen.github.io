import React from 'react'
import { Helmet } from 'react-helmet-async'

import { BUSINESS } from '@/config/seo'

interface SEOProps {
  title: string
  description: string
  url: string
  image?: string
  keywords?: string
  jsonLd?: Record<string, any>
  breadcrumbs?: Array<{
    name: string
    url: string
  }>
  ogType?: string
  noIndex?: boolean
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image,
  keywords,
  jsonLd,
  breadcrumbs,
  ogType = 'website',
  noIndex = false,
}) => {
  const breadcrumbJsonLd =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }
      : null

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {noIndex && <meta name="googlebot" content="noindex, nofollow" />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:locale" content="sv_SE" />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={image ? 'summary_large_image' : 'summary'}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
      {breadcrumbJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
