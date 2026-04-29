import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { Button } from '@/components/Button'

import defaultLeftImage from '../assets/herosection/portraits-23.jpg'
import defaultRightImage from '../assets/herosection/portraits-3.jpg'
import { useShuffledImages } from '@/hooks/useShuffleImages'

const heroImageModules = import.meta.glob(
  '/src/assets/herosection/*.{png,jpg,jpeg,svg,webp}',
  { eager: true, query: '?url', import: 'default' },
)

const loadedImagesFromModules: string[] = Object.values(heroImageModules)

const allHeroImageUrls: string[] =
  loadedImagesFromModules.length === 0
    ? [defaultLeftImage, defaultRightImage]
    : loadedImagesFromModules.length === 1
      ? (() => {
          const initialFirstImage = loadedImagesFromModules[0]
          const secondPushedImage =
            initialFirstImage === defaultLeftImage
              ? defaultRightImage
              : defaultLeftImage
          const imagesArr = [initialFirstImage, secondPushedImage]
          return imagesArr[0] === imagesArr[1]
            ? [imagesArr[0], defaultRightImage]
            : imagesArr
        })()
      : loadedImagesFromModules

const MotionButton = motion(Button)

export default function HeroSection() {
  const navigate = useNavigate()

  const imagePool = useMemo(() => {
    return allHeroImageUrls.length >= 2
      ? allHeroImageUrls
      : allHeroImageUrls.length === 1 && allHeroImageUrls[0]
        ? allHeroImageUrls[0] === defaultLeftImage
          ? [allHeroImageUrls[0], defaultRightImage]
          : [allHeroImageUrls[0], defaultLeftImage]
        : [defaultLeftImage, defaultRightImage]
  }, [])

  const shuffledImages = useShuffledImages(imagePool)

  const imageForLeft =
    shuffledImages.length > 0 ? shuffledImages[0] : defaultLeftImage

  const initialImageForRight =
    shuffledImages.length > 1 ? shuffledImages[1] : defaultRightImage

  const imageForRight =
    imagePool.length > 1 && imageForLeft === initialImageForRight
      ? (() => {
          const distinctInPool = Array.from(new Set(imagePool))
          const candidate = distinctInPool.find((img) => img !== imageForLeft)
          return candidate
            ? candidate
            : imagePool[0] && imagePool[1]
              ? imagePool[0] === imageForLeft
                ? imagePool[1]
                : imagePool[0]
              : initialImageForRight
        })()
      : imagePool.length === 1 && imagePool[0]
        ? imagePool[0]
        : initialImageForRight

  return (
    <>
      <Helmet>
        <title>
          Svendsén Photography - Professionell Fotograf i Göteborg & Kungälv
        </title>
        <meta
          name="description"
          content="Välkommen till Svendsén Photography! Din kreativa partner för bröllop, porträtt, företag och webb. Stilren och professionell fotografering."
        />
      </Helmet>

      <Section
        roundedBottom="10xl"
        bgColor="beige"
        className="flex h-[98vh] w-full flex-col items-center justify-center overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-10 md:py-0"
        aria-labelledby="hero-heading"
      >
        <SectionContent className="w-full">
          <div className="relative grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-[30%_40%_30%] md:gap-8 md:py-0 lg:gap-12">
            <motion.div
              className="hidden justify-center md:order-1 md:flex md:justify-start"
              initial={{ opacity: 0, x: -80, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: 'spring',
                stiffness: 50,
              }}
            >
              <img
                src={imageForLeft}
                alt="Stämningsfull porträttfotografering"
                className="h-auto max-h-[24rem] w-full rounded-2xl object-cover transition-transform duration-400 ease-out hover:scale-105 hover:rotate-0 md:max-w-full"
              />
            </motion.div>

            <motion.div
              className="relative z-10 order-last px-2 text-center md:order-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h1
                id="hero-heading"
                className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Svendsén Photography
              </h1>
              <div className="mb-4 min-h-[35px] text-xl font-semibold text-textPrimary sm:mb-6 sm:min-h-[40px] sm:text-2xl md:text-3xl lg:text-4xl">
                <Typewriter
                  options={{
                    strings: ['Bröllop', 'Porträtt', 'Företag', 'Webbtjänster'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                    delay: 70,
                    wrapperClassName: 'typewriter-wrapper',
                    cursorClassName: 'typewriter-cursor-primary',
                  }}
                />
              </div>
              <p className="text-md mb-8 opacity-80 sm:mb-10 sm:text-lg md:text-xl">
                Professionell fotografering i Göteborg & Kungälv
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <MotionButton
                  variant="default"
                  size="md"
                  subVariant="rounded"
                  className="px-6 text-sm font-semibold sm:px-7 sm:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                >
                  Kontakta mig
                </MotionButton>
                <MotionButton
                  variant="outline"
                  size="md"
                  subVariant="rounded"
                  className="px-6 text-sm font-semibold sm:px-7 sm:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/services')}
                >
                  Se tjänster
                </MotionButton>
              </div>
            </motion.div>

            <motion.div
              className="order-first flex items-center justify-center pt-4 sm:pt-0 md:order-3 md:justify-end md:pt-0"
              initial={{ opacity: 0, x: 80, rotate: 10 }}
              animate={{ opacity: 1, x: 0, rotate: 3 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                type: 'spring',
                stiffness: 50,
              }}
            >
              <img
                src={imageForRight}
                alt="Detaljbild från företagsfotografering"
                className="h-[30vh] w-full max-w-[18rem] rounded-2xl object-cover transition-transform duration-400 ease-out hover:scale-105 sm:h-[35vh] sm:max-w-[14rem] md:h-auto md:max-h-[18rem] md:max-w-full md:rotate-3 md:object-cover md:hover:rotate-0"
              />
            </motion.div>
          </div>
        </SectionContent>
      </Section>
    </>
  )
}
