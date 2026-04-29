import React, { useEffect, useState } from 'react'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
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

      <main className="max-w-full overflow-hidden bg-background p-6 pt-20 text-textPrimary">
        <header className="mx-auto mb-10 max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Porträttfotograf i Göteborg och Kungälv
          </h1>
          <p className="mb-4 text-lg leading-relaxed">
            Jag erbjuder porträttfotografering i Göteborg och Kungälv för dig
            som vill ha naturliga, personliga och professionella bilder.
            Fotograferingen passar både privatpersoner, kreatörer och företag
            som behöver porträtt med värme, närvaro och ett genomtänkt uttryck.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
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

        <section className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <InfoCard className="p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Passar för dig som behöver porträtt till
            </h2>
            <ul className="space-y-3 leading-relaxed text-textSecondary">
              {portraitUseCases.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-textPrimary/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <div className="grid grid-cols-1 gap-4">
            {portraitHighlights.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
                className="p-5"
                titleClassName="mb-2 text-lg"
                descriptionClassName="text-sm"
              />
            ))}
          </div>
        </section>

        <section
          aria-label="Porträttgalleri"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {shuffledImages.map((src, index) => (
            <figure key={index} className="relative">
              <img
                src={src}
                alt={`Porträttfotografering i Göteborg och Kungälv ${index + 1}`}
                className="h-full w-full cursor-pointer object-cover"
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

        <CTASection
          className="mt-14"
          title="Vill du boka porträttfotografering?"
          description="Hör av dig och berätta lite om vad du behöver hjälp med, så återkommer jag med ett upplägg som passar dig, användningsområdet och den känsla du vill ha i bilderna."
          actions={[
            { to: '/contact', label: 'Skicka förfrågan' },
            { to: '/services', label: 'Se fler tjänster', variant: 'outline' },
          ]}
        />

        {selectedImage && (
          <Modal
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-full max-w-full"
            />
          </Modal>
        )}
      </main>
    </>
  )
}
