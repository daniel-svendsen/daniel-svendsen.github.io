// src/pages/Services.tsx
import React from 'react'
import Card from '../components/Card'
import { serviceCards } from '../data/cards'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'

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
    <>
      <SEO
        title="Fototjänster i Kungälv & Göteborg - Svendsén Photography"
        description="Upptäck professionella fototjänster hos Svendsén Photography. Vi erbjuder bröllopsfotografering, porträtt, företagsfoto, bilfotografering och eventfoto i Kungälv och Göteborg. Läs mer: https://www.svendsenphotography.com/services"
        url="https://www.svendsenphotography.com/services"
        keywords="fotograf kungälv, fotograf göteborg, bröllopsfotograf, porträttfotograf, bilfotograf, företagsfotograf, eventfotograf, verksamhetsfoto"
        jsonLd={servicesJsonLd}
      />

      <main className="pt-16 md:pt-20 bg-background text-textPrimary">
        <Section variant="white">
          <SectionContent className="text-center py-8 md:py-12">
            <p className="text-lg text-muted-foreground mb-8">
              Boka en fotografering idag och skapa minnen som varar livet ut.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-highlight text-white font-bold rounded-md hover:bg-highlight/90 transition-colors"
            >
              Boka fotografering
            </a>
          </SectionContent>
        </Section>

        <Section variant="gray">
          <SectionContent heading="Tjänster">
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {serviceCards.map((card, index) => (
                <Card
                  key={card.id || index}
                  {...card}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </SectionContent>
        </Section>
      </main>
    </>
  )
}
