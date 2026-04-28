import React, { useEffect, useState } from 'react'
import { useImportedImages } from '../hooks/useImportedImages'
import { useShuffledImages } from '../hooks/useShuffleImages'
import { Modal } from '../components/Modal'
import SEO from '@/components/SEO'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

export default function Portraits() {
  const imagesData = useImportedImages(['portraits'])
  const images = imagesData.portraits || []
  const shuffledImages = useShuffledImages(images)
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
  } | null>(null)
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [selectedImage])

  const portraitsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Porträttfotografering i Göteborg och Kungälv',
    serviceType: 'Portrait photography',
    description:
      'Professionell porträttfotografering i Göteborg och Kungälv för privatpersoner, kreatörer och företag.',
    url: 'https://www.svendsenphotography.com/portraits',
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
        title="Porträttfotograf i Göteborg & Kungälv | Naturliga porträtt | Svendsen Photography"
        description="Söker du en porträttfotograf i Göteborg eller Kungälv? Svendsen Photography skapar naturliga och professionella porträtt för privatpersoner, kreatörer och företag."
        url="https://www.svendsenphotography.com/portraits"
        image={absoluteLogoUrl}
        jsonLd={portraitsJsonLd}
      />

      <main className="pt-20 p-6 bg-background text-textPrimary max-w-full overflow-hidden">
        <header className="max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Porträttfotograf i Göteborg och Kungälv
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Jag erbjuder porträttfotografering i Göteborg och Kungälv för dig
            som vill ha naturliga, personliga och professionella bilder.
            Fotograferingen passar både privatpersoner, kreatörer och företag
            som behöver porträtt med värme, närvaro och ett genomtänkt uttryck.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Oavsett om du behöver nya profilbilder, porträtt till ditt
            personliga varumärke eller bilder för sociala medier anpassar jag
            fotograferingen efter hur du vill uppfattas och hur bilderna ska
            användas.
          </p>
          <p className="text-lg leading-relaxed">
            Målet är att skapa en trygg och avslappnad upplevelse där du känner
            dig bekväm framför kameran, så att resultatet blir naturligt och
            håller över tid.
          </p>
        </header>
        <section
          aria-label="Porträttgalleri"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {shuffledImages.map((src, index) => (
            <figure key={index} className="relative">
              <img
                src={src}
                alt={`Porträttfotografering i Göteborg och Kungälv ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() =>
                  setSelectedImage({
                    src,
                    alt: `Porträttfotografering ${index + 1}`,
                  })
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
