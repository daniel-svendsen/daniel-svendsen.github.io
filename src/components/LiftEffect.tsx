// LiftEffect.tsx
import { useEffect, useRef, useState } from 'react'
import { Transition } from '@headlessui/react'

interface LiftEffectProps {
  children: React.ReactNode
  triggerPoint?: number
}

export default function LiftEffect({
  children,
  triggerPoint = 0.5,
}: LiftEffectProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      if (rect.top < window.innerHeight * triggerPoint) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Kör en kontroll direkt vid mount
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [triggerPoint])

  return (
    <div
      ref={containerRef}
      className="min-h-[100px] flex items-center justify-center overflow-hidden"
    >
      <Transition
        show={isVisible}
        enter="transition-transform duration-500"
        enterFrom="opacity-50 translate-y-4 scale-95"
        enterTo="opacity-100 translate-y-0 scale-100"
        leave="transition-transform duration-500"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-50 scale-95"
      >
        <div className="w-full">{children}</div>
      </Transition>
    </div>
  )
}
