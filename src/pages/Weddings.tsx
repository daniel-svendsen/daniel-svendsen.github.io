import React, { useEffect, useMemo, useState } from 'react'
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
  const featuredImages = useMemo(
    () => shuffledWeddingImages.slice(0, 3),
    [shuffledWeddingImages],
  )
  const galleryImages = useMemo(
    () => shuffledWeddingImages.slice(3),
    [shuffledWeddingImages],
  )
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

      <main className="max-w-full overflow-hidden bg-beige p-6 pt-20 text-textPrimary">
        <header className="mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-6 lg:mb-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Bröllop
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Tidlösa bröllopsbilder med närvaro, känsla och plats för er berättelse
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              Bröllopsfotografering i Göteborg och Kungälv för er som vill ha
              naturliga, personliga bilder där både de stora ögonblicken och de
              små detaljerna får ta plats.
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/6 bg-warm-gray p-5 shadow-[0_24px_60px_-36px_rgba(31,41,55,0.28)] md:p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textPrimary">
              Passar för
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {weddingIncludes.map((item) => (
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
            aria-label="Utvalda bröllopsbilder"
            className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <figure className="group relative overflow-hidden rounded-[2rem]">
              <img
                src={featuredImages[0]}
                alt="Utvald bröllopsbild"
                className="h-[28rem] w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-[1.02] md:h-[38rem]"
                onClick={() =>
                  setSelectedWeddingImage({
                    src: featuredImages[0],
                    alt: 'Utvald bröllopsbild',
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
                    alt={`Utvald bröllopsbild ${index + 2}`}
                    className="h-[13.5rem] w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-[1.02] md:h-[18.6rem]"
                    onClick={() =>
                      setSelectedWeddingImage({
                        src,
                        alt: `Utvald bröllopsbild ${index + 2}`,
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
              En lugn upplevelse genom hela dagen
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Jag fotograferar bröllop med fokus på äkta känslor, närvaro och
              detaljerna som gör er dag unik. Målet är att ni ska få bilder som
              känns personliga både nu och många år framåt.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Oavsett om ni planerar ett mindre bröllop eller en längre dag med
              fler delar anpassar jag fotograferingen efter er, så att
              resultatet speglar stämningen och berättelsen på ett naturligt
              och tidlöst sätt.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
          className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {(galleryImages.length > 0 ? galleryImages : shuffledWeddingImages).map(
            (src, index) => (
              <figure
                key={index}
                className="relative overflow-hidden rounded-[1.6rem]"
              >
                <img
                  src={src}
                  alt={`Bröllopsfotografering i Göteborg och Kungälv ${index + 1}`}
                  className="h-full w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-[1.02]"
                  onClick={() =>
                    setSelectedWeddingImage({
                      src,
                      alt: `Bröllopsfotografering ${index + 1}`,
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
