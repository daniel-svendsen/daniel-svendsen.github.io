import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useImportedImages } from '../hooks/useImportedImages'
import { useShuffledImages } from '../hooks/useShuffleImages'
import { Modal } from '../components/Modal'

export default function WeddingGallery() {
  const { weddings: weddingImages } = useImportedImages(['weddings'])
  const shuffledWeddingImages = useShuffledImages(weddingImages || [])
  const [selectedWeddingImage, setSelectedWeddingImage] = useState<{
    src: string
    alt: string
  } | null>(null)

  useEffect(() => {
    if (selectedWeddingImage) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [selectedWeddingImage])

  return (
    <>
      <Helmet>
        <title>
          Bröllopsfotograf i Kungälv & Göteborg - Svendsén Photography
        </title>
        <meta
          name="description"
          content="Boka din bröllopsfotografering med Svendsén Photography i Kungälv & Göteborg. Fånga de magiska ögonblicken på din stora dag. Läs mer: https://www.svendsenphotography.com/weddings"
        />
        <meta
          name="keywords"
          content="bröllopsfotograf, fotograf kungälv, fotograf göteborg, bröllopsfotografering, Svendsén Photography"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Photograph',
            name: 'Svendsén Photography - Bröllopsfotograf',
            description: 'Bröllopsfotograf i Kungälv & Göteborg',
            url: 'https://www.svendsenphotography.com/weddings',
          })}
        </script>
      </Helmet>

      <main className="p-6">
        <header>
          <h1 className="text-3xl font-bold mb-6">
            Bröllopsfotografi i Kungälv & Göteborg
          </h1>
        </header>
        <section
          aria-label="Bröllopsgalleri"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {shuffledWeddingImages.map((src, index) => (
            <figure key={index} className="relative">
              <img
                src={src}
                alt={`Bröllopsfoto ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() =>
                  setSelectedWeddingImage({
                    src,
                    alt: `Bröllopsfoto ${index + 1}`,
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