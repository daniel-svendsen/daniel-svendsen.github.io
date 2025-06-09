import { useCallback, useEffect, useState } from 'react'

export function useGalleryNavigation(
  imageCount: number,
  initialIndex: number | null = null,
) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(initialIndex)

  const goToNext = useCallback(() => {
    if (currentIndex === null || currentIndex === imageCount - 1) return
    setCurrentIndex(currentIndex + 1)
  }, [currentIndex, imageCount])

  const goToPrevious = useCallback(() => {
    if (currentIndex === null || currentIndex === 0) return
    setCurrentIndex(currentIndex - 1)
  }, [currentIndex])

  const openModalAtIndex = (index: number) => {
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setCurrentIndex(null)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, goToNext, goToPrevious])

  return { currentIndex, openModalAtIndex, closeModal, goToNext, goToPrevious }
}