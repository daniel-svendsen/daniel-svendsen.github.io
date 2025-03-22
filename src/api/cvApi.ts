// src/api.ts

const API_URL = import.meta.env.VITE_API_URL

// --- Typer för olika endpoints ---
export interface CvContent {
  id: number
  section: string
  title: string
  description: string
}

export interface CvSkill {
  id: number
  // Om du får in en hel CvContent-objekt kan du byta ut cvContentId mot cvContent: CvContent;
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
  link_href?: string
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

// --- Hjälpfunktion för API-anrop ---
async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}/${endpoint}`)
  if (!response.ok) {
    throw new Error(`Fel vid hämtning av ${endpoint}`)
  }
  return response.json()
}

// --- Exponerade funktioner för varje endpoint ---
export function fetchCvContent(): Promise<CvContent[]> {
  return fetchData<CvContent[]>('cv/content')
}

export function fetchCvSkills(): Promise<CvSkill[]> {
  return fetchData<CvSkill[]>('cv/skills')
}

export function fetchCvExperience(): Promise<CvExperience[]> {
  return fetchData<CvExperience[]>('cv/experience')
}

export function fetchCvProjects(): Promise<CvProject[]> {
  return fetchData<CvProject[]>('cv/projects')
}

export function fetchCvContact(): Promise<CvContact[]> {
  return fetchData<CvContact[]>('cv/contact')
}

export function fetchCvLanguages(): Promise<CvLanguage[]> {
  return fetchData<CvLanguage[]>('cv/languages')
}
