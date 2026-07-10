import React from 'react'
import { CvContent, LocalizedContent } from '../../types/CvTypes'
import { SectionContent } from '@/components/SectionContent'
import { useLanguage } from '@/context/LanguageContext'

interface HobbiesProps {
  hobbies: CvContent[]
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
  const { t } = useLanguage()
  const headingHobbies: LocalizedContent = { en: 'Hobbies', sv: 'Intressen' }

  return (
    <SectionContent heading={t(headingHobbies)}>
      {hobbies.map((item) => (
        <div
          key={item.id}
          className="mb-4 rounded-2xl border border-black/6 bg-[#f8f9fb] p-5"
        >
          <h3 className="text-lg font-semibold text-textPrimary">
            {t(item.title)}
          </h3>
          <p className="mt-2 leading-7 text-textPrimary/68">
            {t(item.description)}
          </p>
        </div>
      ))}
    </SectionContent>
  )
}

export default Hobbies
