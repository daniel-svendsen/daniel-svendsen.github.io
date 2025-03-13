// src/components/WorkTabPanel.tsx
import { TabPanel } from '@headlessui/react'
import React, { ReactNode } from 'react'

interface WorkTabPanelProps {
  title?: string
  children: ReactNode
}

const WorkTabPanel = ({ children }: WorkTabPanelProps) => {
  return (
    <TabPanel className="mt-4">
      <div className="whitespace-pre-line p-4 min-h-[50px]">
        <div>{children}</div>
      </div>
    </TabPanel>
  )
}

export default WorkTabPanel
