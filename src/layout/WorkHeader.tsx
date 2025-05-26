// src/components/Layout/WorkHeader.tsx
import React from 'react'
import profileImg from '../assets/bild1.jpg'

interface WorkHeaderProps {
  title: string
  description: string
}

const WorkHeader: React.FC<WorkHeaderProps> = ({ title, description }) => {
  return (
    <header className="pt-20 bg-custom-beige p-6 flex flex-col items-center">
      <img
        src={profileImg}
        alt="Profile"
        className="w-20 h-24 sm:w-32 sm:h-32 rounded-full mb-4 object-cover"
      />
      <div className="text-center px-2">
        <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
        <p className="mt-2 max-w-xl text-textSecondary">{description}</p>
      </div>
    </header>
  )
}

export default WorkHeader
