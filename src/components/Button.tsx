import * as React from 'react'
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from 'react-router-dom'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/utils'

export const buttonVariantsConfig = cva(
  'inline-flex flex-shrink-0 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-highlight disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-textPrimary text-white hover:bg-textPrimary/90 data-[state=open]:bg-textPrimary/80',
        muted:
          'bg-white text-muted hover:bg-gray-100 data-[state=open]:bg-gray-200',
        secondary:
          'bg-secondary text-textPrimary hover:bg-secondary/80 data-[state=open]:bg-secondary/70',
        destructive:
          'bg-destructive text-white hover:bg-textPrimary/90 data-[state=open]:bg-textPrimary/80',
        highlight:
          'bg-highlight text-white hover:bg-highlight/90 data-[state=open]:bg-highlight/80',
        outline:
          'border border-textPrimary bg-transparent text-textPrimary hover:bg-textPrimary hover:text-white',
        ghost: 'hover:bg-gray-100 text-textPrimary',
        link: 'text-highlight underline-offset-4 hover:underline',
      },
      subVariant: {
        default: 'shadow-sm',
        rounded: 'rounded-full',
        flat: 'shadow-none',
      },
      size: {
        sm: 'h-9 px-3 text-xs',
        smIcon: 'h-9 w-9 p-0',
        smIconText: 'h-9 px-2.5 text-xs flex items-center gap-1.5',
        md: 'h-10 px-4 py-2 text-sm',
        mdIcon: 'h-10 w-10 p-0',
        mdIconText: 'h-10 px-3 text-sm flex items-center gap-2',
        lg: 'h-11 px-5 text-base',
        lgIcon: 'h-11 w-11 p-0',
        lgIconText: 'h-11 px-4 text-base flex items-center gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      subVariant: 'default',
    },
    compoundVariants: [
      { variant: 'ghost', subVariant: 'default', className: 'shadow-none' },
      { variant: 'link', subVariant: 'default', className: 'shadow-none' },
      { variant: 'ghost', subVariant: 'rounded', className: 'shadow-none' },
      { variant: 'link', subVariant: 'rounded', className: 'shadow-none' },
    ],
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariantsConfig> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, subVariant, size, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariantsConfig({ variant, subVariant, size, className }),
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export interface IconButtonProps
  extends Omit<ButtonProps, 'children' | 'size'> {
  icon: React.ElementType
  text?: string
  iconPosition?: 'left' | 'right'
  size?: 'sm' | 'md' | 'lg'
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      text,
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      ...props
    },
    ref,
  ) => {
    const iconSizeClasses = {
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    }

    return (
      <Button
        className={className}
        ref={ref}
        size={`${size}Icon${text ? 'Text' : ''}`}
        {...props}
      >
        {Icon && iconPosition === 'left' && (
          <Icon className={cn(iconSizeClasses[size])} />
        )}
        {text && <span>{text}</span>}
        {Icon && iconPosition === 'right' && (
          <Icon className={cn(iconSizeClasses[size])} />
        )}
      </Button>
    )
  },
)
IconButton.displayName = 'IconButton'

export interface LinkButtonProps
  extends RouterLinkProps,
    VariantProps<typeof buttonVariantsConfig> {
  asChild?: boolean
}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    { className, variant, subVariant, size, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : RouterLink
    return (
      <Comp
        className={cn(
          buttonVariantsConfig({ variant, size, subVariant, className }),
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
LinkButton.displayName = 'LinkButton'

export interface IconLinkButtonProps
  extends Omit<LinkButtonProps, 'children' | 'size'> {
  icon: React.ElementType
  text?: string
  iconPosition?: 'left' | 'right'
  size?: 'sm' | 'md' | 'lg'
}

export const IconLinkButton: React.FC<IconLinkButtonProps> = ({
  text,
  size = 'md',
  iconPosition = 'left',
  icon: Icon,
  ...props
}) => {
  const iconSizeClasses = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }
  return (
    <LinkButton size={`${size}Icon${text ? 'Text' : ''}`} {...props}>
      {Icon && iconPosition === 'left' && (
        <Icon className={cn(iconSizeClasses[size])} />
      )}
      {text && <span>{text}</span>}
      {Icon && iconPosition === 'right' && (
        <Icon className={cn(iconSizeClasses[size])} />
      )}
    </LinkButton>
  )
}
IconLinkButton.displayName = 'IconLinkButton'