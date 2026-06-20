import React from 'react'

import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { LinkButton } from '@/components/Button'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'
import { businessReference } from '@/config/seo'

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

const kungalvGalleryImages = Object.entries(
  import.meta.glob(
    '../assets/cases/brollopkungalvbilder/*.{jpg,jpeg,png}',
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

const planningTips = [
  {
    title: 'Promenadbilder',
    description:
      'En kort promenad kan räcka långt. Det viktiga är att platsen ger lite variation och att ni får några minuter där ni kan slappna av tillsammans.',
  },
  {
    title: 'Vigsel och familj',
    description:
      'För mindre upplägg går det fint att fokusera på vigseln, några familjebilder och porträtt på er två utan att dagen behöver kännas styrd av kameran.',
  },
  {
    title: 'Ljus och miljö',
    description:
      'Mjukt ljus, lugna bakgrunder och en plats där det går att röra sig naturligt gör ofta mer för bilderna än en avancerad fotoplats.',
  },
]

const localFaqs = [
  {
    question: 'Fotograferar du bröllop i Kungälv?',
    answer:
      'Ja, jag fotograferar bröllop i Kungälv och närliggande områden. Upplägget kan anpassas efter allt från en kortare vigsel till en längre dag.',
  },
  {
    question: 'Kan vi bara boka bilder på oss som par?',
    answer:
      'Ja. För vissa par passar det bäst med ett mindre upplägg där fokus ligger på porträtt, en promenad, vigseln och några bilder med familjen.',
  },
  {
    question: 'Hur lång tid behövs för promenadbilder?',
    answer:
      'Ofta räcker 10 till 20 minuter för att få en lugn serie bilder, särskilt om platsen ligger nära vigseln eller festen.',
  },
]

export default function WeddingPhotographerKungalv() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

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
        image={absoluteLogoUrl}
        jsonLd={serviceJsonLd}
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
              Naturliga bilder runt er dag
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Många par vill ha bilder som känns fina men inte för regisserade.
              Därför arbetar jag gärna med enkla rörelser, promenader och små
              pauser där ni får vara med varandra medan jag fångar känslan.
            </p>
            <LinkButton
              to="/guider/brollopsbilder-promenad/"
              variant="outline"
              size="lg"
              subVariant="rounded"
              className="mt-6 px-8 font-semibold"
            >
              Läs guide om promenadbilder
            </LinkButton>
            <LinkButton
              to="/guider/brollopsplanerare/"
              variant="outline"
              size="lg"
              subVariant="rounded"
              className="ml-0 mt-4 px-8 font-semibold sm:ml-3"
            >
              Checklista för bröllopsbilder
            </LinkButton>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {planningTips.map((tip) => (
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
              alt="Bröllopsbilder i naturmiljö nära Kungälv"
              className="h-[24rem] w-full object-cover md:h-full"
              sizes="(min-width: 1024px) 520px, 100vw"
              loading="lazy"
            />
          </figure>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.2)] md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Promenadbilder för paret
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              En promenad fungerar särskilt bra om ni vill ha bilder där ni får
              vara lite mer för er själva. Det kan vara nära vigselplatsen, vid
              en promenadslinga eller i en miljö som redan betyder något för er.
            </p>
            <p className="mb-6 text-base leading-relaxed text-textSecondary">
              Det viktigaste är att det finns utrymme att gå, stanna till och
              byta riktning utan att det känns som en lång fotografering. Då kan
              bilderna bli mer levande och mindre poserade.
            </p>
            <LinkButton
              to="/brollop/kungalv/"
              variant="outline"
              size="lg"
              subVariant="rounded"
              className="px-8 font-semibold"
            >
              Se exempel från Kungälv
            </LinkButton>
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:rounded-[3rem]">
          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.2)] md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Upplägg för bröllop i Kungälv
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Fotograferingen kan vara kort och fokuserad eller täcka fler
              delar av dagen. För ett mindre upplägg kan vigsel, familj och
              porträtt räcka långt.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Om ni planerar en längre dag går det att lägga till förberedelser,
              first look, mingel och fest. Jag anpassar upplägget efter vad ni
              vill kunna minnas efteråt.
            </p>
          </div>

          <div className="space-y-4">
            {localFaqs.map((faq) => (
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

        {kungalvGalleryImages.length > 0 && (
          <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
            <div className="mb-8 max-w-3xl">
              <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
                Fler bröllopsbilder från Kungälv
              </h2>
              <p className="text-base leading-relaxed text-textSecondary">
                Några fler bilder från bröllop i Kungälv, som visar hur både
                miljö, detaljer och kortare porträttstunder kan få ta plats i
                ett personligt upplägg.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {kungalvGalleryImages.map((image, index) => (
                <figure
                  key={image}
                  className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]"
                >
                  <ResponsiveImage
                    image={image}
                    alt={`Bröllopsbild från Kungälv ${index + 1}`}
                    className="h-[22rem] w-full object-cover lg:h-[18rem]"
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </section>
        )}

        <CTASection
          className="rounded-[2.25rem] bg-white/82 lg:rounded-[3rem]"
          title="Letar ni efter bröllopsfotograf i Kungälv?"
          description="Berätta lite om er dag, platsen och vilken typ av bilder ni hoppas på, så återkommer jag med ett upplägg som passar."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            { to: '/weddings/', label: 'Se bröllopssidan', variant: 'outline' },
          ]}
        />
      </main>
    </>
  )
}
