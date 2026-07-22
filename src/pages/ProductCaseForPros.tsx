import React from 'react'

import brushSeries from '@/assets/cases/FoeretagForPros/DSC06483-Redigera-2.jpg?responsive'
import stackedBrushes from '@/assets/cases/FoeretagForPros/DSC06485.jpg?responsive'
import glovesAndTape from '@/assets/cases/FoeretagForPros/DSC06600.jpg?responsive'
import paintingCollection from '@/assets/cases/FoeretagForPros/DSC06616.jpg?responsive'
import brushInUse from '@/assets/cases/FoeretagForPros/DSC07445.jpg?responsive'
import brushesAndRollers from '@/assets/cases/FoeretagForPros/DSC07805.jpg?responsive'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { businessReference } from '@/config/seo'
import { getImageSrc } from '@/utils/responsiveImages'
import { toAbsoluteUrl } from '@/utils/utils'

const caseFacts = [
  {
    title: 'Produkter lämnades in',
    description:
      'Produkterna lämnades till fotografen och kunde fotograferas i ett planerat och enhetligt upplägg.',
  },
  {
    title: 'Cirka 50 bilder över tid',
    description:
      'Samarbetet har över tid omfattat ungefär 50 produkt- och samlingsbilder.',
  },
  {
    title: 'Produkt och användning',
    description:
      'Bildmaterialet omfattar både rena produktbilder, sammansatta produktgrupper och en bild där penseln används.',
  },
]

const galleryImages = [
  {
    image: stackedBrushes,
    alt: 'For Pros-penslar arrangerade som en produktgrupp på ljus bakgrund',
  },
  {
    image: glovesAndTape,
    alt: 'Handskar och tejpprodukter fotograferade som produktgrupp',
  },
  {
    image: paintingCollection,
    alt: 'Måleriverktyg och tillbehör fotograferade i en samlingsbild',
  },
  {
    image: brushesAndRollers,
    alt: 'Penslar, rollers och tejp fotograferade på ljus bakgrund',
  },
]

export default function ProductCaseForPros() {
  const ogImage = getPageOgImage('productCaseForPros')
  const caseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Produktfotografering för For Pros',
    description:
      'Ett produktfotocase med cirka 50 produkt- och samlingsbilder framtagna över tid för For Pros.',
    image: toAbsoluteUrl(getImageSrc(brushSeries)),
    mainEntityOfPage:
      'https://www.svendsenphotography.com/produktfotografering/for-pros/',
    author: businessReference,
  }

  return (
    <>
      <SEO
        title="Produktfotografering för For Pros | Case"
        description="Se produktbilder framtagna för For Pros: penslar, rollers, tejp och tillbehör fotograferade som produktserier, samlingsbilder och i användning."
        url="https://www.svendsenphotography.com/produktfotografering/for-pros/"
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={caseJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Produktfotografering',
            url: 'https://www.svendsenphotography.com/produktfotografering/',
          },
          {
            name: 'For Pros',
            url: 'https://www.svendsenphotography.com/produktfotografering/for-pros/',
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-24 text-textPrimary sm:px-4 md:px-5 md:pt-28 lg:px-6">
        <header className="mx-auto mb-10 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Produktfotocase · For Pros
            </p>
            <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Produktfotografering för For Pros
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              Ett återkommande produktfotouppdrag som över tid har omfattat
              cirka 50 produkt- och samlingsbilder av penslar, rollers, tejp,
              skydd och andra måleritillbehör.
            </p>
          </div>
        </header>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
            <ResponsiveImage
              image={brushSeries}
              alt="Fyra For Pros-penslar fotograferade på ljus bakgrund"
              className="aspect-[3/2] w-full object-cover"
              sizes="(min-width: 1024px) 620px, 100vw"
            />
          </figure>
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)] lg:self-start">
            <ResponsiveImage
              image={brushInUse}
              alt="For Pros-pensel fotograferad i användning"
              className="aspect-[3/2] w-full object-cover"
              sizes="(min-width: 1024px) 510px, 100vw"
            />
          </figure>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Ett bildmaterial som har vuxit över tid
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Produkterna lämnades till fotografen. Det gav möjlighet att bygga
              ett sammanhållet material med enskilda produkter, grupper av
              tillbehör och en bild där produkten visas i användning.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {caseFacts.map((fact) => (
              <InfoCard
                key={fact.title}
                title={fact.title}
                description={fact.description}
                className="bg-white p-6"
              />
            ))}
          </div>
        </section>

        <section
          aria-label="Produktbilder fotograferade för For Pros"
          className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryImages.map(({ image, alt }) => (
            <figure
              key={getImageSrc(image)}
              className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]"
            >
              <ResponsiveImage
                image={image}
                alt={alt}
                className="h-[24rem] w-full object-cover"
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                loading="lazy"
              />
            </figure>
          ))}
        </section>

        <CTASection
          className="rounded-[2.25rem] bg-white/82 lg:rounded-[3rem]"
          title="Behöver ni ett enhetligt produktmaterial?"
          description="På produktsidan finns pris, upplägg, logistik och information om rena produktbilder, samlingsbilder och miljöbilder."
          actions={[
            {
              to: '/produktfotografering/',
              label: 'Se produktfotografering',
            },
            {
              to: '/contact/',
              label: 'Skicka förfrågan',
              variant: 'outline',
            },
          ]}
        />
      </main>
    </>
  )
}
