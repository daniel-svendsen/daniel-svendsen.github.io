import React from 'react'
import { cn } from '@/utils/utils'

interface InfoCardProps {
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
  contentClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  centered?: boolean
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  children,
  className,
  contentClassName,
  titleClassName,
  descriptionClassName,
  centered = false,
}) => {
  return (
    <div
      className={cn(
        'rounded-3xl bg-white/90 p-6 shadow-sm',
        centered && 'text-center',
        className,
      )}
    >
      <div className={cn(contentClassName)}>
        {title && (
          <h3
            className={cn(
              'mb-3 text-xl font-semibold text-textPrimary',
              titleClassName,
            )}
          >
            {title}
          </h3>
        )}
        {description && (
          <p
            className={cn(
              'leading-relaxed text-textSecondary',
              descriptionClassName,
            )}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}

export default InfoCard
