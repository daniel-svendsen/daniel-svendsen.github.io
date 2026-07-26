import React from 'react'

import profileImage from '@/assets/bild1.jpg?responsive'
import { CTASection } from '@/components/CTASection'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { PUBLIC_CANONICAL_URLS } from '@/config/publicRoutes'
import { businessReference, PERSON, personReference } from '@/config/seo'

export default function About() {
  const ogImage = getPageOgImage('about')
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON.id,
    name: PERSON.name,
    alternateName: PERSON.displayName,
    url: PERSON.url,
    image: ogImage.src,
    jobTitle: 'Fotograf',
    description:
      'Daniel driver Svendsén Photography och fotograferar bröllop, porträtt, familjer, företag och produkter i Kungälvsområdet och längs västkusten.',
    homeLocation: {
      '@type': 'Place',
      name: 'Kode',
    },
    worksFor: businessReference,
  }
  const aboutPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Om Daniel',
    description:
      'Lär känna Daniel, fotografen bakom Svendsén Photography, hans bildstil och hur han arbetar under en fotografering.',
    url: PUBLIC_CANONICAL_URLS.about,
    mainEntity: personReference,
  }

  return (
    <>
      <SEO
        title="Om Daniel | Fotograf bakom Svendsén Photography"
        description="Lär känna Daniel, fotografen bakom Svendsén Photography i Kode. Läs om hans bildstil, erfarenhet och lugna arbetssätt."
        url={PUBLIC_CANONICAL_URLS.about}
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={[aboutPageJsonLd, personJsonLd]}
        breadcrumbs={[
          { name: 'Hem', url: PUBLIC_CANONICAL_URLS.home },
          { name: 'Om Daniel', url: PUBLIC_CANONICAL_URLS.about },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-20 text-textPrimary sm:px-4 md:px-5 lg:px-6">
        <header className="mx-auto mb-8 grid max-w-6xl gap-8 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:grid-cols-[0.78fr_1.22fr] md:items-center md:px-8 md:py-10 lg:gap-12 lg:rounded-[3rem]">
          <figure className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] bg-black shadow-[0_28px_70px_-48px_rgba(31,41,55,0.7)] md:mx-0">
            <ResponsiveImage
              image={profileImage}
              alt="Porträtt av Daniel, fotograf bakom Svendsén Photography"
              sizes="(min-width: 768px) 430px, 100vw"
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </figure>

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Fotografen bakom kameran
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Om Daniel
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              Jag bor i Kode och fotograferar främst i Kungälvsområdet och längs
              västkusten. Min stil är klassisk och miljödriven, med naturliga
              färger, varma toner och tydlig kontrast.
            </p>
          </div>
        </header>

        <section className="mx-auto mb-14 grid max-w-6xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-[2.25rem] bg-white px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10">
            <h2 className="mb-6 text-3xl font-semibold text-textPrimary">
              Från ett långvarigt intresse till riktiga uppdrag
            </h2>
            <div className="space-y-5 text-base leading-8 text-textSecondary">
              <p>
                Jag har fotograferat på allvar sedan 2016, även om intresset för
                bilder och berättande har funnits betydligt längre. Det som
                först fångade mig var allt det som finns nära men som man inte
                alltid tänker på: en detalj, en vinkel, ett särskilt ljus eller
                en bakgrund som förändrar hela känslan i en bild.
              </p>
              <p>
                Fotograferandet började som en hobby, men utvecklades naturligt
                när allt fler började fråga om jag kunde hjälpa dem med bilder.
                Sedan dess har jag fotograferat bröllop, porträtt, familjer,
                barn, företag och produkter.
              </p>
              <p>
                Jag har också ett återkommande samarbete med For Pros, där jag
                har fotograferat och filmat penslar, tejp och andra
                måleritillbehör.
              </p>
            </div>
          </article>

          <article className="rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.14)] md:px-8 md:py-10">
            <h2 className="mb-6 text-3xl font-semibold text-textPrimary">
              Min bildstil
            </h2>
            <div className="space-y-5 text-base leading-8 text-textSecondary">
              <p>
                Min bildstil är klassisk och miljödriven, ofta med varma toner,
                naturliga färger och tydlig kontrast. När möjligheten finns
                tycker jag om att låta platsen bli en del av berättelsen.
              </p>
              <p>
                Havet, klipporna, skogen och andra miljöer längs västkusten ger
                många sådana möjligheter. Jag är särskilt noggrann med att hitta
                rätt plats och vinklar och med att välja bilder som är skarpa,
                tydliga och känns genomarbetade.
              </p>
            </div>
          </article>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.14)] md:px-8 md:py-10">
            <h2 className="mb-6 text-3xl font-semibold text-textPrimary">
              Lugn vägledning med plats för spontanitet
            </h2>
            <div className="space-y-5 text-base leading-8 text-textSecondary">
              <p>
                Under en fotografering är jag lugn, vänlig och ganska diskret.
                Om någon känner sig obekväm framför kameran försöker jag hålla
                stämningen avslappnad, ge enkel vägledning och gärna skämta
                lite. Du får också gärna komma med egna idéer och funderingar.
              </p>
              <p>
                Jag tycker om att ha en plan, men behöver inte styra varje
                detalj. Om vädret, ljuset eller situationen förändras har jag
                inga problem med att anpassa fotograferingen efter det som
                händer. Det viktiga är att du känner dig trygg och att bilderna
                känns personliga.
              </p>
            </div>
          </article>

          <article className="rounded-[2.25rem] bg-white px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10">
            <h2 className="mb-6 text-3xl font-semibold text-textPrimary">
              Teknik, egna projekt och familjeliv
            </h2>
            <div className="space-y-5 text-base leading-8 text-textSecondary">
              <p>
                Vid sidan av fotograferingen programmerar jag och arbetar med
                egna teknikprojekt. Jag har bland annat byggt den här
                webbplatsen och systemet som används för att leverera bilder
                till mina kunder.
              </p>
              <p>
                När jag inte fotograferar eller programmerar är jag pappa till
                två döttrar, vilket innebär en hel del fotboll, kompisar och
                familjeaktiviteter.
              </p>
              <p>
                För mig handlar fotografering om att uppmärksamma det som redan
                finns: människorna, platsen, ljuset och de små detaljerna som
                annars lätt passerar förbi.
              </p>
            </div>
          </article>
        </section>

        <CTASection
          className="rounded-[2.25rem] bg-white/82 lg:rounded-[3rem]"
          title="Har du en fotografering i åtanke?"
          description="Berätta vad du planerar, så hjälper jag dig hitta ett lugnt och personligt upplägg som passar platsen och känslan du vill åt."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            {
              to: '/services/',
              label: 'Se fotograferingstjänster',
              variant: 'outline',
            },
          ]}
        />
      </main>
    </>
  )
}
