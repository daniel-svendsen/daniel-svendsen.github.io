import React from 'react'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import profileImg from '../../assets/bild1.jpg?responsive'
import { type LocalizedContent } from '@/types/CvTypes'
import { useLanguage } from '@/context/LanguageContext'

interface WorkHeaderProps {
  title: LocalizedContent
  description: LocalizedContent
}

const WorkHeader: React.FC<WorkHeaderProps> = ({ title, description }) => {
  const { t } = useLanguage()
  const profileAltText = t({ en: 'Profile', sv: 'Profilbild' })

  return (
    <header className="bg-[#f6f7f9] px-4 pb-10 pt-24 sm:px-6 md:pt-28">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[1.75rem] border border-black/6 bg-white px-6 py-8 shadow-[0_24px_70px_-56px_rgba(31,41,55,0.5)] md:grid-cols-[auto_1fr] md:items-center md:px-10">
        <ResponsiveImage
          image={profileImg}
          alt={profileAltText}
          sizes="128px"
          className="h-28 w-28 rounded-2xl object-cover ring-1 ring-black/6 sm:h-32 sm:w-32"
        />
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-textSecondary">
            CV & Portfolio
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl">
            {t(title)}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-textPrimary/68 sm:text-lg">
            {t(description)}
          </p>
        </div>
      </div>
    </header>
  )
}

export default WorkHeader
