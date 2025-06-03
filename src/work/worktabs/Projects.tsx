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
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
          >
            <h3 className="text-lg font-semibold text-textPrimary dark:text-white">
              {t(project.name)}
            </h3>
            <p className="mt-1 text-primary dark:text-gray-300 text-sm">
              {t(project.details)}
            </p>
            {project.link_href && (
              <LinkButton
                to={project.link_href}
                variant="outline"
                size="sm"
                subVariant="rounded"
                target="_blank"
                className="mt-2"
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