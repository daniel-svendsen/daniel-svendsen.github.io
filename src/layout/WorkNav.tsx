import React from 'react'
import { useLanguage } from '@/components/context/LanguageContext'
import { type LocalizedContent } from '@/types/CvTypes'
import { Button } from '@/components/Button'
import { cn } from '@/utils/utils'

interface Tab {
  id: string
  label: LocalizedContent
}

interface WorkNavProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

const tabs: Tab[] = [
  {
    id: 'profile',
    label: { en: 'Profile & Skills', sv: 'Profil & Färdigheter' },
  },
  { id: 'experience', label: { en: 'Experiences', sv: 'Erfarenheter' } },
  {
    id: 'language',
    label: { en: 'Language & Miscellaneous', sv: 'Språk & Övrigt' },
  },
  { id: 'hobbies', label: { en: 'Hobbies', sv: 'Intressen' } },
  {
    id: 'projects',
    label: { en: 'Personal Projects', sv: 'Personliga Projekt' },
  },
  { id: 'contact', label: { en: 'Contact', sv: 'Kontakt' } },
]

const WorkNav: React.FC<WorkNavProps> = ({ activeTab, onTabChange }) => {
  const { language, setLanguage, t } = useLanguage()

  return (
    <nav className="bg-custom-beige py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <ul className="flex flex-wrap justify-center gap-1 sm:gap-3 mb-3">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <Button
                variant="muted"
                subVariant="rounded"
                size="sm"
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'py-2 px-2 sm:text-sm',
                  activeTab === tab.id
                    ? 'border-b-2 text-primary hover:!bg-transparent'
                    : 'text-muted hover:gray hover:!bg-transparent',
                )}
              >
                {t(tab.label)}
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <Button
            variant={language === 'sv' ? 'secondary' : 'default'}
            subVariant="rounded"
            size="sm"
            onClick={() => setLanguage('sv')}
            disabled={language === 'sv'}
          >
            Svenska
          </Button>
          <Button
            variant={language === 'en' ? 'secondary' : 'default'}
            subVariant="rounded"
            size="sm"
            onClick={() => setLanguage('en')}
            disabled={language === 'en'}
          >
            English
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default WorkNav