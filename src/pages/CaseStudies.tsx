import React from 'react'

import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import SEO from '@/components/SEO'
import { LinkButton } from '@/components/Button'
import { caseStudies } from '@/data/cases'
import { getPageOgImage } from '@/config/pageSeo'
import { PUBLIC_CANONICAL_URLS } from '@/config/publicRoutes'

export default function CaseStudies() {
  const ogImage = getPageOgImage('weddingCases')
  const caseStudyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Bröllop jag fotograferat',
    description:
      'Bröllop från Kungälv och Stenungsund med fokus på naturliga och personliga bilder.',
    url: PUBLIC_CANONICAL_URLS.weddingCases,
  }

  return (
    <>
      <SEO
        title="Verkliga bröllop i Kungälv & Stenungsund | Svendsén Photography"
        description="Se bröllop jag fotograferat i Kungälv och Stenungsund, med fokus på promenadporträtt, vigsel, mingel och personliga bilder."
        url={PUBLIC_CANONICAL_URLS.weddingCases}
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={caseStudyJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: PUBLIC_CANONICAL_URLS.home },
          {
            name: 'Bröllop',
            url: PUBLIC_CANONICAL_URLS.weddings,
          },
          {
            name: 'Bröllop jag fotograferat',
            url: PUBLIC_CANONICAL_URLS.weddingCases,
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-20 text-textPrimary sm:px-4 md:px-5 lg:px-6">
        <header className="mx-auto mb-8 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Bröllop jag fotograferat
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Riktiga bröllop från Kungälv och Stenungsund
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              Här visar jag några utvalda uppdrag för att ge en tydligare bild av
              hur jag arbetar med naturliga porträtt, lugna promenader,
              vigselbilder och det som händer runt omkring själva ceremonin.
            </p>
          </div>
        </header>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <InfoCard key={caseStudy.slug} className="bg-white p-6 md:p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
                {caseStudy.location}
              </p>
              <h2 className="mb-3 text-2xl font-semibold text-textPrimary">
                {caseStudy.title}
              </h2>
              <p className="mb-4 text-base leading-relaxed text-textSecondary">
                {caseStudy.heroLabel}
              </p>
              <p className="mb-6 text-base leading-relaxed text-textSecondary">
                {caseStudy.intro}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f4efe6] px-3 py-1 text-sm font-medium text-textPrimary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <LinkButton
                to={`/brollop/${caseStudy.slug.replace('brollop-', '')}/`}
                size="lg"
                subVariant="rounded"
              >
                Läs berättelsen
              </LinkButton>
            </InfoCard>
          ))}
        </section>

        <CTASection
          className="rounded-[2.25rem] bg-white/82 lg:rounded-[3rem]"
          title="Från verkliga bröllop till ert eget upplägg"
          description="När ni har utforskat uppdragen kan ni jämföra paket och omfattning på den regionala bröllopssidan."
          actions={[
            { to: '/weddings/', label: 'Jämför paket och upplägg' },
            { to: '/contact/', label: 'Skicka förfrågan', variant: 'outline' },
          ]}
        />
      </main>
    </>
  )
}
