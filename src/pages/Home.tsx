import Card from '../components/Card'
import { homeCards } from '../data/cards'
import { HelmetProvider } from 'react-helmet-async'
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import HeroSection from '../components/HeroSection'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import forprosVideo from '../assets/movies/forpros1.mp4'
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
            observer.unobserve(entry.target)
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

      <HeroSection />

      <Section roundedBottom="10xl" bgColor="lightGray">
        <SectionContent className="text-center">
          <h1 className="text-5xl font-bold mb-8 font-poiret tracking-wider">
            Välkommen till Svendsén Photography!
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed font-poiret tracking-wider max-w-3xl mx-auto">
            Jag är en fotograf baserad i Kungälv och Göteborg, specialiserad på
            bröllops-, porträtt- och företagsfotografering samt webbtjänster.
          </p>
        </SectionContent>
      </Section>

      {/* Tjänster Section */}
      <Section roundedBottom="10xl" bgColor="offWhite">
        <SectionContent heading="Tjänster">
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {homeCards.map((card, index) => (
              <Card
                key={card.id || index}
                {...card}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </SectionContent>
      </Section>

      {/* Exempelfilm Section */}
      <Section rounded="10xl" bgColor="lightGray">
        <SectionContent heading="Exempelfilm för företaget For Pros">
          <div className="flex justify-center aspect-video bg-muted rounded-lg overflow-hidden shadow-md max-w-4xl mx-auto">
            <video
              controls
              preload="metadata"
              poster="/path/to/poster-forpros.jpg"
              className="w-full h-full"
            >
              <source src={forprosVideo} type="video/mp4" />
              Din webbläsare stödjer inte videoformatet.
            </video>
          </div>
        </SectionContent>
      </Section>

      {/* Galleri Section */}
      <Section bgColor="offWhite" id="gallery">
        <SectionContent heading="Galleri">
          <div ref={carouselRef} className="min-h-[300px]">
            <Suspense
              fallback={
                <div className="h-72 w-full max-w-4xl mx-auto bg-muted rounded-lg animate-pulse" />
              }
            >
              {isCarouselVisible ? (
                <Carousel imageGroupName="carousel" />
              ) : (
                <div className="h-72 w-full max-w-4xl mx-auto bg-muted rounded-lg animate-pulse" />
              )}
            </Suspense>
          </div>
        </SectionContent>
      </Section>
    </HelmetProvider>
  )
}