import React from 'react'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { LinkButton } from '@/components/Button'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { serviceCards } from '../data/cards'
import {
  Award,
  Camera,
  Edit3,
  Heart,
  MessageCircle,
  Send,
  Smile,
  Sparkles,
} from 'lucide-react'
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
    title: 'Porträtt & Familj',
    description:
      'För dig som vill ha personliga porträtt, familjebilder eller naturliga bilder till CV, LinkedIn och sociala medier.',
    to: '/portraits/',
    buttonText: 'Se porträtt & familj',
  },
  {
    title: 'Bröllop',
    description:
      'För er som vill dokumentera dagen med naturliga, känslosamma och tidlösa bilder.',
    to: '/weddings/',
    buttonText: 'Se bröllop',
  },
  {
    title: 'Kontakt',
    description:
      'Är du osäker på vilken fotografering som passar bäst? Hör av dig så hjälper jag dig vidare.',
    to: '/contact/',
    buttonText: 'Kontakta mig',
  },
]

const serviceAreas = [
  {
    title: 'Fotograf i Kungälv',
    description:
      'Jag utgår från Kungälv och fotograferar bröllop, porträtt, familj och företag med ett naturligt och personligt uttryck.',
  },
  {
    title: 'Fotograf i Göteborg',
    description:
      'För dig som söker fotograf i Göteborg för porträtt, företag, bröllop eller familjebilder med en trygg och genomtänkt process.',
  },
  {
    title: 'Fotograf i Stenungsund',
    description:
      'Jag fotograferar även i Stenungsund och närliggande områden, både för bröllop, porträtt och familjer som vill ha bilder med platskänsla.',
  },
]

const serviceFacts = [
  'Kungälv, Stenungsund & Göteborg',
  'Bröllop, porträtt & företag',
  'Produktfoto, hobby & fordon',
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

  const whyChooseMeList = [
    {
      icon: <Sparkles className="mb-3 h-8 w-8 text-primary" />,
      title: 'Personlig & unik stil',
      description:
        'Jag strävar efter att fånga genuina ögonblick och känslor, med en ljus och naturlig bildstil som berättar er unika historia.',
    },
    {
      icon: <Heart className="mb-3 h-8 w-8 text-primary" />,
      title: 'Engagemang & passion',
      description:
        'Fotografering är min stora passion. Jag lägger ner själ och hjärta i varje uppdrag för att ni ska bli mer än nöjda med era bilder.',
    },
    {
      icon: <Award className="mb-3 h-8 w-8 text-primary" />,
      title: 'Hög kvalitet & professionalism',
      description:
        'Ni kan förvänta er ett professionellt bemötande från första kontakt till levererade bilder av hög teknisk och konstnärlig kvalitet.',
    },
    {
      icon: <Smile className="mb-3 h-8 w-8 text-primary" />,
      title: 'Avslappnad & rolig upplevelse',
      description:
        'Målet är att ni ska känna er bekväma och ha roligt framför kameran. Då skapas de mest naturliga och minnesvärda bilderna.',
    },
  ]

  const photoProcessSteps = [
    {
      icon: <MessageCircle className="mb-4 h-10 w-10 text-primary" />,
      title: '1. Konsultation',
      description:
        'Vi startar med ett samtal där vi diskuterar era önskemål, idéer och visioner för fotograferingen.',
    },
    {
      icon: <Camera className="mb-4 h-10 w-10 text-primary" />,
      title: '2. Bokning & planering',
      description:
        'När ni känner er trygga bokar vi datum och planerar detaljerna kring plats, tid och upplägg.',
    },
    {
      icon: <Edit3 className="mb-4 h-10 w-10 text-primary" />,
      title: '3. Fotograferingen',
      description:
        'Dags för fotografering. Vi möts upp och skapar naturliga bilder i en avslappnad och kreativ atmosfär.',
    },
    {
      icon: <Send className="mb-4 h-10 w-10 text-primary" />,
      title: '4. Urval, redigering & leverans',
      description:
        'Efter fotograferingen gör jag ett noggrant urval och redigerar bilderna med omsorg innan leverans.',
    },
  ]

  return (
    <>
      <SEO
        title="Fotograf i Kungälv, Göteborg & Stenungsund | Svendsén Photography"
        description="Söker du fotograf i Kungälv, Göteborg eller Stenungsund? Jag fotograferar bröllop, porträtt, familj, företag, event och verksamheter."
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
                  Fotograf i Kungälv, Göteborg och Stenungsund
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
                  Jag erbjuder professionell fotografering för bröllop,
                  porträtt, familj och företag. Här hittar du tjänster för dig
                  som vill ha bilder som känns levande, trygga och genomtänkta.
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
                <div className="mt-8">
                  <LinkButton
                    to="/contact/"
                    variant="default"
                    size="lg"
                    subVariant="rounded"
                    className="px-8 font-semibold"
                  >
                    Boka din fotografering
                  </LinkButton>
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
          <SectionContent heading="Fotografering i ditt område">
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-textSecondary">
              Oavsett om du söker fotograf i Kungälv, Göteborg eller Stenungsund
              börjar vi med vad bilderna ska användas till och vilken känsla de
              ska ha. Sedan formar vi plats, tid och upplägg efter uppdraget.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {serviceAreas.map((area) => (
                <InfoCard
                  key={area.title}
                  title={area.title}
                  description={area.description}
                  className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
                  titleClassName="mb-2 text-xl"
                  descriptionClassName="text-sm leading-relaxed"
                />
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section
          bgColor="white"
          rounded="3xl"
          className="mx-3 mt-10 overflow-hidden border border-black/6 bg-white py-12 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] sm:mx-4 md:mx-5 md:py-20 lg:mx-auto lg:max-w-6xl"
        >
          <SectionContent heading="Utvalda tjänster">
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
                          index === 0 || index === 1 || index === 3
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

                      <div className="pt-3">
                        <LinkButton
                          to={card.buttonLink || '/contact/'}
                          variant="outline"
                          size="md"
                          subVariant="rounded"
                          className="font-semibold"
                        >
                          {card.buttonText || 'Läs mer & boka'}
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </SectionContent>
        </Section>

        <Section
          bgColor="white"
          rounded="3xl"
          className="mx-3 mt-10 overflow-hidden border border-black/6 bg-white py-12 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] sm:mx-4 md:mx-5 md:py-20 lg:mx-auto lg:max-w-6xl"
        >
          <SectionContent heading="Mer än bara bilder">
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
              <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
                <h3 className="mb-4 text-2xl font-semibold text-textPrimary">
                  Varför kunder väljer att arbeta med mig
                </h3>
                <p className="text-base leading-relaxed text-textSecondary">
                  För mig handlar fotografering inte bara om att leverera fina
                  bilder. Det handlar också om att skapa en upplevelse där ni
                  känner er trygga, hörda och naturliga genom hela processen.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {whyChooseMeList.map((item) => (
                  <InfoCard
                    key={item.title}
                    className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
                  >
                    <div className="mb-2">{item.icon}</div>
                    <h3 className="mb-2 text-xl font-semibold text-textPrimary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-textSecondary">
                      {item.description}
                    </p>
                  </InfoCard>
                ))}
              </div>
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
                Startpaket för produktfoto börjar från{' '}
                {PRICING.business.productStartFrom} {PRICING.business.taxNote}.
                Större produktserier och återkommande uppdrag anpassas efter
                antal produkter, miljö och hur bilderna ska användas.
              </p>

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
          bgColor="white"
          rounded="3xl"
          className="mx-3 mt-10 overflow-hidden border border-black/6 bg-white py-12 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] sm:mx-4 md:mx-5 md:py-20 lg:mx-auto lg:max-w-6xl"
        >
          <SectionContent heading="Från första kontakt till färdiga bilder">
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {photoProcessSteps.map((step) => (
                <InfoCard
                  key={step.title}
                  centered
                  className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
                >
                  <div className="mx-auto mb-1 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="mb-2 mt-2 text-lg font-semibold text-textPrimary">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-textSecondary">
                    {step.description}
                  </p>
                </InfoCard>
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section
          bgColor="offWhite"
          rounded="none"
          className="mt-10 overflow-hidden bg-[#f5f5f2] py-16 text-center md:py-24 lg:py-28"
        >
          <SectionContent>
            <CTASection
              title="Låt oss berätta din historia genom bilder"
              description="Varje bild har en historia att berätta. Jag ser fram emot att höra din och hjälpa dig att skapa minnen som varar över tid."
              actions={[{ to: '/contact/', label: 'Kontakta mig idag' }]}
            />
          </SectionContent>
        </Section>
      </div>
    </>
  )
}
