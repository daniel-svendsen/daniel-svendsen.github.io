// src/components/WorkTabs/Hobbies.tsx
import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { CvContent } from '../../types/CvTypes'

interface HobbiesProps {
  hobbies: CvContent[]
}

const Hobbies: React.FC<HobbiesProps> = ({hobbies}) => {
    return (
        <SectionWrapper title="Hobbies">
            {hobbies.map((item) => (
                <div key={item.id} className="mb-4 bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-textSecondary">{item.description}</p>
                </div>
            ))}
        </SectionWrapper>
    )
}

export default Hobbies
