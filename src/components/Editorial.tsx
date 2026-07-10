import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link, type LinkProps } from 'react-router-dom'

import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { cn } from '@/utils/utils'

interface EditorialSectionProps {
  children: React.ReactNode
  className?: string
  contentClassName?: string
  id?: string
  tone?: 'warm' | 'white'
  compact?: boolean
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({
  children,
  className,
  contentClassName,
  id,
  tone = 'warm',
  compact = false,
}) => {
  const bgClass = tone === 'white' ? 'bg-white' : 'bg-[#f5f5f2]'

  return (
    <Section
      id={id}
      bgColor={tone === 'white' ? 'white' : 'offWhite'}
      className={cn(bgClass, compact ? 'py-16 md:py-24' : 'py-16 md:py-28', className)}
    >
      <SectionContent className={contentClassName}>{children}</SectionContent>
    </Section>
  )
}

interface EditorialIntroProps {
  eyebrow?: string
  title: string
  description?: string
  action?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
  headingLevel?: 'h1' | 'h2'
}

export const EditorialIntro: React.FC<EditorialIntroProps> = ({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  className,
  headingLevel = 'h2',
}) => {
  const centered = align === 'center'
  const Heading = headingLevel

  return (
    <div
      className={cn(
        centered
          ? 'mx-auto max-w-3xl text-center'
          : 'flex flex-col gap-5 md:flex-row md:items-end md:justify-between',
        className,
      )}
    >
      <div className={cn(centered ? 'mx-auto max-w-3xl' : 'max-w-2xl')}>
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
            {eyebrow}
          </p>
        )}
        <Heading className="text-4xl font-semibold tracking-tight text-textPrimary md:text-5xl">
          {title}
        </Heading>
        {description && (
          <p className="mt-6 text-lg leading-8 text-textPrimary/68 md:text-xl">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  )
}

interface TextArrowLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}

export const TextArrowLink: React.FC<TextArrowLinkProps> = ({
  children,
  className,
  ...props
}) => (
  <Link
    className={cn(
      'inline-flex items-center gap-2 text-base font-semibold text-textPrimary transition-colors hover:text-textPrimary/65',
      className,
    )}
    {...props}
  >
    {children}
    <ArrowRight className="h-4 w-4" aria-hidden="true" />
  </Link>
)
