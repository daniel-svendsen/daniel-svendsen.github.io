import React from 'react'

import brushesOnWhite from '@/assets/cases/FoeretagForPros/DSC06483-Redigera-2.jpg?responsive'
import productInUse from '@/assets/cases/FoeretagForPros/DSC07445.jpg?responsive'
import productCollection from '@/assets/cases/FoeretagForPros/DSC06600.jpg?responsive'
import casePreview from '@/assets/cases/FoeretagForPros/DSC06616.jpg?responsive'
import { LinkButton } from '@/components/Button'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { PRICING } from '@/config/pricing'
import { businessReference, BUSINESS } from '@/config/seo'

const productFacts = [
  `${PRICING.business.productIncludedImages} bilder för ${PRICING.business.productStartFrom}`,
  `Extra bild ${PRICING.business.productExtraImageFrom}`,
  PRICING.business.taxNote,
]

const productImageTypes = [
  {
    title: 'Rena produktbilder',
    description:
      'Tydliga bilder på ljus eller annan överenskommen bakgrund för webbshop, katalog och presentation.',
  },
  {
    title: 'Flera produkter och vinklar',
    description:
      'Samlingsbilder och extra vyer planeras efter sortimentet och hur kunden behöver presentera produkterna.',
  },
  {
    title: 'Miljö- och användningsbilder',
    description:
      'Produkten kan även fotograferas i användning eller i en relevant miljö för marknadsföring och sociala medier.',
  },
]

const processSteps = [
  {
    title: '1. Bildlista och offert',
    description:
      'Ni anger antal produkter, önskade bilder eller vinklar, bakgrund, användning och leveransbehov.',
  },
  {
    title: '2. Lämna eller skicka',
    description:
      'Produkter upp till 70 × 70 × 70 cm kan lämnas eller skickas till mig. Produkterna ska vara rena och fotograferingsklara.',
  },
  {
    title: '3. Fotografering',
    description:
      'Produkterna fotograferas enligt den godkända bildlistan med samma uttryck och upplägg där det är möjligt.',
  },
  {
    title: '4. Leverans och retur',
    description:
      'Färdiga bilder levereras digitalt. Kunden betalar returfrakten och skickar med en förbetald returetikett.',
  },
]

export default function ProductPhotography() {
  const ogImage = getPageOgImage('productPhotography')
  const productServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Produktfotografering i Kungälv',
    serviceType: 'Product photography',
    description:
      'Produktfotografering för webbshop, katalog och marknadsföring med inlämning, inskick eller fotografering på plats.',
    url: 'https://www.svendsenphotography.com/produktfotografering/',
    provider: businessReference,
    areaServed: BUSINESS.serviceAreas.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
  }

  return (
    <>
      <SEO
        title="Produktfotografering i Kungälv | Svendsén Photography"
        description="Produktfotografering för webbshop, katalog och marknadsföring. Lämna eller skicka mindre produkter, eller boka fotografering på plats."
        url="https://www.svendsenphotography.com/produktfotografering/"
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={productServiceJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Produktfotografering',
            url: 'https://www.svendsenphotography.com/produktfotografering/',
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f5f5f2] px-3 pb-10 pt-24 text-textPrimary sm:px-4 md:px-5 md:pt-28 lg:px-6">
        <header className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-8 rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-3xl py-3 md:py-5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Webbshop, katalog och marknadsföring
            </p>
            <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Produktfotografering i Kungälv
            </h1>
            <p className="text-lg leading-relaxed text-textSecondary md:text-xl">
              Tydliga produktbilder, samlingsbilder och bilder i användning för
              företag som behöver ett enhetligt material till digitala och
              tryckta kanaler.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {productFacts.map((fact) => (
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
              image={productInUse}
              alt="For Pros-pensel fotograferad i användning"
              sizes="(min-width: 1024px) 590px, 100vw"
              className="aspect-[3/2] w-full object-cover lg:h-[34rem] lg:aspect-auto"
            />
          </figure>
        </header>

        <section className="mx-auto mb-12 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Produktbilder efter användningsområde
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Bildlistan anpassas efter sortiment, kanal och uttryck. Ett
              uppdrag kan bestå av enhetliga produktbilder, flera vinklar eller
              ett mindre urval av miljöbilder.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {productImageTypes.map((type) => (
              <InfoCard
                key={type.title}
                title={type.title}
                description={type.description}
                className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
                titleClassName="mb-2 text-xl"
                descriptionClassName="text-sm leading-relaxed"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 rounded-[1.75rem] border border-black/6 bg-white p-4 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:grid-cols-2 md:p-5">
          <figure className="overflow-hidden rounded-[1.5rem] bg-[#f8f8f5]">
            <ResponsiveImage
              image={brushesOnWhite}
              alt="Fyra For Pros-penslar fotograferade på ljus bakgrund"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-[25rem] w-full object-cover md:h-[32rem]"
              loading="lazy"
            />
          </figure>
          <figure className="overflow-hidden rounded-[1.5rem] bg-[#f8f8f5]">
            <ResponsiveImage
              image={productCollection}
              alt="Handskar och tejpprodukter fotograferade som samlingsbild"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-[25rem] w-full object-cover md:h-[32rem]"
              loading="lazy"
            />
          </figure>
        </section>

        <section className="mx-auto mb-12 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Så går produktfotograferingen till
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              En tydlig bildlista före fotograferingen gör pris, uttryck och
              leverans enklare att planera.
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
              Startpaket och extra bilder
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Startpaketet kostar{' '}
              <strong>{PRICING.business.productStartFrom}</strong> och omfattar
              upp till <strong>{PRICING.business.productIncludedImages}</strong>{' '}
              färdiga bilder. Det kan vara en bild per produkt eller flera
              vinklar av färre produkter, inom samma enkla ljussättning och
              bildstil.
            </p>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Ytterligare färdiga bilder inom samma upplägg kostar{' '}
              <strong>{PRICING.business.productExtraImageFrom}</strong>. Ny
              ljussättning, miljöbilder, fotografering på plats eller mer
              komplexa produkter offereras separat.
            </p>
            <p className="font-semibold text-textPrimary">
              {PRICING.business.taxNote}
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Redigering och leverans
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Grundläggande justering av exponering, färg, vitbalans,
              beskärning och upprätning ingår, tillsammans med borttagning av
              mindre dammfläckar i bilden. Bilderna levereras som högupplöst och
              webbanpassad JPG.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Friläggning, transparent bakgrund, omfattande rengöring,
              avancerad retusch, montage och borttagning av repor eller
              produktfel ingår inte. Andra format bedöms efter överenskommelse.
            </p>
          </div>
        </section>

        <section className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
              Inlämning, inskick eller fotografering på plats
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Produktlogistik och större produkter
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Produkter upp till 70 × 70 × 70 cm kan lämnas eller skickas.
              Kunden ansvarar för frakten till mig, betalar returfrakten och
              skickar med en förbetald returetikett.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Större eller svårtransporterade produkter kan fotograferas hos
              kunden efter offert. Utanför Kungälv tillkommer reseersättning på{' '}
              {PRICING.estimator.travelPerRoundTripMil} per mil för hela tur-
              och retursträckan samt eventuell övernattning.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h3 className="mb-3 text-xl font-semibold text-textPrimary">
              Underlag för offert
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-textSecondary">
              Beskriv antal produkter, önskade bilder eller vinklar, mått,
              bakgrund, användning och om produkterna ska lämnas, skickas eller
              fotograferas på plats.
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

        <section className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <figure className="overflow-hidden rounded-[1.5rem] bg-[#f8f8f5]">
            <ResponsiveImage
              image={casePreview}
              alt="For Pros måleriverktyg fotograferade som produktserie"
              sizes="(min-width: 1024px) 500px, 100vw"
              className="h-[24rem] w-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="py-2 md:py-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
              Verkligt uppdrag
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Produktbilder för For Pros
            </h2>
            <p className="mb-6 text-base leading-relaxed text-textSecondary">
              Samarbetet med For Pros har över tid omfattat cirka 50 produkt-
              och samlingsbilder. Se ett urval av rena produktbilder och en
              bild där produkten används.
            </p>
            <LinkButton
              to="/produktfotografering/for-pros/"
              variant="outline"
              size="md"
              subVariant="rounded"
              className="font-semibold"
            >
              Se For Pros-caset
            </LinkButton>
          </div>
        </section>

        <CTASection
          className="mx-auto max-w-6xl rounded-[1.75rem] border border-black/6 bg-white"
          title="Behöver företaget nya produktbilder?"
          description="Skicka en kort bildlista med antal produkter, önskade vinklar och användningsområde, så återkommer jag med ett upplägg och en offert."
          actions={[
            { to: '/contact/', label: 'Skicka offertförfrågan' },
            { to: '/services/', label: 'Se alla tjänster', variant: 'outline' },
          ]}
        />
      </main>
    </>
  )
}
