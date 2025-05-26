import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/utils'

const themeColorToHexMap: Record<string, string> = {
  white: '#FFFFFF',
  lightGray: '#F3F4F6',
  offWhite: '#F9FAFB',
  beige: '#F5F5DC',
}

interface CurveSvgProps {
  fillColor: string
  curveHeightClassName?: string
}

const BottomConcaveCurveSvg: React.FC<CurveSvgProps> = ({
  fillColor,
  curveHeightClassName = 'h-16 sm:h-20 md:h-24 lg:h-28',
}) => {
  return (
    <div
      className={cn(
        'absolute bottom-0 left-0 w-full overflow-hidden leading-none -mb-px',
        curveHeightClassName,
      )}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-full block"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,70 C480,0 960,0 1440,70 L1440,100 L0,100 Z" />
      </svg>
    </div>
  )
}

const sectionVariantsConfig = cva('relative', {
  variants: {
    bgColor: {
      white: 'bg-white text-gray-900',
      lightGray: 'bg-gray-100 text-gray-800',
      offWhite: 'bg-gray-50 text-gray-800',
      beige: 'bg-custom-beige text-gray-800',
    },
    shape: {
      default: 'py-12 md:py-20 lg:py-24',
      organicSquircle: 'py-12 md:py-20 lg:py-24 shape-organic-squircle',
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
  hasBottomCurve?: boolean
  nextSectionBgColor?: keyof typeof themeColorToHexMap
  curveHeightClassName?: string
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
  hasBottomCurve,
  nextSectionBgColor,
  curveHeightClassName,
  ...props
}) => {
  const actualNextSectionBgHex = nextSectionBgColor
    ? themeColorToHexMap[nextSectionBgColor]
    : undefined

  let paddingAdjustmentClass = ''
  if (hasBottomCurve && curveHeightClassName) {
    const heightValue = curveHeightClassName.match(/h-(\d+|\[.*?\])/)?.[1]
    if (heightValue) {
      paddingAdjustmentClass = `pb-${heightValue}`
    }
  } else if (hasBottomCurve) {
    paddingAdjustmentClass = 'pb-16 sm:pb-20 md:pb-24 lg:pb-28'
  }

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
        paddingAdjustmentClass,
        className,
      )}
      {...props}
    >
      {children}
      {hasBottomCurve && actualNextSectionBgHex && (
        <BottomConcaveCurveSvg
          fillColor={actualNextSectionBgHex}
          curveHeightClassName={curveHeightClassName}
        />
      )}
    </section>
  )
}