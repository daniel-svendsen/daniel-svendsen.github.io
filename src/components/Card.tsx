import React from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

interface CardProps {
  image?: string;
  imageLink?: string;
  title: string;
  description: string;
  price?: string;
  buttonText?: string;
  buttonLink?: string;
  onClick?: () => void;
  icon?: LucideIcon;
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
                             }: CardProps) {
  return (
    <article
      className='flex flex-col border rounded-lg shadow-md p-4 h-full'
      onClick={onClick}
    >
      {image && (
        <figure className='w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg mb-4'>
          {imageLink ? (
            <Link to={imageLink} aria-label={`View gallery for ${title}`}>
              <img
                src={image}
                alt={title}
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer'
                loading='lazy'
              />
            </Link>
          ) : (
            <img
              src={image}
              alt={title}
              className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
              loading='lazy'
            />
          )}
        </figure>
      )}

      <div className='flex-grow flex flex-col'>
        <div className='flex items-center gap-2'>
          {/* Rendera ikon om den finns */}
          {IconComponent && <IconComponent size={24} className='text-gray-500' />}
          <h2 className='text-lg font-bold'>{title}</h2>
        </div>
        <p className='text-sm text-gray-600 mt-2 whitespace-pre-line flex-grow'>
          {description}
        </p>
        {price && <p className='text-lg font-bold mt-6'>{price}</p>}
      </div>

      {buttonText && buttonLink && (
        <Link
          to={buttonLink}
          className='mt-4 px-6 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-700 transition'
        >
          {buttonText}
        </Link>
      )}
    </article>
  )
}
