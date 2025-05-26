import React, { ReactNode } from 'react'

interface PageLayoutProps {
  header: ReactNode
  nav: ReactNode
  main: ReactNode
  footer: ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({
  header,
  nav,
  main,
  footer,
}) => {
  return (
    <div className="min-h-screen text-textPrimary">
      {header}
      {nav}
      {main}
      {footer}
    </div>
  )
}

export default PageLayout