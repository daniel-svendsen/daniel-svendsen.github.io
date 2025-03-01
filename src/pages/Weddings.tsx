import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useImportedImages } from '../hooks/useImportedImages'
import { useShuffledImages } from '../hooks/useShuffleImages'

/**
 * Displays a wedding photo gallery
 */
export default function WeddingGallery() {
  const { weddings: weddingImages } = useImportedImages(['weddings'])

  const shuffledWeddingImages = useShuffledImages(weddingImages || [])

  const [selectedWeddingImage, setSelectedWeddingImage] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    if (selectedWeddingImage) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [selectedWeddingImage])

  return (
    <>
      <Helmet>
        <title>Wedding Photographer in Kungälv & Göteborg</title>
        <meta name='description' content='Book your wedding photography session in Gothenburg & Kungälv.' />
      </Helmet>

      <main className='p-6'>
        <header>
          <h1 className='text-3xl font-bold mb-6'>Wedding Gallery</h1>
        </header>
        <section
          aria-label='Wedding gallery'
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
        >
          {shuffledWeddingImages.map((src, index) => (
            <figure key={index} className='relative'>
              <img
                src={src}
                alt={`Wedding photo ${index + 1}`}
                className='w-full h-full object-cover cursor-pointer'
                onClick={() => setSelectedWeddingImage({ src, alt: `Wedding photo ${index + 1}` })}
                loading='lazy'
              />
            </figure>
          ))}
        </section>

        {selectedWeddingImage && (
          <div
            className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'
            onClick={() => setSelectedWeddingImage(null)}
            aria-modal='true'
            role='dialog'
            aria-label='Enlarged wedding photo'
          >
            <button
              onClick={() => setSelectedWeddingImage(null)}
              className='absolute top-4 right-4 text-white text-3xl focus:outline-none'
              aria-label='Close'
            >
              &times;
            </button>
            <img
              src={selectedWeddingImage.src}
              alt={selectedWeddingImage.alt}
              className='max-w-full max-h-full'
            />
          </div>
        )}
      </main>
    </>
  )
}
