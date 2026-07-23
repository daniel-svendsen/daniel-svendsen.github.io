import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { LanguageProvider } from '@/context/LanguageContext'

interface AppProvidersProps {
  children: React.ReactNode
  helmetContext?: Record<string, unknown>
}

export default function AppProviders({
  children,
  helmetContext,
}: AppProvidersProps) {
  return (
    <HelmetProvider context={helmetContext}>
      <LanguageProvider>{children}</LanguageProvider>
    </HelmetProvider>
  )
}
