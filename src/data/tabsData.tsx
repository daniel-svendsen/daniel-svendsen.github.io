// src/data/tabsData.tsx
import Timeline from '../components/TimeLine'
import React from 'react'
import { TimelineEvent } from './timeLineEvents'
import cvContent from './cvContent'
import { TabsDataItem } from '../components/CvTabs'

const getTabsData = (
  content: cvContent,
  timelineEvents: TimelineEvent[],
): TabsDataItem[] => {
  return [
    {
      label: 'Profile & Skills',
      title: content.skills.title,
      content: (
        <div className='text-xs sm:text-sm'>
          {content.skills.content.map((item: any, index: number) =>
            typeof item === 'string' ? (
              <p key={index} className='mb-2'>{item}</p>
            ) : (
              <p key={index} className='mb-1'>
                <strong>{item.name}:</strong> {item.details}
              </p>
            ),
          )}
        </div>
      ),
    },
    {
      label: 'Experiences',
      title: content.experience.title,
      content: <Timeline events={timelineEvents} />,
    },
    {
      label: 'Language & Miscellaneous',
      title: content.languages.title,
      content: (
        <ul className='space-y-1 text-xs sm:text-sm'>
          {content.languages.content.map((item: any, index: number) => (
            <li key={index}><strong>{item.name}:</strong> {item.level}</li>
          ))}
        </ul>
      ),
    },
    {
      label: 'Hobbies',
      title: content.hobbies.title,
      content: <p className='text-xs sm:text-sm'>{content.hobbies.content}</p>,
    },
    {
      label: 'Contact',
      title: content.contact.title,
      content: (
        <ul className='space-y-1 text-xs sm:text-sm'>
          {content.contact.content.map((item: any, index: number) => (
            <li key={index}>
              <strong>{item.type}:</strong>{' '}
              {item.link ? (
                <a
                  href={item.link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:underline'
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
