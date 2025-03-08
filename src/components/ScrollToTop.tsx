import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-5 right-5 p-3 bg-gray-900 text-white rounded-full shadow-lg transition-opacity z-50 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Till toppen"
    >
      <ArrowUp size={24} />
    </button>
  )
}