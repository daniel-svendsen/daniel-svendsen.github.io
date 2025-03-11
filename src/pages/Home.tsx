import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import { homeCards } from '../data/cards'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import HeroSection from '../components/HeroSection'
import SectionWrapper from '../components/SectionWrapper'
import forprosVideo from '../assets/movies/forpros1.mp4'

const Carousel = lazy(() => import('../components/Carousel'))

export default function Home() {
  const navigate = useNavigate()
  const [isCarouselVisible, setIsCarouselVisible] = useState(false)
  const carouselRef = useRef(null)

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        if (!isCarouselVisible) setIsCarouselVisible(true)
      }, 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isCarouselVisible])

  useEffect(() => {
    import('../pages/Services')
  }, [])

  const handleNavigate = () => {
    navigate('/services')
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Fotograf i Kungälv & Göteborg - Svendsén Photography</title>
        <meta
          name="description"
          content="Svendsén Photography erbjuder professionell fotografering inom bröllop, porträtt, bilfotografering och företag i Kungälv och Göteborg. Läs mer: https://www.svendsenphotography.com"
        />
        <meta
          name="keywords"
          content="fotograf kungälv, fotograf göteborg, bröllopsfotograf, porträttfotograf, bilfotograf, företagsfotograf, filmning"
        />
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      <main className="p-6">
        <HeroSection />
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 font-poiret font-thin">
            Välkommen till Svendsén Photography!
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 font-poiret tracking-wider">
            Jag är en fotograf baserad i Kungälv och Göteborg, specialiserad på
            bröllops-, porträtt- och företagsfotografering.
          </p>
        </header>
        <SectionWrapper title="Tjänster">
          <div className="grid grid-cols-1 gap-6">
            {homeCards.map((card, index) => (
              <Card
                key={card.id || index}
                {...card}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper
          title="Exempelfilm för företaget For Pros"
          className="bg-gray-100"
        >
          <div className="flex justify-center">
            <video
              controls
              preload="none"
              poster="/path/to/poster.jpg"
              className="w-full max-w-4xl"
            >
              <source src={forprosVideo} type="video/mp4" />
              Din webbläsare stödjer inte videoformatet.
            </video>
          </div>
        </SectionWrapper>

        <SectionWrapper title="Galleri" className="bg-gray-100">
          <div ref={carouselRef}>
            <Suspense fallback={<div className="h-48 bg-gray-200" />}>
              {isCarouselVisible && <Carousel />}
            </Suspense>
          </div>
        </SectionWrapper>
      </main>
    </HelmetProvider>
  )
}