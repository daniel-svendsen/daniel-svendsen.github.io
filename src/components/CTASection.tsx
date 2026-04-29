import React from 'react'
import { LinkButton } from '@/components/Button'
import { cn } from '@/utils/utils'

interface CTAAction {
  to: string
  label: string
  variant?: 'default' | 'outline' | 'secondary' | 'muted' | 'highlight'
}

interface CTASectionProps {
  title: string
  description: string
  actions: CTAAction[]
  className?: string
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  actions,
  className,
}) => {
  return (
    <section
      className={cn(
        'mx-auto max-w-4xl rounded-[1.75rem] border border-black/5 bg-white/70 p-8 text-center shadow-[0_24px_60px_-36px_rgba(31,41,55,0.35)] backdrop-blur-sm md:rounded-[2.5rem] md:p-10',
        className,
      )}
    >
      <h2 className="mb-4 text-2xl font-semibold text-textPrimary md:text-3xl">
        {title}
      </h2>
      <p className="mx-auto mb-7 max-w-2xl text-lg leading-relaxed text-textSecondary">
        {description}
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        {actions.map((action) => (
          <LinkButton
            key={`${action.to}-${action.label}`}
            to={action.to}
            variant={action.variant ?? 'default'}
            size="lg"
            subVariant="rounded"
            className="px-8 font-semibold"
          >
            {action.label}
          </LinkButton>
        ))}
      </div>
    </section>
  )
}

export default CTASection
