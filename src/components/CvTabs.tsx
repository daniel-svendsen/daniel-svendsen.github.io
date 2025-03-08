import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import TabPanelComponent from './TabPanel'
import React from 'react'

export interface TabsDataItem {
  label: string
  title: string
  content: React.ReactNode
}

interface CVTabsProps {
  tabsData: TabsDataItem[]
}

const CVTabs = ({ tabsData }: CVTabsProps) => {
  return (
    <TabGroup>
      <TabList className="flex flex-wrap justify-center space-x-2 sm:space-x-4 border-b-2 border-indigo-200 pb-2 mb-4">
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              `px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-300 focus:outline-none ${
                selected
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`
            }
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabsData.map((tab, index) => (
          <TabPanel key={index}>
            <TabPanelComponent title={tab.title}>
              {tab.content}
            </TabPanelComponent>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

export default CVTabs