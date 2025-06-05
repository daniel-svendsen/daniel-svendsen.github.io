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
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vad ingår i utefotograferingen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I utefotograferingen ingår 4st högupplösta bilder. Därefter kostar det 150kr/bild och då kontaktar ni mig om ni vill ha fler.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hur lång tid tar en vanlig fotosession?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En session tar vanligtvis mellan 0.5-2 timmar beroende på era önskemål.',
        },
      },
      {
        '@type': 'Question',
        name: 'Fotograferar du utanför Kungälv?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, men reseersättning kan tillkomma.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vad ingår i bröllopspaketet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I det enklaste bröllopspaketet ingår ca 4 timmar på plats och 50st bilder som ni väljer ut.',
        },
      },
    ],
  }

  const faqs = [
    {
      question: 'Vad ingår i utefotograferingen?',
      answer:
        'I utefotograferingen ingår 4st högupplösta bilder. Därefter kostar det 150kr/bild och då kontaktar ni mig om ni vill ha fler.',
    },
    {
      question: 'Hur lång tid tar en vanlig fotosession?',
      answer:
        'En session tar vanligtvis mellan 0.5-2 timmar beroende på era önskemål.',
    },
    {
      question: 'Fotograferar du utanför Kungälv?',
      answer: 'Ja, men reseersättning kan tillkomma.',
    },
    {
      question: 'Vad ingår i bröllopspaketet?',
      answer:
        'I det enklaste bröllopspaketet ingår ca 4 timmar på plats och 50st bilder som ni väljer ut.',
    },
  ]

  return (
    <HelmetProvider>
      <SEO
        title="Vanliga frågor - Svendsén Photography"
        description="Har du frågor om fotografering, priser och bokning? Här hittar du svar på vanliga frågor om våra tjänster i Göteborg och Kungälv."
        url="https://www.svendsenphotography.com/faq"
        image={absoluteLogoUrl}
        keywords="fotograf FAQ, fotografering frågor, bröllopsfotograf pris, hur bokar man en fotograf, fotograf göteborg kungälv"
        jsonLd={faqJsonLd}
      />

      <main className="pt-16 md:pt-20 bg-background text-foreground">
        <Section bgColor="beige" roundedBottom="10xl">
          <SectionContent>
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-textPrimary dark:text-white">
                Vanliga frågor
              </h1>
              <p className="text-lg text-muted-foreground dark:text-gray-300 mt-3">
                Har du frågor? Här hittar du svaren.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Disclosure
                  key={index}
                  as="div"
                  className="border-b border-border last:border-b-0"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-foreground hover:bg-muted/50 px-2 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
                        <span>{faq.question}</span>
                        {open ? (
                          <Minus className="h-5 w-5 text-primary" />
                        ) : (
                          <Plus className="h-5 w-5 text-muted-foreground" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-2 pt-2 pb-4 text-base text-muted-foreground">
                        {faq.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>

            <div className="text-center mt-12 md:mt-16 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">Har du fler frågor?</p>
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