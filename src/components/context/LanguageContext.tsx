import React, { createContext, ReactNode, useContext, useState } from 'react'
import { LocalizedContent } from '@/types/CvTypes'

export type Language = 'sv' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (localizedText?: LocalizedContent | string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('sv')

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const t = (localizedText?: LocalizedContent | string): string => {
    if (!localizedText) {
      return ''
    }
    if (typeof localizedText === 'string') {
      return localizedText
    }
    return localizedText[language] || localizedText.en
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}