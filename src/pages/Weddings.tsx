import React, { useEffect, useState } from 'react'
import { LinkButton } from '@/components/Button'
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

      <main className="pt-20 p-6 bg-background text-textPrimary max-w-full overflow-hidden">
        <header className="max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Bröllopsfotograf i Göteborg och Kungälv
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Jag fotograferar bröllop i Göteborg och Kungälv med fokus på äkta
            känslor, närvaro och detaljerna som gör er dag unik. Målet är att
            ni ska få bilder som känns personliga både nu och många år framåt.
          </p>
          <p className="text-lg leading-relaxed mb-4">
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

        <section className="max-w-5xl mx-auto mb-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8">
          <div className="bg-white/90 rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-textPrimary">
              Passar för er som vill ha
            </h2>
            <ul className="space-y-3 text-textSecondary leading-relaxed">
              {weddingIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-textPrimary/80 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {weddingHighlights.map((item) => (
              <div
                key={item.title}
                className="bg-white/90 rounded-3xl p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-textPrimary mb-2">
                  {item.title}
                </h3>
                <p className="text-textSecondary leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-label="Bröllopsgalleri"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {shuffledWeddingImages.map((src, index) => (
            <figure key={index} className="relative">
              <img
                src={src}
                alt={`Bröllopsfotografering i Göteborg och Kungälv ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
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

        <section className="max-w-4xl mx-auto mt-14 text-center bg-[rgba(238,235,235,0.6)] rounded-[2rem] p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-4">
            Vill ni boka bröllopsfotografering?
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed mb-7 max-w-2xl mx-auto">
            Hör av er och berätta lite om er dag, ert upplägg och vad ni vill
            ha hjälp med, så återkommer jag med ett förslag som passar er och
            den känsla ni vill bära med er från dagen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <LinkButton
              to="/contact"
              variant="default"
              size="lg"
              subVariant="rounded"
              className="font-semibold px-8"
            >
              Skicka förfrågan
            </LinkButton>
            <LinkButton
              to="/services"
              variant="outline"
              size="lg"
              subVariant="rounded"
              className="font-semibold px-8"
            >
              Se fler tjänster
            </LinkButton>
          </div>
        </section>

        {selectedWeddingImage && (
          <Modal
            isOpen={!!selectedWeddingImage}
            onClose={() => setSelectedWeddingImage(null)}
          >
            <img
              src={selectedWeddingImage.src}
              alt={selectedWeddingImage.alt}
              className="max-w-full max-h-full"
            />
          </Modal>
        )}
      </main>
    </>
  )
}
