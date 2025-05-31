import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { LinkButton } from '@/components/Button'
import webdevImage from '../assets/webdev.png'
import { CheckCircle, Search, Smartphone, Users, Zap } from 'lucide-react'

export default function WebServicesPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebService',
    name: 'Webbutveckling av SEO-Anpassade SPA Hemsidor - Svendsén Photography',
    description:
      'Utveckling av moderna Single Page Applications (SPA) med fokus på SEO-anpassning i Kungälv och Göteborg.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Svendsén Photography',
    },
    serviceType: ['WebDevelopment', 'SEO'],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: ['Kungälv', 'Göteborg'],
    },
  }

  const servicesList = [
    {
      icon: <Zap className="h-8 w-8 text-primary mb-3" />,
      title: 'Moderna Användarupplevelser',
      description:
        'Single Page Applications (SPA) laddar innehåll dynamiskt, vilket kan ge en följsam och interaktiv upplevelse för dina besökare.',
    },
    {
      icon: <Search className="h-8 w-8 text-primary mb-3" />,
      title: 'Fokus på SEO-Anpassning',
      description:
        'Det är viktigt att SPAs byggs på ett sätt som gör dem synliga för sökmotorer. Jag arbetar för att din SPA-sida ska vara indexerbar och anpassad för Google.',
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary mb-3" />,
      title: 'Responsiv Design',
      description:
        'Jag strävar efter att din hemsida ska se bra ut och fungera väl på olika enheter – datorer, surfplattor och mobiler, med moderna tekniker som React.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary mb-3" />,
      title: 'Anpassat efter Dina Behov',
      description:
        'Varje projekt är unikt. Jag utvecklar hemsidor med dina mål och din målgrupp i åtanke.',
    },
  ]

  const processSteps = [
    {
      title: '1. Behovsanalys & Planering',
      description:
        'Vi startar med att diskutera dina mål och behov. Tillsammans skapar vi en plan för din webbnärvaro.',
    },
    {
      title: '2. Design & Användarupplevelse (UX)',
      description:
        'Jag tar fram ett designförslag med fokus på att vara både tilltalande och användarvänligt.',
    },
    {
      title: '3. Utveckling & SEO-Arbete',
      description:
        'Din SPA-hemsida byggs med modern teknik som React. Parallellt arbetar jag med grundläggande teknisk SEO för att förbättra synligheten.',
    },
    {
      title: '4. Testning & Lansering',
      description:
        'Innan lansering testas sidan på olika enheter och webbläsare för att säkerställa att den fungerar väl.',
    },
    {
      title: '5. Uppföljning & Eventuell Support',
      description:
        'Efter lansering kan jag erbjuda support och diskutera hur du kan arbeta vidare med din hemsida.',
    },
  ]

  return (
    <HelmetProvider>
      <SEO
        title="Webbutveckling: Moderna SPA Hemsidor med SEO-fokus | Svendsén Photography"
        description="Skapa en modern webbnärvaro med skräddarsydda SPA-hemsidor (Single Page Applications). Jag fokuserar på SEO-anpassning från start. Verksam i Kungälv & Göteborg."
        url="https://www.svendsenphotography.com/webbtjanster"
        keywords="webbutveckling kungälv, spa hemsida göteborg, seo för spa, react utvecklare, modern hemsida, sökmotoroptimering hemsida, webbyrå kungälv"
        jsonLd={pageJsonLd}
        image={webdevImage}
      />
      <main className="pt-16 md:pt-20 bg-background text-foreground">
        <Section
          bgColor="offWhite"
          roundedBottom="9xl"
          className="pt-12 pb-16 md:pt-20 md:pb-24 text-center"
        >
          <SectionContent>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary dark:text-white mb-6 font-poiret tracking-wider">
              Moderna & SEO-Anpassade SPA-Hemsidor
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Vill du ge ditt företag en modern digital närvaro? Jag bygger
              interaktiva Single Page Applications (SPA) och arbetar med att
              göra dem synliga för sökmotorer.
            </p>
            <LinkButton
              to="/contact"
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
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Fördelar med SPA och SEO-Anpassning">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8">
              {servicesList.map((service) => (
                <div
                  key={service.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
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
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Mina WebbTjänster inom SPA & SEO">
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="prose prose-lg text-textSecondary dark:text-gray-300 max-w-none">
                <p>
                  Jag kan hjälpa dig att skapa din nya hemsida, från första idé
                  till en fungerande SPA. Mitt mål är att kombinera modern
                  teknik med grundläggande SEO-principer.
                </p>
                <ul className="space-y-3 mt-4">
                  {[
                    'Nyutveckling av SPA-hemsidor (React)',
                    'Grundläggande teknisk SEO-implementation',
                    'Responsiv design för olika skärmstorlekar',
                    'Fokus på sidans laddningstider',
                    'Eventuell integration med Google Analytics & Search Console',
                    'Rådgivning kring innehåll och sökord',
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
                  dig!
                </p>
              </div>
              <div>
                <img
                  src={webdevImage}
                  alt="Exempel på modern hemsideutveckling och design för SPA-sidor"
                  className="rounded-2xl shadow-xl object-cover w-full h-auto max-h-[450px]"
                />
                <p className="text-center text-xs text-muted-foreground mt-2">
                  Exempel på design och layout för en modern SPA-hemsida.
                </p>
              </div>
            </div>
          </SectionContent>
        </Section>

        <Section
          bgColor="beige"
          roundedBottom="9xl"
          roundedTop="9xl"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Min Process: Från Idé till Hemsida">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
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
          className="py-16 md:py-24 lg:py-28 text-center"
        >
          <SectionContent>
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary dark:text-white mb-6 font-poiret tracking-wider">
              Intresserad av en Modern Hemsida?
            </h2>
            <p className="text-lg text-muted-foreground dark:text-gray-300 mb-10 max-w-xl mx-auto">
              Låt oss tillsammans skapa en hemsida som ser bra ut och fungerar
              väl för dina behov.
            </p>
            <LinkButton
              to="/contact"
              variant="default"
              size="lg"
              subVariant="rounded"
              className="font-semibold px-8"
            >
              Kontakta Mig För Ett Samtal
            </LinkButton>
          </SectionContent>
        </Section>
      </main>
    </HelmetProvider>
  )
}