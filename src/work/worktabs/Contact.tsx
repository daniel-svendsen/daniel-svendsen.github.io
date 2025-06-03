import React from 'react'
import { LinkButton } from '@/components/Button'
import { CvContact, LocalizedContent } from '@/types/CvTypes'
import { SectionContent } from '@/components/SectionContent'
import { Section } from '@/components/Section'
import { useLanguage } from '@/context/LanguageContext'

interface ContactProps {
  contacts: CvContact[]
}

const Contact: React.FC<ContactProps> = ({ contacts }) => {
  const { t } = useLanguage()

  const headingContact: LocalizedContent = {
    en: 'Contact Information',
    sv: 'Kontaktinformation',
  }
  const linkedInText: LocalizedContent = { en: 'LinkedIn', sv: 'LinkedIn' }
  const visitProfileText: LocalizedContent = {
    en: 'Visit Profile',
    sv: 'Besök Profil',
  }
  const linkText: LocalizedContent = { en: 'Link', sv: 'Länk' }

  return (
    <Section roundedTop="8xl">
      <SectionContent heading={t(headingContact)}>
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
            >
              <p className="text-textPrimary dark:text-gray-200">
                <span className="font-semibold">{t(contact.type)}:</span>{' '}
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
                  {t(contact.type) === t(linkedInText)
                    ? t(visitProfileText)
                    : t(linkText)}
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