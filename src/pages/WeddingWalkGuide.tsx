import React from 'react'

import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { LinkButton } from '@/components/Button'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { createFaqJsonLd, weddingWalkFaqs } from '@/data/faqs'
import { type ResponsiveImageAsset } from '@/utils/responsiveImages'

const guideImages = Object.entries(
  import.meta.glob(
    '../assets/cases/Kersti&Jakob/*.{jpg,jpeg,png}',
    {
      eager: true,
      import: 'default',
      query: '?responsive',
    },
  ),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, image]) => image as ResponsiveImageAsset)

const getImage = (index: number) => guideImages[index] ?? guideImages[0]

const walkTips = [
  {
    title: 'Ge det lite tid',
    description:
      'Räkna gärna med ungefär 20 till 30 minuter om det finns utrymme i schemat. Det ger tid att landa, gå en bit och få variation utan stress.',
  },
  {
    title: 'Släpp kameran',
    description:
      'De finaste bilderna kommer ofta när ni fokuserar på varandra istället för på mig. Jag håller mig diskret och fångar det som händer naturligt.',
  },
  {
    title: 'Gör små saker',
    description:
      'Håll handen, stanna upp, kramas eller ge varandra en kort kyss. Det behöver inte vara mer avancerat än så för att bilderna ska kännas nära.',
  },
]

const placeTips = [
  {
    title: 'Kungälv',
    description:
      'Kärleksstigen med utsikt mot fästningen, Trankärrs promenadslinga, Ragnhildsholmen, havsnära miljöer eller en fin skogsstig kan fungera väldigt bra.',
  },
  {
    title: 'Stenungsund',
    description:
      'Havet är ofta en stark utgångspunkt i Stenungsund. Vass, bryggor och promenadstråk kan ge både lugn och tydlig platskänsla.',
  },
  {
    title: 'En egen plats',
    description:
      'Har ni en plats som betyder något för er är det ofta den bästa starten. Då får bilderna både miljö och personlig betydelse på samma gång.',
  },
]

export default function WeddingWalkGuide() {
  const ogImage = getPageOgImage('weddingWalkGuide')

  const guideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Promenadbilder på bröllopsdagen',
    description:
      'Guide till hur en kort promenad på bröllopsdagen kan skapa naturliga och personliga porträtt.',
    url: 'https://www.svendsenphotography.com/guider/brollopsbilder-promenad/',
    author: {
      '@type': 'Person',
      name: 'Daniel Svendsen',
    },
  }

  return (
    <>
      <SEO
        title="Promenadbilder på bröllopsdagen | Guide | Svendsén Photography"
        description="Guide till promenadbilder på bröllopsdagen: hur lång tid ni behöver, vad ni kan tänka på och fina miljöer i Kungälv och Stenungsund."
        url="https://www.svendsenphotography.com/guider/brollopsbilder-promenad/"
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={[guideJsonLd, createFaqJsonLd(weddingWalkFaqs)]}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Guider',
            url: 'https://www.svendsenphotography.com/guider/',
          },
          {
            name: 'Promenadbilder på bröllopsdagen',
            url: 'https://www.svendsenphotography.com/guider/brollopsbilder-promenad/',
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
              Promenadbilder på bröllopsdagen
            </h1>
            <p className="mb-7 max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              En kort stund för er själva kan göra stor skillnad. Med en lugn
              promenad får ni bilder som känns närvarande, naturliga och mer som
              er själva.
            </p>
            <div className="mb-7 max-w-2xl rounded-2xl border border-black/6 bg-[#f8f8f5] px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-textSecondary">
                Snabbt svar
              </p>
              <p className="mt-2 text-base leading-relaxed text-textPrimary">
                Räkna gärna med 20 till 30 minuter om schemat tillåter det. Det
                ger tid att landa, gå en bit och få variation utan stress.
              </p>
            </div>
            <LinkButton
              to="/contact/"
              size="lg"
              subVariant="rounded"
              className="px-8 font-semibold"
            >
              Prata om ert upplägg
            </LinkButton>
          </div>

          <figure className="overflow-hidden rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-3">
            <ResponsiveImage
              image={getImage(3)}
              alt="Bröllopspar på promenad"
              className="h-[26rem] w-full rounded-[1.15rem] object-cover md:h-[34rem]"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </figure>
        </header>

        <section className="mx-auto mb-10 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Varför en promenad kan fungera så bra
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Bröllopsdagen kan vara intensiv, full av människor, tider och
              intryck. En promenad ger er en liten paus där ni får vara nära
              varandra medan jag fotograferar på avstånd och letar efter de små
              ögonblicken.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {walkTips.map((tip) => (
              <InfoCard
                key={tip.title}
                title={tip.title}
                description={tip.description}
                className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-10 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[0.95fr_1.05fr]">
          <figure className="overflow-hidden rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-3">
            <ResponsiveImage
              image={getImage(4)}
              alt="Bröllopsporträtt i naturmiljö"
              className="h-[24rem] w-full rounded-[1.15rem] object-cover md:h-full"
              sizes="(min-width: 1024px) 520px, 100vw"
              loading="lazy"
            />
          </figure>

          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Ljus och tid på dagen
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Allt går inte att planera på en bröllopsdag, och det behöver inte
              heller vara perfekt. Men om schemat tillåter det är golden hour
              ofta en väldigt fin tid för porträtt.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Det mjuka ljuset gör att bilderna lättare får en varm och lugn
              känsla. Om det inte passar i schemat går det ändå att hitta bra
              lösningar med skugga, riktning och en plats som fungerar i stunden.
            </p>
          </div>
        </section>

        <section className="mx-auto mb-10 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Platser som kan passa
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Det viktigaste är inte att platsen är känd, utan att den ger er
              utrymme att röra er naturligt och känna er bekväma.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {placeTips.map((tip) => (
              <InfoCard
                key={tip.title}
                title={tip.title}
                description={tip.description}
                className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-10 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Se hur det kan kännas i bild
            </h2>
            <p className="mb-6 text-base leading-relaxed text-textSecondary">
              I bröllop från både Kungälv och Stenungsund blev promenaden och
              miljön en viktig del av bildserien. Paret fick röra sig lugnt,
              släppa kameran för en stund och vara nära varandra.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <LinkButton
                to="/brollop/kungalv/"
                variant="outline"
                size="lg"
                subVariant="rounded"
                className="px-8 font-semibold"
              >
                Se bröllop i Kungälv
              </LinkButton>
              <LinkButton
                to="/brollop/stenungsund/"
                variant="outline"
                size="lg"
                subVariant="rounded"
                className="px-8 font-semibold"
              >
                Se bröllop i Stenungsund
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
            {weddingWalkFaqs.map((faq) => (
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
          title="Vill ni planera in en lugn stund för bilder?"
          description="Berätta lite om er plats och hur dagen ser ut, så hjälper jag er hitta ett upplägg där porträtten får kännas naturliga."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            {
              to: '/weddings/',
              label: 'Se bröllopspaket',
              variant: 'outline',
            },
          ]}
        />
      </main>
    </>
  )
}
