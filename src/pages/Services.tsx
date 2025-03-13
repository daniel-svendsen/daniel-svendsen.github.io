// src/pages/Services.tsx
import React from 'react'
import Card from '../components/Card'
import { serviceCards } from '../data/cards'
import { Helmet } from 'react-helmet-async'
import SectionWrapper from '../components/SectionWrapper'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Fototjänster i Kungälv & Göteborg - Svendsén Photography</title>
        <meta
          name="description"
          content="Upptäck professionella fototjänster hos Svendsén Photography. Vi erbjuder bröllopsfotografering, porträtt, företagsfoto, bilfotografering och eventfoto i Kungälv och Göteborg. Läs mer: https://www.svendsenphotography.com/services"
        />
        <meta
          name="keywords"
          content="fotograf kungälv, fotograf göteborg, bröllopsfotograf, porträttfotograf, bilfotograf, företagsfotograf, eventfotograf, verksamhetsfoto"
        />
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>
      <main className="pt-20 p-6 bg-background text-textPrimary max-w-full overflow-hidden">
        <header className="w-full text-center px-4">
          <p className="text-lg text-textSecondary mb-8">
            Boka en fotografering idag och skapa minnen som varar livet ut.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-highlight text-white font-bold rounded-md hover:bg-highlight/90"
          >
            Boka fotografering
          </a>
        </header>
        <SectionWrapper title="Tjänster">
          <div className="grid grid-cols-1 gap-6">
            {serviceCards.map((card, index) => (
              <Card
                key={card.id || index}
                {...card}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </SectionWrapper>
      </main>
    </>
  )
}
