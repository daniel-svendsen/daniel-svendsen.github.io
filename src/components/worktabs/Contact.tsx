// src/components/WorkTabs/Contact.tsx
import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { CvContact } from '@/api'

interface ContactProps {
  contacts: CvContact[]
}

const Contact: React.FC<ContactProps> = ({ contacts }) => {
  return (
    <SectionWrapper title="Contact">
      {contacts.map((contact) => (
        <div key={contact.id} className="bg-white p-4 mb-4 rounded shadow">
          <p className="text-textPrimary">
            <span className="font-semibold">{contact.type}:</span>{' '}
            {contact.details}
          </p>
          {contact.linkHref && (
            <a
              href={contact.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-highlight underline"
            >
              Link
            </a>
          )}
        </div>
      ))}
    </SectionWrapper>
  )
}

export default Contact
