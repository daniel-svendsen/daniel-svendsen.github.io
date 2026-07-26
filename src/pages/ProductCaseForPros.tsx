import React from 'react'

import brushSeries from '@/assets/cases/FoeretagForPros/DSC06483-Redigera-2.jpg?responsive'
import stackedBrushes from '@/assets/cases/FoeretagForPros/DSC06485.jpg?responsive'
import glovesAndTape from '@/assets/cases/FoeretagForPros/DSC06600.jpg?responsive'
import paintingCollection from '@/assets/cases/FoeretagForPros/DSC06616.jpg?responsive'
import brushInUse from '@/assets/cases/FoeretagForPros/DSC07445.jpg?responsive'
import brushesAndRollers from '@/assets/cases/FoeretagForPros/DSC07805.jpg?responsive'
import forprosPoster from '@/assets/movies/img-optimized.jpg?responsive-poster'
import forprosVideo from '@/assets/movies/forpros1.mp4'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { PUBLIC_CANONICAL_URLS } from '@/config/publicRoutes'
import { businessReference } from '@/config/seo'
import { getImageSrc, getResponsiveImageSrc } from '@/utils/responsiveImages'
import { toAbsoluteUrl } from '@/utils/utils'

const caseFacts = [
  {
    title: 'Heldag på arbetsplats',
    description:
      'En heldag med både fotografering och filmning genomfördes vid ett nybygge nära Västra Frölunda.',
  },
  {
    title: 'Fler än tio produkttillfällen',
    description:
      'Det återkommande samarbetet har dessutom omfattat fler än tio separata tillfällen med produktfotografering.',
  },
  {
    title: 'Bild och film för verksamheten',
    description:
      'Leveransen innehåller produktbilder, miljöbilder och film som For Pros kan använda i verksamheten och på hemsidan.',
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
      'Ett återkommande samarbete med produktbilder, miljöbilder och film framtagna för For Pros verksamhet och hemsida.',
    image: toAbsoluteUrl(getImageSrc(brushSeries)),
    mainEntityOfPage: PUBLIC_CANONICAL_URLS.productCaseForPros,
    author: businessReference,
  }

  return (
    <>
      <SEO
        title="Produktfotografering för For Pros | Case"
        description="Se bilder och film framtagna för For Pros genom en heldag på arbetsplats och fler än tio tillfällen med produktfotografering."
        url={PUBLIC_CANONICAL_URLS.productCaseForPros}
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={caseJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: PUBLIC_CANONICAL_URLS.home },
          {
            name: 'Produktfotografering',
            url: PUBLIC_CANONICAL_URLS.productPhotography,
          },
          {
            name: 'For Pros',
            url: PUBLIC_CANONICAL_URLS.productCaseForPros,
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
              Ett återkommande samarbete med produktbilder, miljöbilder och film
              för For Pros verksamhet och hemsida.
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
              Från arbetsplats till produktbord
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-textSecondary">
              <p>
                Samarbetet har haft två tydliga delar. Under en heldag vid ett
                nybygge nära Västra Frölunda fotograferade och filmade jag
                verksamheten i en verklig arbetsmiljö. Där kunde produkterna
                visas i sitt sammanhang och materialet få mer rörelse och
                närvaro.
              </p>
              <p>
                Därutöver har jag genomfört fler än tio separata
                produktfotograferingar. Beroende på tillfälle har materialet
                omfattat bland annat sågblad, tejp, penslar, rollers och andra
                tillbehör, både som rena produktbilder och i sammansatta
                grupper.
              </p>
              <p>
                En återkommande utmaning är positioneringen, särskilt när
                produkten redan är vit. Då behöver placering, ljus och bakgrund
                samspela så att produktens form och kanter förblir tydliga.
              </p>
            </div>
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

        <section className="mx-auto mb-14 grid max-w-6xl gap-8 rounded-[2.25rem] bg-white px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:rounded-[3rem]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Film från uppdraget
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Verksamheten i en verklig miljö
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Filmen spelades in under heldagen vid nybygget nära Västra
              Frölunda. Målet var att ge For Pros ett rörligt material som visar
              både miljön, arbetet och produkterna i användning.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] bg-black shadow-[0_34px_90px_-58px_rgba(31,41,55,0.7)]">
            <video
              controls
              preload="metadata"
              poster={getResponsiveImageSrc(forprosPoster, 640)}
              className="aspect-video h-full w-full"
            >
              <source src={forprosVideo} type="video/mp4" />
              Din webbläsare stödjer inte videoformatet.
            </video>
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
