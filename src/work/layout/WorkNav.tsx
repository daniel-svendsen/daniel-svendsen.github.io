import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
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
    <nav className="sticky top-[73px] z-30 border-y border-black/6 bg-white/90 px-4 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <ul className="scrollbar-none flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible md:pb-0">
          {tabs.map((tab) => (
            <li key={tab.id} className="flex-shrink-0">
              <Button
                variant={activeTab === tab.id ? 'default' : 'ghost'}
                subVariant="rounded"
                size="sm"
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'border border-transparent px-3 text-xs sm:text-sm',
                  activeTab === tab.id
                    ? 'border-textPrimary bg-textPrimary text-white hover:bg-textPrimary/90'
                    : 'text-textPrimary/70 hover:bg-black/5 hover:text-textPrimary',
                )}
              >
                {t(tab.label)}
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-2">
          <Button
            variant={language === 'sv' ? 'default' : 'outline'}
            subVariant="rounded"
            size="sm"
            onClick={() => setLanguage('sv')}
            disabled={language === 'sv'}
            className="px-4"
          >
            Svenska
          </Button>
          <Button
            variant={language === 'en' ? 'default' : 'outline'}
            subVariant="rounded"
            size="sm"
            onClick={() => setLanguage('en')}
            disabled={language === 'en'}
            className="px-4"
          >
            English
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default WorkNav
