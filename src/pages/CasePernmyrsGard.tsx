import React from 'react'

import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { PUBLIC_CANONICAL_URLS } from '@/config/publicRoutes'
import { businessReference } from '@/config/seo'
import { caseStudyBySlug } from '@/data/cases'
import {
  getImageSrc,
  type ResponsiveImageAsset,
} from '@/utils/responsiveImages'
import { toAbsoluteUrl } from '@/utils/utils'

const caseStudy = caseStudyBySlug['brollop-pernmyrs-gard-kungalv']

const imageOrder = [
  'brudpar-vid-ladan-pernmyrs-gard-kungalv.jpg',
  'brudpar-pa-ang-pernmyrs-gard-kungalv.jpg',
  'brudpar-pa-skogsstig-pernmyrs-gard-kungalv.jpg',
  'portrattpromenad-pernmyrs-gard-kungalv.jpg',
  'brudpar-bland-ormbunkar-pernmyrs-gard.jpg',
  'brollopsmingel-utanfor-ladan-pernmyrs-gard.jpg',
  'borgerlig-vigsel-pa-ang-pernmyrs-gard.jpg',
  'kyss-under-vigsel-pernmyrs-gard.jpg',
  'brollopslada-dukning-pernmyrs-gard.jpg',
  'brollopsskylt-mingel-middag-fest.jpg',
  'grillning-till-brollopsmiddag-pernmyrs-gard.jpg',
  'detalj-av-brollopsdukning-pernmyrs-gard.jpg',
  'mat-till-brollopsmiddag-pernmyrs-gard.jpg',
  'servering-under-brollopsmiddag-pernmyrs-gard.jpg',
  'grillad-mat-till-brollopsmiddag-pernmyrs-gard.jpg',
  'brollopsgaster-i-ladan-pernmyrs-gard.jpg',
  'skal-under-brollopsmiddag-pernmyrs-gard.jpg',
  'hannes-helena-under-brollopsmiddagen.jpg',
  'brollopsbuffe-pernmyrs-gard.jpg',
  'gastbok-i-ladan-pernmyrs-gard.jpg',
] as const

const importedImages = import.meta.glob<ResponsiveImageAsset>(
  '../assets/cases/Hannes&Helena/*.{jpg,jpeg,png}',
  {
    eager: true,
    import: 'default',
    query: '?responsive',
  },
)

const caseImages = imageOrder
  .map((fileName) => {
    const entry = Object.entries(importedImages).find(([path]) =>
      path.endsWith(`/${fileName}`),
    )

    return entry?.[1]
  })
  .filter((image): image is ResponsiveImageAsset => Boolean(image))

const getImage = (index: number) => caseImages[index] ?? caseImages[0]

const galleryAlts = [
  'Hannes och Helena på en äng vid Pernmyrs Gård',
  'Hannes och Helena på en skogsstig före vigseln',
  'Brudparet under porträttpromenaden vid Pernmyrs Gård',
  'Brudparet bland ormbunkar under promenaden',
  'Gäster som minglar utanför ladan på Pernmyrs Gård',
  'Hannes och Helena under den borgerliga vigseln på ängen',
  'Brudparet kysser varandra under vigseln',
  'Den utsmyckade ladan dukad inför bröllopsmiddagen',
  'Skylt med mingel, lycka, skål, middag och fest',
  'Vänner som grillar maten till bröllopsmiddagen',
  'Detalj av dukningen inför middagen',
  'Upplagd mat till bröllopsmiddagen',
  'Matservering som Hannes och vännerna förberett',
  'Grillad mat skärs upp under bröllopsmiddagen',
  'Bröllopsgäster samlade vid långborden i ladan',
  'En skål under middagen på Pernmyrs Gård',
  'Hannes och Helena tillsammans med gästerna under middagen',
  'Buffé och servering under bröllopsmiddagen',
  'Gästbok framlagd på ett träfat i ladan',
]

export default function CasePernmyrsGard() {
  const ogImage = getPageOgImage('weddingCasePernmyrsGard')
  const caseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hannes och Helenas bröllop på Pernmyrs Gård i Kungälv',
    description:
      'Ett personligt bröllop på Pernmyrs Gård med porträttpromenad, mingel, borgerlig vigsel på ängen och middag i ladan.',
    image: caseImages
      .map((image) => toAbsoluteUrl(getImageSrc(image)))
      .filter(Boolean),
    mainEntityOfPage: PUBLIC_CANONICAL_URLS.weddingCasePernmyrsGard,
    author: businessReference,
    about: {
      '@type': 'Place',
      name: 'Pernmyrs Gård, Kungälv',
    },
  }

  return (
    <>
      <SEO
        title="Bröllop på Pernmyrs Gård | Svendsén Photography"
        description="Hannes och Helenas bröllop på Pernmyrs Gård i Kungälv med porträttpromenad, mingel, borgerlig vigsel på ängen och middag i ladan."
        url={PUBLIC_CANONICAL_URLS.weddingCasePernmyrsGard}
        image={ogImage.src}
        imageAlt={ogImage.alt}
        ogType="article"
        jsonLd={caseJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: PUBLIC_CANONICAL_URLS.home },
          {
            name: 'Bröllop jag fotograferat',
            url: PUBLIC_CANONICAL_URLS.weddingCases,
          },
          {
            name: 'Pernmyrs Gård',
            url: PUBLIC_CANONICAL_URLS.weddingCasePernmyrsGard,
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-20 text-textPrimary sm:px-4 md:px-5 lg:px-6">
        <header className="mx-auto mb-8 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Pernmyrs Gård · Kungälv
            </p>
            <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Hannes & Helenas bröllop på Pernmyrs Gård
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              {caseStudy?.intro}
            </p>
          </div>
        </header>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 lg:min-h-[34rem] lg:grid-cols-[1.2fr_0.8fr]">
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)] lg:h-full">
            <ResponsiveImage
              image={getImage(0)}
              alt="Hannes och Helena vid den röda ladan på Pernmyrs Gård"
              pictureClassName="lg:h-full lg:w-full"
              className="h-[24rem] w-full object-cover sm:h-[30rem] lg:h-full"
              sizes="(min-width: 1024px) 740px, 100vw"
            />
          </figure>
          <div className="grid grid-cols-1 gap-4 lg:grid-rows-2">
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
              <ResponsiveImage
                image={getImage(6)}
                alt="Hannes och Helena under den borgerliga vigseln på ängen"
                pictureClassName="lg:h-full lg:w-full"
                className="h-[18rem] w-full object-cover lg:h-full"
                sizes="(min-width: 1024px) 360px, 100vw"
              />
            </figure>
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
              <ResponsiveImage
                image={getImage(8)}
                alt="Den dukade ladan på Pernmyrs Gård"
                pictureClassName="lg:h-full lg:w-full"
                className="h-[18rem] w-full object-cover lg:h-full"
                sizes="(min-width: 1024px) 360px, 100vw"
              />
            </figure>
          </div>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              En porträttpromenad innan gästerna kom
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Gårdens ängar, skogsstigar och den röda ladan gav flera olika
              miljöer på kort avstånd. Genom att ta porträtten före minglet fick
              Hannes och Helena en stund tillsammans, samtidigt som resten av
              fotograferingen kunde följa dagens händelser när de väl började.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <InfoCard
              title="Upplägget"
              description={caseStudy?.focus}
              className="bg-white p-6"
            />
            <InfoCard
              title="Vigseln"
              description="Den borgerliga vigseln hölls på ängen utanför ladan, omgiven av grönska och med gästerna nära paret."
              className="bg-white p-6"
            />
            <InfoCard
              title="Känslan"
              description={caseStudy?.experience}
              className="bg-white p-6"
            />
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-white px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:rounded-[3rem]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Middagen
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Tre dagars förberedelser bakom maten
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Hannes arbetade som kökschef och hade förberett maten till
              gästerna under tre dagar. På bröllopsdagen hjälpte hans
              arbetskamrater till vid grillarna och med serveringen. Bland
              rätterna fanns grillad gös – en personlig del av dagen som också
              fick ta plats i bildberättelsen.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[1.75rem] bg-custom-beige">
            <ResponsiveImage
              image={getImage(11)}
              alt="Hannes arbetskamrater grillar maten till bröllopsmiddagen"
              className="h-[22rem] w-full object-cover"
              sizes="(min-width: 1024px) 620px, 100vw"
              loading="lazy"
            />
          </figure>
        </section>

        <section className="mx-auto mb-14 max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Bildberättelsen
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Från stilla porträtt till en levande middag
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Bildserien rör sig från den lugna promenaden och vigseln på ängen
              till minglet, maten och den varmt utsmyckade ladan. Tillsammans
              visar bilderna hur även några utvalda timmar kan ge en
              sammanhängande berättelse om bröllopsdagen.
            </p>
          </div>

          <div
            aria-label="Bildurval från Hannes och Helenas bröllop på Pernmyrs Gård"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {caseImages.slice(1).map((image, index) => (
              <figure
                key={getImageSrc(image)}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]"
              >
                <ResponsiveImage
                  image={image}
                  alt={
                    galleryAlts[index] ??
                    `Bröllopsbild från Pernmyrs Gård ${index + 2}`
                  }
                  className="h-[20rem] w-full object-cover"
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>

        <CTASection
          className="rounded-[2.25rem] bg-white/82 lg:rounded-[3rem]"
          title="Planerar ni bröllop i Kungälv?"
          description="Jag anpassar fotograferingen efter de delar av dagen som är viktigast för er, från en kortare vigsel till ett längre upplägg."
          actions={[
            {
              to: '/brollopsfotograf-kungalv/',
              label: 'Bröllopsfotografering i Kungälv',
            },
            {
              to: '/weddings/',
              label: 'Jämför paket och priser',
              variant: 'outline',
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
