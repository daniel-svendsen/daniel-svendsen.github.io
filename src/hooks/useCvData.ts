// src/hooks/useCvData.ts
import { useEffect, useState } from 'react'

export interface CvData {
  content: any[]
  skills: any[]
  experience: any[]
  projects: any[]
  contact: any[]
  languages: any[] // <-- Lägg till languages här
}

const useCvData = () => {
  const [cvData, setCvData] = useState<CvData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([
      fetch(`${import.meta.env.VITE_API_URL}/api/cv/content`).then((res) =>
        res.json(),
      ),
      fetch(`${import.meta.env.VITE_API_URL}/api/cv/skills`).then((res) =>
        res.json(),
      ),
      fetch(`${import.meta.env.VITE_API_URL}/api/cv/experience`).then((res) =>
        res.json(),
      ),
      fetch(`${import.meta.env.VITE_API_URL}/api/cv/projects`).then((res) =>
        res.json(),
      ),
      fetch(`${import.meta.env.VITE_API_URL}/api/cv/contact`).then((res) =>
        res.json(),
      ),
      fetch(`${import.meta.env.VITE_API_URL}/api/cv/languages`).then((res) =>
        res.json(),
      ),
    ])
      .then(([content, skills, experience, projects, contact, languages]) => {
        setCvData({ content, skills, experience, projects, contact, languages })
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { cvData, loading, error }
}

export default useCvData
