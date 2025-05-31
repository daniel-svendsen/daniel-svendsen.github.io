import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { LinkButton } from '@/components/Button'
import ServiceCard from '@/components/ServiceCard'
import { serviceCards } from '../data/cards'

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Svendsén Photography',
  description:
    'Fotograf i Kungälv & Göteborg - Specialiserad på bröllop, porträtt, företag och event.',
  image: 'https://www.svendsenphotography.com/logo.jpg',
  url: 'https://www.svendsenphotography.com/services',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kungälv',
    addressCountry: 'SE',
  },
  serviceType: [
    'Bröllopsfotografering',
    'Porträttfotografering',
    'Företagsfotografering',
    'Eventfotografering',
    'Bilfotografering',
    'Hemsidesutveckling',
  ],
  areaServed: {
    '@type': 'City',
    name: ['Kungälv', 'Göteborg'],
  },
}

export default function Services() {
  return (
    <HelmetProvider>
      <SEO
        title="Fototjänster i Kungälv & Göteborg - Svendsén Photography"
        description="Upptäck professionella fototjänster hos Svendsén Photography. Vi erbjuder bröllopsfotografering, porträtt, företagsfoto, bilfotografering och eventfoto i Kungälv och Göteborg."
        url="https://www.svendsenphotography.com/services"
        keywords="fotograf kungälv, fotograf göteborg, bröllopsfotograf, porträttfotograf, bilfotograf, företagsfotograf, eventfotograf, verksamhetsfoto"
        jsonLd={servicesJsonLd}
      />
      <div className="bg-gray-50 dark:bg-gray-900 text-textPrimary pt-16 md:pt-20">
        <Section
          roundedBottom="10xl"
          bgColor="offWhite"
          className="pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28"
        >
          <SectionContent className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary dark:text-white mb-6 font-poiret tracking-wider">
              Mina Fototjänster
            </h1>
            <p className="text-lg text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Boka en fotografering idag och skapa minnen som varar livet ut.
              Jag erbjuder ett brett utbud av tjänster för att möta dina behov.
            </p>
            <LinkButton
              to="/contact"
              variant="secondary"
              size="lg"
              subVariant="rounded"
              className="font-semibold px-8"
            >
              Boka fotografering
            </LinkButton>
          </SectionContent>
        </Section>

        <Section
          roundedTop="10xl"
          bgColor="beige"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              {serviceCards.map((cardData) => (
                <ServiceCard key={cardData.title} {...cardData} />
              ))}
            </div>
          </SectionContent>
        </Section>
      </div>
    </HelmetProvider>
  )
}