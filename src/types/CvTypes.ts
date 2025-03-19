// src/types/CvTypes.ts
export interface CvContent {
    id: number
    section: string
    title: string
    description: string
}

export interface CvSkill {
    id: number
    cvContentId?: number
    category: string
    tool: string
    icon: string
}

export interface CvExperience {
    id: number
    cvContentId?: number
    type: string
    year: string
    details: string
    linkText: string
    linkHref: string
}

export interface CvProject {
    id: number
    cvContentId?: number
    name: string
    details: string
}

export interface CvContact {
    id: number
    cvContentId?: number
    type: string
    details: string
    linkHref: string
}

export interface CvLanguage {
    id: number
    cvContentId?: number
    name: string
    level: string
}

export interface CvData {
    profile: CvContent
    intro?: CvContent
    skills: CvSkill[]
    experience: CvExperience[]
    projects: CvProject[]
    contact: CvContact[]
    languages: CvLanguage[]
    personalProjectsTitle: string
}
