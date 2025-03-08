import { useEffect, useRef, useState } from 'react'

function shuffleArray<T>(array: T[]): T[] {
  const arr = array.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function useShuffledImages(images: string[]): string[] {
  const [shuffled, setShuffled] = useState<string[]>([])
  const hasInitialized = useRef(false)

  useEffect(() => {
    if (!hasInitialized.current && images?.length > 0) {
      setShuffled(shuffleArray(images))
      hasInitialized.current = true
    }
  }, [images])

  return shuffled
}