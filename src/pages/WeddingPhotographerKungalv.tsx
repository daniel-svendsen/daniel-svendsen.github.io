import React from 'react'

import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { LinkButton } from '@/components/Button'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { businessReference } from '@/config/seo'
import { createFaqJsonLd, kungalvWeddingFaqs } from '@/data/faqs'

const kungalvHeroImages = Object.entries(
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

const getImage = (index: number) =>
  kungalvHeroImages[index] ?? kungalvHeroImages[0] ?? ''

const localServiceFacts = [
  {
    title: 'Lokalt i Kungälv',
    description:
      'Jag utgår från Kungälv och planerar fotograferingen utifrån er vigselplats, dagens tider och de miljöer som hör ihop med ert bröllop.',
  },
  {
    title: 'Från vigsel till längre dag',
    description:
      'Upplägget kan fokusera på vigsel, familj och porträtt eller omfatta fler delar av dagen. De regionala paketen visar pris och omfattning.',
  },
  {
    title: 'Bokning genom personlig kontakt',
    description:
      'Berätta om datum, plats och vilka delar ni vill dokumentera. Därefter pratar vi igenom ett upplägg som passar dagen.',
  },
]

export default function WeddingPhotographerKungalv() {
  const ogImage = getPageOgImage('weddingPhotographerKungalv')

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Bröllopsfotograf i Kungälv',
    serviceType: 'Wedding photography',
    description:
      'Bröllopsfotografering i Kungälv med naturliga porträtt, vigselbilder och lugna promenadbilder.',
    url: 'https://www.svendsenphotography.com/brollopsfotograf-kungalv/',
    provider: businessReference,
    areaServed: [{ '@type': 'AdministrativeArea', name: 'Kungälv' }],
  }

  return (
    <>
      <SEO
        title="Bröllopsfotograf i Kungälv | Naturliga bröllopsbilder | Svendsén Photography"
        description="Söker ni bröllopsfotograf i Kungälv? Jag fotograferar vigsel, familj och naturliga porträtt med lugn känsla och plats för promenadbilder."
        url="https://www.svendsenphotography.com/brollopsfotograf-kungalv/"
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={[serviceJsonLd, createFaqJsonLd(kungalvWeddingFaqs)]}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Bröllop',
            url: 'https://www.svendsenphotography.com/weddings/',
          },
          {
            name: 'Bröllopsfotograf Kungälv',
            url: 'https://www.svendsenphotography.com/brollopsfotograf-kungalv/',
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-20 text-textPrimary sm:px-4 md:px-5 lg:px-6">
        <header className="mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Kungälv
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Bröllopsfotograf i Kungälv
            </h1>
            <p className="mb-7 max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              För er som vill ha bröllopsbilder med en lugn och personlig
              känsla, där vigseln, familjen och några naturliga porträtt får ta
              plats utan att dagen behöver kännas uppställd.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <LinkButton
                to="/contact/"
                size="lg"
                subVariant="rounded"
                className="px-8 font-semibold"
              >
                Skicka förfrågan
              </LinkButton>
              <LinkButton
                to="/brollop/kungalv/"
                variant="outline"
                size="lg"
                subVariant="rounded"
                className="px-8 font-semibold"
              >
                Se bröllop i Kungälv
              </LinkButton>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
            <ResponsiveImage
              image={getImage(3)}
              alt="Bröllopspar på promenad i Kungälv"
              className="h-[26rem] w-full object-cover md:h-[34rem]"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </figure>
        </header>

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Lokal bröllopsfotografering i Kungälv
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Eftersom jag utgår från Kungälv kan planeringen börja i platsen ni
              har valt och hur vigsel, porträtt och familjebilder passar in i
              dagens tider. Bokningen sker genom personlig kontakt.
            </p>
            <LinkButton
              to="/weddings/"
              variant="outline"
              size="lg"
              subVariant="rounded"
              className="mt-6 px-8 font-semibold"
            >
              Jämför paket och priser
            </LinkButton>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {localServiceFacts.map((fact) => (
              <InfoCard
                key={fact.title}
                title={fact.title}
                description={fact.description}
                className="bg-white p-6"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:rounded-[3rem]">
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
            <ResponsiveImage
              image={getImage(4)}
              alt="Bröllopsbilder i naturmiljö nära Kungälv"
              className="h-[24rem] w-full object-cover md:h-full"
              sizes="(min-width: 1024px) 520px, 100vw"
              loading="lazy"
            />
          </figure>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.2)] md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Ett verkligt bröllop i Kungälv
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Kersti och Jakob valde ett nära upplägg med en vårpromenad,
              vigseln och bilder tillsammans med familjen. Promenaden gav dem
              utrymme att vara med varandra medan bildberättelsen växte fram.
            </p>
            <p className="mb-6 text-base leading-relaxed text-textSecondary">
              Caset visar det färdiga uppdraget och bildkänslan. Den här sidan
              fokuserar i stället på den lokala tjänsten och hur ni går vidare
              med en egen förfrågan.
            </p>
            <LinkButton
              to="/brollop/kungalv/"
              variant="outline"
              size="lg"
              subVariant="rounded"
              className="px-8 font-semibold"
            >
              Se Kersti och Jakobs bröllop
            </LinkButton>
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:rounded-[3rem]">
          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.2)] md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Boka bröllopsfotografering i Kungälv
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Skicka datum, plats och vilka delar av dagen ni vill ha
              fotograferade. Då kan vi stämma av tillgänglighet och vilket
              upplägg som passar ert bröllop.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Priser och omfattning för kort vigsel, halvdag och heldag finns
              samlade på den regionala bröllopssidan.
            </p>
          </div>

          <div className="space-y-4">
            {kungalvWeddingFaqs.map((faq) => (
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
          title="Letar ni efter bröllopsfotograf i Kungälv?"
          description="Berätta lite om er dag, platsen och vilken typ av bilder ni hoppas på, så återkommer jag med ett upplägg som passar."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            { to: '/weddings/', label: 'Jämför paket och priser', variant: 'outline' },
          ]}
        />
      </main>
    </>
  )
}
