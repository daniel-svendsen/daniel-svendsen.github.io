import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/utils'

const sectionVariantsConfig = cva('relative py-16 md:py-24 lg:py-32', {
  variants: {
    bgColor: {
      white: 'bg-white text-gray-900',
      lightGray: 'bg-gray-100 text-gray-800',
      offWhite: 'bg-gray-50 text-gray-800',
      beige: 'bg-custom-beige text-gray-800',
    },
    shape: {
      default: '',
      organicSquircle: 'shape-organic-squircle',
    },
    rounded: {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      '4xl': 'rounded-4xl',
      '5xl': 'rounded-5xl',
      '6xl': 'rounded-6xl',
      '7xl': 'rounded-7xl',
      '8xl': 'rounded-8xl',
      '9xl': 'rounded-9xl',
      '10xl': 'rounded-10xl',
      full: 'rounded-full',
    },
    roundedTop: {
      none: '',
      sm: 'rounded-t-sm',
      md: 'rounded-t-md',
      lg: 'rounded-t-lg',
      xl: 'rounded-t-xl',
      '2xl': 'rounded-t-2xl',
      '3xl': 'rounded-t-3xl',
      '4xl': 'rounded-t-4xl',
      '5xl': 'rounded-t-5xl',
      '6xl': 'rounded-t-6xl',
      '7xl': 'rounded-t-7xl',
      '8xl': 'rounded-t-8xl',
      '9xl': 'rounded-t-9xl',
      '10xl': 'rounded-t-10xl',
      full: 'rounded-t-full',
    },
    roundedBottom: {
      none: '',
      sm: 'rounded-b-sm',
      md: 'rounded-b-md',
      lg: 'rounded-b-lg',
      xl: 'rounded-b-xl',
      '2xl': 'rounded-b-2xl',
      '3xl': 'rounded-b-3xl',
      '4xl': 'rounded-b-4xl',
      '5xl': 'rounded-b-5xl',
      '6xl': 'rounded-b-6xl',
      '7xl': 'rounded-b-7xl',
      '8xl': 'rounded-b-8xl',
      '9xl': 'rounded-b-9xl',
      '10xl': 'rounded-b-10xl',
      full: 'rounded-b-full',
    },
  },
  defaultVariants: {
    bgColor: 'white',
    shape: 'default',
    rounded: 'none',
    roundedTop: 'none',
    roundedBottom: 'none',
  },
})

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariantsConfig> {
  children: React.ReactNode
  className?: string
  id?: string
}

export const Section: React.FC<SectionProps> = ({
  bgColor,
  shape,
  rounded,
  roundedTop,
  roundedBottom,
  children,
  className,
  id,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        sectionVariantsConfig({
          bgColor,
          shape,
          rounded,
          roundedTop,
          roundedBottom,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}