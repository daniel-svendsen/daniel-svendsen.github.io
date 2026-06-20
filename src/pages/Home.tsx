import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import HomeCard from '@/components/HomeCard'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import HeroSection from '../components/HeroSection'
import forprosImg from '@/assets/movies/img-optimized.jpg?responsive'
import forprosVideo from '@/assets/movies/forpros1.mp4'
import { homeCards } from '../data/cards'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'
import { businessJsonLd, SITE_URL } from '@/config/seo'
import { getImageSrc } from '@/utils/responsiveImages'
import {
  Camera,
  HeartHandshake,
  Images,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from 'lucide-react'

const Carousel = lazy(() => import('../components/Carousel'))

const whyChooseMe = [
  {
    title: 'Naturlig bildstil',
    description:
      'Jag arbetar för att bilderna ska kännas levande, tidlösa och personliga snarare än stela eller överarbetade.',
    icon: Sparkles,
  },
  {
    title: 'Trygg upplevelse',
    description:
      'Du ska kunna känna dig bekväm framför kameran, även om du inte är van att bli fotograferad.',
    icon: HeartHandshake,
  },
  {
    title: 'Professionell leverans',
    description:
      'Jag lägger stor vikt vid urval, redigering och en leverans som känns genomtänkt från början till slut.',
    icon: Images,
  },
]

const processSteps = [
  {
    title: '1. Förfrågan',
    description:
      'Du hör av dig och berättar vilken typ av fotografering eller innehåll du behöver hjälp med.',
    icon: MessageCircle,
  },
  {
    title: '2. Planering',
    description:
      'Vi går igenom idé, plats, känsla och upplägg så att fotograferingen passar just dig eller ditt företag.',
    icon: MapPin,
  },
  {
    title: '3. Fotografering',
    description:
      'Vi genomför fotograferingen i en lugn och avslappnad miljö med fokus på naturliga bilder och rätt uttryck.',
    icon: Camera,
  },
  {
    title: '4. Leverans',
    description:
      'Du får ett urval redigerade bilder digitalt, färdiga att använda, dela eller spara.',
    icon: Send,
  },
]

export default function Home() {
  const [isCarouselVisible, setIsCarouselVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)

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
        image={absoluteLogoUrl}
        keywords="fotograf kungälv, fotograf stenungsund, fotograf göteborg, bröllopsfotograf, porträttfotograf, familjefotograf, familjefoto, företagsfotograf, verksamhetsfoto, hobbyfoto, filmning, webbutveckling"
        jsonLd={businessJsonLd}
        breadcrumbs={[{ name: 'Hem', url: `${SITE_URL}/` }]}
      />
      <div className="bg-[#f7f5f2] dark:bg-gray-900">
        <HeroSection />

        <Section
          roundedTop="8xl"
          roundedBottom="8xl"
          bgColor="offWhite"
          className="mx-3 overflow-hidden py-10 sm:mx-4 md:mx-5 md:py-14 lg:mx-6"
        >
          <SectionContent className="text-center">
            <h2 className="mb-5 font-poiret text-4xl font-bold tracking-[0.08em] text-textPrimary dark:text-white md:text-5xl">
              Välkommen!
            </h2>
            <p className="mx-auto max-w-2xl font-poiret text-lg leading-relaxed tracking-[0.04em] text-muted-foreground dark:text-gray-300">
              Jag är en fotograf baserad i Kungälv och Göteborg, specialiserad
              på bröllops-, porträtt-, familje- och företagsfotografering samt
              webbtjänster.
            </p>
          </SectionContent>
        </Section>

        <Section
          roundedBottom="10xl"
          roundedTop="10xl"
          bgColor="beige"
          className="mx-3 overflow-hidden py-14 sm:mx-4 md:mx-5 md:py-24 lg:mx-6 lg:py-28"
        >
          <SectionContent>
            <div className="mb-10 max-w-2xl lg:mb-14">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
                  Mina Tjänster
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-2">
              {homeCards.map((card) => (
                <HomeCard key={card.title} {...card} />
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section
          roundedTop="8xl"
          roundedBottom="8xl"
          bgColor="offWhite"
          className="mx-3 overflow-hidden py-12 sm:mx-4 md:mx-5 md:py-16 lg:mx-6 lg:py-20"
        >
          <SectionContent>
            <div className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
                Varför kunder väljer mig
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {whyChooseMe.map((item) => {
                const Icon = item.icon

                return (
                  <InfoCard
                    key={item.title}
                    centered
                    className="border-black/6 bg-white/78 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.18)] dark:bg-gray-800/90"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f2ece8]">
                      <Icon className="h-6 w-6 text-textPrimary" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-textPrimary">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-textSecondary dark:text-gray-300">
                      {item.description}
                    </p>
                  </InfoCard>
                )
              })}
            </div>
          </SectionContent>
        </Section>

        <Section
          roundedBottom="8xl"
          roundedTop="8xl"
          bgColor="beige"
          className="mx-3 overflow-hidden py-14 sm:mx-4 md:mx-5 md:py-20 lg:mx-6 lg:py-24"
        >
          <SectionContent>
            <div className="mb-10 max-w-2xl lg:mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
                  Så går det till
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
              {processSteps.map((step) => {
                const Icon = step.icon

                return (
                  <InfoCard
                    key={step.title}
                    centered
                    className="h-full border-black/6 bg-white/92 dark:bg-gray-800/90"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f8f5f1]">
                      <Icon className="h-6 w-6 text-textPrimary" />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-textPrimary">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-textSecondary dark:text-gray-300">
                      {step.description}
                    </p>
                  </InfoCard>
                )
              })}
            </div>
          </SectionContent>
        </Section>

        <Section
          roundedTop="8xl"
          roundedBottom="8xl"
          bgColor="offWhite"
          className="mx-3 overflow-hidden py-12 sm:mx-4 md:mx-5 md:py-16 lg:mx-6 lg:py-20"
        >
          <SectionContent>
            <div className="mb-8 max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
                Exempelfilm för For Pros
              </h2>
            </div>
            <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/5 bg-white/75 p-4 shadow-[0_24px_60px_-38px_rgba(31,41,55,0.25)] md:p-5">
              <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-gray-200 shadow-xl dark:bg-gray-700">
                <video
                  controls
                  preload="metadata"
                  poster={getImageSrc(forprosImg)}
                  className="h-full w-full"
                >
                  <source src={forprosVideo} type="video/mp4" />
                  Din webbläsare stödjer inte videoformatet.
                </video>
              </div>
            </div>
          </SectionContent>
        </Section>

        <Section
          roundedTop="8xl"
          roundedBottom="8xl"
          bgColor="lightGray"
          className="mx-3 overflow-hidden py-12 sm:mx-4 md:mx-5 md:py-16 lg:mx-6 lg:py-20"
        >
          <SectionContent>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
                Fotograf i Göteborg och Kungälv
              </h2>
            </div>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-5 text-lg leading-relaxed text-textSecondary dark:text-gray-300">
                Jag utgår från Kungälv och arbetar i Göteborg och närliggande
                områden. Jag fotograferar bland annat bröllop, porträtt,
                familjer, företag och event, och hjälper både privatpersoner
                och verksamheter som vill ha bilder med hög kvalitet och tydlig
                känsla.
              </p>
              <p className="text-lg leading-relaxed text-textSecondary dark:text-gray-300">
                För mig handlar det inte bara om att ta fina bilder, utan om att
                skapa något som känns äkta och användbart, oavsett om det ska
                bli ett minne för livet eller visuellt innehåll för ditt
                företag.
              </p>
            </div>
          </SectionContent>
        </Section>

        <Section
          roundedTop="10xl"
          roundedBottom="10xl"
          bgColor="beige"
          id="gallery"
          className="mx-3 overflow-hidden py-14 sm:mx-4 md:mx-5 md:py-22 lg:mx-6 lg:py-28"
        >
          <SectionContent>
            <div className="mb-8 max-w-2xl">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
                  Galleri Highlights
                </h2>
              </div>
            </div>
            <div
              ref={carouselRef}
              className="-mt-3 flex max-h-[80vh] min-h-[300px] w-full flex-col sm:min-h-[400px] md:min-h-[500px]"
            >
              <Suspense
                fallback={
                  <div className="h-full w-full animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700" />
                }
              >
                {isCarouselVisible ? (
                  <Carousel />
                ) : (
                  <div className="h-full w-full animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700" />
                )}
              </Suspense>
            </div>
          </SectionContent>
        </Section>

        <Section
          roundedTop="10xl"
          bgColor="offWhite"
          className="mx-3 overflow-hidden py-16 sm:mx-4 md:mx-5 md:py-24 lg:mx-6 lg:py-32"
        >
          <SectionContent>
            <CTASection
              title="Redo att boka eller bara ställa en fråga?"
              description="Berätta vad du har i åtanke, så återkommer jag med ett upplägg som passar dig, ditt tillfälle eller ditt företag."
              actions={[
                { to: '/contact/', label: 'Skicka förfrågan' },
                {
                  to: '/services/',
                  label: 'Se alla tjänster',
                  variant: 'outline',
                },
              ]}
            />
          </SectionContent>
        </Section>
      </div>
    </>
  )
}
