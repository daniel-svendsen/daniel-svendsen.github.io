import React from 'react'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { LinkButton } from '@/components/Button'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import webdevImage from '../assets/webdev-optimized.jpg?responsive'
import { CheckCircle, Search, Smartphone, Users, Zap } from 'lucide-react'
import { toAbsoluteUrl } from '@/utils/utils'
import { getImageSrc } from '@/utils/responsiveImages'

export default function WebServicesPage() {
  const absoluteSpecificImage = toAbsoluteUrl(getImageSrc(webdevImage))
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebService',
    name: 'Webbutveckling och webbtjänster i Göteborg och Kungälv',
    description:
      'Webbutveckling och webbtjänster för företag i Göteborg och Kungälv med fokus på modern teknik, prestanda och synlighet online.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Svendsen Photography',
      url: 'https://www.svendsenphotography.com',
    },
    serviceType: ['WebDevelopment', 'Website optimization'],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Kungälv' },
      { '@type': 'AdministrativeArea', name: 'Göteborg' },
    ],
    url: 'https://www.svendsenphotography.com/webservices/',
  }

  const servicesList = [
    {
      icon: <Zap className="h-8 w-8 text-primary mb-3" />,
      title: 'Moderna Användarupplevelser',
      description:
        'Jag bygger webbplatser som är snabba, tydliga och enkla att använda för dina besökare.',
    },
    {
      icon: <Search className="h-8 w-8 text-primary mb-3" />,
      title: 'Fokus på Synlighet',
      description:
        'Jag arbetar med grundläggande SEO och tekniska förutsättningar så att din webbplats blir enklare för sökmotorer att förstå.',
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary mb-3" />,
      title: 'Responsiv Design',
      description:
        'Din hemsida ska fungera bra på dator, surfplatta och mobil med en modern och professionell upplevelse.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary mb-3" />,
      title: 'Anpassat efter Ditt Företag',
      description:
        'Varje projekt byggs utifrån dina mål, din målgrupp och vilket intryck du vill ge online.',
    },
  ]

  const processSteps = [
    {
      title: '1. Behovsanalys & Planering',
      description:
        'Vi startar med att diskutera dina mål och behov. Tillsammans skapar vi en plan för din webbnärvaro.',
    },
    {
      title: '2. Design & Användarupplevelse',
      description:
        'Jag tar fram ett upplägg med fokus på tydlighet, användarvänlighet och ett professionellt uttryck.',
    },
    {
      title: '3. Utveckling & SEO-Grund',
      description:
        'Webbplatsen byggs med modern teknik samtidigt som viktiga SEO-grunder som struktur, innehåll och prestanda tas med från start.',
    },
    {
      title: '4. Testning & Lansering',
      description:
        'Innan lansering testas sidan på olika enheter och skärmstorlekar för att säkerställa att allt fungerar som det ska.',
    },
    {
      title: '5. Uppföljning & Eventuell Support',
      description:
        'Efter lansering kan jag hjälpa till med fortsatt utveckling, justeringar och råd kring innehåll och synlighet.',
    },
  ]

  return (
    <>
      <SEO
        title="Webbutveckling och webbtjänster i Göteborg | Svendsen Photography"
        description="Svendsen Photography erbjuder webbutveckling och webbtjänster för företag som vill ha en modern, snabb och professionell närvaro online i Göteborg och Kungälv."
        url="https://www.svendsenphotography.com/webservices/"
        jsonLd={pageJsonLd}
        image={absoluteSpecificImage}
      />
      <main className="bg-[#f7f5f2] pt-16 text-foreground md:pt-20">
        <Section
          bgColor="offWhite"
          roundedTop="10xl"
          roundedBottom="9xl"
          className="mx-3 overflow-hidden pt-12 pb-16 text-center sm:mx-4 md:mx-5 md:pt-20 md:pb-24 lg:mx-6"
        >
          <SectionContent>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary dark:text-white mb-6 font-poiret tracking-wider">
              Webbtjänster för företag
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Jag hjälper företag i Göteborg och Kungälv att bygga en modern
              digital närvaro med fokus på tydlighet, prestanda och en
              professionell användarupplevelse.
            </p>
            <LinkButton
              to="/contact/"
              variant="default"
              size="lg"
              subVariant="rounded"
              className="font-semibold px-8"
            >
              Diskutera ditt webbprojekt
            </LinkButton>
          </SectionContent>
        </Section>

        <Section
          bgColor="beige"
          roundedBottom="9xl"
          roundedTop="9xl"
          className="mx-3 overflow-hidden py-12 sm:mx-4 md:mx-5 md:py-20 lg:mx-6 lg:py-24"
        >
          <SectionContent heading="Fördelar med moderna webbtjänster">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8">
              {servicesList.map((service) => (
                <div
                  key={service.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl flex flex-col items-center text-center"
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold text-textPrimary dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-textSecondary dark:text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section
          bgColor="offWhite"
          roundedTop="9xl"
          roundedBottom="9xl"
          className="mx-3 overflow-hidden py-12 sm:mx-4 md:mx-5 md:py-20 lg:mx-6 lg:py-24"
        >
          <SectionContent heading="Webbutveckling med fokus på nytta och synlighet">
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="prose prose-lg text-textSecondary dark:text-gray-300 max-w-none">
                <p>
                  Jag kan hjälpa dig att skapa en ny hemsida eller vidareutveckla
                  en befintlig, med fokus på hur sidan upplevs av besökare och
                  hur tydligt ditt företag presenteras online.
                </p>
                <ul className="space-y-3 mt-4">
                  {[
                    'Nyutveckling av moderna hemsidor',
                    'Grundläggande teknisk SEO och sidstruktur',
                    'Responsiv design för olika skärmstorlekar',
                    'Fokus på laddningstider och användarupplevelse',
                    'Stöd kring innehåll, struktur och synlighet',
                    'Möjlighet att kombinera foto och webb i samma lösning',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6">
                  Har du en befintlig hemsida som behöver ett lyft, eller vill
                  du starta från grunden? Låt oss prata om hur jag kan hjälpa
                  dig.
                </p>
              </div>
              <div>
                <ResponsiveImage
                  image={webdevImage}
                  alt="Exempel på modern hemsideutveckling för företag"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="rounded-2xl object-cover w-full h-auto max-h-[450px]"
                />
                <p className="text-center text-xs text-muted-foreground mt-2">
                  Exempel på design och layout för en modern företagshemsida.
                </p>
              </div>
            </div>
          </SectionContent>
        </Section>

        <Section
          bgColor="beige"
          roundedBottom="9xl"
          roundedTop="9xl"
          className="mx-3 overflow-hidden py-12 sm:mx-4 md:mx-5 md:py-20 lg:mx-6 lg:py-24"
        >
          <SectionContent heading="Min process: från idé till hemsida">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold text-textPrimary dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-textSecondary dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section
          bgColor="offWhite"
          roundedTop="9xl"
          roundedBottom="10xl"
          className="mx-3 overflow-hidden py-16 text-center sm:mx-4 md:mx-5 md:py-24 lg:mx-6 lg:py-28"
        >
          <SectionContent>
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary dark:text-white mb-6 font-poiret tracking-wider">
              Intresserad av en modern hemsida?
            </h2>
            <p className="text-lg text-muted-foreground dark:text-gray-300 mb-10 max-w-xl mx-auto">
              Låt oss tillsammans skapa en hemsida som ser bra ut, fungerar väl
              och stöder ditt företags mål online.
            </p>
            <LinkButton
              to="/contact/"
              variant="default"
              size="lg"
              subVariant="rounded"
              className="font-semibold px-8"
            >
              Kontakta mig för ett samtal
            </LinkButton>
          </SectionContent>
        </Section>
      </main>
    </>
  )
}
