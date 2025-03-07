import { useEffect, useState } from 'react'

export function useInView(
  ref: React.RefObject<HTMLElement>,
  threshold = 0.5,
  delay = 500,
) {
  const [isInView, setIsInView] = useState(false)
  const [delayedOutOfView, setDelayedOutOfView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          setDelayedOutOfView(false)
        } else {
          setTimeout(() => {
            setDelayedOutOfView(true)
            setIsInView(false)
          }, delay)
        }
      },
      { threshold },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, threshold, delay])

  return { isInView, delayedOutOfView }
}