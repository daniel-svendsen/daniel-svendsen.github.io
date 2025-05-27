import React from 'react'
import Timeline, { TimelineEvent } from '../../components/TimeLine'
import { CvExperience } from '../../types/CvTypes'
import { SectionContent } from '@/components/SectionContent'

interface ExperienceProps {
  experiences: CvExperience[]
}

const extractYear = (yearText: string) => {
  const match = yearText.match(/\d{4}/)
  return match ? parseInt(match[0]) : 0
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const sortedExperiences = [...experiences].sort(
    (a, b) => extractYear(b.year) - extractYear(a.year),
  )

  const events: TimelineEvent[] = sortedExperiences.map((exp) => ({
    title: exp.type.charAt(0).toUpperCase() + exp.type.slice(1),
    date: exp.year,
    description: exp.details,
    links: exp.links
      ? exp.links.map((link) => ({ text: link.text, href: link.href }))
      : undefined,
  }))

  return (
    <SectionContent heading="Experiences">
      <Timeline events={events} />
    </SectionContent>
  )
}

export default Experience