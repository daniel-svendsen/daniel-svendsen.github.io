import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useImportedImages } from '../hooks/useImportedImages'
import { useShuffledImages } from '../hooks/useShuffleImages'
import { Modal } from '../components/Modal'

export default function Portraits() {
  const imagesData = useImportedImages(['portraits'])
  const images = imagesData.portraits || []
  const shuffledImages = useShuffledImages(images)
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
  } | null>(null)

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [selectedImage])

  return (
    <>
      <Helmet>
        <title>
          Porträttfotograf i Kungälv & Göteborg - Svendsén Photography
        </title>
        <meta
          name="description"
          content="Boka en professionell porträttfotografering i Göteborg & Kungälv. Perfekt för företagsporträtt, CV-bilder och familjeporträtt. Läs mer: https://www.svendsenphotography.com/services"
        />
        <meta
          name="keywords"
          content="porträtt, fotograf kungälv, fotograf göteborg, porträttfotografering, Svendsén Photography"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Photograph',
            name: 'Svendsén Photography - Porträtt',
            description: 'Porträttfotograf i Kungälv & Göteborg',
            url: 'https://www.svendsenphotography.com/portraits',
          })}
        </script>
      </Helmet>

      <main className="pt-20 p-6 bg-background text-textPrimary max-w-full overflow-hidden">
        <header>
          <h1 className="text-3xl font-bold mb-6">
            Porträttfotograf i Kungälv & Göteborg
          </h1>
        </header>
        <section
          aria-label="Porträttgalleri"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {shuffledImages.map((src, index) => (
            <figure key={index} className="relative">
              <img
                src={src}
                alt={`Porträtt av fotograf i Kungälv och Göteborg ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() =>
                  setSelectedImage({ src, alt: `Porträtt ${index + 1}` })
                }
                loading="lazy"
              />
            </figure>
          ))}
        </section>

        {selectedImage && (
          <Modal
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full"
            />
          </Modal>
        )}
      </main>
    </>
  )
}