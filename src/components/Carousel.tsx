import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useImportedImages } from '../hooks/useImportedImages'
import { useShuffledImages } from '../hooks/useShuffleImages'

interface CarouselProps {
  interval?: number
  pauseDuration?: number
}

const carouselImageFolders = ['carousel']

export default function Carousel({
  interval = 3000,
  pauseDuration = 5000,
}: CarouselProps) {
  const imagesData = useImportedImages(carouselImageFolders)

  const images = useMemo(() => {
    return imagesData.carousel || []
  }, [imagesData.carousel])

  const shuffledImages = useShuffledImages(images)

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (shuffledImages.length === 0 || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length)
    }, interval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [shuffledImages.length, interval, isPaused])

  const handleUserInteraction = (newIndex: number) => {
    setIsPaused(true)
    setCurrentIndex(newIndex)
    setTimeout(() => setIsPaused(false), pauseDuration)
  }

  if (shuffledImages.length === 0) return null

  return (
    <section
      className="relative overflow-hidden rounded-lg w-full flex-1"
      aria-label="Bildkarusell"
    >
      {shuffledImages.map((image, index) => (
        <figure
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Bild ${index + 1} av ${shuffledImages.length}`}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </figure>
      ))}

      <button
        onClick={() =>
          handleUserInteraction(
            (currentIndex - 1 + shuffledImages.length) % shuffledImages.length,
          )
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        aria-label="Föregående bild"
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>

      <button
        onClick={() =>
          handleUserInteraction((currentIndex + 1) % shuffledImages.length)
        }
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
        aria-label="Nästa bild"
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>
    </section>
  )
}