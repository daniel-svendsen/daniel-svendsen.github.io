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
        'rounded-[1.75rem] border border-black/5 bg-white/92 p-6 shadow-[0_18px_45px_-28px_rgba(31,41,55,0.28)] backdrop-blur-sm md:rounded-[2rem]',
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
