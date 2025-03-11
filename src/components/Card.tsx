import React from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
// 1) Importera motion från framer-motion
import { motion } from 'framer-motion'

interface CardProps {
  image?: string
  imageLink?: string
  title: string
  description: string
  price?: string
  buttonText?: string
  buttonLink?: string
  onClick?: () => void
  icon?: LucideIcon
  reverse?: boolean
}

export default function Card({
  image,
  imageLink,
  title,
  description,
  price,
  buttonText,
  buttonLink,
  onClick,
  icon: IconComponent,
  reverse = false,
}: CardProps) {
  return (
    // 2) Byt <article> till <motion.article> och lägg på animeringsprops
    <motion.article
      onClick={onClick}
      className={`
        flex flex-col lg:flex-row
        ${reverse ? 'lg:flex-row-reverse' : ''}
        border border-gray-300 rounded-lg bg-transparent
      `}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Bilddel med 50% av skärmhöjden */}
      {image && (
        <figure
          className={`
            w-full lg:w-1/3
            h-[50vh] overflow-hidden rounded-lg
            ${reverse ? 'lg:ml-4' : 'lg:mr-4'}
            mb-4 lg:mb-0
          `}
        >
          {imageLink ? (
            <Link to={imageLink} aria-label={`View gallery for ${title}`}>
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 cursor-pointer"
                loading="lazy"
              />
            </Link>
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500"
              loading="lazy"
            />
          )}
        </figure>
      )}

      {/* Textdel */}
      <div
        className="
          flex flex-col items-center justify-center p-4
          w-full lg:w-2/3 text-center
        "
      >
        {IconComponent && (
          <IconComponent size={24} className="text-gray-500 mb-2" />
        )}
        <h2 className="text-lg font-poiret font-bold tracking-wider mb-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 whitespace-pre-line font-poiret">
          {description}
        </p>
        {price && <p className="text-lg font-bold mt-2">{price}</p>}

        {buttonText && buttonLink && (
          <Link
            to={buttonLink}
            className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-md shadow transition"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </motion.article>
  )
}