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

const caseStudy = caseStudyBySlug['brollop-stenungsund']

const imageOrder = [
  'parochbarn.jpg',
  'brudgummenmedmarshalker.jpg',
  'detaljbildparethollerihander.jpg',
  'kyss-under-kyrklig-vigsel-stenungsund.jpg',
  'brudpar-i-lounge-stenungsbaden-hotell.jpg',
  'mingel-villa-vanahem-stenungsund.jpg',
  'paretihogvass.jpg',
  'paretskolarmedglas.jpg',
  'detaljbilddrinklista.jpg',
  'brollopsgast-villa-vanahem.jpg',
  'bordsdekoration-brollop-villa-vanahem.jpg',
  'brollopstarta-villa-vanahem.jpg',
  'tatuering-under-brollopsfest-villa-vanahem.jpg',
  'tatuerare-pa-brollopsfest-villa-vanahem.jpg',
  'dj-pa-brollopsfest-villa-vanahem.jpg',
] as const

const importedImages = import.meta.glob<ResponsiveImageAsset>(
  '../assets/cases/Rebecka&Aron/*.{jpg,jpeg,png}',
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
  'Rebecka och Aron tillsammans med sina två barn på Villa Vanahem',
  'Aron tillsammans med sina marshalker före vigseln',
  'Rebecka och Aron håller varandras tatuerade händer under vigseln',
  'Rebecka och Aron kysser varandra under den kyrkliga vigseln',
  'Rebecka och Aron i loungen på Stenungsbaden Hotell',
  'Bröllopsgäster under minglet på Villa Vanahem',
  'Rebecka och Aron bland vassen nära Villa Vanahem',
  'Rebecka och Aron skålar under bröllopsdagen',
  'Personlig drinklista under bröllopsfesten på Villa Vanahem',
  'Bröllopsgäst fotograferad i trädgården på Villa Vanahem',
  'Ros som bordsdekoration under bröllopsmiddagen',
  'Bröllopstårta på Villa Vanahem',
  'Gäst som blir tatuerad under bröllopsfesten',
  'Tatuerare med sina mallar under festen på Villa Vanahem',
  'Parets vän spelar som DJ under bröllopsfesten',
]

export default function CaseStenungsund() {
  const ogImage = getPageOgImage('weddingCaseStenungsund')
  const caseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rebecka och Arons heldagsbröllop i Stenungsund',
    description:
      'En hel bröllopsdag med film och foto, first look, kyrklig vigsel, Stenungsbaden, Villa Vanahem, porträtt vid vassen och fest.',
    image: caseImages
      .map((image) => toAbsoluteUrl(getImageSrc(image)))
      .filter(Boolean),
    mainEntityOfPage: PUBLIC_CANONICAL_URLS.weddingCaseStenungsund,
    author: businessReference,
    about: [
      { '@type': 'Place', name: 'Stenungsund' },
      { '@type': 'Place', name: 'Villa Vanahem' },
      { '@type': 'Place', name: 'Stenungsbaden Hotell' },
    ],
  }

  return (
    <>
      <SEO
        title="Heldagsbröllop i Stenungsund | Svendsén Photography"
        description="Rebecka och Arons bröllop med first look, kyrklig vigsel, Stenungsbaden, Villa Vanahem, porträtt vid vassen och en personlig kvällsfest."
        url={PUBLIC_CANONICAL_URLS.weddingCaseStenungsund}
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
            name: 'Bröllop i Stenungsund',
            url: PUBLIC_CANONICAL_URLS.weddingCaseStenungsund,
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-20 text-textPrimary sm:px-4 md:px-5 lg:px-6">
        <header className="mx-auto mb-8 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Stenungsund · Villa Vanahem
            </p>
            <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Rebecka & Arons heldagsbröllop i Stenungsund
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              {caseStudy?.intro}
            </p>
          </div>
        </header>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 lg:min-h-[34rem] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-1 gap-4 lg:grid-rows-2">
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
              <ResponsiveImage
                image={getImage(0)}
                alt="Rebecka och Aron med sina två barn på Villa Vanahem"
                className="h-[18rem] w-full object-cover lg:h-full"
                sizes="(min-width: 1024px) 360px, 100vw"
              />
            </figure>
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
              <ResponsiveImage
                image={getImage(3)}
                alt="Rebecka och Aron kysser varandra under vigseln"
                className="h-[18rem] w-full object-cover lg:h-full"
                sizes="(min-width: 1024px) 360px, 100vw"
              />
            </figure>
          </div>
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)] lg:h-full">
            <ResponsiveImage
              image={getImage(6)}
              alt="Rebecka och Aron bland vassen nära Villa Vanahem"
              className="block h-[24rem] w-full object-cover sm:h-[30rem] lg:h-full"
              sizes="(min-width: 1024px) 740px, 100vw"
            />
          </figure>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Från förberedelser till kyrklig vigsel
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Dagen började på Villa Vanahem, där Rebecka och Aron gjorde sig
              i ordning tillsammans med sina två barn. Före vigseln
              fotograferade och filmade jag deras first look. Därefter åkte vi
              vidare till kyrkan i Stenungsund för en varm och fin kyrklig
              vigsel.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <InfoCard
              title="Film och foto"
              description="Uppdraget följde hela dagen och kombinerade stillbilder med film från first look, vigsel, mingel, middag och fest."
              className="bg-white p-6"
            />
            <InfoCard
              title="Familjen"
              description="Parets två barn var med under förberedelserna på Villa Vanahem och blev en naturlig del av berättelsen om dagen."
              className="bg-white p-6"
            />
            <InfoCard
              title="Vigseln"
              description="Efter first look åkte paret vidare till kyrkan i Stenungsund för en personlig kyrklig vigsel."
              className="bg-white p-6"
            />
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-white px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:rounded-[3rem]">
          <figure className="overflow-hidden rounded-[1.75rem] bg-custom-beige">
            <ResponsiveImage
              image={getImage(4)}
              alt="Rebecka och Aron i loungen på Stenungsbaden Hotell"
              className="h-[24rem] w-full object-cover"
              sizes="(min-width: 1024px) 620px, 100vw"
              loading="lazy"
            />
          </figure>
          <div className="self-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Stenungsbaden
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              När det uppställda fick bli spontant
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Efter vigseln checkade Rebecka och Aron in på Stenungsbaden
              Hotell tillsammans med några av gästerna. När en bild först
              kändes lite för uppställd lät vi ögonblicket bli friare i stället.
              Det resulterade i en spontan bild som passade dem och dagens
              känsla mycket bättre.
            </p>
          </div>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Tillbaka på Villa Vanahem
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Mingel och en snabb promenad till vassen
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              På Villa Vanahem möttes vi av det trevliga värdparet och
              minglet kunde börja. Efter en stund frågade jag om Rebecka och
              Aron ville ta några bilder på bara dem. Vassen nära villan blev
              en enkel avstickare som gav lugna, naturliga porträtt utan att de
              behövde vara borta från gästerna särskilt länge.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <InfoCard
              title="Bildkänslan"
              description={caseStudy?.focus}
              className="bg-white p-6"
            />
            <InfoCard
              title="Upplevelsen"
              description={caseStudy?.experience}
              className="bg-white p-6"
            />
            <InfoCard
              title="Porträtten"
              description="Vassen låg nära festen och gjorde det möjligt att skapa en egen stund för paret mitt i ett levande mingel."
              className="bg-white p-6"
            />
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-white px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:rounded-[3rem]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Kvällsfesten
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Tatueringar, DJ och grillad pizza
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Efter den goda middagen fortsatte kvällen med flera personliga
              inslag. Gästerna erbjöds gratis tatueringar från mallar som
              tatuerarna hade tagit med sig, och en vän till paret spelade
              musik som DJ. För dem som stannade sent avslutades kvällen med
              grillad pizza.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <figure className="overflow-hidden rounded-[1.75rem] bg-custom-beige">
              <ResponsiveImage
                image={getImage(12)}
                alt="Gäst som blir tatuerad under bröllopsfesten"
                className="h-[22rem] w-full object-cover"
                sizes="(min-width: 1024px) 300px, 50vw"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden rounded-[1.75rem] bg-custom-beige">
              <ResponsiveImage
                image={getImage(14)}
                alt="Parets vän spelar som DJ under bröllopsfesten"
                className="h-[22rem] w-full object-cover"
                sizes="(min-width: 1024px) 300px, 50vw"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section className="mx-auto mb-14 max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Bildberättelsen
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              En hel dag med plats för det oväntade
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Från familjens förberedelser och vigselns närhet till porträtten,
              detaljerna och festens överraskningar. Heldagsfotograferingen gav
              utrymme att bevara både det planerade och allt det som bara kunde
              hända där och då.
            </p>
          </div>

          <div
            aria-label="Bildurval från Rebecka och Arons bröllop i Stenungsund"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {caseImages.map((image, index) => (
              <figure
                key={getImageSrc(image)}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]"
              >
                <ResponsiveImage
                  image={image}
                  alt={
                    galleryAlts[index] ??
                    `Bröllopsbild från Stenungsund ${index + 1}`
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
          title="Vill ni dokumentera hela er bröllopsdag?"
          description="På bröllopssidan kan ni jämföra upplägg för olika delar av dagen och skicka en förfrågan om det som passar er."
          actions={[
            { to: '/weddings/', label: 'Jämför bröllopspaket' },
            {
              to: '/brollop/',
              label: 'Fler verkliga bröllop',
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
