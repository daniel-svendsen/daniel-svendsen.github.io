// src/components/Layout/WorkNav.tsx
import React from 'react'

interface Tab {
  id: string
  label: string
}

interface WorkNavProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

const tabs: Tab[] = [
  { id: 'profile', label: 'Profile & Skills' },
  { id: 'experience', label: 'Experiences' },
  { id: 'language', label: 'Language & Miscellaneous' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'projects', label: 'Personal Projects' },
  { id: 'contact', label: 'Contact' },
]

const WorkNav: React.FC<WorkNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="bg-custom-beige">
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 p-2">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              className={`px-3 py-2 text-sm font-medium ${
                activeTab === tab.id
                  ? 'border-b-2 border-highlight text-highlight'
                  : 'text-textPrimary'
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default WorkNav
