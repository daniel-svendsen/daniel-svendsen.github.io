import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { motion } from 'framer-motion'
import React from 'react'
import TabPanelComponent from './TabPanel'

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
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <TabGroup>
        <TabList className="flex flex-wrap justify-center space-x-2 sm:space-x-4 border-b-2 border-blue-200 pb-2 mb-4">
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold focus:outline-none ${
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
    </motion.div>
  )
}

export default CVTabs