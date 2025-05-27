// src/components/WorkTabs/ProfileSkills.tsx
import React from 'react'
import ToolIcon from '../ToolIcons'
import { CvContent, CvSkill } from '../../types/CvTypes'
import { SectionContent } from '@/components/SectionContent'

interface ProfileSkillsProps {
  profile: CvContent | undefined
  intro: CvContent | undefined
  skills: CvSkill[] | undefined // Allow skills to be undefined initially
}

const ProfileSkills: React.FC<ProfileSkillsProps> = ({
  profile,
  intro,
  skills, // skills might be undefined while loading
}) => {
  // --- ADD THIS CHECK ---
  // If skills data is not yet loaded or is not an array, don't render the skill sections yet.
  // You could return a loading spinner or placeholder here instead of null if preferred.
  if (!Array.isArray(skills)) {
    return null // Or <p>Loading skills...</p>
  }
  // --- END CHECK ---

  // Now that we know 'skills' is an array, we can safely filter it.
  const experiencedSkills = skills.filter(
    (skill) =>
      skill.category.startsWith('Experienced') &&
      !skill.category.includes('Methodologies'),
  )
  const familiarSkills = skills.filter((skill) =>
    skill.category.startsWith('Familiar'),
  )
  const methodologies = skills.filter((skill) =>
    skill.category.includes('Methodologies'),
  )
  const softSkills = skills.filter((skill) => skill.category === 'Soft Skills')

  const renderSkillGrid = (skillList: CvSkill[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
      {skillList.map((skill) => (
        <div
          key={skill.id || skill.tool}
          className="flex items-center bg-white p-3 rounded shadow"
        >
          {skill.icon && (
            <ToolIcon toolName={skill.icon} className="mr-2 w-5 h-5" />
          )}
          <p className="font-medium">{skill.tool}</p>
        </div>
      ))}
    </div>
  )

  return (
    <SectionContent heading="Profile & Skills">
      {intro && (
        <p className="text-textSecondary bg-white p-3 rounded shadow mb-4">
          {intro.description}
        </p>
      )}

      {experiencedSkills.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-primaryText mb-2">
            Experienced In
          </h4>
          {renderSkillGrid(experiencedSkills)}
        </div>
      )}

      {familiarSkills.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-primaryText mb-2">
            Familiar With
          </h4>
          {renderSkillGrid(familiarSkills)}
        </div>
      )}

      {(methodologies.length > 0 || softSkills.length > 0) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {methodologies.length > 0 && (
            <div className="bg-white p-3 rounded shadow">
              <h4 className="text-lg font-semibold">Work Methodologies</h4>
              <p className="text-textSecondary">
                {methodologies.map((m) => m.tool).join(', ')}
              </p>
            </div>
          )}
          {softSkills.length > 0 && (
            <div className="bg-white p-3 rounded shadow">
              <h4 className="text-lg font-semibold">Soft Skills</h4>
              <p className="text-textSecondary">{softSkills[0]?.tool || ''}</p>
            </div>
          )}
        </div>
      )}
    </SectionContent>
  )
}

export default ProfileSkills
