import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useScroll, useTransform } from 'framer-motion'
import Typewriter from 'typewriter-effect'

import carouselImage from '../assets/herosection/carousel-3.jpg'
import weddingImage from '../assets/herosection/wedding.jpg'
import portraitImage from '../assets/herosection/portrait2.jpg'
import companyImage from '../assets/herosection/company.jpg'
import webdevImage from '../assets/webdev.png'

export default function HeroSection() {
  const navigate = useNavigate()
  const heroRef = useRef(null)

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  const services = [
    {
      title: 'Bröllop',
      link: '/services',
      img: weddingImage,
    },
    {
      title: 'Porträtt',
      link: '/services',
      img: portraitImage,
    },
    {
      title: 'Företag',
      link: '/services',
      img: companyImage,
    },
    {
      title: 'Webb',
      link: '/services',
      img: webdevImage,
    },
  ]

  return (
    <>
      <Helmet>
        <title>Svendsén Photography - Professionell Fotograf</title>
        <meta
          name="description"
          content="Välkommen till Svendsén Photography! Professionell fotograf för bröllop, porträtt och företagsbilder."
        />
      </Helmet>

      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{
            backgroundImage: `url(${carouselImage})`,
            y,
          }}
          className="absolute inset-0 bg-cover bg-center brightness-50"
        />

        <div className="relative text-center text-white p-8 rounded-md z-10">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-wide mb-4">
            Svendsén Photography
            <Typewriter
              options={{
                strings: ['Bröllop', 'Porträtt', 'Företag', 'Webbtjänster'],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
              }}
            />
          </h1>
          <p className="text-lg sm:text-xl mb-6 opacity-90">
            Professionell fotografering i Göteborg & Kungälv
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-primary/80 transition"
            >
              Kontakta mig
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('/services')}
              className="px-6 py-3 border-2 border-white text-white rounded-md shadow-md hover:bg-white hover:text-black transition"
            >
              Se tjänster
            </motion.button>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 p-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => navigate(service.link)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity group-hover:opacity-70" />
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="p-2 bg-white bg-opacity-80 rounded-md inline-block max-w-[80%]">
                  <p className="text-black text-center font-semibold break-words">
                    {service.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}