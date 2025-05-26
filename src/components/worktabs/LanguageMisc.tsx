import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { CvLanguage } from '../../types/CvTypes'

interface LanguageMiscProps {
  languages: CvLanguage[]
}

const LanguageMisc: React.FC<LanguageMiscProps> = ({ languages }) => {
  return (
    <SectionWrapper title="Language & Miscellaneous">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {languages.map((lang) => (
          <li
            key={lang.id}
            className="p-3 bg-white rounded shadow flex flex-col"
          >
            <span className="font-semibold">{lang.name}</span>
            <span className="text-textSecondary text-sm">{lang.level}</span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}

export default LanguageMisc