import { Disclosure } from '@headlessui/react'
import React from 'react'
import { Minus, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

import { LinkButton } from '@/components/Button'
import { EditorialIntro, EditorialSection } from '@/components/Editorial'
import SEO from '@/components/SEO'
import { getPageOgImage } from '@/config/pageSeo'
import { createFaqJsonLd, generalFaqs } from '@/data/faqs'

const faqDestinations = [
  {
    to: '/portraits/',
    title: 'Porträttfotografering',
    description:
      'Paket, fotograferingstid, antal bilder, plats och referensbilder.',
  },
  {
    to: '/familjefotografering/',
    title: 'Familjefotografering',
    description: 'Pris, plats, barn- och syskonfoto samt gravidfotografering.',
  },
  {
    to: '/weddings/',
    title: 'Bröllopsfotografering',
    description: 'Paket, priser, antal bilder, leveranstid och bokning.',
  },
  {
    to: '/brollopsfotograf-kungalv/',
    title: 'Bröllop i Kungälv',
    description: 'Lokalt upplägg, parbilder och tid för promenadbilder.',
  },
  {
    to: '/guider/',
    title: 'Bröllopsguider',
    description: 'Bildlista, tidslinje och promenadbilder under bröllopsdagen.',
  },
]

export default function FAQ() {
  const ogImage = getPageOgImage('faq')

  return (
    <>
      <SEO
        title="Vanliga frågor - Svendsén Photography"
        description="Gemensamma svar om fotografering och bokning, med länkar till frågor om porträtt, familj, bröllop i Kungälv och praktiska bröllopsguider."
        url="https://www.svendsenphotography.com/faq/"
        image={ogImage.src}
        imageAlt={ogImage.alt}
        keywords="fotograf FAQ, fotografering frågor, familjefotograf, bröllopsfotograf pris, hur bokar man en fotograf, fotograf göteborg kungälv"
        jsonLd={createFaqJsonLd(generalFaqs)}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'FAQ',
            url: 'https://www.svendsenphotography.com/faq/',
          },
        ]}
      />

      <main className="bg-[#f5f5f2] pt-24 text-textPrimary md:pt-28">
        <EditorialSection
          tone="white"
          className="mx-3 rounded-[1.75rem] border border-black/6 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] sm:mx-4 md:mx-5 lg:mx-auto lg:max-w-5xl"
        >
          <EditorialIntro
            align="center"
            eyebrow="FAQ"
            headingLevel="h1"
            title="Vanliga frågor"
            description="Här finns gemensamma svar och vägar till frågor om porträtt, familj och bröllop på respektive ansvarig sida."
          />

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {generalFaqs.map((faq) => (
              <Disclosure
                key={faq.question}
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

          <div className="mx-auto mt-14 max-w-3xl border-t border-black/6 pt-10">
            <h2 className="text-center text-2xl font-semibold text-textPrimary">
              Frågor om en särskild fotografering
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center leading-7 text-textPrimary/68">
              Tjänstespecifika svar finns på sidan som beskriver erbjudandet och
              dess aktuella villkor.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {faqDestinations.map((destination) => (
                <Link
                  key={destination.to}
                  to={destination.to}
                  className="rounded-2xl border border-black/6 bg-[#f8f8f5] p-5 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-textPrimary/20"
                >
                  <span className="block font-semibold text-textPrimary">
                    {destination.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-textPrimary/68">
                    {destination.description}
                  </span>
                </Link>
              ))}
            </div>
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
