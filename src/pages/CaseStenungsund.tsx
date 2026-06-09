import React from 'react'

import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { caseStudyBySlug } from '@/data/cases'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

const caseStudy = caseStudyBySlug['brollop-stenungsund']

const caseImages = Object.entries(
  import.meta.glob(
    '../assets/cases/Rebecka&Aron/*.{jpg,jpeg,png}',
    {
      eager: true,
      import: 'default',
    },
  ),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, image]) => image as string)

const getImage = (index: number) => caseImages[index] ?? caseImages[0] ?? ''

export default function CaseStenungsund() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

  return (
    <>
      <SEO
        title="Bröllop i Stenungsund | Rebecka & Aron | Svendsén Photography"
        description="Ett heldagsbröllop i Stenungsund med first look, vigsel, mingel, middag, fest och lugna parbilder vid vassen."
        url="https://www.svendsenphotography.com/brollop/stenungsund/"
        image={absoluteLogoUrl}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-20 text-textPrimary sm:px-4 md:px-5 lg:px-6">
        <header className="mx-auto mb-8 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              {caseStudy?.location}
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              {caseStudy?.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              {caseStudy?.intro}
            </p>
          </div>
        </header>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 lg:min-h-[34rem] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid grid-cols-1 gap-4 lg:grid-rows-2">
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
              <ResponsiveImage
                image={getImage(0)}
                alt="Brudgummen med marshalker i Stenungsund"
                className="h-[18rem] w-full object-cover lg:h-full"
                sizes="(min-width: 1024px) 360px, 100vw"
              />
            </figure>
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
              <ResponsiveImage
                image={getImage(1)}
                alt="Detaljbild från bröllopet i Stenungsund"
                className="h-[18rem] w-full object-cover lg:h-full"
                sizes="(min-width: 1024px) 360px, 100vw"
              />
            </figure>
          </div>
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)] lg:h-full">
            <ResponsiveImage
              image={getImage(3)}
              alt="Paret vid vassen i Stenungsund"
              className="block h-[24rem] w-full object-cover sm:h-[30rem] lg:h-full"
              sizes="(min-width: 1024px) 740px, 100vw"
            />
          </figure>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Heldag med små andningspauser
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              När hela dagen dokumenteras finns det ofta mycket som händer runt
              paret. Därför tycker jag om att hitta små pauser där tempot får
              gå ner och paret får landa en stund tillsammans.
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
              title="En stund för bara er"
              description="Det behöver inte vara långt eller komplicerat. En kort promenad, en plats med bra ljus eller ett stilla stopp nära lokalen kan räcka för att få bilder som känns mer personliga."
              className="bg-white p-6"
            />
          </div>

        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[getImage(2), getImage(4), getImage(5)].map((image, index) => (
            <figure
              key={image}
              className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]"
            >
              <ResponsiveImage
                image={image}
                alt={`Bröllopsbild från Stenungsund ${index + 2}`}
                className="h-[20rem] w-full object-cover"
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                loading="lazy"
              />
            </figure>
          ))}
        </section>

        <CTASection
          className="rounded-[2.25rem] bg-white/82 lg:rounded-[3rem]"
          title="Vill ni planera ett heldagsupplägg?"
          description="Om ni vill dokumentera hela dagen och samtidigt få tid för några lugna porträtt kan jag forma ett upplägg som passar både plats och tempo."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            {
              to: '/brollop/',
              label: 'Tillbaka till bröllop',
              variant: 'outline',
            },
          ]}
        />
      </main>
    </>
  )
}
