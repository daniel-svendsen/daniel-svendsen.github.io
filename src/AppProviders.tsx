import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { AuthProvider } from '@/admin/context/AuthContext'
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
      <LanguageProvider>
        <AuthProvider>{children}</AuthProvider>
      </LanguageProvider>
    </HelmetProvider>
  )
}
