import React from 'react'

import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { LinkButton } from '@/components/Button'
import SEO from '@/components/SEO'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

export default function Guides() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

  return (
    <>
      <SEO
        title="Guider för bröllopsbilder | Svendsén Photography"
        description="Guider för er som planerar bröllopsbilder med naturlig känsla, promenadporträtt och personliga upplägg."
        url="https://www.svendsenphotography.com/guider/"
        image={absoluteLogoUrl}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-20 text-textPrimary sm:px-4 md:px-5 lg:px-6">
        <header className="mx-auto mb-8 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Guider
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Hjälp inför era bröllopsbilder
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              Praktiska guider för er som vill planera bilder som känns
              naturliga, personliga och enkla att vara i.
            </p>
          </div>
        </header>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard className="bg-white p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
              Planerare
            </p>
            <h2 className="mb-3 text-2xl font-semibold text-textPrimary">
              Bröllopsplanerare för fotografering
            </h2>
            <p className="mb-6 text-base leading-relaxed text-textSecondary">
              Kryssa i bilder och moment, skriv egna anteckningar och skriv ut,
              ladda ner eller maila listan.
            </p>
            <LinkButton
              to="/guider/brollopsplanerare/"
              size="lg"
              subVariant="rounded"
            >
              Öppna planeraren
            </LinkButton>
          </InfoCard>

          <InfoCard className="bg-white p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
              Bröllop
            </p>
            <h2 className="mb-3 text-2xl font-semibold text-textPrimary">
              Promenadbilder på bröllopsdagen
            </h2>
            <p className="mb-6 text-base leading-relaxed text-textSecondary">
              En guide om hur en kort promenad kan ge mer avslappnade och
              personliga bilder på er två.
            </p>
            <LinkButton
              to="/guider/brollopsbilder-promenad/"
              size="lg"
              subVariant="rounded"
            >
              Läs guiden
            </LinkButton>
          </InfoCard>

          <InfoCard className="bg-white p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
              Planering
            </p>
            <h2 className="mb-3 text-2xl font-semibold text-textPrimary">
              Bröllopstidslinje för fotografering
            </h2>
            <p className="mb-6 text-base leading-relaxed text-textSecondary">
              En guide till hur ni kan planera tid för familjebilder, porträtt,
              first look och lugna stunder under dagen.
            </p>
            <LinkButton
              to="/guider/brollopstidslinje/"
              size="lg"
              subVariant="rounded"
            >
              Läs guiden
            </LinkButton>
          </InfoCard>

          <InfoCard className="bg-white p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
              Exempel
            </p>
            <h2 className="mb-3 text-2xl font-semibold text-textPrimary">
              Bröllop i Stenungsund
            </h2>
            <p className="mb-6 text-base leading-relaxed text-textSecondary">
              Se ett heldagsbröllop vid havet med first look, vigsel, mingel,
              middag och lugna parbilder.
            </p>
            <LinkButton
              to="/brollop/stenungsund/"
              size="lg"
              subVariant="rounded"
            >
              Se bilderna
            </LinkButton>
          </InfoCard>
        </section>

        <CTASection
          className="rounded-[2.25rem] bg-white/82 lg:rounded-[3rem]"
          title="Vill ni prata igenom ert upplägg?"
          description="Berätta lite om platsen, dagen och vilken känsla ni hoppas på, så hjälper jag er hitta ett upplägg som passar."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            { to: '/weddings/', label: 'Se bröllopssidan', variant: 'outline' },
          ]}
        />
      </main>
    </>
  )
}
