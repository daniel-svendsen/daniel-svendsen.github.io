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
        <div key={item.id} className="mb-4 bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">{t(item.title)}</h3>
          <p className="mt-2 text-textSecondary">{t(item.description)}</p>
        </div>
      ))}
    </SectionContent>
  )
}

export default Hobbies