import React from 'react'
import ToolIcon from './ToolIcons'
import { CvContent, CvSkill, LocalizedContent } from '../../types/CvTypes'
import { SectionContent } from '@/components/SectionContent'
import { useLanguage } from '@/context/LanguageContext'

interface ProfileSkillsProps {
  profile: CvContent | undefined
  intro: CvContent | undefined
  skills: CvSkill[] | undefined
}

const ProfileSkills: React.FC<ProfileSkillsProps> = ({
  profile,
  intro,
  skills,
}) => {
  const { t } = useLanguage()

  if (!Array.isArray(skills)) {
    return null
  }

  const experiencedKey = t({ en: 'Experienced', sv: 'Erfarenhet' })
  const methodologiesKey = t({ en: 'Methodologies', sv: 'Metoder' })
  const familiarKey = t({ en: 'Familiar', sv: 'Kännedom' })
  const softSkillsKey = t({ en: 'Soft Skills', sv: 'Mjuka färdigheter' })

  const experiencedSkills = skills.filter(
    (skill) =>
      t(skill.category).startsWith(experiencedKey) &&
      !t(skill.category).includes(methodologiesKey),
  )
  const familiarSkills = skills.filter((skill) =>
    t(skill.category).startsWith(familiarKey),
  )
  const methodologies = skills.filter((skill) =>
    t(skill.category).includes(methodologiesKey),
  )
  const softSkills = skills.filter(
    (skill) => t(skill.category) === softSkillsKey,
  )

  const renderSkillGrid = (skillList: CvSkill[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
      {skillList.map((skill) => (
        <div
          key={skill.id || t(skill.tool)}
          className="flex items-center bg-white p-3 rounded shadow"
        >
          {skill.icon && (
            <ToolIcon toolName={skill.icon} className="mr-2 w-5 h-5" />
          )}
          <p className="font-medium">{t(skill.tool)}</p>
        </div>
      ))}
    </div>
  )

  const headingProfileSkills: LocalizedContent = {
    en: 'Profile & Skills',
    sv: 'Profil & Färdigheter',
  }
  const headingExperiencedIn: LocalizedContent = {
    en: 'Experienced In',
    sv: 'Erfarenhet Av',
  }
  const headingFamiliarWith: LocalizedContent = {
    en: 'Familiar with/Studied',
    sv: 'Känner till/Studerat',
  }
  const headingWorkMethodologies: LocalizedContent = {
    en: 'Work Methodologies',
    sv: 'Arbetsmetoder',
  }
  const headingSoftSkillsInternal: LocalizedContent = {
    en: 'Soft Skills',
    sv: 'Mjuka färdigheter',
  }

  return (
    <SectionContent heading={t(headingProfileSkills)}>
      {intro && (
        <p className="text-primary bg-white p-3 rounded shadow mb-4">
          {t(intro.description)}
        </p>
      )}

      {experiencedSkills.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-primaryText mb-2">
            {t(headingExperiencedIn)}
          </h4>
          {renderSkillGrid(experiencedSkills)}
        </div>
      )}

      {familiarSkills.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-primaryText mb-2">
            {t(headingFamiliarWith)}
          </h4>
          {renderSkillGrid(familiarSkills)}
        </div>
      )}

      {(methodologies.length > 0 || softSkills.length > 0) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {methodologies.length > 0 && (
            <div className="bg-white p-3 rounded shadow">
              <h4 className="text-lg font-semibold">
                {t(headingWorkMethodologies)}
              </h4>
              <p className="text-primary">
                {methodologies.map((m) => t(m.tool)).join(', ')}
              </p>
            </div>
          )}
          {softSkills.length > 0 && (
            <div className="bg-white p-3 rounded shadow">
              <h4 className="text-lg font-semibold">
                {t(headingSoftSkillsInternal)}
              </h4>
              <p className="text-primary">
                {softSkills[0]?.tool ? t(softSkills[0].tool) : ''}
              </p>
            </div>
          )}
        </div>
      )}
    </SectionContent>
  )
}

export default ProfileSkills