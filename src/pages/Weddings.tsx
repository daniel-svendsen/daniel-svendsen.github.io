import React, { useEffect, useState } from 'react'
import { useImportedImages } from '../hooks/useImportedImages'
import { useShuffledImages } from '../hooks/useShuffleImages'
import { Modal } from '../components/Modal'
import SEO from '@/components/SEO'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

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
