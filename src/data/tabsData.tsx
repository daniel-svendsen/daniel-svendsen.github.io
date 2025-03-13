// src/data/tabsData.tsx
import Timeline from '../components/TimeLine'
import React from 'react'
import { TimelineEvent } from './timeLineEvents'
import cvContent from './cvContent'
import { TabsDataItem } from '../components/CvTabs'
import ToolList from '../components/ToolList'

type SkillContentItem =
  | string
  | { name: string; details: string | Array<{ tool: string; icon: string }> }

const uniformContainer =
  'p-4 bg-background rounded-md shadow-sm space-y-3 text-xs sm:text-sm'

const getTabsData = (
  content: typeof cvContent,
  timelineEvents: TimelineEvent[],
): TabsDataItem[] => {
  return [
    {
      label: 'Profile & Skills',
      title: content.skills.title,
      content: (
        <div className={uniformContainer}>
          {(content.skills.content as SkillContentItem[]).map((item, index) => {
            if (typeof item === 'string') return <p key={index}>{item}</p>
            if (
              (item.name === 'Languages' ||
                item.name === 'Tools' ||
                item.name === 'Databases') &&
              Array.isArray(item.details)
            ) {
              return (
                <div key={index}>
                  <strong className="text-highlight">{item.name}:</strong>{' '}
                  <ToolList tools={item.details} />
                </div>
              )
            }
            return (
              <p key={index}>
                <strong className="text-highlight">{item.name}:</strong>{' '}
                {item.details}
              </p>
            )
          })}
        </div>
      ),
    },
    {
      label: 'Experiences',
      title: content.experience.title,
      content: (
        <div className={uniformContainer}>
          <Timeline events={timelineEvents} />
        </div>
      ),
    },
    {
      label: 'Language & Miscellaneous',
      title: content.languages.title,
      content: (
        <div className={uniformContainer}>
          <ul className="space-y-2">
            {(
              content.languages.content as Array<{
                name: string
                level: string
              }>
            ).map((item, index) => (
              <li key={index}>
                <strong className="text-highlight">{item.name}:</strong>{' '}
                {item.level}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      label: 'Hobbies',
      title: content.hobbies.title,
      content: (
        <div className={uniformContainer}>
          <p>{content.hobbies.content}</p>
        </div>
      ),
    },
    {
      label: 'Personal Projects',
      title: content.personalProjects.title,
      content: (
        <div className={uniformContainer}>
          {content.personalProjects.content.map((project, index) => (
            <div key={index}>
              <h3 className="font-semibold text-highlight">{project.name}</h3>
              <p>{project.details}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: 'Contact',
      title: content.contact.title,
      content: (
        <div className={uniformContainer}>
          <ul className="space-y-2">
            {content.contact.content.map((item, index) => (
              <li key={index}>
                <strong className="text-highlight">{item.type}:</strong>{' '}
                {item.link ? (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight hover:underline"
                  >
                    {item.link.text}
                  </a>
                ) : (
                  item.details
                )}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ]
}

export default getTabsData
