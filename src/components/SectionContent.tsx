import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/utils'

interface SectionContentProps {
  children: React.ReactNode
  className?: string
  heading?: string
  linkTo?: string
  linkLabel?: string
  linkVariant?: string
}

export const SectionContent: React.FC<SectionContentProps> = ({
  children,
  className,
  heading,
  linkTo,
  linkLabel,
  linkVariant,
}) => {
  const containerClasses = [
    'mx-auto',
    'w-full',
    'max-w-7xl',
    'px-4',
    'sm:px-6',
    'lg:px-8',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const headerClasses = [
    'mb-12',
    'md:mb-16',
    'flex',
    'flex-col',
    'items-start',
    'gap-4',
    'sm:flex-row',
    'sm:items-center',
    'sm:justify-between',
  ]
    .filter(Boolean)
    .join(' ')

  const headingClasses = [
    'text-3xl',
    'md:text-4xl',
    'font-semibold',
    'tracking-tight',
    'text-foreground',
  ]
    .filter(Boolean)
    .join(' ')

  const linkBaseClasses = [
    'hidden',
    'items-center',
    'gap-1',
    'text-base',
    'md:text-lg',
    'font-semibold',
    'md:inline-flex',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClasses}>
      {(heading || (linkTo && linkLabel)) && (
        <div className={headerClasses}>
          {heading && <h2 className={headingClasses}>{heading}</h2>}
          {linkTo && linkLabel && (
            <Link
              to={linkTo}
              className={cn(linkBaseClasses)}
              aria-label={linkLabel}
            >
              {linkLabel}
              <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
          )}
        </div>
      )}
      {children}
    </div>
  )
}