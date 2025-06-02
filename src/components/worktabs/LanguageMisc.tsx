import React from 'react'
import { CvLanguage, LocalizedContent } from '../../types/CvTypes'
import { SectionContent } from '@/components/SectionContent'
import { useLanguage } from '@/components/context/LanguageContext'

interface LanguageMiscProps {
  languages: CvLanguage[]
}

const LanguageMisc: React.FC<LanguageMiscProps> = ({ languages }) => {
  const { t } = useLanguage()
  const headingLanguageMisc: LocalizedContent = {
    en: 'Language & Miscellaneous',
    sv: 'Språk & Övrigt',
  }

  return (
    <SectionContent heading={t(headingLanguageMisc)}>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {languages.map((lang) => (
          <li
            key={lang.id}
            className="p-3 bg-white rounded shadow flex flex-col"
          >
            <span className="font-semibold">{t(lang.name)}</span>
            <span className="text-textSecondary text-sm">{t(lang.level)}</span>
          </li>
        ))}
      </ul>
    </SectionContent>
  )
}

export default LanguageMisc