// src/components/ServiceCard.tsx
import React from 'react'
import { cn } from '@/utils/utils'
import { LinkButton } from '@/components/Button'
import { type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  image: string
  icon: LucideIcon
  title: string
  description: string
  price: string
  buttonText: string
  buttonLink: string
  className?: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  icon: Icon,
  title,
  description,
  price,
  buttonText,
  buttonLink,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-secondary dark:bg-gray-800 rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1',
        className,
      )}
    >
      <div className="w-full h-48 sm:h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        {Icon && <Icon className="w-10 h-10 text-primary mb-4 flex-shrink-0" />}
        <h3 className="text-xl lg:text-2xl font-semibold text-textPrimary dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-textSecondary dark:text-gray-300 text-sm whitespace-pre-line mb-4 flex-grow">
          {description}
        </p>
        <p className="text-xl font-bold text-primary mb-5 mt-2">{price}</p>
        <div className="mt-auto pt-2">
          <LinkButton
            to={buttonLink}
            variant="default"
            size="md"
            subVariant="rounded"
            className="font-semibold w-full"
          >
            {buttonText}
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
