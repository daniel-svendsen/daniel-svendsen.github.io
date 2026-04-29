import React, { useEffect, useMemo, useState } from 'react'
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
  const featuredImages = useMemo(() => shuffledImages.slice(0, 3), [shuffledImages])
  const galleryImages = useMemo(() => shuffledImages.slice(3), [shuffledImages])
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

      <main className="max-w-full overflow-hidden bg-beige p-6 pt-20 text-textPrimary">
        <header className="mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-6 lg:mb-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Porträtt
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Naturliga porträtt med närvaro, värme och ett genomtänkt uttryck
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              Porträttfotografering i Göteborg och Kungälv för dig som vill ha
              personliga och professionella bilder som känns levande, trygga
              och tidlösa.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/6 bg-warm-gray p-5 shadow-[0_24px_60px_-36px_rgba(31,41,55,0.28)] md:p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textPrimary">
              Passar för
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {portraitUseCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/6 bg-white px-4 py-3 text-sm font-medium leading-relaxed text-textPrimary shadow-[0_10px_24px_-20px_rgba(31,41,55,0.24)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </header>

        {featuredImages.length > 0 && (
          <section
            aria-label="Utvalda porträtt"
            className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <figure className="group relative overflow-hidden rounded-[2rem]">
              <img
                src={featuredImages[0]}
                alt="Utvalt porträttfotografi"
                className="h-[28rem] w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-[1.02] md:h-[38rem]"
                onClick={() =>
                  setSelectedImage({
                    src: featuredImages[0],
                    alt: 'Utvalt porträttfotografi',
                  })
                }
              />
            </figure>

            <div className="grid grid-cols-1 gap-4">
              {featuredImages.slice(1).map((src, index) => (
                <figure
                  key={src}
                  className="group relative overflow-hidden rounded-[2rem]"
                >
                  <img
                    src={src}
                    alt={`Utvalt porträttfotografi ${index + 2}`}
                    className="h-[13.5rem] w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-[1.02] md:h-[18.6rem]"
                    onClick={() =>
                      setSelectedImage({
                        src,
                        alt: `Utvalt porträttfotografi ${index + 2}`,
                      })
                    }
                  />
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.2)] md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              En trygg upplevelse framför kameran
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Oavsett om du behöver nya profilbilder, porträtt till ditt
              personliga varumärke eller bilder för sociala medier anpassar jag
              fotograferingen efter hur du vill uppfattas och hur bilderna ska
              användas.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Målet är att skapa en lugn och avslappnad upplevelse där du
              känner dig bekväm framför kameran, så att resultatet blir
              naturligt och håller över tid.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {portraitHighlights.map((item) => (
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
          aria-label="Porträttgalleri"
          className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {(galleryImages.length > 0 ? galleryImages : shuffledImages).map(
            (src, index) => (
              <figure
                key={index}
                className="relative overflow-hidden rounded-[1.6rem]"
              >
                <img
                  src={src}
                  alt={`Porträttfotografering i Göteborg och Kungälv ${index + 1}`}
                  className="h-full w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-[1.02]"
                  onClick={() =>
                    setSelectedImage({
                      src,
                      alt: `Porträttfotografering ${index + 1}`,
                    })
                  }
                  loading="lazy"
                />
              </figure>
            ),
          )}
        </section>

        <CTASection
          className="mt-14 bg-white/82"
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
