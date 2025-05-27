import React from 'react'
import { type CvProject } from '../../types/CvTypes'
import { LinkButton } from '@/components/Button'
import { SectionContent } from '@/components/SectionContent'

interface ProjectsProps {
  projects: CvProject[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <SectionContent heading="Personal Projects">
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
          >
            <h3 className="text-lg font-semibold text-textPrimary dark:text-white">
              {project.name}
            </h3>
            <p className="mt-1 text-textSecondary dark:text-gray-300 text-sm">
              {project.details}
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
                Visit Project
              </LinkButton>
            )}
          </div>
        ))}
      </div>
    </SectionContent>
  )
}

export default Projects