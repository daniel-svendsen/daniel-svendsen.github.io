import React from 'react'
import { type CvProject, LocalizedContent } from '../../types/CvTypes'
import { LinkButton } from '@/components/Button'
import { SectionContent } from '@/components/SectionContent'
import { useLanguage } from '@/context/LanguageContext'

interface ProjectsProps {
  projects: CvProject[]
  heading: LocalizedContent
}

const Projects: React.FC<ProjectsProps> = ({ projects, heading }) => {
  const { t } = useLanguage()
  const visitProjectText: LocalizedContent = {
    en: 'Visit Project',
    sv: 'Besök Projekt',
  }

  return (
    <SectionContent heading={t(heading)}>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-black/6 bg-[#f8f9fb] p-5"
          >
            <h3 className="text-lg font-semibold text-textPrimary">
              {t(project.name)}
            </h3>
            <p className="mt-2 text-sm leading-7 text-textPrimary/68">
              {t(project.details)}
            </p>
            {project.link_href && (
              <LinkButton
                to={project.link_href}
                variant="outline"
                size="sm"
                subVariant="rounded"
                target="_blank"
                className="mt-4"
                rel="noopener noreferrer"
              >
                {t(visitProjectText)}
              </LinkButton>
            )}
          </div>
        ))}
      </div>
    </SectionContent>
  )
}

export default Projects
