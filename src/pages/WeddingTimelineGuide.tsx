import React from 'react'

import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { LinkButton } from '@/components/Button'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { type ResponsiveImageAsset } from '@/utils/responsiveImages'

const timelineImages = Object.entries(
  import.meta.glob(
    '../assets/cases/Rebecka&Aron/*.{jpg,jpeg,png}',
    {
      eager: true,
      import: 'default',
      query: '?responsive',
    },
  ),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, image]) => image as ResponsiveImageAsset)

const getImage = (index: number) => timelineImages[index] ?? timelineImages[0]

const timelineBlocks = [
  {
    title: 'Innan vigseln',
    time: '15 minuter extra',
    description:
      'Jag är gärna på plats en stund innan fotograferingen börjar på riktigt. Då hinner jag se ljuset, hitta enkla vinklar och få en känsla för platsen.',
  },
  {
    title: 'First look',
    time: 'Valfritt',
    description:
      'First look kan vara fint om ni vill se varandra innan vigseln, men det är inget måste. Välj det som passar er dag och er känsla bäst.',
  },
  {
    title: 'Familjebilder',
    time: '20-40 minuter',
    description:
      'Familjebilder går oftast smidigt om grupperna är planerade i förväg. Tiden beror främst på hur många kombinationer ni vill ha.',
  },
  {
    title: 'Bilder på paret',
    time: '20-30 minuter',
    description:
      'Porträtt på er två behöver inte ta över dagen. En kort promenad eller en lugn plats nära vigseln kan räcka långt.',
  },
  {
    title: 'Mingel och detaljer',
    time: 'När dagen rör sig',
    description:
      'Mingel, kramar, dukning och små detaljer fångas bäst när de får hända naturligt runt er och gästerna.',
  },
  {
    title: 'Egen stund',
    time: 'Glöms ofta bort',
    description:
      'Planera gärna in några minuter för bara er två, eller för er tillsammans med barnen. Det kan bli några av dagens mest personliga bilder.',
  },
]

const planningCards = [
  {
    title: 'Skriv en enkel gruppbildslista',
    description:
      'Bestäm vilka familje- och gruppbilder som är viktiga innan dagen. Då går fotograferingen snabbare och känns lugnare.',
  },
  {
    title: 'Välj en plats i närheten',
    description:
      'Om porträtten tas nära vigseln eller festen slipper ni lägga mycket tid på förflyttning.',
  },
  {
    title: 'Lämna luft i schemat',
    description:
      'Lite marginal gör det lättare att få naturliga bilder även om något drar ut på tiden.',
  },
]

const timelineExamples = [
  {
    title: 'Kort vigsel',
    description:
      'Ett kort upplägg kan fokusera på att jag kommer cirka 15 minuter innan, fotograferar vigseln, gratulationer, några familjebilder och en kort stund med porträtt på er två.',
    items: ['15 min platskoll', 'Vigsel', 'Gratulationer', 'Familj 20-30 min', 'Parbilder 20 min'],
  },
  {
    title: 'Halvdag',
    description:
      'En halvdag passar ofta när ni vill få med förberedelser eller first look, vigsel, familjebilder, porträtt och början av minglet utan att fotograferingen täcker hela kvällen.',
    items: ['Förberedelser eller first look', 'Vigsel', 'Familj 20-40 min', 'Parbilder 20-30 min', 'Mingel'],
  },
  {
    title: 'Heldag',
    description:
      'Ett heldagsupplägg ger plats för hela berättelsen: förberedelser, first look om ni vill, vigsel, familj, porträtt, mingel, middag, tal och fest.',
    items: ['Förberedelser', 'Vigsel', 'Familj och porträtt', 'Middag och tal', 'Fest och kvällsbilder'],
  },
]

const guideFaqs = [
  {
    question: 'Hur lång tid behövs för familjebilder?',
    answer:
      'Räkna ungefär 20 till 40 minuter beroende på hur många grupper och kombinationer ni vill fotografera.',
  },
  {
    question: 'Hur lång tid behövs för bilder på paret?',
    answer:
      'Ofta räcker 20 till 30 minuter, särskilt om platsen ligger nära och ni vill ha en naturlig serie bilder.',
  },
  {
    question: 'Måste man ha first look?',
    answer:
      'Nej. First look kan vara fint, men det viktigaste är att upplägget känns rätt för er och passar dagen.',
  },
]

export default function WeddingTimelineGuide() {
  const ogImage = getPageOgImage('weddingTimelineGuide')

  const guideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bröllopstidslinje för fotografering',
    description:
      'Guide till hur par kan planera tid för familjebilder, porträtt, first look, kort vigsel, halvdag och heldag under bröllopsdagen.',
    url: 'https://www.svendsenphotography.com/guider/brollopstidslinje/',
    author: {
      '@type': 'Person',
      name: 'Daniel Svendsen',
    },
  }

  return (
    <>
      <SEO
        title="Bröllopstidslinje för fotografering | Guide | Svendsén Photography"
        description="Guide till bröllopstidslinje för fotografering med exempel för kort vigsel, halvdag och heldag, plus tid för familjebilder och porträtt."
        url="https://www.svendsenphotography.com/guider/brollopstidslinje/"
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={guideJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Guider',
            url: 'https://www.svendsenphotography.com/guider/',
          },
          {
            name: 'Bröllopstidslinje för fotografering',
            url: 'https://www.svendsenphotography.com/guider/brollopstidslinje/',
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f5f5f2] px-3 pb-8 pt-24 text-textPrimary sm:px-4 md:px-5 md:pt-28 lg:px-6">
        <header className="mx-auto mb-10 grid max-w-6xl grid-cols-1 gap-8 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Guide
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Bröllopstidslinje för fotografering
            </h1>
            <p className="mb-7 max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              En enkel guide till hur ni kan planera tid för familjebilder,
              porträtt, first look och de små stunderna som ofta betyder mest.
            </p>
            <div className="mb-7 max-w-2xl rounded-2xl border border-black/6 bg-[#f8f8f5] px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-textSecondary">
                Snabbt svar
              </p>
              <p className="mt-2 text-base leading-relaxed text-textPrimary">
                En kort vigsel kan ofta fotograferas på några timmar. Halvdag
                eller heldag ger mer plats för förberedelser, familjebilder,
                porträtt, mingel och fest.
              </p>
            </div>
            <LinkButton
              to="/contact/"
              size="lg"
              subVariant="rounded"
              className="px-8 font-semibold"
            >
              Prata om ert schema
            </LinkButton>
          </div>

          <figure className="overflow-hidden rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-3">
            <ResponsiveImage
              image={getImage(3)}
              alt="Bröllopspar under porträttfotografering"
              className="h-[26rem] w-full rounded-[1.15rem] object-cover object-top md:h-[34rem]"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </figure>
        </header>

        <section className="mx-auto mb-10 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              En lugnare dag börjar med rimliga tider
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Bröllopsfotografering behöver inte ta över hela dagen, men vissa
              delar mår bra av att få lite plats. Med några enkla tidsblock blir
              det lättare att få bilderna ni vill ha utan att allt känns stressat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {timelineBlocks.map((block) => (
              <InfoCard
                key={block.title}
                className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-textSecondary">
                  {block.time}
                </p>
                <h3 className="mb-3 text-xl font-semibold text-textPrimary">
                  {block.title}
                </h3>
                <p className="leading-relaxed text-textSecondary">
                  {block.description}
                </p>
              </InfoCard>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-10 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[0.95fr_1.05fr]">
          <figure className="overflow-hidden rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-3">
            <ResponsiveImage
              image={getImage(5)}
              alt="Bröllopsdetaljer under en planerad fotograferingsdag"
              className="h-[24rem] w-full rounded-[1.15rem] object-cover md:h-full"
              sizes="(min-width: 1024px) 520px, 100vw"
              loading="lazy"
            />
          </figure>

          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Det par ofta glömmer
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Det är lätt att planera vigsel, middag och festen, men glömma den
              korta stunden där ni faktiskt får vara själva framför kameran.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Om ni har barn kan det också vara fint att planera in några
              minuter bara med dem. De bilderna behöver inte vara perfekta för
              att bli viktiga.
            </p>
          </div>
        </section>

        <section className="mx-auto mb-10 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Exempel på tidslinjer
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Alla bröllop ser olika ut, men de här exemplen kan hjälpa er att
              känna ungefär hur mycket som ryms i ett kortare eller längre
              upplägg.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {timelineExamples.map((example) => (
              <InfoCard
                key={example.title}
                className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
              >
                <h3 className="mb-3 text-xl font-semibold text-textPrimary">
                  {example.title}
                </h3>
                <p className="mb-5 leading-relaxed text-textSecondary">
                  {example.description}
                </p>
                <ul className="space-y-2 text-sm leading-relaxed text-textSecondary">
                  {example.items.map((item) => (
                    <li key={item} className="rounded-2xl bg-white px-4 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </InfoCard>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-10 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Små saker som gör planeringen enklare
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Det behöver inte bli ett detaljerat schema för varje minut. Några
              tydliga beslut innan dagen brukar räcka långt.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {planningCards.map((card) => (
              <InfoCard
                key={card.title}
                title={card.title}
                description={card.description}
                className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-10 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Koppla ihop tidslinjen med känslan
            </h2>
            <p className="mb-6 text-base leading-relaxed text-textSecondary">
              Tiderna är bara riktlinjer. Det viktigaste är att schemat ger plats
              för den typ av bilder ni faktiskt vill ha: lugna porträtt,
              familjebilder, mingel eller en kort promenad för er själva.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <LinkButton
                to="/guider/brollopsplanerare/"
                variant="default"
                size="lg"
                subVariant="rounded"
                className="px-8 font-semibold"
              >
                Öppna checklistan
              </LinkButton>
              <LinkButton
                to="/guider/brollopsbilder-promenad/"
                variant="outline"
                size="lg"
                subVariant="rounded"
                className="px-8 font-semibold"
              >
                Guide om promenadbilder
              </LinkButton>
              <LinkButton
                to="/brollopsfotograf-kungalv/"
                variant="outline"
                size="lg"
                subVariant="rounded"
                className="px-8 font-semibold"
              >
                Bröllopsfotograf Kungälv
              </LinkButton>
            </div>
          </div>

          <div className="space-y-4">
            {guideFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-black/6 bg-[#f8f8f5] px-5 py-5"
              >
                <h3 className="mb-2 text-lg font-semibold text-textPrimary">
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed text-textSecondary">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CTASection
          className="rounded-[1.75rem] border border-black/6 bg-white shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)]"
          title="Vill ni få hjälp att planera fotodelarna?"
          description="Berätta hur dagen ser ut och vilka bilder som känns viktigast, så hjälper jag er hitta ett upplägg som passar tempot."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            { to: '/guider/', label: 'Till guider', variant: 'outline' },
          ]}
        />
      </main>
    </>
  )
}
