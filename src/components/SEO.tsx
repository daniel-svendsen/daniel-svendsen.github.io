// SEO.tsx
import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  url: string
  image?: string
  keywords?: string
  jsonLd?: Record<string, any>
}

const SEO: React.FC<SEOProps> = ({title, description, url, image, keywords, jsonLd}) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        {keywords && <meta name="keywords" content={keywords}/>}
        {/* Open Graph */}
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
        {image && <meta property="og:image" content={image}/>}
        <meta property="og:url" content={url}/>
        <meta property="og:type" content="website"/>
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        {image && <meta name="twitter:image" content={image}/>}
        {jsonLd && (
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        )}
    </Helmet>
);

export default SEO;
