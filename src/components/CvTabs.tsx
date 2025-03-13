// src/components/CvTabs.tsx
import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react'
import { motion } from 'framer-motion'
import React from 'react'
import WorkTabPanel from './WorkTabPanel'

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
        <TabList className="flex flex-wrap justify-center space-x-2 sm:space-x-4 border-b-2 border-highlight pb-2 mb-4">
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold focus:outline-none ${
                  selected
                    ? 'border-b-2 border-highlight text-textPrimary'
                    : 'text-textSecondary hover:text-textPrimary'
                }`
              }
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabsData.map((tab, index) => (
            <WorkTabPanel key={index}>{tab.content}</WorkTabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </motion.div>
  )
}

export default CVTabs
