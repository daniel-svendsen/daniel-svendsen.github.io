import React from 'react'
import ToolIcon from './ToolIcons'

interface Tool {
  tool: string
  icon: string
}

interface ToolListProps {
  tools: Tool[]
}

const ToolList: React.FC<ToolListProps> = ({ tools }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {tools.map(({ tool, icon }) => (
        <div key={tool} className="flex items-center space-x-2">
          <ToolIcon toolName={icon} className="w-5 h-3" />
          <span className="text-sm">{tool}</span>
        </div>
      ))}
    </div>
  )
}

export default ToolList