import React from 'react'

import familyPortrait from '@/assets/cases/EventladanPortraitsandFamily/familjefotografering-eventladan-romelanda.jpg?responsive'
import dogPortrait from '@/assets/cases/EventladanPortraitsandFamily/hundportratt-eventladan-romelanda.jpg?responsive'
import couplePortrait from '@/assets/cases/EventladanPortraitsandFamily/parfotografering-eventladan-romelanda.jpg?responsive'
import coupleWithDog from '@/assets/cases/EventladanPortraitsandFamily/parportratt-med-hund-eventladan.jpg?responsive'
import coupleByWindow from '@/assets/cases/EventladanPortraitsandFamily/parportratt-vid-fonster-eventladan.jpg?responsive'
import siblingsChristmas from '@/assets/cases/EventladanPortraitsandFamily/syskonfotografering-jultema-eventladan.jpg?responsive'
import siblingsWithTricycle from '@/assets/cases/EventladanPortraitsandFamily/syskonfotografering-trehjuling-eventladan.jpg?responsive'
import siblingsByWindow from '@/assets/cases/EventladanPortraitsandFamily/syskonportratt-vid-fonster-eventladan.jpg?responsive'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { businessReference } from '@/config/seo'
import { getImageSrc } from '@/utils/responsiveImages'
import { toAbsoluteUrl } from '@/utils/utils'

const portraitTypes = [
  {
    title: 'Familj och syskon',
    description:
      'Fotograferingen gav plats för både hela familjen och mindre konstellationer där barnens samspel fick stå i centrum.',
  },
  {
    title: 'Parporträtt',
    description:
      'Under samma fotografering skapade vi också lugna porträtt av de vuxna, både tillsammans och i det mjuka fönsterljuset.',
  },
  {
    title: 'Hunden som familjemedlem',
    description:
      'Familjens hund fick vara med i gemensamma bilder och fick dessutom ett eget porträtt som en del av samma serie.',
  },
]

const galleryImages = [
  {
    image: coupleByWindow,
    alt: 'Parporträtt i fönsterljus på Eventladan i Romelanda',
  },
  {
    image: couplePortrait,
    alt: 'Par fotograferat framför ett stort fönster på Eventladan',
  },
  {
    image: siblingsByWindow,
    alt: 'Två syskon fotograferade vid fönstret på Eventladan',
  },
  {
    image: siblingsWithTricycle,
    alt: 'Syskonporträtt med en äldre trehjuling på Eventladan',
  },
  {
    image: dogPortrait,
    alt: 'Hundporträtt fotograferat på Eventladan i Romelanda',
  },
]

export default function FamilyCaseEventladan() {
  const ogImage = getPageOgImage('familyCaseEventladan')
  const caseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Familjefotografering på Eventladan i Romelanda',
    description:
      'Ett verkligt familjefotouppdrag på Eventladan med familjebilder, syskonporträtt, parbilder, hundporträtt och julbilder.',
    image: toAbsoluteUrl(getImageSrc(familyPortrait)),
    mainEntityOfPage:
      'https://www.svendsenphotography.com/familjefotografering/eventladan-romelanda/',
    author: businessReference,
  }

  return (
    <>
      <SEO
        title="Familjefotografering på Eventladan | Romelanda"
        description="Se en familjefotografering på Eventladan i Romelanda nära Kungälv med familjebilder, syskonporträtt, parbilder, hundporträtt och julbilder."
        url="https://www.svendsenphotography.com/familjefotografering/eventladan-romelanda/"
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={caseJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Familjefotografering',
            url: 'https://www.svendsenphotography.com/familjefotografering/',
          },
          {
            name: 'Eventladan i Romelanda',
            url: 'https://www.svendsenphotography.com/familjefotografering/eventladan-romelanda/',
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-24 text-textPrimary sm:px-4 md:px-5 md:pt-28 lg:px-6">
        <header className="mx-auto mb-10 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Eventladan · Romelanda nära Kungälv
            </p>
            <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Familjefotografering på Eventladan i Romelanda
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              En familj ville använda samma fotografering till familjebilder,
              syskonporträtt, parbilder och ett eget porträtt av hunden. Under
              den hyrda tiden skapade vi både julbilder och mer tidlösa
              porträtt i Eventladans karaktärsfulla miljö.
            </p>
          </div>
        </header>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 lg:min-h-[36rem] lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)] lg:h-full">
            <ResponsiveImage
              image={familyPortrait}
              alt="Familj fotograferad vid ett stort fönster på Eventladan i Romelanda"
              className="aspect-[4/5] w-full object-cover lg:h-full lg:aspect-auto"
              sizes="(min-width: 1024px) 510px, 100vw"
            />
          </figure>
          <div className="grid grid-cols-1 gap-4 lg:grid-rows-2">
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
              <ResponsiveImage
                image={siblingsChristmas}
                alt="Två syskon i ett julinspirerat porträtt på Eventladan"
                className="h-[20rem] w-full object-cover lg:h-full"
                sizes="(min-width: 1024px) 620px, 100vw"
              />
            </figure>
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
              <ResponsiveImage
                image={coupleWithDog}
                alt="Parporträtt med familjens hund på Eventladan"
                className="h-[20rem] w-full object-cover lg:h-full"
                sizes="(min-width: 1024px) 620px, 100vw"
              />
            </figure>
          </div>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Flera sorters porträtt under samma fotografering
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              När en lokal hyrs för fotografering går tiden att planera så att
              familjen får en varierad bildserie. Här använde vi fönsterljuset,
              den rustika miljön och en juluppbyggnad för att skapa flera uttryck
              utan att byta plats.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {portraitTypes.map((type) => (
              <InfoCard
                key={type.title}
                title={type.title}
                description={type.description}
                className="bg-white p-6"
              />
            ))}
          </div>
        </section>

        <section
          aria-label="Bilder från familjefotograferingen på Eventladan"
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
          title="Vill ni skapa en egen familjeserie?"
          description="På familjesidan kan ni läsa om pris, upplägg och hur vi väljer en plats som passar er och den känsla ni vill ha i bilderna."
          actions={[
            {
              to: '/familjefotografering/',
              label: 'Se familjefotografering',
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
