// src/components/WorkTabs/Projects.tsx
import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { CvProject } from '../../types/CvTypes'

interface ProjectsProps {
  projects: CvProject[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <SectionWrapper title="Personal Projects">
      {projects.map((project) => (
        <div key={project.id} className="bg-white p-4 mb-4 rounded shadow">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="mt-1 text-textSecondary">{project.details}</p>
          {project.link_href && (
            <a
              href={project.link_href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Visit Project
            </a>
          )}
        </div>
      ))}
    </SectionWrapper>
  )
}

export default Projects
