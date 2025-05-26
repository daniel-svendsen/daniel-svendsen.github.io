import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { Button } from '@/components/Button'

import leftImagePlaceholder from '../assets/herosection/portraits-23.jpg'
import rightImagePlaceholder from '../assets/herosection/portraits-3.jpg'

const MotionButton = motion(Button)

export default function HeroSection() {
  const navigate = useNavigate()

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
        className="h-[100vh] w-full flex flex-col justify-center items-center overflow-hidden py-8 sm:py-10 md:py-0"
        aria-labelledby="hero-heading"
      >
        <SectionContent className="w-full">
          <div className="relative grid grid-cols-1 md:grid-cols-[30%_40%_30%] items-center gap-6 sm:gap-8 md:gap-8 lg:gap-12 md:py-0">
            <motion.div
              className="hidden md:flex md:order-1 justify-center md:justify-start"
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
                src={leftImagePlaceholder}
                alt="Stämningsfull porträttfotografering"
                className="rounded-2xl shadow-xl w-full max-w-[18rem] sm:max-w-xs md:max-w-full h-auto object-cover transform hover:scale-105 hover:rotate-0 transition-transform duration-400 ease-out"
              />
            </motion.div>

            <motion.div
              className="text-center relative z-10 order-last md:order-2 px-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3"
              >
                Svendsén Photography
              </h1>
              <div className="text-textPrimary text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 font-semibold min-h-[35px] sm:min-h-[40px]">
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
              <p className="text-md sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-80">
                Professionell fotografering i Göteborg & Kungälv
              </p>

              <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4">
                <MotionButton
                  variant="default"
                  size="md"
                  subVariant="rounded"
                  className="px-6 sm:px-7 font-semibold text-sm sm:text-base"
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
                  className="px-6 sm:px-7 font-semibold text-sm sm:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/services')}
                >
                  Se tjänster
                </MotionButton>
              </div>
            </motion.div>

            <motion.div
              className="order-first md:order-3 flex justify-center md:justify-end items-center pt-4 sm:pt-0 md:pt-0"
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
                src={rightImagePlaceholder}
                alt="Detaljbild från företagsfotografering"
                className="rounded-2xl shadow-xl w-full max-w-[12rem] sm:max-w-[14rem] md:max-w-full h-auto object-contain md:object-cover opacity-100 transform md:rotate-3 hover:scale-105 md:hover:rotate-0 transition-transform duration-400 ease-out"
              />
            </motion.div>
          </div>
        </SectionContent>
      </Section>
    </>
  )
}