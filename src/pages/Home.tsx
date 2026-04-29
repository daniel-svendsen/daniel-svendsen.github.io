import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import HomeCard from '@/components/HomeCard'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import HeroSection from '../components/HeroSection'
import forprosImg from '@/assets/movies/img-optimized.jpg'
import forprosVideo from '@/assets/movies/forpros1.mp4'
import { homeCards } from '../data/cards'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'
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

  useEffect(() => {
    import('../pages/Services').catch((err) =>
      console.error('Failed to preload Services:', err),
    )
  }, [])

  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Svendsén Photography',
    description: 'Fotograf i Kungälv & Göteborg',
    image: 'https://www.svendsenphotography.com/logo.jpg',
    url: 'https://www.svendsenphotography.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kungälv',
      addressCountry: 'SE',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Kungälv' },
      { '@type': 'AdministrativeArea', name: 'Göteborg' },
    ],
  }

  return (
    <HelmetProvider>
      <SEO
        title="Fotograf i Kungälv & Göteborg - Svendsén Photography"
        description="Svendsén Photography erbjuder professionell fotografering inom bröllop, porträtt, bilfotografering och företag i Kungälv och Göteborg. Boka din fotografering idag!"
        url="https://www.svendsenphotography.com"
        image={absoluteLogoUrl}
        keywords="fotograf kungälv, fotograf göteborg, bröllopsfotograf, porträttfotograf, bilfotograf, företagsfotograf, filmning, webbutveckling"
        jsonLd={homeJsonLd}
      />
      <div className="bg-gray-50 dark:bg-gray-900">
        <HeroSection />

        <Section bgColor="offWhite">
          <SectionContent className="text-center">
            <h2 className="mb-6 font-poiret text-4xl font-bold tracking-wider text-textPrimary dark:text-white md:text-5xl">
              Välkommen!
            </h2>
            <p className="mx-auto max-w-3xl font-poiret text-lg leading-relaxed tracking-wider text-muted-foreground dark:text-gray-300">
              Jag är en fotograf baserad i Kungälv och Göteborg, specialiserad
              på bröllops-, porträtt- och företagsfotografering samt
              webbtjänster.
            </p>
          </SectionContent>
        </Section>

        <Section
          roundedBottom="9xl"
          roundedTop="9xl"
          bgColor="beige"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Mina Tjänster">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-2">
              {homeCards.map((card) => (
                <HomeCard key={card.title} {...card} />
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section
          roundedBottom="9xl"
          roundedTop="9xl"
          bgColor="offWhite"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Varför kunder väljer mig">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {whyChooseMe.map((item) => {
                const Icon = item.icon

                return (
                  <InfoCard
                    key={item.title}
                    centered
                    className="dark:bg-gray-800/90"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(238,235,235,0.7)]">
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
          roundedBottom="9xl"
          roundedTop="9xl"
          bgColor="beige"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Så går det till">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {processSteps.map((step) => {
                const Icon = step.icon

                return (
                  <InfoCard
                    key={step.title}
                    centered
                    className="dark:bg-gray-800/90"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white">
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
          roundedBottom="10xl"
          roundedTop="10xl"
          bgColor="offWhite"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Exempelfilm för For Pros">
            <div className="mx-auto aspect-video max-w-4xl overflow-hidden rounded-2xl bg-gray-200 shadow-xl dark:bg-gray-700">
              <video
                controls
                preload="metadata"
                poster={forprosImg}
                className="h-full w-full"
              >
                <source src={forprosVideo} type="video/mp4" />
                Din webbläsare stödjer inte videoformatet.
              </video>
            </div>
          </SectionContent>
        </Section>

        <Section
          roundedBottom="9xl"
          roundedTop="9xl"
          bgColor="lightGray"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Fotograf i Göteborg och Kungälv">
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
          roundedTop="9xl"
          bgColor="beige"
          id="gallery"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Galleri Highlights">
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
          className="py-16 md:py-24 lg:py-28"
        >
          <SectionContent>
            <CTASection
              title="Redo att boka eller bara ställa en fråga?"
              description="Berätta vad du har i åtanke, så återkommer jag med ett upplägg som passar dig, ditt tillfälle eller ditt företag."
              actions={[
                { to: '/contact', label: 'Skicka förfrågan' },
                {
                  to: '/services',
                  label: 'Se alla tjänster',
                  variant: 'outline',
                },
              ]}
            />
          </SectionContent>
        </Section>
      </div>
    </HelmetProvider>
  )
}
