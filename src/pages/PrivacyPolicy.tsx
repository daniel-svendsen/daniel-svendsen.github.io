import React from 'react'
import SEO from '@/components/SEO'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

export default function PrivacyPolicy() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

  const privacyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy - Svendsen Photography',
    description: 'Privacy Policy for Svendsen Photography',
    url: 'https://www.svendsenphotography.com/privacy/',
  }

  return (
    <>
      <SEO
        title="Privacy Policy - Svendsen Photography"
        description="Read about how Svendsen Photography handles your personal data and website cookies."
        url="https://www.svendsenphotography.com/privacy/"
        image={absoluteLogoUrl}
        keywords="privacy policy, cookie policy, integritetspolicy, cookies, Svendsen Photography"
        jsonLd={privacyJsonLd}
      />

      <main className="mx-auto max-w-3xl bg-background px-6 pb-16 pt-20 text-textPrimary">
        <header>
          <h1 className="mb-2 text-3xl font-bold">Privacy Policy</h1>
          <p className="mb-8 text-sm text-gray-400">Last updated: April 29, 2026</p>
        </header>

        <section className="mb-16 space-y-8">
          <div>
            <h2 className="mb-2 text-xl font-semibold">Who we are</h2>
            <p className="leading-relaxed text-textSecondary">
              Svendsen Photography is a sole proprietorship offering photography services
              in Kungalv and Gothenburg, Sweden. The website address is{' '}
              <a href="https://www.svendsenphotography.com" className="underline hover:opacity-70">
                www.svendsenphotography.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">What information we collect</h2>
            <p className="leading-relaxed text-textSecondary">
              We collect information that you actively provide to us, for example when you
              contact us via the contact form or by email. This may include your name,
              email address and phone number. We may also process limited technical data
              that is necessary to operate, secure and troubleshoot the website and its
              services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">How we use the information</h2>
            <p className="leading-relaxed text-textSecondary">
              Information you provide is used to respond to enquiries, handle bookings,
              communicate about photography assignments and provide requested services. We
              do not sell your personal data and do not share it with third parties for
              advertising purposes.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Instagram and Meta</h2>
            <p className="leading-relaxed text-textSecondary">
              We use Meta&apos;s platforms to publish content on social media. Meta
              processes data in accordance with its own privacy policy, available at{' '}
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
            <p className="mt-3 leading-relaxed text-textSecondary">
              We also use an internal tool to schedule and publish Instagram posts via the
              official Meta Graph API. This tool is used only by the account owner for
              publishing content and reading post analytics related to the business
              account.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Cookies and similar technology</h2>
            <p className="leading-relaxed text-textSecondary">
              This website currently uses only cookies or similar local storage that are
              necessary for basic functionality, security or services that you explicitly
              request. Examples include session handling for protected admin features and
              local storage used to remember gallery likes or essential site preferences.
            </p>
            <p className="mt-3 leading-relaxed text-textSecondary">
              We do not currently use advertising cookies, marketing pixels or
              non-essential analytics cookies on the public website.
            </p>
            <p className="mt-3 leading-relaxed text-textSecondary">
              If we introduce non-essential cookies or similar tracking technologies in
              the future, such as analytics, embedded third-party media or marketing
              tools, we will request your consent before they are activated where
              required by law.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Your rights</h2>
            <p className="leading-relaxed text-textSecondary">
              You may request access to, correction of or deletion of your personal data.
              If you have questions about how your data is handled, please contact us via
              the contact form on the website.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Contact</h2>
            <p className="leading-relaxed text-textSecondary">
              If you have questions about this privacy policy, please contact us via the{' '}
              <a href="/contact/" className="underline hover:opacity-70">
                contact form
              </a>
              .
            </p>
          </div>
        </section>

        <hr className="mb-16 border-gray-600" />

        <header>
          <h1 className="mb-2 text-3xl font-bold">Integritetspolicy</h1>
          <p className="mb-8 text-sm text-gray-400">Senast uppdaterad: 29 april 2026</p>
        </header>

        <section className="space-y-8">
          <div>
            <h2 className="mb-2 text-xl font-semibold">Vem vi är</h2>
            <p className="leading-relaxed text-textSecondary">
              Svendsen Photography är ett enskilt företag som erbjuder fotografitjänster
              i Kungälv och Göteborg. Webbplatsens adress är{' '}
              <a href="https://www.svendsenphotography.com" className="underline hover:opacity-70">
                www.svendsenphotography.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Vilken information vi samlar in</h2>
            <p className="leading-relaxed text-textSecondary">
              Vi samlar in information som du aktivt lämnar till oss, till exempel när du
              kontaktar oss via kontaktformulär eller e-post. Det kan inkludera namn,
              e-postadress och telefonnummer. Vi kan också behandla begränsad teknisk
              information som behövs för att driva, skydda och felsöka webbplatsen och
              dess tjänster.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Hur vi använder informationen</h2>
            <p className="leading-relaxed text-textSecondary">
              Informationen används för att besvara förfrågningar, hantera bokningar,
              kommunicera om fotograferingsuppdrag och tillhandahålla efterfrågade
              tjänster. Vi säljer inte dina personuppgifter och delar dem inte med tredje
              part i marknadsföringssyfte.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Instagram och Meta</h2>
            <p className="leading-relaxed text-textSecondary">
              Vi använder Metas plattformar för att publicera innehåll i sociala medier.
              Meta behandlar data enligt sin egen integritetspolicy, som finns på{' '}
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
            <p className="mt-3 leading-relaxed text-textSecondary">
              Vi använder också ett internt verktyg för att schemalägga och publicera
              Instagram-inlägg via det officiella Meta Graph API. Verktyget används bara
              av kontoägaren för att publicera innehåll och läsa statistik kopplad till
              företagets konto.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Cookies och liknande teknik</h2>
            <p className="leading-relaxed text-textSecondary">
              Webbplatsen använder för närvarande bara cookies eller liknande lokal
              lagring som är nödvändig för grundläggande funktionalitet, säkerhet eller
              tjänster som du uttryckligen begär. Det kan till exempel handla om
              sessionshantering för skyddade adminfunktioner och lokal lagring för att
              komma ihåg gilla-markeringar i gallerier eller andra nödvändiga
              inställningar.
            </p>
            <p className="mt-3 leading-relaxed text-textSecondary">
              Vi använder i nuläget inte reklamcookies, marknadsföringspixlar eller
              icke-nödvändiga analyscookies på den publika webbplatsen.
            </p>
            <p className="mt-3 leading-relaxed text-textSecondary">
              Om vi i framtiden lägger till icke-nödvändiga cookies eller liknande
              spårningsteknik, till exempel för analys, inbäddat tredjepartsinnehåll
              eller marknadsföring, kommer vi att be om ditt samtycke innan de aktiveras
              i de fall lagen kräver det.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Dina rättigheter</h2>
            <p className="leading-relaxed text-textSecondary">
              Du kan begära tillgång till, rättelse av eller radering av dina
              personuppgifter. Om du har frågor om hur dina uppgifter hanteras är du
              välkommen att kontakta oss via kontaktformuläret på webbplatsen.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Kontakt</h2>
            <p className="leading-relaxed text-textSecondary">
              Har du frågor om denna integritetspolicy? Kontakta oss via{' '}
              <a href="/contact/" className="underline hover:opacity-70">
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
