import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  url: string
  image?: string
  keywords?: string
  jsonLd?: Record<string, any>
  ogType?: string
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image,
  keywords,
  jsonLd,
  ogType = 'website',
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    <link rel="canonical" href={url} />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {image && <meta property="og:image" content={image} />}
    <meta property="og:url" content={url} />
    <meta property="og:type" content={ogType} />
    <meta property="og:site_name" content="Svendsén Photography" />
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
  </Helmet>
)

export default SEO