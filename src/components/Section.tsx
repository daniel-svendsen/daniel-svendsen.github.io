interface SectionProps {
  variant?: 'gray' | 'white'
  children: React.ReactNode
  className?: string
  id?: string
}

export const Section = ({
  variant = 'white',
  children,
  className,
  id,
}: SectionProps) => {
  const baseClasses = 'py-16 md:py-24 lg:py-32'
  const variantClasses = variant === 'gray' ? 'bg-gray-100' : 'bg-white'
  const combinedClasses = [baseClasses, variantClasses, className]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={combinedClasses}>
      {children}
    </section>
  )
}
