import React from 'react'

import { LinkButton } from '@/components/Button'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { PRICING } from '@/config/pricing'
import { businessReference, BUSINESS } from '@/config/seo'
import { createFaqJsonLd, familyFaqs } from '@/data/faqs'
import familyAtEventladan from '@/assets/familyphoto/familjefotografering-eventladan-kungalv.jpg?responsive'
import coupleByWindow from '@/assets/familyphoto/parfotografering-vid-fonster.jpg?responsive'
import siblingsAtEventladan from '@/assets/familyphoto/syskonfotografering-eventladan-kungalv.jpg?responsive'
import siblingsChristmas from '@/assets/familyphoto/syskonfotografering-jultema.jpg?responsive'
import threeSiblings from '@/assets/familyphoto/syskonfotografering-tre-barn.jpg?responsive'
import siblingsByWindow from '@/assets/familyphoto/syskonfotografering-vid-fonster.jpg?responsive'
import siblingsChristmasDresses from '@/assets/familyphoto/syskonportratt-julklanningar.jpg?responsive'

const familyFacts = [
  PRICING.portrait.familyFrom,
  PRICING.portrait.familyDuration,
  PRICING.portrait.familyImages,
]

const familySessions = [
  {
    title: 'Familjefotografering',
    description:
      'Bilder av hela familjen med tid för både gemensamma porträtt och mindre stunder mellan er.',
  },
  {
    title: 'Barn och syskon',
    description:
      'Ett lugnt upplägg som ger barnen tid att bli trygga och låter samspelet mellan syskon ta plats.',
  },
  {
    title: 'Gravidfotografering',
    description:
      'Personliga gravidporträtt utomhus eller på en plats som känns trygg och passar den känsla du vill ha.',
  },
]

const processSteps = [
  {
    title: '1. Förfrågan',
    description:
      'Du berättar vilka som ska vara med, önskat datum och vilken känsla du vill ha i bilderna.',
  },
  {
    title: '2. Plats och planering',
    description:
      'Vi väljer en utomhusmiljö, fotografering hemma hos er eller en annan plats som passar upplägget.',
  },
  {
    title: '3. Fotografering',
    description: `Fotograferingen tar ${PRICING.portrait.familyDuration} och anpassas efter familjens tempo.`,
  },
  {
    title: '4. Leverans',
    description: `${PRICING.portrait.familyImages} ingår. Normal leveranstid är cirka 1 vecka, beroende på aktuell arbetsbelastning.`,
  },
]

const galleryImages = [
  {
    image: threeSiblings,
    alt: 'Tre syskon fotograferade tillsammans vid ett stort fönster',
  },
  {
    image: siblingsAtEventladan,
    alt: 'Storebror håller sitt yngre syskon vid Eventladan i Romelanda',
  },
  {
    image: siblingsByWindow,
    alt: 'Två syskon fotograferade tillsammans vid ett fönster',
  },
  {
    image: coupleByWindow,
    alt: 'Parporträtt i naturligt ljus vid ett stort fönster',
  },
  {
    image: siblingsChristmas,
    alt: 'Två syskon fotograferade i ett julinspirerat upplägg',
  },
  {
    image: siblingsChristmasDresses,
    alt: 'Syskonporträtt med julklänningar och paket',
  },
]

export default function FamilyPhotography() {
  const ogImage = getPageOgImage('familyPhotography')
  const familyServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Familjefotografering i Kungälv',
    serviceType: 'Family photography',
    description:
      'Familje-, barn-, syskon- och gravidfotografering utomhus eller på plats i Kungälv, Göteborg och Stenungsund.',
    url: 'https://www.svendsenphotography.com/familjefotografering/',
    provider: businessReference,
    areaServed: BUSINESS.serviceAreas.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
  }

  return (
    <>
      <SEO
        title="Familjefotografering i Kungälv | Svendsén Photography"
        description="Familjefotograf i Kungälv för familjer, barn, syskon och gravidporträtt. Fotografering utomhus eller på plats, med ett lugnt upplägg."
        url="https://www.svendsenphotography.com/familjefotografering/"
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={[familyServiceJsonLd, createFaqJsonLd(familyFaqs)]}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Familjefotografering',
            url: 'https://www.svendsenphotography.com/familjefotografering/',
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f5f5f2] px-3 pb-10 pt-24 text-textPrimary sm:px-4 md:px-5 md:pt-28 lg:px-6">
        <header className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-8 rounded-[1.75rem] border border-black/6 bg-white p-5 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-3xl py-3 md:py-5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Familj, barn och syskon
            </p>
            <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Familjefotografering i Kungälv
            </h1>
            <p className="text-lg leading-relaxed text-textSecondary md:text-xl">
              Personliga familjebilder med ett lugnt upplägg och plats för det
              naturliga samspelet mellan er. Vi fotograferar utomhus, hemma hos
              er eller på en annan plats som passar familjen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {familyFacts.map((fact) => (
                <span
                  key={fact}
                  className="rounded-full border border-black/6 bg-[#f8f8f5] px-4 py-2 text-sm font-semibold text-textPrimary"
                >
                  {fact}
                </span>
              ))}
            </div>
          </div>

          <figure className="overflow-hidden rounded-[1.5rem]">
            <ResponsiveImage
              image={familyAtEventladan}
              alt="Familj fotograferad vid Eventladan i Romelanda nära Kungälv"
              sizes="(min-width: 1024px) 590px, 100vw"
              className="aspect-[3/2] w-full object-cover lg:h-[34rem] lg:aspect-auto"
            />
          </figure>
        </header>

        <section className="mx-auto mb-12 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Bilder som känns som er
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Upplägget formas efter vilka ni är och hur bilderna ska kännas.
              Det kan vara en hel familj, syskon, en väntande förälder eller ett
              par som vill bevara en period i livet tillsammans.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {familySessions.map((session) => (
              <InfoCard
                key={session.title}
                title={session.title}
                description={session.description}
                className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
                titleClassName="mb-2 text-xl"
                descriptionClassName="text-sm leading-relaxed"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <figure className="overflow-hidden rounded-[1.5rem]">
            <ResponsiveImage
              image={siblingsAtEventladan}
              alt="Syskonfotografering på Eventladan i Romelanda"
              sizes="(min-width: 1024px) 570px, 100vw"
              className="h-[25rem] w-full object-cover md:h-[32rem]"
              loading="lazy"
            />
          </figure>

          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
              Plats efter känsla och familj
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Välj en plats som passar er
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Platsen påverkar både känslan i bilderna och hur avslappnad
              fotograferingen blir. Vi kan fotografera utomhus, hemma hos er
              eller i en hyrd miljö som passar årstiden och det uttryck ni vill
              ha.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Inför fotograferingen hjälper jag gärna till att resonera kring
              ljus, miljö och praktiska förutsättningar. Jag har bland annat
              fotograferat familje- och syskonporträtt på Eventladan i
              Romelanda.
            </p>
            <LinkButton
              to="/familjefotografering/eventladan-romelanda/"
              variant="outline"
              size="md"
              subVariant="rounded"
              className="mt-6 font-semibold"
            >
              Se fotograferingen på Eventladan
            </LinkButton>
          </div>
        </section>

        <section className="mx-auto mb-12 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Så går familjefotograferingen till
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Från den första förfrågan till färdiga bilder håller vi upplägget
              enkelt och tydligt, med utrymme att anpassa fotograferingen efter
              barnens och familjens tempo.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <InfoCard
                key={step.title}
                title={step.title}
                description={step.description}
                className="border-black/6 bg-[#f8f8f5] p-5 shadow-none"
                titleClassName="mb-2 text-lg"
                descriptionClassName="text-sm leading-relaxed"
              />
            ))}
          </div>
        </section>

        <section
          aria-label="Galleri med familje-, barn- och syskonfotografering"
          className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 rounded-[1.75rem] border border-black/6 bg-white p-4 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] sm:grid-cols-2 md:p-5 lg:grid-cols-3"
        >
          {galleryImages.map(({ image, alt }) => (
            <figure key={alt} className="overflow-hidden rounded-[1.5rem]">
              <ResponsiveImage
                image={image}
                alt={alt}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="h-[24rem] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </figure>
          ))}
        </section>

        <section className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Pris och vad som ingår
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Familjefotografering kostar från{' '}
              <strong>{PRICING.portrait.familyPrice}</strong>. Fotograferingen
              tar {PRICING.portrait.familyDuration} och{' '}
              {PRICING.portrait.familyImages} ingår.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Extra bilder kan köpas till för {PRICING.portrait.extraImage}.
              Normal leveranstid är cirka 1 vecka, beroende på aktuell
              arbetsbelastning.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Vanliga frågor om familjefotografering
            </h2>
            <div className="space-y-4">
              {familyFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-black/6 bg-white px-4 py-4"
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
          </div>
        </section>

        <CTASection
          className="mx-auto max-w-6xl rounded-[1.75rem] border border-black/6 bg-white"
          title="Vill du boka familjefotografering?"
          description="Berätta vilka som ska vara med, vilken känsla ni vill ha och om ni redan har en plats i åtanke, så återkommer jag med ett passande upplägg."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            { to: '/services/', label: 'Se alla tjänster', variant: 'outline' },
          ]}
        />
      </main>
    </>
  )
}
