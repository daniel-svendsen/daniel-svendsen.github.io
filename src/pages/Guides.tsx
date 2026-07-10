import React from 'react'

import { LinkButton } from '@/components/Button'
import { EditorialIntro, EditorialSection } from '@/components/Editorial'
import SEO from '@/components/SEO'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

const guideCards = [
  {
    eyebrow: 'Planerare',
    title: 'Bröllopsplanerare för fotografering',
    description:
      'Kryssa i bilder och moment, skriv egna anteckningar och skriv ut, ladda ner eller maila listan.',
    to: '/guider/brollopsplanerare/',
    label: 'Öppna planeraren',
  },
  {
    eyebrow: 'Bröllop',
    title: 'Promenadbilder på bröllopsdagen',
    description:
      'En guide om hur en kort promenad kan ge mer avslappnade och personliga bilder på er två.',
    to: '/guider/brollopsbilder-promenad/',
    label: 'Läs guiden',
  },
  {
    eyebrow: 'Planering',
    title: 'Bröllopstidslinje för fotografering',
    description:
      'En guide till hur ni kan planera tid för familjebilder, porträtt, first look och lugna stunder under dagen.',
    to: '/guider/brollopstidslinje/',
    label: 'Läs guiden',
  },
  {
    eyebrow: 'Exempel',
    title: 'Bröllop i Stenungsund',
    description:
      'Se ett heldagsbröllop vid havet med first look, vigsel, mingel, middag och lugna parbilder.',
    to: '/brollop/stenungsund/',
    label: 'Se bilderna',
  },
]

export default function Guides() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

  return (
    <>
      <SEO
        title="Guider för bröllopsbilder | Svendsén Photography"
        description="Guider för er som planerar bröllopsbilder med naturlig känsla, promenadporträtt och personliga upplägg."
        url="https://www.svendsenphotography.com/guider/"
        image={absoluteLogoUrl}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Guider',
            url: 'https://www.svendsenphotography.com/guider/',
          },
        ]}
      />

      <main className="bg-[#f5f5f2] pt-24 text-textPrimary md:pt-28">
        <EditorialSection
          tone="white"
          className="mx-3 rounded-[1.75rem] border border-black/6 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] sm:mx-4 md:mx-5 lg:mx-auto lg:max-w-6xl"
        >
          <EditorialIntro
            eyebrow="Guider"
            headingLevel="h1"
            title="Hjälp inför era bröllopsbilder."
            description="Praktiska guider för er som vill planera bilder som känns naturliga, personliga och enkla att vara i."
          />
        </EditorialSection>

        <EditorialSection
          tone="white"
          className="mx-3 mt-10 rounded-[1.75rem] border border-black/6 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] sm:mx-4 md:mx-5 lg:mx-auto lg:max-w-6xl"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {guideCards.map((guide) => (
              <article
                key={guide.title}
                className="flex min-h-[18rem] flex-col rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8"
              >
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-textSecondary">
                  {guide.eyebrow}
                </p>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-textPrimary md:text-3xl">
                  {guide.title}
                </h2>
                <p className="mb-8 max-w-xl text-base leading-8 text-textPrimary/68">
                  {guide.description}
                </p>
                <LinkButton
                  to={guide.to}
                  size="lg"
                  subVariant="rounded"
                  className="mt-auto w-fit px-7 font-semibold"
                >
                  {guide.label}
                </LinkButton>
              </article>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Nästa steg
            </p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
              Vill ni prata igenom ert upplägg?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-textPrimary/68">
              Berätta lite om platsen, dagen och vilken känsla ni hoppas på, så
              hjälper jag er hitta ett upplägg som passar.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                to="/contact/"
                size="lg"
                subVariant="rounded"
                className="px-8 font-semibold"
              >
                Skicka förfrågan
              </LinkButton>
              <LinkButton
                to="/weddings/"
                variant="link"
                size="lg"
                className="px-0 text-textPrimary no-underline hover:text-textPrimary/70"
              >
                Se bröllopssidan
              </LinkButton>
            </div>
          </div>
        </EditorialSection>
      </main>
    </>
  )
}
