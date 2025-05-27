import React from 'react'
import { LinkButton } from '@/components/Button'
import { CvContact } from '@/types/CvTypes'
import { SectionContent } from '@/components/SectionContent'
import { Section } from '@/components/Section'

interface ContactProps {
  contacts: CvContact[]
}

const Contact: React.FC<ContactProps> = ({ contacts }) => {
  return (
    <Section roundedTop="8xl">
      <SectionContent heading="Contact Information">
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
            >
              <p className="text-textPrimary dark:text-gray-200">
                <span className="font-semibold">{contact.type}:</span>{' '}
                {contact.details}
              </p>
              {contact.linkHref && (
                <LinkButton
                  to={contact.linkHref}
                  variant="outline"
                  size="sm"
                  subVariant="rounded"
                  className="mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.type === 'LinkedIn' ? 'Besök profil' : 'Länk'}
                </LinkButton>
              )}
            </div>
          ))}
        </div>
      </SectionContent>
    </Section>
  )
}

export default Contact