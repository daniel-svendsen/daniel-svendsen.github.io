import Timeline from '../components/TimeLine'
import React from 'react'
import {TimelineEvent} from './timeLineEvents'
import cvContent from './cvContent'
import {TabsDataItem} from '../components/CvTabs'
import ToolList from '../components/ToolList' // Typ för skill-content

// Typ för skill-content
type SkillContentItem =
  | string
  | {
      name: string
      details: string | Array<{ tool: string; icon: string }>
    }

const getTabsData = (
  content: typeof cvContent,
  timelineEvents: TimelineEvent[],
): TabsDataItem[] => {
  return [
    {
      label: 'Profile & Skills',
      title: content.skills.title,
      content: (
        <div className="p-4 bg-gray-50 rounded-md shadow-sm text-xs sm:text-sm space-y-3">
          {(content.skills.content as SkillContentItem[]).map((item, index) => {
            if (typeof item === 'string') {
              return (
                <p key={index} className="mb-2">
                  {item}
                </p>
              )
            }
            if (
              (item.name === 'Languages' ||
                item.name === 'Tools' ||
                item.name === 'Databases') &&
              Array.isArray(item.details)
            ) {
              return (
                <div key={index} className="mb-2">
                  <strong className="text-indigo-700">{item.name}:</strong>{' '}
                  <ToolList tools={item.details} />
                </div>
              )
            }
            return (
              <p key={index} className="mb-1">
                <strong className="text-indigo-700">{item.name}:</strong>{' '}
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
        <div className="p-4 bg-gray-50 rounded-md shadow-sm">
          <Timeline events={timelineEvents} />
        </div>
      ),
    },
    {
      label: 'Language & Miscellaneous',
      title: content.languages.title,
      content: (
        <ul className="p-4 bg-gray-50 rounded-md shadow-sm space-y-2 text-xs sm:text-sm">
          {(
            content.languages.content as Array<{ name: string; level: string }>
          ).map((item, index) => (
            <li key={index}>
              <strong className="text-indigo-700">{item.name}:</strong>{' '}
              {item.level}
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: 'Hobbies',
      title: content.hobbies.title,
      content: (
        <div className="p-4 bg-gray-50 rounded-md shadow-sm">
          <p className="text-xs sm:text-sm">{content.hobbies.content}</p>
        </div>
      ),
    },
    {
      label: 'Contact',
      title: content.contact.title,
      content: (
        <ul className="p-4 bg-gray-50 rounded-md shadow-sm space-y-2 text-xs sm:text-sm">
          {content.contact.content.map((item, index) => (
            <li key={index}>
              <strong className="text-indigo-700">{item.type}:</strong>{' '}
              {item.link ? (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.link.text}
                </a>
              ) : (
                item.details
              )}
            </li>
          ))}
        </ul>
      ),
    },
  ]
}

export default getTabsData
