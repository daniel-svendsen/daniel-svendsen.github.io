import React from 'react'
import { CvLanguage, LocalizedContent } from '../../types/CvTypes'
import { SectionContent } from '@/components/SectionContent'
import { useLanguage } from '@/context/LanguageContext'

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
            className="flex flex-col rounded-2xl border border-black/6 bg-[#f8f9fb] p-5"
          >
            <span className="font-semibold text-textPrimary">
              {t(lang.name)}
            </span>
            <span className="mt-1 text-sm text-textPrimary/68">
              {t(lang.level)}
            </span>
          </li>
        ))}
      </ul>
    </SectionContent>
  )
}

export default LanguageMisc
