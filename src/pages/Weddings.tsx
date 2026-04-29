import React, { useEffect, useState } from 'react'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import SEO from '@/components/SEO'
import { Modal } from '../components/Modal'
import { useImportedImages } from '../hooks/useImportedImages'
import { useShuffledImages } from '../hooks/useShuffleImages'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

const weddingIncludes = [
  'Bröllopsporträtt med fokus på närvaro och naturlig känsla',
  'Dokumentation av detaljer, miljö och ögonblick mellan det planerade',
  'Fotografering anpassad efter mindre ceremonier eller längre upplägg',
  'Färdiga bilder som fungerar både som minnen och för att dela med familj och vänner',
]

const weddingHighlights = [
  {
    title: 'Lugn och personlig upplevelse',
    description:
      'Jag arbetar på ett sätt som hjälper er att känna er trygga, så att bilderna får rätt känsla och inte känns uppställda.',
  },
  {
    title: 'Fokus på berättelsen',
    description:
      'Det handlar inte bara om porträtt, utan om helheten: blickarna, skratten, detaljerna och stämningen under dagen.',
  },
  {
    title: 'Anpassat efter er dag',
    description:
      'Vi utgår från ert upplägg, era önskemål och vilken typ av minnen ni vill kunna bära med er efteråt.',
  },
]

export default function WeddingGallery() {
  const { weddings: weddingImages } = useImportedImages(['weddings'])
  const shuffledWeddingImages = useShuffledImages(weddingImages || [])
  const [selectedWeddingImage, setSelectedWeddingImage] = useState<{
    src: string
    alt: string
  } | null>(null)
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

  useEffect(() => {
    if (selectedWeddingImage) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [selectedWeddingImage])

  const weddingsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Bröllopsfotografering i Göteborg och Kungälv',
    serviceType: 'Wedding photography',
    description:
      'Bröllopsfotograf i Göteborg och Kungälv med fokus på naturliga, känslosamma och tidlösa bilder.',
    url: 'https://www.svendsenphotography.com/weddings',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Svendsen Photography',
      url: 'https://www.svendsenphotography.com',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Göteborg' },
      { '@type': 'AdministrativeArea', name: 'Kungälv' },
    ],
  }

  return (
    <>
      <SEO
        title="Bröllopsfotograf i Göteborg & Kungälv | Tidlösa bröllopsbilder | Svendsen Photography"
        description="Söker ni en bröllopsfotograf i Göteborg eller Kungälv? Svendsen Photography dokumenterar er dag med naturliga, personliga och tidlösa bilder."
        url="https://www.svendsenphotography.com/weddings"
        image={absoluteLogoUrl}
        jsonLd={weddingsJsonLd}
      />

      <main className="max-w-full overflow-hidden bg-background p-6 pt-20 text-textPrimary">
        <header className="mx-auto mb-10 max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Bröllopsfotograf i Göteborg och Kungälv
          </h1>
          <p className="mb-4 text-lg leading-relaxed">
            Jag fotograferar bröllop i Göteborg och Kungälv med fokus på äkta
            känslor, närvaro och detaljerna som gör er dag unik. Målet är att
            ni ska få bilder som känns personliga både nu och många år framåt.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            För mig handlar bröllopsfotografi inte bara om porträtt, utan om
            att fånga hela upplevelsen: blickarna, skratten, miljön och de små
            ögonblicken mellan det planerade.
          </p>
          <p className="text-lg leading-relaxed">
            Oavsett om ni planerar ett mindre bröllop eller en större dag med
            många gäster anpassar jag fotograferingen efter er, så att
            resultatet speglar er berättelse på ett naturligt och tidlöst sätt.
          </p>
        </header>

        <section className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <InfoCard className="bg-white p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Passar för er som vill ha
            </h2>
            <ul className="space-y-3 leading-relaxed text-textSecondary">
              {weddingIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-textPrimary/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <div className="grid grid-cols-1 gap-4">
            {weddingHighlights.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
                className="bg-white p-5"
                titleClassName="mb-2 text-lg"
                descriptionClassName="text-sm"
              />
            ))}
          </div>
        </section>

        <section
          aria-label="Bröllopsgalleri"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {shuffledWeddingImages.map((src, index) => (
            <figure key={index} className="relative">
              <img
                src={src}
                alt={`Bröllopsfotografering i Göteborg och Kungälv ${index + 1}`}
                className="h-full w-full cursor-pointer object-cover"
                onClick={() =>
                  setSelectedWeddingImage({
                    src,
                    alt: `Bröllopsfotografering ${index + 1}`,
                  })
                }
                loading="lazy"
              />
            </figure>
          ))}
        </section>

        <CTASection
          className="mt-14 bg-white/82"
          title="Vill ni boka bröllopsfotografering?"
          description="Hör av er och berätta lite om er dag, ert upplägg och vad ni vill ha hjälp med, så återkommer jag med ett förslag som passar er och den känsla ni vill bära med er från dagen."
          actions={[
            { to: '/contact', label: 'Skicka förfrågan' },
            { to: '/services', label: 'Se fler tjänster', variant: 'outline' },
          ]}
        />

        {selectedWeddingImage && (
          <Modal
            isOpen={!!selectedWeddingImage}
            onClose={() => setSelectedWeddingImage(null)}
          >
            <img
              src={selectedWeddingImage.src}
              alt={selectedWeddingImage.alt}
              className="max-h-full max-w-full"
            />
          </Modal>
        )}
      </main>
    </>
  )
}
