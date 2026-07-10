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
    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {skillList.map((skill) => (
        <div
          key={skill.id || t(skill.tool)}
          className="flex items-center rounded-xl border border-black/6 bg-[#f8f9fb] p-3"
        >
          {skill.icon && (
            <ToolIcon toolName={skill.icon} className="mr-3 h-5 w-5" />
          )}
          <p className="text-sm font-semibold text-textPrimary">
            {t(skill.tool)}
          </p>
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
        <p className="mb-8 rounded-2xl border border-black/6 bg-[#f8f9fb] p-5 leading-7 text-textPrimary/72">
          {t(intro.description)}
        </p>
      )}

      {experiencedSkills.length > 0 && (
        <div className="mb-8">
          <h4 className="mb-2 text-lg font-semibold text-textPrimary">
            {t(headingExperiencedIn)}
          </h4>
          {renderSkillGrid(experiencedSkills)}
        </div>
      )}

      {familiarSkills.length > 0 && (
        <div className="mb-8">
          <h4 className="mb-2 text-lg font-semibold text-textPrimary">
            {t(headingFamiliarWith)}
          </h4>
          {renderSkillGrid(familiarSkills)}
        </div>
      )}

      {(methodologies.length > 0 || softSkills.length > 0) && (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {methodologies.length > 0 && (
            <div className="rounded-2xl border border-black/6 bg-[#f8f9fb] p-5">
              <h4 className="text-lg font-semibold text-textPrimary">
                {t(headingWorkMethodologies)}
              </h4>
              <p className="mt-2 leading-7 text-textPrimary/68">
                {methodologies.map((m) => t(m.tool)).join(', ')}
              </p>
            </div>
          )}
          {softSkills.length > 0 && (
            <div className="rounded-2xl border border-black/6 bg-[#f8f9fb] p-5">
              <h4 className="text-lg font-semibold text-textPrimary">
                {t(headingSoftSkillsInternal)}
              </h4>
              <p className="mt-2 leading-7 text-textPrimary/68">
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
