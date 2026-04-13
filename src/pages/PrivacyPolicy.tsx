import React from 'react'
import SEO from '@/components/SEO'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

export default function PrivacyPolicy() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

  const privacyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy – Svendsén Photography',
    description: 'Privacy Policy for Svendsén Photography',
    url: 'https://www.svendsenphotography.com/privacy',
  }

  return (
    <>
      <SEO
        title="Privacy Policy – Svendsén Photography"
        description="Read about how Svendsén Photography handles your personal data."
        url="https://www.svendsenphotography.com/privacy"
        image={absoluteLogoUrl}
        keywords="privacy policy, sekretesspolicy, integritetspolicy, Svendsén Photography"
        jsonLd={privacyJsonLd}
      />

      <main className="pt-20 p-6 bg-background text-textPrimary max-w-3xl mx-auto">

        {/* ── ENGLISH ── */}
        <header>
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-8">Last updated: April 2026</p>
        </header>

        <section className="space-y-8 mb-16">

          <div>
            <h2 className="text-xl font-semibold mb-2">Who we are</h2>
            <p className="text-textSecondary leading-relaxed">
              Svendsén Photography is a sole proprietorship offering photography services
              in Kungälv and Gothenburg, Sweden. The website address is{' '}
              <a href="https://www.svendsenphotography.com" className="underline hover:opacity-70">
                www.svendsenphotography.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">What information we collect</h2>
            <p className="text-textSecondary leading-relaxed">
              We only collect information you actively provide to us, for example when
              you contact us via the contact form or by email. This may include your name,
              email address, and phone number. We do not collect any personal data
              automatically beyond what is standard for web hosting, such as IP addresses
              in server logs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">How we use the information</h2>
            <p className="text-textSecondary leading-relaxed">
              Information you provide is used solely to respond to your inquiries and
              bookings, and to communicate with you about your photography assignment.
              We never sell or share your personal data with third parties for marketing
              purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Instagram and Meta</h2>
            <p className="text-textSecondary leading-relaxed">
              We use Meta's platforms to publish content on social media. Meta collects
              data in accordance with their own privacy policy, available at{' '}
              <a
                href="https://www.facebook.com/privacy/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70"
              >
                facebook.com/privacy/policy
              </a>.
            </p>
            <p className="text-textSecondary leading-relaxed mt-3">
              We use an internal tool to schedule and publish posts on Instagram via the
              official Meta Graph API. This tool has access to our Instagram Business
              account solely for the purpose of publishing photos and reading post
              analytics. No personal data about followers or customers is processed by
              this tool. The tool is used exclusively by the account owner and no data
              is shared with or accessible by third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cookies</h2>
            <p className="text-textSecondary leading-relaxed">
              Our website may use cookies for basic functionality. We do not use tracking
              cookies or advertising cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Your rights</h2>
            <p className="text-textSecondary leading-relaxed">
              You have the right to request access to, correction of, or deletion of
              your personal data. Please contact us via the contact form on the website
              and we will be happy to help.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p className="text-textSecondary leading-relaxed">
              If you have any questions about our privacy policy, please contact us via
              the{' '}
              <a href="/contact" className="underline hover:opacity-70">
                contact form
              </a>.
            </p>
          </div>

        </section>

        {/* ── DIVIDER ── */}
        <hr className="border-gray-600 mb-16" />

        {/* ── SVENSKA ── */}
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
              <a href="https://www.svendsenphotography.com" className="underline hover:opacity-70">
                www.svendsenphotography.com
              </a>.
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
              </a>.
            </p>
            <p className="text-textSecondary leading-relaxed mt-3">
              Vi använder ett internt verktyg för att schemalägga och publicera inlägg
              på Instagram via det officiella Meta Graph API. Detta verktyg har tillgång
              till vårt Instagram-företagskonto enbart för att publicera foton och läsa
              statistik. Inga personuppgifter om följare eller kunder hanteras av detta
              verktyg. Verktyget används uteslutande av kontoägaren och ingen data delas
              med eller är tillgänglig för tredje part.
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
              <a href="/contact" className="underline hover:opacity-70">
                kontaktformuläret
              </a>.
            </p>
          </div>

        </section>
      </main>
    </>
  )
}