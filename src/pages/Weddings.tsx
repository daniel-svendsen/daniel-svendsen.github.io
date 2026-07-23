import React, { useEffect, useMemo, useState } from 'react'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { LinkButton } from '@/components/Button'
import SEO from '@/components/SEO'
import { Modal } from '../components/Modal'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { useImportedImages } from '../hooks/useImportedImages'
import { useShuffledImages } from '../hooks/useShuffleImages'
import { getPageOgImage } from '@/config/pageSeo'
import { getImageSrc, type ImageAsset } from '@/utils/responsiveImages'
import { businessReference, BUSINESS } from '@/config/seo'
import { PRICING } from '@/config/pricing'
import { createFaqJsonLd, weddingFaqs } from '@/data/faqs'
import featuredWeddingKiss from '../assets/weddings/DSC09579.jpg?responsive'
import featuredWeddingBlackAndWhite from '../assets/weddings/portraits-3.jpg?responsive'
import featuredWeddingForest from '../assets/weddings/portraits-17.jpg?responsive'

const featuredWeddings = [
  {
    image: featuredWeddingKiss,
    alt: 'Bröllopspar som kysser varandra i högt gräs',
  },
  {
    image: featuredWeddingBlackAndWhite,
    alt: 'Svartvit bröllopsbild av ett par som håller handen utomhus',
  },
  {
    image: featuredWeddingForest,
    alt: 'Bröllopspar som promenerar tillsammans i grönskande skog',
  },
]

const featuredWeddingSources = new Set(
  featuredWeddings.map(({ image }) => getImageSrc(image)),
)

const weddingIncludes = [
  'Bröllopsporträtt med fokus på närvaro och naturlig känsla',
  'Dokumentation av detaljer, miljö och ögonblick mellan det planerade',
  'Fotografering anpassad efter mindre ceremonier eller längre upplägg',
  'Färdiga bilder som fungerar både som minnen och för att dela med familj och vänner',
]

const weddingFacts = [
  PRICING.wedding.shortFrom,
  PRICING.wedding.shortDuration,
  PRICING.wedding.shortImages,
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
      'Jag utgår från ert upplägg, era önskemål och vilken typ av minnen ni vill kunna bära med er efteråt.',
  },
]

const weddingPackages = [
  {
    title: 'Kort vigsel',
    description:
      `${PRICING.wedding.shortFrom}. Kort vigsel är ${PRICING.wedding.shortDuration} och innehåller ${PRICING.wedding.shortImages}. Det passar bra för mindre bröllop, rådhusvigsel eller er som vill fånga de viktigaste ögonblicken.`,
  },
  {
    title: 'Halvdag',
    description:
      `${PRICING.wedding.halfDayPrice}. Halvdag är ${PRICING.wedding.halfDayDuration} och innehåller ${PRICING.wedding.halfDayImages}. Ett bra upplägg för porträtt, vigsel, gratulationer och mingel.`,
  },
  {
    title: 'Heldag',
    description:
      `${PRICING.wedding.fullDayPrice}. Heldag är ${PRICING.wedding.fullDayDuration} och innehåller ${PRICING.wedding.fullDayImages}, från förberedelser till middag eller kvällens känsla.`,
  },
  {
    title: 'Film som tillägg',
    description:
      `Eftersom jag oftast arbetar själv är foto huvudleveransen. Highlightfilm kan läggas till när upplägget passar, från ${PRICING.wedding.highlightFilmWithPhoto} vid fotopaket.`,
  },
  {
    title: 'Leverans',
    description:
      'Leveranstiden för bröllopsbilder är vanligtvis 1 till 2 veckor beroende på säsong och arbetsbelastning.',
  },
  {
    title: 'Bokning',
    description:
      'Jag ser gärna att ni bokar minst 2 veckor i förväg så att jag hinner prata igenom upplägg, plats och känsla med er.',
  },
]

const weddingGuideLinks = [
  {
    title: 'Planera bildlistan',
    description:
      'Samla de personer, detaljer och delar av dagen som känns viktigast för er.',
    to: '/guider/brollopsplanerare/',
    label: 'Öppna bröllopsplaneraren',
  },
  {
    title: 'Skapa en lugn tidslinje',
    description:
      'Se hur familjebilder, porträtt och andra fotomoment kan få plats utan onödig stress.',
    to: '/guider/brollopstidslinje/',
    label: 'Se exempel på tidslinje',
  },
  {
    title: 'Planera promenadbilder',
    description:
      'Förbered en kort stund för naturliga porträtt utifrån plats, ljus och dagens tempo.',
    to: '/guider/brollopsbilder-promenad/',
    label: 'Läs guiden om promenadbilder',
  },
]

const weddingImageFolders = ['weddings'] as const

export default function WeddingGallery() {
  const { weddings: weddingImages } = useImportedImages(weddingImageFolders)
  const shuffledWeddingImages = useShuffledImages(weddingImages || [])
  const galleryImages = useMemo(
    () =>
      shuffledWeddingImages.filter(
        (image) => !featuredWeddingSources.has(getImageSrc(image)),
      ),
    [shuffledWeddingImages],
  )
  const [selectedWeddingImage, setSelectedWeddingImage] = useState<{
    src: ImageAsset
    alt: string
  } | null>(null)
  const ogImage = getPageOgImage('weddings')

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
    url: 'https://www.svendsenphotography.com/weddings/',
    provider: businessReference,
    areaServed: BUSINESS.serviceAreas.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
  }

  return (
    <>
      <SEO
        title="Bröllopsfotografering | Paket & priser | Svendsén Photography"
        description="Jämför bröllopspaket för kort vigsel, halvdag och heldag. Naturliga bröllopsbilder i Göteborg, Kungälv och andra orter enligt överenskommelse."
        url="https://www.svendsenphotography.com/weddings/"
        image={ogImage.src}
        imageAlt={ogImage.alt}
        jsonLd={[weddingsJsonLd, createFaqJsonLd(weddingFaqs)]}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Bröllop',
            url: 'https://www.svendsenphotography.com/weddings/',
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f5f5f2] px-3 pb-10 pt-24 text-textPrimary sm:px-4 md:px-5 md:pt-28 lg:px-6">
        <header className="mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-8 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] md:mb-12 md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Bröllop
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Bröllopsfotografering för kort vigsel, halvdag och heldag
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              Jämför bröllopspaket för olika delar av dagen och välj hur mycket
              ni vill få dokumenterat. Jag utgår från Kungälv och fotograferar
              även i Göteborg, Stenungsund och andra orter enligt överenskommelse.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {weddingFacts.map((fact) => (
                <span
                  key={fact}
                  className="rounded-full border border-black/6 bg-[#f8f8f5] px-4 py-2 text-sm font-semibold text-textPrimary"
                >
                  {fact}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                to="/contact/"
                size="lg"
                subVariant="rounded"
                className="px-8 font-semibold"
              >
                Fråga om ert datum
              </LinkButton>
              <LinkButton
                to="/brollop/"
                variant="outline"
                size="lg"
                subVariant="rounded"
                className="px-8 font-semibold"
              >
                Se verkliga bröllop
              </LinkButton>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-5 md:p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
              Passar för
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {weddingIncludes.map((item) => (
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

        <section
          aria-label="Utvalda bröllopsbilder"
          className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 rounded-[1.75rem] border border-black/6 bg-white px-4 py-4 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-5 md:py-5 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <figure className="group relative overflow-hidden rounded-[2rem]">
            <ResponsiveImage
              image={featuredWeddings[0].image}
              alt={featuredWeddings[0].alt}
              sizes="(min-width: 1024px) 670px, 100vw"
              className="h-[28rem] w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-[1.02] md:h-[38rem]"
              onClick={() =>
                setSelectedWeddingImage({
                  src: featuredWeddings[0].image,
                  alt: featuredWeddings[0].alt,
                })
              }
            />
          </figure>

          <div className="grid grid-cols-1 gap-4">
            {featuredWeddings.slice(1).map(({ image, alt }) => (
              <figure
                key={getImageSrc(image)}
                className="group relative overflow-hidden rounded-[2rem]"
              >
                <ResponsiveImage
                  image={image}
                  alt={alt}
                  sizes="(min-width: 1024px) 430px, 100vw"
                  className="h-[13.5rem] w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-[1.02] md:h-[18.6rem]"
                  onClick={() => setSelectedWeddingImage({ src: image, alt })}
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
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
              fler delar anpassar jag fotograferingen efter er, så att resultatet
              speglar stämningen och berättelsen på ett naturligt och tidlöst sätt.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {weddingHighlights.map((item) => (
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

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Bröllopsfotograf i Kungälv
            </h2>
            <p className="mb-6 text-base leading-relaxed text-textSecondary">
              För er som planerar bröllop i Kungälv finns det mycket att vinna
              på ett upplägg där vigsel, familj och en lugn promenad får ta
              plats. Det behöver inte vara stort för att kännas personligt.
            </p>
            <LinkButton
              to="/brollopsfotograf-kungalv/"
              variant="outline"
              size="lg"
              subVariant="rounded"
              className="px-8 font-semibold"
            >
              Läs mer om bröllop i Kungälv
            </LinkButton>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InfoCard
              title="Promenadbilder"
              description="En kort promenad ger ofta mer avslappnade bilder där ni får fokusera på varandra."
              className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
            />
            <InfoCard
              title="Riktigt exempel"
              description="Se ett bröllop från Kungälv där promenaden blev en viktig del av bildberättelsen."
              className="border-black/6 bg-[#f8f8f5] p-6 shadow-none"
            />
          </div>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              Paket och upplägg
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Bröllopsfotograferingen kan anpassas efter hur mycket av dagen ni
              vill få dokumenterat. På hemsidan visas tre grundpaket, men
              upplägget går alltid att justera om ni vill lägga till, ta bort
              eller forma något mer personligt.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {weddingPackages.map((item) => (
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
              Förbered fotograferingen
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              Använd guiderna för att samla era prioriteringar och skapa plats
              för bilderna i dagens planering innan ni skickar en förfrågan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {weddingGuideLinks.map((guide) => (
              <div
                key={guide.to}
                className="flex flex-col rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-textPrimary">
                  {guide.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-textSecondary">
                  {guide.description}
                </p>
                <LinkButton
                  to={guide.to}
                  variant="outline"
                  size="md"
                  subVariant="rounded"
                  className="self-start font-semibold"
                >
                  {guide.label}
                </LinkButton>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[1.75rem] border border-black/6 bg-white px-5 py-8 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Så arbetar jag under bröllopsdagen
            </h2>
            <p className="mb-4 text-base leading-relaxed text-textSecondary">
              Jag vill att bilderna ska kännas levande och naturliga, inte som
              något ni måste spela upp för kameran. Därför arbetar jag gärna lugnt
              i bakgrunden och fångar det som händer när ni faktiskt är i stunden
              tillsammans.
            </p>
            <p className="text-base leading-relaxed text-textSecondary">
              En del jag gärna rekommenderar är att ni tar 10 till 15 minuter för
              en egen promenad där ni bara fokuserar på varandra och inte låtsas
              om mig. Då kan jag fånga små blickar, rörelser och ögonblick som
              ofta blir några av de mest levande bilderna från dagen.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-black/6 bg-[#f8f8f5] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Vanliga frågor om bröllopsfotografering
            </h2>
            <div className="space-y-4">
              {weddingFaqs.map((faq) => (
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
          aria-label="Bröllopsgalleri"
          className="mx-auto grid max-w-6xl grid-cols-1 gap-4 rounded-[1.75rem] border border-black/6 bg-white px-4 py-4 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.45)] sm:grid-cols-2 md:grid-cols-3 md:px-5 md:py-5 lg:grid-cols-4"
        >
          {(galleryImages.length > 0 ? galleryImages : shuffledWeddingImages).map(
            (src, index) => (
              <figure
                key={index}
                className="relative overflow-hidden rounded-[1.6rem]"
              >
                <ResponsiveImage
                  image={src}
                  alt={`Bröllopsfotografering i Göteborg och Kungälv ${index + 1}`}
                  sizes="(min-width: 1024px) 265px, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
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
          className="mt-14 rounded-[1.75rem] border border-black/6 bg-white"
          title="Vill ni boka bröllopsfotografering?"
          description="Hör av er och berätta lite om er dag, ert upplägg och vad ni vill ha hjälp med, så återkommer jag med ett förslag som passar er och den känsla ni vill bära med er från dagen."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            { to: '/brollop/', label: 'Se verkliga bröllop', variant: 'outline' },
          ]}
        />

        {selectedWeddingImage && (
          <Modal
            isOpen={!!selectedWeddingImage}
            onClose={() => setSelectedWeddingImage(null)}
          >
            <ResponsiveImage
              image={selectedWeddingImage.src}
              alt={selectedWeddingImage.alt}
              sizes="100vw"
              className="max-h-full max-w-full"
            />
          </Modal>
        )}
      </main>
    </>
  )
}
