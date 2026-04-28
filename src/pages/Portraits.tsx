import React, { useEffect, useState } from 'react'
import { LinkButton } from '@/components/Button'
import { Modal } from '../components/Modal'
import SEO from '@/components/SEO'
import { useImportedImages } from '../hooks/useImportedImages'
import { useShuffledImages } from '../hooks/useShuffleImages'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

const portraitUseCases = [
  'Profilbilder för LinkedIn, CV och personligt varumärke',
  'Porträtt för kreatörer, egenföretagare och sociala medier',
  'Personliga porträtt med naturlig och avslappnad känsla',
  'Företagsporträtt för webbplats, marknadsföring och presentationer',
]

const portraitHighlights = [
  {
    title: 'Avslappnad fotografering',
    description:
      'Målet är att du ska känna dig trygg framför kameran, så att uttrycket blir naturligt och inte stelt.',
  },
  {
    title: 'Anpassat efter syfte',
    description:
      'Vi utgår från hur bilderna ska användas och vilken känsla du vill förmedla.',
  },
  {
    title: 'Färdiga bilder att använda',
    description:
      'Du får redigerade bilder som fungerar för både privata minnen och professionella sammanhang.',
  },
]

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

        <section className="max-w-5xl mx-auto mb-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8">
          <div className="bg-white/90 rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-textPrimary">
              Passar för dig som behöver porträtt till
            </h2>
            <ul className="space-y-3 text-textSecondary leading-relaxed">
              {portraitUseCases.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-textPrimary/80 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {portraitHighlights.map((item) => (
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

        <section className="max-w-4xl mx-auto mt-14 text-center bg-[rgba(238,235,235,0.6)] rounded-[2rem] p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-textPrimary mb-4">
            Vill du boka porträttfotografering?
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed mb-7 max-w-2xl mx-auto">
            Hör av dig och berätta lite om vad du behöver hjälp med, så
            återkommer jag med ett upplägg som passar dig, användningsområdet
            och den känsla du vill ha i bilderna.
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
