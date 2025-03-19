// src/components/WorkTabs/Experience.tsx
import React from 'react'
import SectionWrapper from '../SectionWrapper'
import Timeline, { TimelineEvent } from '../../components/TimeLine'
import { CvExperience } from '../../types/CvTypes'

interface ExperienceProps {
  experiences: CvExperience[]
}

const extractYear = (yearText: string) => {
    const match = yearText.match(/\d{4}/)
    return match ? parseInt(match[0]) : 0
}

const Experience: React.FC<ExperienceProps> = ({experiences}) => {
    const sortedExperiences = [...experiences].sort(
        (a, b) => extractYear(b.year) - extractYear(a.year)
    )

    const events: TimelineEvent[] = sortedExperiences.map((exp) => ({
        title: exp.type.charAt(0).toUpperCase() + exp.type.slice(1),
        date: exp.year,
        description: exp.details,
        link: exp.linkHref ? {text: exp.linkText || 'Link', href: exp.linkHref} : undefined,
    }))

    return (
        <SectionWrapper title="Experiences">
            <Timeline events={events}/>
        </SectionWrapper>
    )
}

export default Experience
