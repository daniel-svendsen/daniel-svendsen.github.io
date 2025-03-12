import { Disclosure } from '@headlessui/react'
import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function FAQ() {
  return (
    <main className="pt-20 max-w-4xl mx-auto p-6">
      <Helmet>
        <title>Vanliga frågor - Svendsén Photography</title>
        <meta
          name="description"
          content="Har du frågor om fotografering, priser och bokning? Här hittar du svar på vanliga frågor om våra tjänster i Göteborg och Kungälv. Läs mer på: https://www.svendsenphotography.com/faq"
        />
        <meta
          name="keywords"
          content="fotograf FAQ, fotografering frågor, bröllopsfotograf pris, hur bokar man en fotograf, fotograf göteborg kungälv"
        />
        <meta
          property="og:title"
          content="Vanliga frågor - Svendsén Photography"
        />
        <meta
          property="og:description"
          content="Svaren på de vanligaste frågorna om fotografering, priser och bokning i Göteborg & Kungälv."
        />
        <meta
          property="og:url"
          content="https://www.svendsenphotography.com/faq"
        />
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Vanliga frågor</h1>
        <p className="text-lg text-gray-600">
          Har du frågor? Här hittar du svaren.
        </p>
      </header>

      <div className="space-y-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-lg font-medium text-gray-900 hover:bg-gray-300 focus:outline-none">
                <span>Vad ingår i utefotograferingen?</span>
                <span>{open ? '-' : '+'}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                I utefotograferingen ingår 4st högupplösta bilder. Därefter
                kostar det 150kr/bild och då kontaktar ni mig om ni vill ha
                fler.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-lg font-medium text-gray-900 hover:bg-gray-300 focus:outline-none">
                <span>Hur lång tid tar en vanlig fotosession?</span>
                <span>{open ? '-' : '+'}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                En session tar vanligtvis mellan 0.5-2 timmar beroende på era
                önskemål.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-lg font-medium text-gray-900 hover:bg-gray-300 focus:outline-none">
                <span>Fotograferar du utanför Kungälv?</span>
                <span>{open ? '-' : '+'}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                Ja, men reseersättning kan tillkomma.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-lg font-medium text-gray-900 hover:bg-gray-300 focus:outline-none">
                <span>Vad ingår i bröllopspaketet?</span>
                <span>{open ? '-' : '+'}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                I det enklaste bröllopspaketet ingår ca 4 timmar på plats och
                50st bilder som ni väljer ut.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-700">Har du fler frågor?</p>
        <a
          href="/contact"
          className="inline-block mt-3 px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
        >
          Kontakta mig
        </a>
      </div>
    </main>
  )
}