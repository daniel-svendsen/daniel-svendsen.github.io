import React from 'react'
import Timeline, { TimelineEvent } from '../layout/TimeLine'
import { CvExperience, LocalizedContent } from '../../types/CvTypes'
import { SectionContent } from '@/components/SectionContent'
import { useLanguage } from '@/context/LanguageContext'

interface ExperienceProps {
  experiences: CvExperience[]
}

const extractYear = (yearText: string) => {
  const match = yearText.match(/\d{4}/)
  return match ? parseInt(match[0]) : 0
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const { t } = useLanguage()

  const sortedExperiences = [...experiences].sort(
    (a, b) => extractYear(b.year) - extractYear(a.year),
  )

  const events: TimelineEvent[] = sortedExperiences.map((exp) => {
    const typeString = t(exp.type)
    const title = typeString.charAt(0).toUpperCase() + typeString.slice(1)
    const description = t(exp.details)
    const links = exp.links
      ? exp.links.map((link) => ({ text: t(link.text), href: link.href }))
      : undefined

    return {
      title,
      date: exp.year,
      description,
      links,
    }
  })

  const headingExperiences: LocalizedContent = {
    en: 'Experiences',
    sv: 'Erfarenheter',
  }

  return (
    <SectionContent heading={t(headingExperiences)}>
      <Timeline events={events} />
    </SectionContent>
  )
}

export default Experience