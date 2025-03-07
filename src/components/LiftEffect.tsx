import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('lift-section')
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight * triggerPoint) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [triggerPoint])

  return (
    <div
      id="lift-section"
      className="min-h-[100px] flex items-center justify-center overflow-hidden"
    >
      <Transition
        show={isVisible}
        enter="transition-transform duration-500"
        enterFrom="opacity-0 translate-y-4 scale-95"
        enterTo="opacity-100 translate-y-0 scale-100"
      >
        <div className="w-full">{children}</div>
      </Transition>
    </div>
  )
}