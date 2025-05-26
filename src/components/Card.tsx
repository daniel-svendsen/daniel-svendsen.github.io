import React from 'react'
import { cn } from '@/utils/utils'
import { LinkButton } from '@/components/Button'

interface CardProps {
  image?: string
  icon?: React.ElementType
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  className?: string
  imageClassName?: string
  contentClassName?: string
}

export const Card: React.FC<CardProps> = ({
  image,
  icon: Icon,
  title,
  description,
  buttonText,
  buttonLink,
  className,
  imageClassName,
  contentClassName,
}) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col transition-all hover:shadow-2xl',
        className,
      )}
    >
      {image && (
        <div className={cn('w-full h-48 overflow-hidden', imageClassName)}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover "
          />
        </div>
      )}
      <div className={cn('p-6 flex flex-col flex-grow', contentClassName)}>
        {Icon && <Icon className="w-8 h-8 text-highlight mb-4" />}
        <h3 className="text-xl font-semibold text-textPrimary dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-textSecondary dark:text-gray-300 text-sm mb-6 flex-grow">
          {description}
        </p>
        {buttonLink && buttonText && (
          <div className="mt-auto pt-2">
            <LinkButton
              href={buttonLink}
              variant="highlight"
              size="sm"
              className="w-full sm:w-auto"
            >
              {buttonText}
            </LinkButton>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card