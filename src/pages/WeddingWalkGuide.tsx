import React from 'react'

import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { LinkButton } from '@/components/Button'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

const guideImages = Object.entries(
  import.meta.glob(
    '../assets/cases/Kersti&Jakob/*.{jpg,jpeg,png}',
    {
      eager: true,
      import: 'default',
    },
  ),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, image]) => image as string)

const getImage = (index: number) => guideImages[index] ?? guideImages[0] ?? ''

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

const guideFaqs = [
  {
    question: 'Måste promenadbilder tas på golden hour?',
    answer:
      'Nej, dagen behöver fungera praktiskt först. Men om det finns möjlighet är mjukt kvällsljus ofta väldigt fint för naturliga porträtt.',
  },
  {
    question: 'Vad ska paret göra under promenaden?',
    answer:
      'Det räcker långt att gå nära varandra, hålla handen, stanna upp ibland och försöka vara i stunden tillsammans.',
  },
  {
    question: 'Behöver platsen vara perfekt?',
    answer:
      'Nej. En enkel stig, havskant, skogsdunge eller lugn promenadsträcka kan fungera fint om ljuset och känslan passar.',
  },
]

export default function WeddingWalkGuide() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

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
        image={absoluteLogoUrl}
        jsonLd={guideJsonLd}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-20 text-textPrimary sm:px-4 md:px-5 lg:px-6">
        <header className="mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Guide
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Promenadbilder på bröllopsdagen
            </h1>
            <p className="mb-7 max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              En kort stund för er själva kan göra stor skillnad. Med en lugn
              promenad får ni bilder som känns närvarande, naturliga och mer som
              er själva.
            </p>
            <LinkButton
              to="/contact/"
              size="lg"
              subVariant="rounded"
              className="px-8 font-semibold"
            >
              Prata om ert upplägg
            </LinkButton>
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
            <ResponsiveImage
              image={getImage(3)}
              alt="Bröllopspar på promenad"
              className="h-[26rem] w-full object-cover md:h-[34rem]"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </figure>
        </header>

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
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
                className="bg-white p-6"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:rounded-[3rem]">
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
            <ResponsiveImage
              image={getImage(4)}
              alt="Bröllopsporträtt i naturmiljö"
              className="h-[24rem] w-full object-cover md:h-full"
              sizes="(min-width: 1024px) 520px, 100vw"
              loading="lazy"
            />
          </figure>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.2)] md:p-8">
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

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
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
                className="bg-white p-6"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:rounded-[3rem]">
          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.2)] md:p-8">
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
            {guideFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-black/6 bg-white px-5 py-5 shadow-[0_18px_45px_-32px_rgba(31,41,55,0.22)]"
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
          className="rounded-[2.25rem] bg-white/82 lg:rounded-[3rem]"
          title="Vill ni planera in en lugn stund för bilder?"
          description="Berätta lite om er plats och hur dagen ser ut, så hjälper jag er hitta ett upplägg där porträtten får kännas naturliga."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            { to: '/guider/', label: 'Till guider', variant: 'outline' },
          ]}
        />
      </main>
    </>
  )
}
