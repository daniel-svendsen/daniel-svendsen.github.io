// src/components/SectionWrapper.tsx
import React, { ReactNode } from 'react'

interface SectionWrapperProps {
  title?: string
  children: ReactNode
  className?: string
}

const SectionWrapper = ({ title, children, className = '' }) => (
  <section
    className={`p-6 mb-10 md:mb-16 lg:mb-10 ${className}`}
    aria-label={title}
  >
    {title && (
      <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
    )}
    {children}
  </section>
)

export default SectionWrapper
