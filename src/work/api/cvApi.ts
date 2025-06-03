import type {
  CvContact,
  CvContent,
  CvExperience,
  CvLanguage,
  CvProject,
  CvSkill,
} from '../../types/CvTypes'
import cvDataFromFile from '../../data/cvData.json'

export function fetchCvContent(): Promise<CvContent[]> {
  return Promise.resolve(cvDataFromFile.content || [])
}

export function fetchCvSkills(): Promise<CvSkill[]> {
  return Promise.resolve(cvDataFromFile.skills || [])
}

export function fetchCvExperience(): Promise<CvExperience[]> {
  return Promise.resolve(cvDataFromFile.experience || [])
}

export function fetchCvProjects(): Promise<CvProject[]> {
  return Promise.resolve(cvDataFromFile.projects || [])
}

export function fetchCvContact(): Promise<CvContact[]> {
  return Promise.resolve(cvDataFromFile.contact || [])
}

export function fetchCvLanguages(): Promise<CvLanguage[]> {
  return Promise.resolve(cvDataFromFile.languages || [])
}