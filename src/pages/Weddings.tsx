import React, { useEffect, useMemo, useState } from 'react'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { LinkButton } from '@/components/Button'
import SEO from '@/components/SEO'
import { Modal } from '../components/Modal'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { useImportedImages } from '../hooks/useImportedImages'
import { useShuffledImages } from '../hooks/useShuffleImages'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'
import { getImageSrc, type ImageAsset } from '@/utils/responsiveImages'

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
      'Jag utgår från ert upplägg, era önskemål och vilken typ av minnen ni vill kunna bära med er efteråt.',
  },
]

const weddingPackages = [
  {
    title: 'Grundpaket',
    description:
      'Från 7500 kr. Grundpaketet är 4 timmar och innehåller cirka 50 redigerade bilder.',
  },
  {
    title: 'Fler upplägg',
    description:
      'De tre paket som visas på hemsidan gäller som grund, men det går också bra att lägga till, ta bort eller justera efter er dag.',
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

const weddingFaqs = [
  {
    question: 'Vad ingår i grundpaketet för bröllopsfotografering?',
    answer:
      'Grundpaketet är 4 timmar och innehåller cirka 50 redigerade bilder. Det passar bra för mindre bröllop eller för er som vill fokusera på utvalda delar av dagen.',
  },
  {
    question: 'Kan vi anpassa ett paket efter vår dag?',
    answer:
      'Ja. De tre paketen på hemsidan fungerar som grund, men det går bra att ändra upplägg, lägga till tid eller justera innehållet efter era behov.',
  },
  {
    question: 'Hur många bilder får vi från vårt bröllop?',
    answer:
      'Det beror på vilket upplägg ni väljer, men i grundpaketet ingår cirka 50 redigerade bilder.',
  },
  {
    question: 'Hur lång är leveranstiden för bröllopsbilder?',
    answer:
      'Leveranstiden är vanligtvis 1 till 2 veckor, beroende på hur mycket jag har att göra under perioden.',
  },
  {
    question: 'Hur långt i förväg bör vi boka?',
    answer:
      'Jag rekommenderar att ni hör av er minst 2 veckor i förväg, gärna tidigare om ni vill säkra datum och ha tid för planering.',
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
    src: ImageAsset
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
    url: 'https://www.svendsenphotography.com/weddings/',
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
        url="https://www.svendsenphotography.com/weddings/"
        image={absoluteLogoUrl}
        jsonLd={weddingsJsonLd}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-20 text-textPrimary sm:px-4 md:px-5 lg:px-6">
        <header className="mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:rounded-[3rem]">
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

          <div className="rounded-[2rem] border border-black/5 bg-[#fcfaf7] p-5 shadow-[0_24px_60px_-36px_rgba(31,41,55,0.24)] md:p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-textSecondary">
              Passar för
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {weddingIncludes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm font-medium leading-relaxed text-textPrimary shadow-[0_10px_24px_-20px_rgba(31,41,55,0.2)]"
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
            className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 rounded-[2.25rem] bg-gray-50 px-4 py-4 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.14)] md:px-5 md:py-5 lg:grid-cols-[1.2fr_0.8fr] lg:rounded-[3rem]"
          >
            <figure className="group relative overflow-hidden rounded-[2rem]">
              <ResponsiveImage
                image={featuredImages[0]}
                alt="Utvald bröllopsbild"
                sizes="(min-width: 1024px) 670px, 100vw"
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
                  key={getImageSrc(src)}
                  className="group relative overflow-hidden rounded-[2rem]"
                >
                  <ResponsiveImage
                    image={src}
                    alt={`Utvald bröllopsbild ${index + 2}`}
                    sizes="(min-width: 1024px) 430px, 100vw"
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

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:rounded-[3rem]">
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
                className="bg-white p-5"
                titleClassName="mb-2 text-lg"
                descriptionClassName="text-sm"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:rounded-[3rem]">
          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.2)] md:p-8">
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
              className="bg-white p-6"
            />
            <InfoCard
              title="Riktigt exempel"
              description="Se ett bröllop från Kungälv där promenaden blev en viktig del av bildberättelsen."
              className="bg-white p-6"
            />
          </div>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
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
                className="bg-white p-6"
                titleClassName="mb-2 text-xl"
                descriptionClassName="text-sm leading-relaxed"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:rounded-[3rem]">
          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.2)] md:p-8">
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

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.2)] md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-textPrimary">
              Vanliga frågor om bröllopsfotografering
            </h2>
            <div className="space-y-4">
              {weddingFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-black/6 bg-[#fcfaf7] px-4 py-4"
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
          className="mx-auto grid max-w-6xl grid-cols-1 gap-4 rounded-[2.25rem] bg-gray-50 px-4 py-4 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.14)] sm:grid-cols-2 md:grid-cols-3 md:px-5 md:py-5 lg:grid-cols-4 lg:rounded-[3rem]"
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
          className="mt-14 rounded-[2.25rem] bg-white/82 lg:rounded-[3rem]"
          title="Vill ni boka bröllopsfotografering?"
          description="Hör av er och berätta lite om er dag, ert upplägg och vad ni vill ha hjälp med, så återkommer jag med ett förslag som passar er och den känsla ni vill bära med er från dagen."
          actions={[
            { to: '/contact/', label: 'Skicka förfrågan' },
            {
              to: '/guider/brollopsplanerare/',
              label: 'Planera bildlistan',
              variant: 'outline',
            },
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
