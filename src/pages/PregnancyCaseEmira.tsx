import React from 'react'

import fallenTreePortrait from '@/assets/cases/GravidEmira/gravidportratt-fallet-trad-kode.jpg?responsive'
import coupleByTree from '@/assets/cases/GravidEmira/gravidpar-vid-fallet-trad-kode.jpg?responsive'
import coupleKiss from '@/assets/cases/GravidEmira/gravidpar-kyss-vid-fallet-trad-kode.jpg?responsive'
import meadowPortrait from '@/assets/cases/GravidEmira/gravidfoto-pa-ang-kode.jpg?responsive'
import tallGrassPortrait from '@/assets/cases/GravidEmira/gravidfotografering-hogt-gras-kode.jpg?responsive'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { PUBLIC_CANONICAL_URLS } from '@/config/publicRoutes'
import { businessReference } from '@/config/seo'
import { getImageSrc } from '@/utils/responsiveImages'
import { toAbsoluteUrl } from '@/utils/utils'

const caseFacts = [
  {
    title: 'Gravid i vecka 37',
    description:
      'Platsen valdes för att Emira skulle få naturbilder utan att behöva gå långt från bilen.',
  },
  {
    title: 'Cirka en timme',
    description:
      'Fotograferingen gav tid för både porträtt av Emira, bilder med partnern och detaljer med fokus på gravidmagen.',
  },
  {
    title: 'Äng, högt gräs och träd',
    description:
      'På ett litet område kunde vi skapa variation med ängen, det höga gräset och ett fallet träd.',
  },
]

const galleryImages = [
  {
    image: meadowPortrait,
    alt: 'Emira fotograferad på en äng under sin gravidfotografering i Kode',
  },
  {
    image: coupleKiss,
    alt: 'Gravidpar vid ett fallet träd utanför Kode',
  },
  {
    image: coupleByTree,
    alt: 'Emira och hennes partner tillsammans vid det fallna trädet',
  },
]

export default function PregnancyCaseEmira() {
  const ogImage = getPageOgImage('pregnancyCaseEmira')
  const caseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Gravidfotografering i Kode nära Kungälv',
    description:
      'Följ Emiras gravidfotografering i vecka 37 bland ängar, högt gräs och ett fallet träd nära Lunnagården utanför Kode.',
    image: toAbsoluteUrl(getImageSrc(tallGrassPortrait)),
    mainEntityOfPage: PUBLIC_CANONICAL_URLS.pregnancyCaseEmira,
    author: businessReference,
  }

  return (
    <>
      <SEO
        title="Gravidfotografering i Kode nära Kungälv | Emira"
        description="Se Emiras gravidfotografering i vecka 37 nära Kode och läs hur vi anpassade plats, tempo och porträtt efter en fotografering sent i graviditeten."
        url={PUBLIC_CANONICAL_URLS.pregnancyCaseEmira}
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={caseJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: PUBLIC_CANONICAL_URLS.home },
          {
            name: 'Familjefotografering',
            url: PUBLIC_CANONICAL_URLS.familyPhotography,
          },
          {
            name: 'Gravidfotografering i Kode',
            url: PUBLIC_CANONICAL_URLS.pregnancyCaseEmira,
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-24 text-textPrimary sm:px-4 md:px-5 md:pt-28 lg:px-6">
        <header className="mx-auto mb-10 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Gravidfotografering · Kode nära Kungälv
            </p>
            <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Gravidfotografering i Kode nära Kungälv
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              Emira ville föreviga graviditeten i vecka 37 med naturen som
              bakgrund. Under en tidig kväll fotograferade vi henne och hennes
              partner bland ängar, högt gräs och ett fallet träd nära
              Lunnagården utanför Kode.
            </p>
          </div>
        </header>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 lg:h-[36rem] lg:grid-cols-[1.1fr_0.9fr]">
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)] lg:h-full">
            <ResponsiveImage
              image={meadowPortrait}
              alt="Emira fotograferad på en äng under sin gravidfotografering i Kode"
              pictureClassName="lg:h-full lg:w-full"
              className="aspect-[3/2] w-full object-cover lg:h-full lg:aspect-auto"
              sizes="(min-width: 1024px) 620px, 100vw"
            />
          </figure>
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)] lg:h-full">
            <ResponsiveImage
              image={fallenTreePortrait}
              alt="Gravidporträtt av Emira sittande vid ett fallet träd nära Kode"
              pictureClassName="lg:h-full lg:w-full"
              className="aspect-[3/2] w-full object-cover lg:h-full lg:aspect-auto"
              sizes="(min-width: 1024px) 510px, 100vw"
            />
          </figure>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Gravidfoto utomhus i vecka 37
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-textSecondary">
              <p>
                Emira hade inte fotograferats professionellt tidigare och var
                nervös inför kameran. Hon visste att hon ville ha gravidbilder
                och tyckte om tanken på gräs och natur, men kom utan en färdig
                lista med poser eller motiv.
              </p>
              <p>
                Jag föreslog en plats som jag länge hade velat fotografera vid.
                Den låg nära bilen och gjorde det möjligt att arbeta på ett
                begränsat område, vilket passade bra när det var ansträngande
                för Emira att gå längre sträckor sent i graviditeten.
              </p>
              <p>
                Jag hjälpte till med händer, placering och några enkla poser,
                men lät också spontana idéer växa fram efter miljön. När vi väl
                kom ut på plats släppte nervositeten mer och mer.
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

        <section className="mx-auto mb-14 grid max-w-6xl gap-6 rounded-[2.25rem] bg-white px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:rounded-[3rem]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Väder och planering
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Från regn till klarare kvällsljus
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Det regnade före fotograferingen och det var nära att vi behövde
              ställa in. Vi valde att åka under ett uppehåll, och under den
              tidiga kvällen klarnade vädret upp.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Emira valde sina kläder själv. Jag bad henne även ta med en fin
              pläd ifall vi skulle använda det fallna trädet som sittplats. På
              så sätt kunde fotograferingen anpassas efter både platsen och hur
              hon kände sig under timmen.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[1.75rem]">
            <ResponsiveImage
              image={tallGrassPortrait}
              alt="Emira fotograferad bland högt gräs när kvällsljuset klarnade upp"
              className="aspect-[4/5] w-full object-cover"
              sizes="(min-width: 1024px) 620px, 100vw"
              loading="lazy"
            />
          </figure>
        </section>

        <section
          aria-label="Bilder från Emiras gravidfotografering i Kode"
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

        <section className="mx-auto mb-14 max-w-4xl rounded-[2.25rem] bg-custom-beige px-5 py-8 text-center shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10">
          <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
            En bildserie som kändes rätt för Emira
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-textSecondary">
            Efter leveransen frågar jag alltid om kunden vill justera något i
            känslan eller redigeringen. Emira var nöjd med bildserien som den
            var – och för mig blev porträtten ute på ängen några av
            fotograferingens favoriter.
          </p>
        </section>

        <CTASection
          className="rounded-[2.25rem] bg-white/82 lg:rounded-[3rem]"
          title="Vill ni föreviga graviditeten?"
          description="På familjesidan kan ni läsa om pris, upplägg och hur vi väljer en plats och ett tempo som passar er."
          actions={[
            {
              to: '/familjefotografering/',
              label: 'Se gravid- och familjefotografering',
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
