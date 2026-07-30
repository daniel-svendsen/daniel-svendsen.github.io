import React from 'react'

import studioProfile from '@/assets/cases/PortrattMattiasTell/artistportratt-mattias-tell-profil-studio.jpg?responsive'
import studioHat from '@/assets/cases/PortrattMattiasTell/artistportratt-mattias-tell-hatt-studio.jpg?responsive'
import studioBackdrop from '@/assets/cases/PortrattMattiasTell/artistportratt-mattias-tell-studiobakgrund.jpg?responsive'
import pierWithDog from '@/assets/cases/PortrattMattiasTell/artistbild-mattias-tell-brygga-hund-arod.jpg?responsive'
import pierBlackAndWhite from '@/assets/cases/PortrattMattiasTell/artistbild-mattias-tell-brygga-svartvit-arod.jpg?responsive'
import outdoorPortrait from '@/assets/cases/PortrattMattiasTell/portratt-mattias-tell-arod-kode.jpg?responsive'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { PUBLIC_CANONICAL_URLS } from '@/config/publicRoutes'
import { businessReference } from '@/config/seo'
import { getImageSrc } from '@/utils/responsiveImages'
import { toAbsoluteUrl } from '@/utils/utils'

const SPOTIFY_ARTIST_URL =
  'https://open.spotify.com/artist/4ED8OpMu5pxWULUB3MpWj5'
const AEONS_SPOTIFY_URL =
  'https://open.spotify.com/track/5z3eypAJrwgQTmcgpkM6fT'

const caseFacts = [
  {
    title: 'Två fotograferingar',
    description:
      'En fotografering med studiobakgrund och blixtar följdes av en separat utomhusfotografering.',
  },
  {
    title: 'Studio och hav',
    description:
      'De två miljöerna gav både rena artistporträtt och mer berättande bilder från Aröd.',
  },
  {
    title: 'Bild till Spotify',
    description:
      'Bilden där Mattias går på bryggan med hunden blev omslag till låten Aeons.',
  },
]

const galleryImages = [
  {
    image: studioHat,
    alt: 'Artistporträtt av Mattias Tell med hatt mot studiobakgrund',
  },
  {
    image: studioProfile,
    alt: 'Svartvitt studioporträtt av Mattias Tell i profil',
  },
  {
    image: pierBlackAndWhite,
    alt: 'Svartvit artistbild av Mattias Tell och hunden på en brygga i Aröd',
  },
]

const externalLinkClass =
  'inline-flex h-11 items-center justify-center rounded-full bg-textPrimary px-5 text-base font-medium text-white transition-colors hover:bg-textPrimary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-highlight'

export default function PortraitCaseMattiasTell() {
  const ogImage = getPageOgImage('portraitCaseMattiasTell')
  const caseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Artistporträtt för Mattias Tell i Kungälv',
    description:
      'Ett porträttcase med studiobilder och artistbilder vid havet i Aröd, där en bild blev Spotify-omslag till låten Aeons.',
    image: toAbsoluteUrl(getImageSrc(pierWithDog)),
    mainEntityOfPage: PUBLIC_CANONICAL_URLS.portraitCaseMattiasTell,
    author: businessReference,
    about: {
      '@type': 'Person',
      name: 'Mattias Tell',
      sameAs: SPOTIFY_ARTIST_URL,
    },
  }

  return (
    <>
      <SEO
        title="Artistporträtt i Kungälv | Mattias Tell"
        description="Se hur Mattias Tell fick artistporträtt i studio och vid havet i Aröd för låt- och albumomslag, inklusive bilden till Spotify-låten Aeons."
        url={PUBLIC_CANONICAL_URLS.portraitCaseMattiasTell}
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={caseJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: PUBLIC_CANONICAL_URLS.home },
          { name: 'Porträtt', url: PUBLIC_CANONICAL_URLS.portraits },
          {
            name: 'Artistporträtt med Mattias Tell',
            url: PUBLIC_CANONICAL_URLS.portraitCaseMattiasTell,
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-24 text-textPrimary sm:px-4 md:px-5 md:pt-28 lg:px-6">
        <header className="mx-auto mb-10 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Artistporträtt · Kungälv och Aröd
            </p>
            <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Artistporträtt för Mattias Tell i Kungälv
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              Artisten Mattias Tell behövde porträtt som kunde användas till
              låt- och albumomslag. Utan ett låst bildmanér skapade vi två olika
              serier: spontana studioporträtt och utomhusbilder vid havet i
              Aröd.
            </p>
          </div>
        </header>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 lg:h-[38rem] lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)] lg:h-full">
            <ResponsiveImage
              image={studioBackdrop}
              alt="Mattias Tell fotograferad med hatt mot studiobakgrund"
              pictureClassName="lg:h-full lg:w-full"
              className="aspect-[3/2] w-full object-cover lg:h-full lg:aspect-auto"
              sizes="(min-width: 1024px) 510px, 100vw"
            />
          </figure>
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)] lg:h-full">
            <ResponsiveImage
              image={pierWithDog}
              alt="Mattias Tell går med sin hund på en brygga i solnedgången vid Aröd"
              pictureClassName="lg:h-full lg:w-full"
              className="aspect-[4/5] w-full object-cover lg:h-full lg:aspect-auto"
              sizes="(min-width: 1024px) 620px, 100vw"
            />
          </figure>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Porträtt till låt- och albumomslag
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-textSecondary">
              <p>
                Mattias kom med olika tröjor, men vi hade varken referensbilder
                eller en färdig lista med motiv. Den första fotograferingen
                gjordes hemma hos mig med monterbar studiobakgrund och blixtar.
                Där kunde vi skapa tydliga porträtt med flera uttryck och
                klädbyten.
              </p>
              <p>
                Både Mattias och jag arbetar gärna spontant. Jag gav några enkla
                tips framför kameran, men i övrigt provade vi oss fram och lät
                idéerna komma under fotograferingen.
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

        <section className="mx-auto mb-14 grid max-w-6xl gap-8 rounded-[2.25rem] bg-white px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:rounded-[3rem]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Utomhusfotografering i Aröd
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Havet gav serien ett andra uttryck
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Till den andra fotograferingen föreslog jag bilder vid havet. Vi
              tycker båda om havsmiljön, så valet av Aröd utanför Kode kändes
              självklart.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Här blev bilderna friare och mer berättande än studioporträtten.
              Vi fotograferade bland annat nära klipporna och på bryggan, där
              Mattias gick tillsammans med hunden i det låga kvällsljuset.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[1.75rem]">
            <ResponsiveImage
              image={outdoorPortrait}
              alt="Artistporträtt av Mattias Tell utomhus vid Aröd i Kode"
              className="aspect-[4/5] w-full object-cover"
              sizes="(min-width: 1024px) 620px, 100vw"
              loading="lazy"
            />
          </figure>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl gap-6 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:rounded-[3rem]">
          <figure className="overflow-hidden rounded-[1.75rem]">
            <ResponsiveImage
              image={pierBlackAndWhite}
              alt="Svartvit omslagsbild till Aeons med Mattias Tell och hunden på bryggan"
              className="aspect-square w-full object-cover"
              sizes="(min-width: 1024px) 570px, 100vw"
              loading="lazy"
            />
          </figure>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Från fotografering till Spotify
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Bryggbilden blev omslag till Aeons
            </h2>
            <p className="mb-6 text-base leading-relaxed text-textSecondary">
              Mattias tyckte särskilt om några av porträtten och bilden där han
              går på bryggan med hunden. Just bryggbilden fick sedan en konkret
              användning som omslag till hans låt Aeons på Spotify.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={AEONS_SPOTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={externalLinkClass}
              >
                Lyssna på Aeons
              </a>
              <a
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${externalLinkClass} border border-textPrimary bg-transparent text-textPrimary hover:bg-textPrimary hover:text-white`}
              >
                Mattias Tell på Spotify
              </a>
            </div>
          </div>
        </section>

        <section
          aria-label="Artistporträtt av Mattias Tell"
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
          title="Behöver du bilder till din musik eller ditt varumärke?"
          description="På porträttsidan finns pris, upplägg och mer information om porträtt för kreatörer, sociala medier och professionella sammanhang."
          actions={[
            {
              to: '/portraits/',
              label: 'Se porträttfotografering',
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
