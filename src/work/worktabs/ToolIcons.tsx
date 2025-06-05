import React from 'react'
import {
  SiCloudflare,
  SiDocker,
  SiGit,
  SiGnubash,
  SiGradle,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJenkins,
  SiJunit5,
  SiMongodb,
  SiMysql,
  SiRailway,
  SiReact,
  SiSpringboot,
  SiSqlite,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import { FaDatabase, FaJava, FaWindows } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface ToolIconProps {
  toolName: string
  className?: string
}

const toolIcons: { [key: string]: IconType | undefined } = {
  'Spring Boot': SiSpringboot,
  Cloudflare: SiCloudflare,
  Railway: SiRailway,
  'JUnit 5': SiJunit5,
  IntelliJ: SiIntellijidea,
  Docker: SiDocker,
  Jenkins: SiJenkins,
  Bash: SiGnubash,
  Git: SiGit,
  Gradle: SiGradle,
  Vite: SiVite,
  React: SiReact,
  Windows: FaWindows,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  SQLite: SiSqlite,
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  'HTML/CSS': SiHtml5,
  SQL: FaDatabase,
  'SQL Server': FaDatabase,
}

const ToolIcon: React.FC<ToolIconProps> = ({ toolName, className }) => {
  const Icon = toolIcons[toolName]
  return Icon ? (
    <Icon className={`w-4 h-4 inline-block align-middle ${className}`} />
  ) : (
    <span>{toolName}</span>
  )
}

export default ToolIcon