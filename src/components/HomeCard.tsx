import React from 'react'
import { cn } from '@/utils/utils'
import { LinkButton } from '@/components/Button'
import { type LucideIcon } from 'lucide-react'

interface HomeCardProps {
  image: string
  icon: LucideIcon
  title: string
  description: string
  buttonText: string
  buttonLink: string
  className?: string
}

export const HomeCard: React.FC<HomeCardProps> = ({
  image,
  icon: Icon,
  title,
  description,
  buttonText,
  buttonLink,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 h-full',
        className,
      )}
    >
      <div className="w-full h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow items-center text-center">
        <Icon className="w-10 h-10 text-primary mb-4 flex-shrink-0" />
        <h3 className="text-xl lg:text-2xl font-semibold text-textPrimary dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-textSecondary dark:text-gray-300 text-sm lg:text-base mb-6 flex-grow">
          {description}
        </p>
        <div className="mt-auto pt-2 w-full flex justify-center">
          <LinkButton
            to={buttonLink}
            variant="secondary"
            size="sm"
            subVariant="rounded"
            className="font-semibold"
          >
            {buttonText}
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

export default HomeCard