import React from 'react'
import { CTASection } from '@/components/CTASection'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { LinkButton } from '@/components/Button'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { serviceCards } from '../data/cards'
import { getPageOgImage } from '@/config/pageSeo'
import { toAbsoluteUrl } from '@/utils/utils'
import { getImageSrc, type ResponsiveImageAsset } from '@/utils/responsiveImages'
import { businessReference, BUSINESS } from '@/config/seo'
import { PRICING } from '@/config/pricing'

const pageHeroImage =
  serviceCards.length > 0
    ? getImageSrc(serviceCards[0].image)
    : '/images/default-photo-hero.jpg'

const productImages = (
  Object.entries(
    import.meta.glob('../assets/companyhobby/DSC*.{jpg,jpeg,png}', {
      eager: true,
      import: 'default',
      query: '?responsive',
    }),
  ) as [string, ResponsiveImageAsset][]
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, image]) => image)

const quickLinks = [
  {
    title: 'Bröllop',
    description:
      'Jämför regionala bröllopspaket, omfattning och priser för olika delar av dagen.',
    to: '/weddings/',
    buttonText: 'Se bröllopspaket',
  },
  {
    title: 'Porträtt',
    description:
      'Se upplägg och priser för personliga porträtt och profilbilder.',
    to: '/portraits/',
    buttonText: 'Se porträttfotografering',
  },
  {
    title: 'Familj',
    description:
      'Läs om familje-, barn-, syskon- och gravidfotografering utomhus eller på plats.',
    to: '/familjefotografering/',
    buttonText: 'Se familjefotografering',
  },
  {
    title: 'Företag',
    description:
      'Se personalporträtt, gruppbilder och verksamhetsfoto på plats hos företag.',
    to: '/foretagsfotografering/',
    buttonText: 'Se företagsfotografering',
  },
]

const serviceFacts = [
  'Jämför startpriser',
  'Se vad som ingår',
  'Välj tjänst eller offert',
]

const renderDescriptionLine = (line: string) => {
  if (line === 'Filmalternativ') {
    return (
      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-textPrimary/78">
        {line}
      </p>
    )
  }

  if (line.startsWith('Välj mellan')) {
    return null
  }

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-black/6 bg-[#f8f8f5] px-4 py-3">
      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-textPrimary/70" />
      <span className="text-[0.95rem] leading-relaxed text-textPrimary/88">
        {line}
      </span>
    </div>
  )
}

export default function Services() {
  const ogImage = getPageOgImage('services')
  const photographyPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fotografering i Göteborg, Kungälv och Stenungsund',
    serviceType: 'Photography',
    description:
      'Professionell fotograf för bröllop, porträtt, familj och företag med en personlig och naturlig bildstil.',
    image: toAbsoluteUrl(pageHeroImage),
    url: 'https://www.svendsenphotography.com/services/',
    provider: businessReference,
    areaServed: BUSINESS.serviceAreas.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
  }

  return (
    <>
      <SEO
        title="Fotograferingstjänster & priser | Svendsén Photography"
        description="Jämför upplägg och startpriser för bröllop, porträtt, familj, företag och produktfotografering i Kungälv med omnejd."
        url="https://www.svendsenphotography.com/services/"
        jsonLd={photographyPageJsonLd}
        image={ogImage.src}
        imageAlt={ogImage.alt}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Tjänster',
            url: 'https://www.svendsenphotography.com/services/',
          },
        ]}
      />
      <div className="bg-[#f5f5f2] pt-24 text-textPrimary md:pt-28">
        <Section
          bgColor="white"
          rounded="3xl"
          className="mx-3 overflow-hidden border border-black/6 bg-white pb-14 pt-10 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] sm:mx-4 md:mx-5 md:pb-20 md:pt-14 lg:mx-auto lg:max-w-6xl"
        >
          <SectionContent>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
                  Tjänster
                </p>
                <h1 className="mb-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Jämför fotograferingstjänster och priser
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
                  Här ser du skillnaden mellan upplägg, vad som ingår och vilka
                  startpriser som gäller. Välj en tjänst för mer information
                  eller skicka en offertförfrågan när uppdraget behöver
                  anpassas.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {serviceFacts.map((fact) => (
                    <span
                      key={fact}
                      className="rounded-full border border-black/6 bg-[#f8f8f5] px-4 py-2 text-sm font-semibold text-textPrimary"
                    >
                      {fact}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-5 md:max-w-[32rem] md:p-6 lg:ml-auto">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
                  Hitta rätt väg in
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {quickLinks.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.35rem] border border-black/6 bg-white p-4"
                    >
                      <h2 className="mb-2 text-xl font-semibold text-textPrimary">
                        {item.title}
                      </h2>
                      <p className="mb-4 text-sm leading-relaxed text-textSecondary">
                        {item.description}
                      </p>
                      <LinkButton
                        to={item.to}
                        variant="outline"
                        size="md"
                        subVariant="rounded"
                        className="font-semibold"
                      >
                        {item.buttonText}
                      </LinkButton>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionContent>
        </Section>

        <Section
          bgColor="white"
          rounded="3xl"
          className="mx-3 mt-10 overflow-hidden border border-black/6 bg-white py-12 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] sm:mx-4 md:mx-5 md:py-20 lg:mx-auto lg:max-w-6xl"
        >
          <SectionContent heading="Tjänster, innehåll och startpriser">
            <div className="mt-8 space-y-14 md:space-y-20">
              {serviceCards.map((card, index) => {
                const descriptionLines = card.description
                  .split('\n')
                  .map((line) => line.trim())
                  .filter(Boolean)

                return (
                  <div
                    key={card.title}
                    className={`grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-12 ${
                      index % 2 === 1
                        ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                        : ''
                    }`}
                  >
                    <div className="group relative h-full min-h-[20rem] overflow-hidden rounded-[1.5rem]">
                      <ResponsiveImage
                        image={card.image}
                        alt={card.title}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="h-full min-h-[20rem] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] lg:min-h-0"
                      />
                    </div>

                    <div className="flex h-full flex-col rounded-[1.5rem] border border-black/6 bg-white p-6 md:p-8">
                      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
                            Tjänst {index + 1}
                          </p>
                          <h3 className="text-3xl font-semibold text-textPrimary">
                            {card.title}
                          </h3>
                        </div>
                        {card.price && (
                          <div className="whitespace-nowrap rounded-full border border-black/6 bg-[#f8f8f5] px-4 py-2 text-base font-semibold text-textPrimary">
                            {card.price}
                          </div>
                        )}
                      </div>

                      <div
                        className={`space-y-3 ${
                          index === 0 ||
                          index === 1 ||
                          index === 2 ||
                          index === 4
                            ? 'pb-6'
                            : ''
                        }`}
                      >
                        {descriptionLines.map((line) => (
                          <React.Fragment key={line}>
                            {renderDescriptionLine(line)}
                          </React.Fragment>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-3">
                        <LinkButton
                          to={card.buttonLink || '/contact/'}
                          variant="outline"
                          size="md"
                          subVariant="rounded"
                          className="font-semibold"
                        >
                          {card.buttonText || 'Läs mer & boka'}
                        </LinkButton>
                        {'secondaryButtonLink' in card &&
                          card.secondaryButtonLink &&
                          card.secondaryButtonText && (
                            <LinkButton
                              to={card.secondaryButtonLink}
                              variant="outline"
                              size="md"
                              subVariant="rounded"
                              className="font-semibold"
                            >
                              {card.secondaryButtonText}
                            </LinkButton>
                          )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </SectionContent>
        </Section>

        {productImages.length > 0 && (
          <Section
            bgColor="white"
            rounded="3xl"
            className="mx-3 mt-10 overflow-hidden border border-black/6 bg-white py-12 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] sm:mx-4 md:mx-5 md:py-20 lg:mx-auto lg:max-w-6xl"
          >
            <SectionContent heading="Produktfotografering för företag">
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-textSecondary">
                Jag fotograferar produkter för webbshop, katalog, sociala medier
                och marknadsföring. Jag har återkommande arbetat med produktbilder
                för företag, bland annat produkter som penslar, tejp och tillbehör
                där tydlighet, färg och användbarhet är viktigt.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-textSecondary">
                Startpaket med {PRICING.business.productIncludedImages} bilder
                börjar från {PRICING.business.productStartFrom}. Extra bilder
                inom samma upplägg kostar från{' '}
                {PRICING.business.productExtraImageFrom}.{' '}
                {PRICING.business.taxNote} Större produktserier och
                återkommande uppdrag anpassas efter antal produkter, miljö och
                hur bilderna ska användas.
              </p>

              <LinkButton
                to="/produktfotografering/"
                variant="outline"
                size="md"
                subVariant="rounded"
                className="mt-6 font-semibold"
              >
                Se produktfotografering
              </LinkButton>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {productImages.map((image, index) => (
                  <figure
                    key={getImageSrc(image)}
                    className="overflow-hidden rounded-[1.5rem] border border-black/6 bg-white"
                  >
                    <ResponsiveImage
                      image={image}
                      alt={`Produktfotografering av penslar, tejp och tillbehör ${index + 1}`}
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 33vw, 100vw"
                      className="h-[18rem] w-full object-cover sm:h-[16rem] lg:h-[20rem]"
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
            </SectionContent>
          </Section>
        )}

        <Section
          bgColor="offWhite"
          rounded="none"
          className="mt-10 overflow-hidden bg-[#f5f5f2] py-16 text-center md:py-24 lg:py-28"
        >
          <SectionContent>
            <CTASection
              title="Behöver du hjälp att välja fotografering?"
              description="Berätta vad bilderna ska användas till, ungefärlig omfattning och önskat datum. Då kan jag rekommendera rätt upplägg eller återkomma med offert."
              actions={[{ to: '/contact/', label: 'Skicka offertförfrågan' }]}
            />
          </SectionContent>
        </Section>
      </div>
    </>
  )
}
