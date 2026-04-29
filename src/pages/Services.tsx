import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { LinkButton } from '@/components/Button'
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
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

const pageHeroImage =
  serviceCards.length > 0
    ? serviceCards[0].image
    : '/images/default-photo-hero.jpg'

const quickLinks = [
  {
    title: 'Porträtt',
    description:
      'För dig som vill ha personliga bilder till CV, LinkedIn, sociala medier eller eget varumärke.',
    to: '/portraits',
    buttonText: 'Se porträtt',
  },
  {
    title: 'Bröllop',
    description:
      'För er som vill dokumentera dagen med naturliga, känslosamma och tidlösa bilder.',
    to: '/weddings',
    buttonText: 'Se bröllop',
  },
  {
    title: 'Kontakt',
    description:
      'Är du osäker på vilken fotografering som passar bäst? Hör av dig så hjälper jag dig vidare.',
    to: '/contact',
    buttonText: 'Kontakta mig',
  },
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
    <div className="flex items-start gap-3 rounded-2xl border border-black/6 bg-white px-4 py-3 shadow-[0_10px_24px_-20px_rgba(31,41,55,0.28)]">
      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-textPrimary/70" />
      <span className="text-[0.95rem] leading-relaxed text-textPrimary/88">
        {line}
      </span>
    </div>
  )
}

export default function Services() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)
  const photographyPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Photographer',
    name: 'Fotograf i Göteborg och Kungälv - Svendsen Photography',
    description:
      'Professionell fotograf i Göteborg och Kungälv för bröllop, porträtt och företag med en personlig och naturlig bildstil.',
    image: pageHeroImage,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kungälv',
      addressRegion: 'Västra Götaland',
      addressCountry: 'SE',
    },
    priceRange: 'Kontakta för prisinformation',
    url: 'https://www.svendsenphotography.com/services',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Kungälv' },
      { '@type': 'AdministrativeArea', name: 'Göteborg' },
    ],
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
    <HelmetProvider>
      <SEO
        title="Fotograf i Göteborg & Kungälv | Bröllop, porträtt och företag | Svendsen Photography"
        description="Svendsen Photography erbjuder professionell fotografering i Göteborg och Kungälv inom bröllop, porträtt och företag. Utforska tjänsterna och hitta rätt fotografering för dig."
        url="https://www.svendsenphotography.com/services"
        jsonLd={photographyPageJsonLd}
        image={absoluteLogoUrl}
      />
      <div className="bg-[#f7f5f2] pt-16 text-textPrimary md:pt-20">
        <Section
          bgColor="beige"
          roundedTop="10xl"
          roundedBottom="10xl"
          className="mx-3 overflow-hidden pb-16 pt-10 sm:mx-4 md:mx-5 md:pb-24 md:pt-16 lg:mx-6"
        >
          <SectionContent>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
                  Tjänster
                </p>
                <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Fotografering med naturlig känsla och en personlig upplevelse
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
                  Jag erbjuder professionell fotografering i Göteborg och
                  Kungälv för bröllop, porträtt och företag. Här hittar du
                  tjänster för dig som vill ha bilder som känns levande, trygga
                  och genomtänkta.
                </p>
                <div className="mt-8">
                  <LinkButton
                    to="/contact"
                    variant="default"
                    size="lg"
                    subVariant="rounded"
                    className="px-8 font-semibold"
                  >
                    Boka din fotografering
                  </LinkButton>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-[#fcfaf7] p-5 shadow-[0_24px_60px_-36px_rgba(31,41,55,0.28)] md:max-w-[32rem] md:p-6 lg:ml-auto">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
                  Hitta rätt väg in
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {quickLinks.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] border border-black/6 bg-white p-4 shadow-[0_12px_28px_-24px_rgba(31,41,55,0.28)]"
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
          bgColor="beige"
          roundedTop="9xl"
          roundedBottom="9xl"
          className="mx-3 overflow-hidden py-12 sm:mx-4 md:mx-5 md:py-20 lg:mx-6 lg:py-24"
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
                    <div className="group relative h-full min-h-[20rem] overflow-hidden rounded-[2rem]">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full min-h-[20rem] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] lg:min-h-0"
                      />
                    </div>

                    <div className="flex h-full flex-col rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.2)] md:p-8">
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
                          <div className="whitespace-nowrap rounded-full border border-black/6 bg-white px-4 py-2 text-base font-semibold text-textPrimary shadow-[0_10px_24px_-20px_rgba(31,41,55,0.28)]">
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
                          to={card.buttonLink || '/contact'}
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
          bgColor="beige"
          roundedTop="9xl"
          roundedBottom="9xl"
          className="mx-3 overflow-hidden py-12 sm:mx-4 md:mx-5 md:py-20 lg:mx-6 lg:py-24"
        >
          <SectionContent heading="Mer än bara bilder">
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
              <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_24px_60px_-36px_rgba(31,41,55,0.24)] md:p-8">
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
                  <InfoCard key={item.title} className="bg-white p-6">
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

        <Section
          bgColor="beige"
          roundedTop="9xl"
          roundedBottom="9xl"
          className="mx-3 overflow-hidden py-12 sm:mx-4 md:mx-5 md:py-20 lg:mx-6 lg:py-24"
        >
          <SectionContent heading="Från första kontakt till färdiga bilder">
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {photoProcessSteps.map((step) => (
                <InfoCard key={step.title} centered className="bg-white p-6">
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
          bgColor="beige"
          roundedTop="10xl"
          roundedBottom="10xl"
          className="mx-3 overflow-hidden py-16 text-center sm:mx-4 md:mx-5 md:py-24 lg:mx-6 lg:py-28"
        >
          <SectionContent>
            <CTASection
              title="Låt oss berätta din historia genom bilder"
              description="Varje bild har en historia att berätta. Jag ser fram emot att höra din och hjälpa dig att skapa minnen som varar över tid."
              actions={[{ to: '/contact', label: 'Kontakta mig idag' }]}
            />
          </SectionContent>
        </Section>
      </div>
    </HelmetProvider>
  )
}
