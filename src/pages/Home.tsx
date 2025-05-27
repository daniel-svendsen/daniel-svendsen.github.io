import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import HomeCard from '@/components/HomeCard'
import { homeCards } from '../data/cards'
import HeroSection from '../components/HeroSection'
import forprosVideo from '@/assets/movies/forpros1.mp4'
import forprosImg from '@/assets/movies/img.png'
import SEO from '@/components/SEO'

const Carousel = lazy(() => import('../components/Carousel'))

export default function Home() {
  const [isCarouselVisible, setIsCarouselVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

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
  }

  return (
    <HelmetProvider>
      <SEO
        title="Fotograf i Kungälv & Göteborg - Svendsén Photography"
        description="Svendsén Photography erbjuder professionell fotografering inom bröllop, porträtt, bilfotografering och företag i Kungälv och Göteborg. Boka din fotografering idag!"
        url="https://www.svendsenphotography.com"
        keywords="fotograf kungälv, fotograf göteborg, bröllopsfotograf, porträttfotograf, bilfotograf, företagsfotograf, filmning, webbutveckling"
        jsonLd={homeJsonLd}
      />
      <div className="bg-gray-50 dark:bg-gray-900">
        {' '}
        <HeroSection />
        <Section
          roundedBottom="10xl"
          bgColor="offWhite"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poiret tracking-wider text-textPrimary dark:text-white">
              Välkommen!
            </h2>
            <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed font-poiret tracking-wider max-w-3xl mx-auto">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
              {homeCards.map((card) => (
                <HomeCard key={card.title} {...card} />
              ))}
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
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
              <video
                controls
                preload="metadata"
                poster={forprosImg}
                className="w-full h-full"
              >
                <source src={forprosVideo} type="video/mp4" />
                Din webbläsare stödjer inte videoformatet.
              </video>
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
              className="min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
            >
              <Suspense
                fallback={
                  <div className="h-72 sm:h-96 md:h-[500px] w-full max-w-4xl mx-auto bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
                }
              >
                {isCarouselVisible ? (
                  <Carousel imageGroupName="carousel" />
                ) : (
                  <div className="h-72 sm:h-96 md:h-[500px] w-full max-w-4xl mx-auto bg-gray-200 dark:bg-gray-700 rounded-2xl animate-pulse" />
                )}
              </Suspense>
            </div>
          </SectionContent>
        </Section>
      </div>
    </HelmetProvider>
  )
}