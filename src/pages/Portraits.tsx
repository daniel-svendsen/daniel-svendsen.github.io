import React, { useEffect, useMemo, useState } from 'react'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { Modal } from '../components/Modal'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { useImportedImages } from '../hooks/useImportedImages'
import { useShuffledImages } from '../hooks/useShuffleImages'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'
import { getImageSrc, type ImageAsset } from '@/utils/responsiveImages'
import { businessReference, BUSINESS } from '@/config/seo'
import { PRICING } from '@/config/pricing'

const portraitUseCases = [
  'Profilbilder för LinkedIn, CV och personligt varumärke',
  'Porträtt för kreatörer, egenföretagare och sociala medier',
  'Familjebilder och generationsporträtt med naturlig känsla',
  'Personliga porträtt med naturlig och avslappnad känsla',
  'Företagsporträtt för webbplats, marknadsföring och presentationer',
]

const portraitFacts = [
  PRICING.portrait.baseFrom,
  PRICING.portrait.baseDuration,
  PRICING.portrait.baseImages,
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

const portraitDetails = [
  {
    title: 'Grundpaket',
    description:
      `Porträttfotografering från ${PRICING.portrait.basePrice}. Grundpaketet är ${PRICING.portrait.baseDuration} och passar dig som vill ha ett enkelt och genomtänkt upplägg.`,
  },
  {
    title: 'Familj',
    description:
      `Familjefotografering från ${PRICING.portrait.familyPrice}. Upplägget är ${PRICING.portrait.familyDuration} och innehåller ${PRICING.portrait.familyImages}.`,
  },
  {
    title: 'Det här ingår',
    description:
      `${PRICING.portrait.baseImages} ingår i porträttbasen. Extra bilder kan köpas till för ${PRICING.portrait.extraImage}.`,
  },
  {
    title: 'Leverans',
    description:
      'Normal leveranstid är cirka 1 vecka, beroende på hur hög arbetsbelastningen är just då.',
  },
  {
    title: 'Plats',
    description:
      'Jag fotograferar främst utomhus, men det går också bra att fotografera hos kund om det passar bättre för syftet.',
  },
]

const portraitLocations = [
  {
    title: 'Porträttfotograf i Kungälv',
    description:
      'För dig som vill ha porträtt, familjebilder eller profilbilder nära Kungälv, med möjlighet till både naturmiljöer och platser som känns personliga.',
  },
  {
    title: 'Porträttfotograf i Göteborg',
    description:
      'För företag, kreatörer och privatpersoner i Göteborg som behöver naturliga porträtt till webb, LinkedIn, CV, sociala medier eller familj.',
  },
  {
    title: 'Porträttfotograf i Stenungsund',
    description:
      'För porträtt- och familjefotografering i Stenungsund med omnejd, gärna utomhus och med ett lugnt upplägg som passar syftet med bilderna.',
  },
]

const portraitFaqs = [
  {
    question: 'Vad ingår i en porträttfotografering?',
    answer:
      `Porträtt Bas är ${PRICING.portrait.baseDuration} och innehåller ${PRICING.portrait.baseImages}. Familjefotografering är ${PRICING.portrait.familyDuration} och innehåller ${PRICING.portrait.familyImages}.`,
  },
  {
    question: 'Hur lång tid tar en porträttfotografering?',
    answer:
      'Grundpaketet är 30 minuter, men upplägget kan anpassas om du behöver mer tid eller ett annat tempo.',
  },
  {
    question: 'Hur många bilder får jag?',
    answer:
      `${PRICING.portrait.baseImages} ingår i Porträtt Bas och ${PRICING.portrait.familyImages} ingår i familjepaketet. Extra bilder kan köpas till för ${PRICING.portrait.extraImage}.`,
  },
  {
    question: 'Kan vi fotografera på en plats jag själv väljer?',
    answer:
      'Ja. Jag fotograferar främst utomhus, men det går också bra att fotografera hos kund eller på annan plats som passar syftet med bilderna.',
  },
  {
    question: 'Kan jag skicka referensbilder om jag vill ha en viss stil?',
    answer:
      'Ja, absolut. Min bildstil är den du ser på hemsidan, men du får gärna skicka referensbilder om du vill ha en annan känsla eller riktning.',
  },
]

export default function Portraits() {
  const imagesData = useImportedImages(['portraits'])
  const images = imagesData.portraits || []
  const shuffledImages = useShuffledImages(images)
  const featuredImages = useMemo(
    () => shuffledImages.slice(0, 3),
    [shuffledImages],
  )
  const galleryImages = useMemo(() => shuffledImages.slice(3), [shuffledImages])
  const [selectedImage, setSelectedImage] = useState<{
    src: ImageAsset
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
    name: 'Porträttfotografering i Kungälv, Göteborg och Stenungsund',
    serviceType: 'Portrait photography',
    description:
      'Professionell porträtt- och familjefotografering i Kungälv, Göteborg och Stenungsund för privatpersoner, kreatörer och företag.',
    url: 'https://www.svendsenphotography.com/portraits/',
    provider: businessReference,
    areaServed: BUSINESS.serviceAreas.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
  }

  return (
    <>
      <SEO
        title="Porträttfotograf i Kungälv, Göteborg & Stenungsund | Svendsén Photography"
        description="Söker du porträttfotograf i Kungälv, Göteborg eller Stenungsund? Jag fotograferar naturliga porträtt, familjebilder och profilbilder för privatpersoner, kreatörer och företag."
        url="https://www.svendsenphotography.com/portraits/"
        image={absoluteLogoUrl}
        jsonLd={portraitsJsonLd}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Porträtt',
            url: 'https://www.svendsenphotography.com/portraits/',
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f5f5f2] px-3 pb-10 pt-24 text-textPrimary sm:px-4 md:px-5 md:pt-28 lg:px-6">
        <header className="mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-8 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] md:mb-12 md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Porträtt
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Porträttfotograf i Kungälv, Göteborg och Stenungsund
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              Porträtt- och familjefotografering för dig som vill ha personliga
              och professionella bilder som känns levande, trygga och tidlösa.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {portraitFacts.map((fact) => (
                <span
                  key={fact}
                  className="rounded-full border border-black/6 bg-[#f8f8f5] px-4 py-2 text-sm font-semibold text-textPrimary"
                >
                  {fact}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-5 md:p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
              Passar för
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {portraitUseCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/6 bg-white px-4 py-3 text-sm font-medium leading-relaxed text-textPrimary/78"
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
            className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 rounded-[1.75rem] border border-black/6 bg-white px-4 py-4 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-5 md:py-5 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <figure className="group relative overflow-hidden rounded-[2rem]">
              <ResponsiveImage
                image={featuredImages[0]}
                alt="Utvalt porträttfotografi"
                sizes="(min-width: 1024px) 670px, 100vw"
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
                  key={getImageSrc(src)}
                  className="group relative overflow-hidden rounded-[2rem]"
                >
                  <ResponsiveImage
                    image={src}
                    alt={`Utvalt porträttfotografi ${index + 2}`}
                    sizes="(min-width: 1024px) 430px, 100vw"
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

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              En trygg upplevelse framför kameran
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Oavsett om du behöver nya profilbilder, porträtt till ditt
              personliga varumärke, familjebilder eller bilder för sociala medier
              anpassar jag fotograferingen efter hur du vill uppfattas och hur
              bilderna ska användas.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Målet är att skapa en lugn och avslappnad upplevelse där du känner
              dig bekväm framför kameran, så att resultatet blir naturligt och
              håller över tid.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {portraitHighlights.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
                className="border-black/6 bg-[#f8f8f5] p-5 shadow-none"
                titleClassName="mb-2 text-lg"
                descriptionClassName="text-sm"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Vad som ingår i porträttfotograferingen
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Porträttfotograferingen är upplagd för att vara enkel, trygg och
              tydlig redan från början. Här får du en snabb överblick över
              grundpaketet och hur processen brukar se ut.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {portraitDetails.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                description={item.description}
                className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
                titleClassName="mb-2 text-xl"
                descriptionClassName="text-sm leading-relaxed"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Porträttfotografering nära dig
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Jag utgår från Kungälv och fotograferar porträtt, familj och
              profilbilder i Kungälv, Göteborg och Stenungsund. Platsen väljer vi
              efter vilken känsla bilderna ska ha och hur de ska användas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {portraitLocations.map((location) => (
              <InfoCard
                key={location.title}
                title={location.title}
                description={location.description}
                className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
                titleClassName="mb-2 text-xl"
                descriptionClassName="text-sm leading-relaxed"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Min stil och hur vi formar upplägget
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Min porträttstil är den du ser i galleriet här på hemsidan:
              naturlig, varm och levande. Målet är att bilderna ska kännas
              avslappnade och genomtänkta snarare än stela eller överarbetade.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              Om du har en annan känsla i åtanke går det bra att skicka
              referensbilder i förväg. Då kan vi prata igenom uttryck, plats och
              användningsområde innan fotograferingen så att resultatet passar
              dig bättre.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Vanliga frågor om porträttfotografering
            </h2>
            <div className="space-y-4">
              {portraitFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-black/6 bg-white px-4 py-4"
                >
                  <h3 className="mb-2 text-lg font-semibold text-textPrimary">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-textSecondary">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-label="Porträttgalleri"
          className="mx-auto grid max-w-6xl grid-cols-1 gap-4 rounded-[1.75rem] border border-black/6 bg-white px-4 py-4 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] sm:grid-cols-2 md:grid-cols-3 md:px-5 md:py-5 lg:grid-cols-4"
        >
          {(galleryImages.length > 0 ? galleryImages : shuffledImages).map(
            (src, index) => (
              <figure
                key={index}
                className="relative overflow-hidden rounded-[1.6rem]"
              >
                <ResponsiveImage
                  image={src}
                  alt={`Porträttfotografering i Kungälv, Göteborg och Stenungsund ${index + 1}`}
                  sizes="(min-width: 1024px) 265px, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
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
          className="mt-14 rounded-[1.75rem] border border-black/6 bg-white"
          title="Vill du boka porträttfotografering?"
          description="Hör av dig och berätta lite om vad du behöver hjälp med, så återkommer jag med ett upplägg som passar dig, användningsområdet och den känsla du vill ha i bilderna."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            { to: '/services/', label: 'Se fler tjänster', variant: 'outline' },
          ]}
        />

        {selectedImage && (
          <Modal
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
          >
            <ResponsiveImage
              image={selectedImage.src}
              alt={selectedImage.alt}
              sizes="100vw"
              className="max-h-full max-w-full"
            />
          </Modal>
        )}
      </main>
    </>
  )
}
