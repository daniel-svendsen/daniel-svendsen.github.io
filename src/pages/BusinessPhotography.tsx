import React from 'react'

import { LinkButton } from '@/components/Button'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import groupPortrait from '@/assets/foeretag/DSC07882.jpg?responsive'
import warehouseConversation from '@/assets/foeretag/DSC07890.jpg?responsive'
import warehouseWork from '@/assets/foeretag/DSC07885.jpg?responsive'
import { getPageOgImage } from '@/config/pageSeo'
import { PRICING } from '@/config/pricing'
import { PUBLIC_CANONICAL_URLS } from '@/config/publicRoutes'
import { businessReference, BUSINESS } from '@/config/seo'

const businessFacts = [
  `Porträtt från ${PRICING.business.portraitFrom}`,
  `Verksamhetsfoto från ${PRICING.business.activityHourlyFrom}`,
  PRICING.business.taxNote,
]

const businessServices = [
  {
    title: 'Personalporträtt och headshots',
    description:
      'Enhetliga porträtt för webbplats, LinkedIn, presentationer och företagets övriga kommunikation.',
  },
  {
    title: 'Gruppbilder och team',
    description:
      'Gruppbilder på arbetsplatsen eller i en miljö som passar verksamheten och hur företaget vill presenteras.',
  },
  {
    title: 'Verksamhets- och kontorsbilder',
    description:
      'Bilder av människor, miljöer och arbetssätt för bildbank, webb, sociala medier och marknadsföring.',
  },
]

const processSteps = [
  {
    title: '1. Behov och användning',
    description:
      'Ni beskriver vilka bilder som behövs, var de ska användas och vilka personer eller miljöer som ska fotograferas.',
  },
  {
    title: '2. Planering på plats',
    description:
      'Vi går igenom plats, uttryck, bildlista och ett upplägg som stör verksamheten så lite som möjligt.',
  },
  {
    title: '3. Fotografering',
    description:
      'Fotograferingen sker hos er eller på en annan överenskommen plats och anpassas efter personal och arbetsmiljö.',
  },
  {
    title: '4. Urval och leverans',
    description:
      'Omfattning, bildurval, format och användning sammanfattas i offerten före uppdraget.',
  },
]

export default function BusinessPhotography() {
  const ogImage = getPageOgImage('businessPhotography')
  const businessServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Företagsfotografering i Kungälv',
    serviceType: 'Business photography',
    description:
      'Personalporträtt, gruppbilder och verksamhetsfotografering på plats hos företag i Kungälv, Göteborg och Stenungsund.',
    url: PUBLIC_CANONICAL_URLS.businessPhotography,
    provider: businessReference,
    areaServed: BUSINESS.serviceAreas.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
  }

  return (
    <>
      <SEO
        title="Företagsfotograf i Kungälv | Svendsén Photography"
        description="Företagsfotografering i Kungälv med personalporträtt, gruppbilder och verksamhetsbilder på plats. Även uppdrag i Göteborg och Stenungsund."
        url={PUBLIC_CANONICAL_URLS.businessPhotography}
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={businessServiceJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: PUBLIC_CANONICAL_URLS.home },
          {
            name: 'Företagsfotografering',
            url: PUBLIC_CANONICAL_URLS.businessPhotography,
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f5f5f2] px-3 pb-10 pt-24 text-textPrimary sm:px-4 md:px-5 md:pt-28 lg:px-6">
        <header className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-8 rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-3xl py-3 md:py-5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Personal, team och verksamhet
            </p>
            <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Företagsfotografering i Kungälv
            </h1>
            <p className="text-lg leading-relaxed text-textSecondary md:text-xl">
              Bilder som presenterar människorna, miljön och arbetet bakom
              verksamheten. Jag fotograferar på plats hos företag och anpassar
              upplägget efter hur bilderna ska användas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {businessFacts.map((fact) => (
                <span
                  key={fact}
                  className="rounded-full border border-black/6 bg-[#f8f8f5] px-4 py-2 text-sm font-semibold text-textPrimary"
                >
                  {fact}
                </span>
              ))}
            </div>
          </div>

          <figure className="overflow-hidden rounded-[1.5rem]">
            <ResponsiveImage
              image={warehouseConversation}
              alt="Två medarbetare samtalar i företagets lagermiljö"
              sizes="(min-width: 1024px) 590px, 100vw"
              className="aspect-[3/2] w-full object-cover lg:h-[34rem] lg:aspect-auto"
            />
          </figure>
        </header>

        <section className="mx-auto mb-12 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Företagsbilder för människor och miljöer
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Ett uppdrag kan omfatta enstaka profilbilder, ett helt team eller
              en bredare bildbank från verksamheten. Återkommande fotografering
              går att planera när nya medarbetare eller nytt innehåll behöver
              följa samma uttryck.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {businessServices.map((service) => (
              <InfoCard
                key={service.title}
                title={service.title}
                description={service.description}
                className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
                titleClassName="mb-2 text-xl"
                descriptionClassName="text-sm leading-relaxed"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 rounded-[1.75rem] border border-black/6 bg-white p-4 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:grid-cols-2 md:p-5">
          <figure className="overflow-hidden rounded-[1.5rem]">
            <ResponsiveImage
              image={groupPortrait}
              alt="Tre medarbetare fotograferade tillsammans på arbetsplatsen"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-[25rem] w-full object-cover md:h-[32rem]"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-[1.5rem]">
            <ResponsiveImage
              image={warehouseWork}
              alt="Medarbetare fotograferade under arbete i ett lager"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-[25rem] w-full object-cover md:h-[32rem]"
              loading="lazy"
            />
          </figure>
        </section>

        <section className="mx-auto mb-12 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Så går företagsfotograferingen till
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Ett tydligt underlag före fotograferingen gör det enklare att få
              rätt kombination av porträtt, gruppbilder och verksamhetsbilder.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <InfoCard
                key={step.title}
                title={step.title}
                description={step.description}
                className="border-black/6 bg-[#f8f8f5] p-5 shadow-none"
                titleClassName="mb-2 text-lg"
                descriptionClassName="text-sm leading-relaxed"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Pris och offert
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Företagsporträtt kostar från{' '}
              <strong>{PRICING.business.portraitFrom}</strong>. Fler personer
              offereras efter antal, plats och önskat upplägg.
            </p>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Verksamhetsfotografering kostar från{' '}
              <strong>{PRICING.business.activityHourlyFrom}</strong>. Gruppfoto,
              bildbank och återkommande uppdrag offereras efter omfattning.
            </p>
            <p className="text-base font-semibold text-textPrimary">
              {PRICING.business.taxNote}
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Användning av bilderna
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Användningsrätt för företagets egna kanaler ingår enligt
              överenskommelse. Exakta villkor anpassas efter hur och var
              bilderna ska användas.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Omfattning, format och användning dokumenteras i offerten inför
              fotograferingen.
            </p>
          </div>
        </section>

        <section className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
              Kungälv med omnejd
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Fotografering på plats hos företaget
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Jag utgår från Kungälv och fotograferar även företag i Göteborg,
              Stenungsund och andra områden efter överenskommelse. Utanför
              Kungälv tillkommer reseersättning på{' '}
              {PRICING.estimator.travelPerRoundTripMil} per mil för hela tur- och
              retursträckan samt eventuell övernattning.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h3 className="mb-3 text-xl font-semibold text-textPrimary">
              Underlag för offert
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-textSecondary">
              Beskriv antal personer, önskade miljöer, hur bilderna ska användas
              och vilket datum som passar. Då kan jag föreslå ett relevant
              upplägg.
            </p>
            <LinkButton
              to="/contact/"
              variant="outline"
              size="md"
              subVariant="rounded"
              className="font-semibold"
            >
              Be om offert
            </LinkButton>
          </div>
        </section>

        <CTASection
          className="mx-auto max-w-6xl rounded-[1.75rem] border border-black/6 bg-white"
          title="Behöver företaget nya bilder?"
          description="Berätta vilka personer, miljöer och användningsområden fotograferingen ska omfatta, så återkommer jag med ett förslag och en offert."
          actions={[
            { to: '/contact/', label: 'Skicka offertförfrågan' },
            { to: '/services/', label: 'Se alla tjänster', variant: 'outline' },
          ]}
        />
      </main>
    </>
  )
}
