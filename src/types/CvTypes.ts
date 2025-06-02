export interface LocalizedContent {
  en: string
  sv: string
}

export interface CvContent {
  id: number
  section: string
  title: LocalizedContent
  description: LocalizedContent
}

export interface CvSkill {
  id: number
  cvContentId?: number
  category: LocalizedContent
  tool: LocalizedContent
  icon: string
}

export interface CvExperienceLink {
  text: LocalizedContent
  href: string
}

export interface CvExperience {
  id: number
  cvContentId?: number
  type: LocalizedContent
  year: string
  details: LocalizedContent
  links?: CvExperienceLink[]
}

export interface CvProject {
  id: number
  cvContentId?: number
  name: LocalizedContent
  details: LocalizedContent
  link_href?: string
}

export interface CvContact {
  id: number
  cvContentId?: number
  type: LocalizedContent
  details: string
  linkHref: string
}

export interface CvLanguage {
  id: number
  cvContentId?: number
  name: LocalizedContent
  level: LocalizedContent
}

export interface CvData {
  profile: CvContent
  intro?: CvContent
  skills: CvSkill[]
  experience: CvExperience[]
  projects: CvProject[]
  contact: CvContact[]
  languages: CvLanguage[]
  hobbies: CvContent[]
  personalProjectsTitle: LocalizedContent
}
