import React, { ReactNode } from 'react'

interface TabPanelProps {
  title?: string
  children: ReactNode
}

const TabPanel = ({ title, children }: TabPanelProps) => {
  return (
    <div className="whitespace-pre-line p-4 min-h-[50px]">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      <div>{children}</div>
    </div>
  )
}

export default TabPanel