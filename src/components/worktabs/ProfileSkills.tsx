// src/components/WorkTabs/ProfileSkills.tsx
import React from 'react'
import SectionWrapper from '../SectionWrapper'
import ToolIcon from '../ToolIcons'
import { CvContent, CvSkill } from '../../types/CvTypes'

interface ProfileSkillsProps {
  profile: CvContent | undefined
  intro: CvContent | undefined
  otherSkills: CvSkill[]
  softSkills: CvSkill[]
  workMethodologies: CvSkill[]
}

const ProfileSkills: React.FC<ProfileSkillsProps> = ({
  profile,
  intro,
  otherSkills,
  softSkills,
  workMethodologies,
}) => {
  return (
    <SectionWrapper title="Profile & Skills">
      {intro && (
        <p className="text-textSecondary bg-white p-3 rounded shadow mb-4">
          {intro.description}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {otherSkills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center bg-white p-3 rounded shadow"
          >
            <ToolIcon toolName={skill.tool} className="mr-2 w-5 h-5" />
            <p className="font-medium">{skill.tool}</p>
          </div>
        ))}
      </div>
      {(softSkills.length > 0 || workMethodologies.length > 0) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {softSkills.length > 0 && (
            <div className="bg-white p-3 rounded shadow">
              <h4 className="text-lg font-semibold">Soft Skills</h4>
              <p className="text-textSecondary">{softSkills[0].tool}</p>
            </div>
          )}
          {workMethodologies.length > 0 && (
            <div className="bg-white p-3 rounded shadow">
              <h4 className="text-lg font-semibold">Work Methodologies</h4>
              <p className="text-textSecondary">{workMethodologies[0].tool}</p>
            </div>
          )}
        </div>
      )}
    </SectionWrapper>
  )
}

export default ProfileSkills
