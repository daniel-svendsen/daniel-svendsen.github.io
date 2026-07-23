import React from 'react'
import { CheckCircle, Search, Smartphone, Users, Zap } from 'lucide-react'

import { LinkButton } from '@/components/Button'
import { EditorialIntro, EditorialSection } from '@/components/Editorial'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { PUBLIC_CANONICAL_URLS } from '@/config/publicRoutes'
import { businessReference, BUSINESS } from '@/config/seo'
import webdevImage from '../assets/webdev-optimized.jpg?responsive'
import { getImageSrc } from '@/utils/responsiveImages'

export default function WebServicesPage() {
  const ogImage = getPageOgImage('webservices')
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebService',
    name: 'Webbutveckling för små företag i Göteborg och Kungälv',
    description:
      'Webbutveckling och hemsidor för små företag i Göteborg och Kungälv med fokus på modern teknik, prestanda och synlighet online.',
    provider: businessReference,
    serviceType: ['WebDevelopment', 'Website optimization'],
    areaServed: BUSINESS.serviceAreas.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    url: PUBLIC_CANONICAL_URLS.webservices,
  }

  const servicesList = [
    {
      icon: Zap,
      title: 'Moderna användarupplevelser',
      description:
        'Jag bygger webbplatser som är snabba, tydliga och enkla att använda för dina besökare.',
    },
    {
      icon: Search,
      title: 'Fokus på synlighet',
      description:
        'Jag arbetar med grundläggande SEO och tekniska förutsättningar så att din webbplats blir enklare för sökmotorer att förstå.',
    },
    {
      icon: Smartphone,
      title: 'Responsiv design',
      description:
        'Din hemsida ska fungera bra på dator, surfplatta och mobil med en modern och professionell upplevelse.',
    },
    {
      icon: Users,
      title: 'Anpassat efter ditt företag',
      description:
        'Varje projekt byggs utifrån dina mål, din målgrupp och vilket intryck du vill ge online.',
    },
  ]

  const processSteps = [
    {
      title: '1. Behovsanalys & planering',
      description:
        'Vi startar med att diskutera dina mål och behov. Tillsammans skapar vi en plan för din webbnärvaro.',
    },
    {
      title: '2. Design & användarupplevelse',
      description:
        'Jag tar fram ett upplägg med fokus på tydlighet, användarvänlighet och ett professionellt uttryck.',
    },
    {
      title: '3. Utveckling & SEO-grund',
      description:
        'Webbplatsen byggs med modern teknik samtidigt som viktiga SEO-grunder som struktur, innehåll och prestanda tas med från start.',
    },
    {
      title: '4. Testning & lansering',
      description:
        'Innan lansering testas sidan på olika enheter och skärmstorlekar för att säkerställa att allt fungerar som det ska.',
    },
    {
      title: '5. Uppföljning & support',
      description:
        'Efter lansering kan jag hjälpa till med fortsatt utveckling, justeringar och råd kring innehåll och synlighet.',
    },
  ]

  const featureList = [
    'Nyutveckling av moderna hemsidor',
    'Grundläggande teknisk SEO och sidstruktur',
    'Responsiv design för olika skärmstorlekar',
    'Fokus på laddningstider och användarupplevelse',
    'Stöd kring innehåll, struktur och synlighet',
    'Möjlighet att kombinera foto och webb i samma lösning',
  ]

  return (
    <>
      <SEO
        title="Webbutveckling för små företag | Svendsén Photography"
        description="Behöver du en hemsida för ditt företag? Jag bygger moderna, snabba och tydliga webbplatser för små företag i Göteborg och Kungälv."
        url={PUBLIC_CANONICAL_URLS.webservices}
        jsonLd={pageJsonLd}
        image={ogImage.src}
        imageAlt={ogImage.alt}
        breadcrumbs={[
          { name: 'Hem', url: PUBLIC_CANONICAL_URLS.home },
          {
            name: 'Webbtjänster',
            url: PUBLIC_CANONICAL_URLS.webservices,
          },
        ]}
      />
      <main className="bg-[#f5f5f2] pt-24 text-textPrimary md:pt-28">
        <EditorialSection
          tone="white"
          className="mx-3 rounded-[1.75rem] border border-black/6 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] sm:mx-4 md:mx-5 lg:mx-auto lg:max-w-6xl"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
                Webbtjänster
              </p>
              <h1 className="mb-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-textPrimary md:text-5xl lg:text-6xl">
                Webbutveckling och hemsidor för små företag.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-textPrimary/68 md:text-xl">
                Jag hjälper små företag i Göteborg och Kungälv att bygga
                hemsidor och webbplatser med tydlig struktur, bra prestanda och
                en professionell användarupplevelse.
              </p>
              <LinkButton
                to="/contact/"
                variant="default"
                size="lg"
                subVariant="rounded"
                className="mt-9 px-8 font-semibold"
              >
                Diskutera ditt webbprojekt
              </LinkButton>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-[#f8f8f5] p-4">
              <ResponsiveImage
                image={webdevImage}
                alt="Exempel på modern hemsideutveckling för företag"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
              />
            </div>
          </div>
        </EditorialSection>

        <EditorialSection tone="white" className="mx-3 mt-10 rounded-[1.75rem] border border-black/6 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] sm:mx-4 md:mx-5 lg:mx-auto lg:max-w-6xl">
          <EditorialIntro
            className="mb-10"
            eyebrow="Fördelar"
            title="En webbplats som känns snabb, tydlig och användbar."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {servicesList.map((service) => {
              const Icon = service.icon

              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-black/6 bg-[#f8f8f5] p-6"
                >
                  <Icon className="mb-8 h-7 w-7 text-textPrimary" />
                  <h3 className="mb-3 text-xl font-semibold text-textPrimary">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-7 text-textPrimary/68">
                    {service.description}
                  </p>
                </article>
              )
            })}
          </div>
        </EditorialSection>

        <EditorialSection tone="white" className="mx-3 mt-10 rounded-[1.75rem] border border-black/6 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] sm:mx-4 md:mx-5 lg:mx-auto lg:max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <EditorialIntro
              eyebrow="Nytta"
              title="Webbutveckling med fokus på struktur, prestanda och synlighet."
              description="Jag kan hjälpa dig att skapa en ny hemsida eller vidareutveckla en befintlig webbplats, med fokus på hur sidan upplevs av besökare och hur tydligt ditt företag presenteras online."
            />
            <ul className="grid gap-3">
              {featureList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-black/6 bg-[#f8f8f5] px-4 py-3 text-sm font-medium leading-7 text-textPrimary/72"
                >
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </EditorialSection>

        <EditorialSection tone="white" className="mx-3 mt-10 rounded-[1.75rem] border border-black/6 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] sm:mx-4 md:mx-5 lg:mx-auto lg:max-w-6xl">
          <EditorialIntro
            className="mb-10"
            eyebrow="Process"
            title="Från idé till lanserad hemsida."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-2xl border border-black/6 bg-[#f8f8f5] p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-textPrimary">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-textPrimary/68">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Nästa steg
            </p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
              Intresserad av en modern hemsida?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-textPrimary/68">
              Låt oss tillsammans skapa en hemsida som ser bra ut, fungerar väl
              och stödjer ditt företags mål online.
            </p>
            <LinkButton
              to="/contact/"
              variant="default"
              size="lg"
              subVariant="rounded"
              className="px-8 font-semibold"
            >
              Kontakta mig för ett samtal
            </LinkButton>
          </div>
        </EditorialSection>
      </main>
    </>
  )
}
