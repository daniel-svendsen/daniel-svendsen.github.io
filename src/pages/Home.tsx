import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Camera, HeartHandshake, Images, MapPin } from 'lucide-react'

import { LinkButton } from '@/components/Button'
import {
  EditorialIntro,
  EditorialSection,
  TextArrowLink,
} from '@/components/Editorial'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import HeroSection from '../components/HeroSection'
import forprosImg from '@/assets/movies/img-optimized.jpg?responsive'
import forprosVideo from '@/assets/movies/forpros1.mp4'
import { homeCards } from '../data/cards'
import { getPageOgImage } from '@/config/pageSeo'
import { businessJsonLd, SITE_URL } from '@/config/seo'
import { getImageSrc } from '@/utils/responsiveImages'

const Carousel = lazy(() => import('../components/Carousel'))

const whyChooseMe = [
  {
    title: 'Naturlig bildstil',
    description:
      'Bilderna ska kännas levande, tidlösa och personliga snarare än stela eller överarbetade.',
    icon: Camera,
  },
  {
    title: 'Trygg upplevelse',
    description:
      'Du får ett lugnt upplägg med tydlig riktning, även om du inte är van att stå framför kameran.',
    icon: HeartHandshake,
  },
  {
    title: 'Genomtänkt leverans',
    description:
      'Urval, redigering och leverans hålls samman så att bilderna känns användbara från första dagen.',
    icon: Images,
  },
]

const processSteps = [
  {
    title: 'Förfrågan',
    description:
      'Du berättar kort vad du planerar, vilken typ av bilder du behöver och om det finns datum eller plats att ta hänsyn till.',
  },
  {
    title: 'Planering',
    description:
      'Vi landar upplägg, känsla och praktiska detaljer så att fotograferingen får en tydlig riktning innan vi ses.',
  },
  {
    title: 'Fotografering',
    description:
      'Under fotograferingen guidar jag lugnt och enkelt, med plats för naturliga ögonblick och en avslappnad stämning.',
  },
  {
    title: 'Leverans',
    description:
      'Du får ett genomarbetat urval levererat digitalt, redigerat i en stil som känns tidlös och användbar.',
  },
]

export default function Home() {
  const [isCarouselVisible, setIsCarouselVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const ogImage = getPageOgImage('home')

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            setIsCarouselVisible(true)
            if (entry.target) {
              observer.unobserve(entry.target)
            }
          }, 200)
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      },
    )

    const currentRef = carouselRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <SEO
        title="Fotograf i Kungälv, Stenungsund & Göteborg - Svendsén Photography"
        description="Fotograf för bröllop, porträtt, familj, företag, event och verksamheter i Kungälv, Stenungsund och Göteborg. Boka din fotografering idag!"
        url={`${SITE_URL}/`}
        image={ogImage.src}
        imageAlt={ogImage.alt}
        keywords="fotograf kungälv, fotograf stenungsund, fotograf göteborg, bröllopsfotograf, porträttfotograf, familjefotograf, familjefoto, företagsfotograf, eventfotograf"
        jsonLd={businessJsonLd}
        breadcrumbs={[{ name: 'Hem', url: `${SITE_URL}/` }]}
      />
      <div className="bg-[#f5f5f2] text-textPrimary">
        <HeroSection />

        <EditorialSection compact>
          <EditorialIntro
            align="center"
            eyebrow="Svendsén Photography"
            title="Bilder som känns enkla att återvända till."
            description="Jag utgår från Kungälv och fotograferar gärna runt Göteborgsområdet, Stenungsund och resten av västkusten."
          />
        </EditorialSection>

        <EditorialSection tone="white">
          <EditorialIntro
            className="mb-12 md:mb-16"
            eyebrow="Tjänster"
            title="Fotografi för ögonblick, människor och varumärken."
            action={
              <TextArrowLink to="/services/">
                Se alla tjänster
              </TextArrowLink>
            }
          />

          <div className="space-y-6 md:space-y-8">
            {homeCards.map((card, index) => (
              <article
                key={card.title}
                className="grid overflow-hidden rounded-[1.75rem] border border-black/6 bg-[#f7f7f4] md:grid-cols-2"
              >
                <div
                  className={
                    index % 2 === 1 ? 'md:order-2' : 'md:order-1'
                  }
                >
                  <ResponsiveImage
                    image={card.image}
                    alt={card.title}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="aspect-[4/3] h-full w-full object-cover md:aspect-auto md:min-h-[420px]"
                  />
                </div>
                <div
                  className={
                    index % 2 === 1
                      ? 'flex flex-col justify-center p-7 md:order-1 md:p-12 lg:p-16'
                      : 'flex flex-col justify-center p-7 md:order-2 md:p-12 lg:p-16'
                  }
                >
                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-textSecondary">
                    0{index + 1}
                  </p>
                  <h3 className="mb-5 text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
                    {card.title}
                  </h3>
                  <p className="mb-8 max-w-xl text-lg leading-8 text-textPrimary/68">
                    {card.description}
                  </p>
                  <TextArrowLink to={card.buttonLink}>
                    {card.buttonText}
                  </TextArrowLink>
                </div>
              </article>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection>
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <EditorialIntro
              className="max-w-xl"
              eyebrow="Upplevelsen"
              title="Mindre poserande. Mer närvaro."
              description="Målet är att fotograferingen ska kännas trygg, enkel och tydligt planerad. Då blir bilderna också mer avslappnade."
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {whyChooseMe.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-black/6 bg-white p-6"
                  >
                    <Icon className="mb-8 h-6 w-6 text-textPrimary" />
                    <h3 className="mb-3 text-xl font-semibold text-textPrimary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-textPrimary/64">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </EditorialSection>

        <EditorialSection tone="white">
          <EditorialIntro
            align="center"
            className="mb-12"
            eyebrow="Process"
            title="Ett tydligt upplägg från första kontakt till leverans."
          />
          <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-black/6 bg-black/6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="bg-white p-7 md:p-8">
                <p className="mb-12 text-sm font-semibold text-textSecondary">
                  0{index + 1}
                </p>
                <h3 className="mb-4 text-xl font-semibold text-textPrimary">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-textPrimary/64">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <EditorialIntro
              eyebrow="Film"
              title="Rörligt material med samma lugna känsla."
              description="Exempelfilm för For Pros, med fokus på miljö, rytm och en presentation som känns användbar för verksamheten."
            />
            <div className="overflow-hidden rounded-[1.75rem] bg-black shadow-[0_34px_90px_-58px_rgba(31,41,55,0.7)]">
              <video
                controls
                preload="metadata"
                poster={getImageSrc(forprosImg)}
                className="aspect-video h-full w-full"
              >
                <source src={forprosVideo} type="video/mp4" />
                Din webbläsare stödjer inte videoformatet.
              </video>
            </div>
          </div>
        </EditorialSection>

        <EditorialSection tone="white">
          <EditorialIntro
            className="mb-10"
            eyebrow="Galleri"
            title="Ett urval av ljus, människor och detaljer."
            action={
              <div className="inline-flex items-center gap-2 text-base font-semibold text-textPrimary/68">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Göteborg & Kungälv
              </div>
            }
          />
          <div
            ref={carouselRef}
            className="flex min-h-[360px] w-full flex-col overflow-hidden rounded-[1.75rem] bg-[#f5f5f2] md:min-h-[620px]"
          >
            <Suspense
              fallback={
                <div className="h-full w-full animate-pulse bg-black/5" />
              }
            >
              {isCarouselVisible ? (
                <Carousel interval={4200} />
              ) : (
                <div className="h-full w-full animate-pulse bg-black/5" />
              )}
            </Suspense>
          </div>
        </EditorialSection>

        <EditorialSection>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
              Nästa steg
            </p>
            <h2 className="mb-6 text-4xl font-semibold tracking-tight text-textPrimary md:text-5xl">
              Berätta vad du planerar.
            </h2>
            <p className="mx-auto mb-9 max-w-2xl text-lg leading-8 text-textPrimary/68">
              Skicka en kort förfrågan, så återkommer jag med ett upplägg som
              passar fotograferingen, platsen och känslan du vill åt.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                to="/contact/"
                variant="default"
                size="lg"
                subVariant="rounded"
                className="px-8"
              >
                Skicka förfrågan
              </LinkButton>
              <LinkButton
                to="/services/"
                variant="link"
                size="lg"
                className="px-0 text-textPrimary no-underline hover:text-textPrimary/70"
              >
                Se tjänster
              </LinkButton>
            </div>
          </div>
        </EditorialSection>
      </div>
    </>
  )
}
