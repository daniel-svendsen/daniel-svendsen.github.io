import { Disclosure } from '@headlessui/react'
import React from 'react'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { Minus, Plus } from 'lucide-react'
import { LinkButton } from '@/components/Button'
import { HelmetProvider } from 'react-helmet-async'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

export default function FAQ() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

  const faqs = [
    {
      question: 'Vad ingår i porträttfotograferingen?',
      answer:
        'Grundpaketet för porträtt är 30 minuter och innehåller 5 redigerade bilder. Det passar bra för exempelvis LinkedIn, CV, sociala medier, personliga porträtt och mindre familjefotograferingar.',
    },
    {
      question: 'Hur lång leveranstid är det på porträttbilder?',
      answer:
        'Normal leveranstid för porträttbilder är cirka 1 vecka, beroende på arbetsbelastning.',
    },
    {
      question: 'Kan jag skicka referensbilder inför en porträttfotografering?',
      answer:
        'Ja, absolut. Min stil är den du ser på hemsidan, men du får gärna skicka referensbilder om du vill ha en annan känsla eller riktning.',
    },
    {
      question: 'Fotograferar du utanför Kungälv?',
      answer: 'Ja, men reseersättning kan tillkomma.',
    },
    {
      question: 'Vad ingår i grundpaketet för bröllopsfotografering?',
      answer:
        'Grundpaketet för bröllop är 4 timmar och innehåller cirka 50 redigerade bilder. Det är ett bra upplägg för mindre bröllop eller för er som vill fokusera på vissa delar av dagen.',
    },
    {
      question: 'Kan vi anpassa ett bröllopspaket efter vår dag?',
      answer:
        'Ja. De tre paket som visas på hemsidan gäller som grund, men det går bra att lägga till, ta bort eller ändra upplägget så att det passar er bättre.',
    },
    {
      question: 'Hur lång är leveranstiden för bröllopsbilder?',
      answer:
        'Leveranstiden för bröllopsbilder är vanligtvis 1 till 2 veckor beroende på säsong och arbetsbelastning.',
    },
    {
      question: 'Hur långt i förväg bör vi boka bröllopsfotograf?',
      answer:
        'Jag rekommenderar att ni hör av er minst 2 veckor i förväg, gärna tidigare om ni vill säkra datum och hinna planera i lugn och ro.',
    },
    {
      question: 'Hur lång tid tar en vanlig fotosession?',
      answer:
        'En vanlig fotosession tar ofta mellan 30 minuter och 2 timmar beroende på vilken typ av fotografering det gäller och vilket upplägg vi kommer fram till.',
    },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <HelmetProvider>
      <SEO
        title="Vanliga frågor - Svendsén Photography"
        description="Har du frågor om fotografering, priser och bokning? Här hittar du svar på vanliga frågor om våra tjänster i Göteborg och Kungälv."
        url="https://www.svendsenphotography.com/faq"
        image={absoluteLogoUrl}
        keywords="fotograf FAQ, fotografering frågor, familjefotograf, bröllopsfotograf pris, hur bokar man en fotograf, fotograf göteborg kungälv"
        jsonLd={faqJsonLd}
      />

      <main className="bg-[#f7f5f2] pt-16 text-foreground md:pt-20">
        <Section
          bgColor="beige"
          roundedTop="10xl"
          roundedBottom="10xl"
          className="mx-3 overflow-hidden sm:mx-4 md:mx-5 lg:mx-6"
        >
          <SectionContent>
            <div className="mb-12 text-center md:mb-16">
              <h1 className="text-3xl font-bold tracking-tight text-textPrimary dark:text-white md:text-4xl">
                Vanliga frågor
              </h1>
              <p className="mt-3 text-lg text-muted-foreground dark:text-gray-300">
                Har du frågor? Här hittar du svaren.
              </p>
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <Disclosure
                  key={index}
                  as="div"
                  className="border-b border-border last:border-b-0"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-2 py-4 text-left text-lg font-medium text-foreground hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                        <span>{faq.question}</span>
                        {open ? (
                          <Minus className="h-5 w-5 text-primary" />
                        ) : (
                          <Plus className="h-5 w-5 text-muted-foreground" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-2 pb-4 pt-2 text-base text-muted-foreground">
                        {faq.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-8 text-center md:mt-16">
              <p className="mb-4 text-muted-foreground">Har du fler frågor?</p>
              <LinkButton
                to="/contact"
                variant="default"
                size="lg"
                subVariant="rounded"
                className="font-semibold"
              >
                Kontakta mig
              </LinkButton>
            </div>
          </SectionContent>
        </Section>
      </main>
    </HelmetProvider>
  )
}
