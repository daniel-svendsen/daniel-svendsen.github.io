import { useEffect, useState } from 'react'
import rawCvDataFromFile from '../data/cvData.json'
import {
  type CvContact,
  type CvContent,
  type CvData,
  type CvExperience,
  type CvLanguage,
  type CvProject,
  type CvSkill,
  type LocalizedContent,
} from '../types/CvTypes'

interface RawCvData {
  content: CvContent[]
  skills: CvSkill[]
  experience: CvExperience[]
  projects: CvProject[]
  contact: CvContact[]
  languages: CvLanguage[]
}

export const usePreloadedData = () => {
  const [data, setData] = useState<CvData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const typedRawData = rawCvDataFromFile as unknown as RawCvData

      const profileItem = typedRawData.content.find(
        (item) => item.section === 'profile',
      )
      const introItem = typedRawData.content.find(
        (item) => item.section === 'intro',
      )
      const hobbiesItems = typedRawData.content.filter(
        (item) => item.section === 'hobbies',
      )

      if (!profileItem) {
        throw new Error(
          "Profilinformation (section: 'profile') saknas i cvData.json.",
        )
      }

      const personalProjectsTitleLocalized: LocalizedContent = {
        en: 'Personal Projects',
        sv: 'Personliga Projekt',
      }

      const processedData: CvData = {
        profile: profileItem,
        intro: introItem,
        skills: typedRawData.skills,
        experience: typedRawData.experience,
        projects: typedRawData.projects,
        contact: typedRawData.contact,
        languages: typedRawData.languages,
        hobbies: hobbiesItems,
        personalProjectsTitle: personalProjectsTitleLocalized,
      }

      setData(processedData)
    } catch (e: any) {
      setError(e.message || 'Kunde inte ladda eller bearbeta CV-data.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { data, isLoading, error }
}