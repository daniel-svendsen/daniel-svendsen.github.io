import { Disclosure } from '@headlessui/react'
import React from 'react'
import { Minus, Plus } from 'lucide-react'

import { LinkButton } from '@/components/Button'
import { EditorialIntro, EditorialSection } from '@/components/Editorial'
import SEO from '@/components/SEO'
import { PRICING } from '@/config/pricing'
import { getPageOgImage } from '@/config/pageSeo'

export default function FAQ() {
  const ogImage = getPageOgImage('faq')

  const faqs = [
    {
      question: 'Vad ingår i porträttfotograferingen?',
      answer: `Porträtt Bas är ${PRICING.portrait.baseDuration} och innehåller ${PRICING.portrait.baseImages}. Familjefotografering är ${PRICING.portrait.familyDuration} och innehåller ${PRICING.portrait.familyImages}.`,
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
      question: 'Vad ingår i kort vigsel-paketet för bröllopsfotografering?',
      answer: `Kort vigsel är ${PRICING.wedding.shortDuration} och innehåller ${PRICING.wedding.shortImages}. Det passar bra för mindre bröllop, rådhusvigsel eller för er som vill fokusera på de viktigaste delarna av dagen.`,
    },
    {
      question: 'Kan vi anpassa ett bröllopspaket efter vår dag?',
      answer:
        'Ja. Paketen Kort vigsel, Halvdag och Heldag fungerar som grund, men det går bra att lägga till tid eller justera upplägget så att det passar er bättre.',
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
    <>
      <SEO
        title="Vanliga frågor - Svendsén Photography"
        description="Har du frågor om fotografering, priser och bokning? Här hittar du svar på vanliga frågor om våra tjänster i Göteborg och Kungälv."
        url="https://www.svendsenphotography.com/faq/"
        image={ogImage.src}
        imageAlt={ogImage.alt}
        keywords="fotograf FAQ, fotografering frågor, familjefotograf, bröllopsfotograf pris, hur bokar man en fotograf, fotograf göteborg kungälv"
        jsonLd={faqJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'FAQ',
            url: 'https://www.svendsenphotography.com/faq/',
          },
        ]}
      />

      <main className="bg-[#f5f5f2] pt-24 text-textPrimary md:pt-28">
        <EditorialSection tone="white" className="mx-3 rounded-[1.75rem] border border-black/6 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] sm:mx-4 md:mx-5 lg:mx-auto lg:max-w-5xl">
          <EditorialIntro
            align="center"
            eyebrow="FAQ"
            headingLevel="h1"
            title="Vanliga frågor"
            description="Har du frågor om fotografering, priser eller bokning? Här hittar du de vanligaste svaren."
          />

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure
                key={index}
                as="div"
                className="rounded-2xl border border-black/6 bg-[#f8f8f5]"
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-base font-semibold text-textPrimary transition hover:bg-black/[0.025] focus:outline-none focus-visible:ring focus-visible:ring-textPrimary/20">
                      <span>{faq.question}</span>
                      {open ? (
                        <Minus className="h-5 w-5 flex-shrink-0 text-textPrimary" />
                      ) : (
                        <Plus className="h-5 w-5 flex-shrink-0 text-textSecondary" />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 pb-5 text-base leading-8 text-textPrimary/68">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl border-t border-black/6 pt-8 text-center">
            <p className="mb-4 text-textPrimary/68">Har du fler frågor?</p>
            <LinkButton
              to="/contact/"
              variant="default"
              size="lg"
              subVariant="rounded"
              className="font-semibold"
            >
              Kontakta mig
            </LinkButton>
          </div>
        </EditorialSection>
      </main>
    </>
  )
}
