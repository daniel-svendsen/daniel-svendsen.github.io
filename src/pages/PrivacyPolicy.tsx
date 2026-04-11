import React from 'react'
import SEO from '@/components/SEO'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

export default function PrivacyPolicy() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

  const privacyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sekretesspolicy – Svendsén Photography',
    description: 'Sekretesspolicy för Svendsén Photography',
    url: 'https://www.svendsenphotography.com/privacy',
  }

  return (
    <>
      <SEO
        title="Sekretesspolicy – Svendsén Photography"
        description="Läs om hur Svendsén Photography hanterar dina personuppgifter."
        url="https://www.svendsenphotography.com/privacy"
        image={absoluteLogoUrl}
        keywords="sekretesspolicy, integritetspolicy, Svendsén Photography"
        jsonLd={privacyJsonLd}
      />

      <main className="pt-20 p-6 bg-background text-textPrimary max-w-3xl mx-auto">
        <header>
          <h1 className="text-3xl font-bold mb-2">Sekretesspolicy</h1>
          <p className="text-sm text-gray-400 mb-8">Senast uppdaterad: April 2026</p>
        </header>

        <section className="space-y-8">

          <div>
            <h2 className="text-xl font-semibold mb-2">Vem vi är</h2>
            <p className="text-textSecondary leading-relaxed">
              Svendsén Photography är ett enskilt företag som erbjuder fotografitjänster
              i Kungälv och Göteborg. Webbplatsens adress är{' '}
              <a
                href="https://www.svendsenphotography.com"
                className="underline hover:opacity-70"
              >
                www.svendsenphotography.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Vilken information vi samlar in</h2>
            <p className="text-textSecondary leading-relaxed">
              Vi samlar in information som du aktivt lämnar till oss, till exempel när
              du kontaktar oss via kontaktformulär eller e-post. Detta kan inkludera
              ditt namn, din e-postadress och ditt telefonnummer. Vi samlar inte in
              några personuppgifter automatiskt utöver vad som är standard för
              webbhotell, till exempel IP-adresser i serverloggar.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Hur vi använder informationen</h2>
            <p className="text-textSecondary leading-relaxed">
              Information du lämnar till oss används uteslutande för att besvara dina
              förfrågningar och bokningar, samt för att kommunicera med dig om ditt
              fotografiuppdrag. Vi säljer eller delar aldrig dina personuppgifter med
              tredje part i marknadsföringssyfte.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Instagram och Meta</h2>
            <p className="text-textSecondary leading-relaxed">
              Vi använder Metas plattformar för att publicera innehåll på sociala
              medier. Meta samlar in data i enlighet med sin egen integritetspolicy,
              tillgänglig på{' '}
              <a
                href="https://www.facebook.com/privacy/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70"
              >
                facebook.com/privacy/policy
              </a>
              .
            </p>
            <p className="text-textSecondary leading-relaxed mt-3">
              Vi använder ett internt verktyg för att schemalägga och publicera inlägg
              på Instagram. Detta verktyg har tillgång till vårt Instagram-företagskonto
              enbart för att publicera foton och läsa statistik. Inga personuppgifter
              om följare eller kunder hanteras av detta verktyg.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cookies</h2>
            <p className="text-textSecondary leading-relaxed">
              Vår webbplats kan använda cookies för grundläggande funktionalitet.
              Vi använder inga spårningscookies eller reklamcookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Dina rättigheter</h2>
            <p className="text-textSecondary leading-relaxed">
              Du har rätt att begära utdrag, rättelse eller radering av dina
              personuppgifter. Kontakta oss via kontaktformuläret på hemsidan så
              hjälper vi dig.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
            <p className="text-textSecondary leading-relaxed">
              Har du frågor om vår sekretesspolicy? Kontakta oss via{' '}
              <a
                href="/contact"
                className="underline hover:opacity-70"
              >
                kontaktformuläret
              </a>
              .
            </p>
          </div>

        </section>
      </main>
    </>
  )
}
