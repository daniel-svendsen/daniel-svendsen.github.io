import React from 'react'
import { motion } from 'framer-motion'
import { LinkButton } from '@/components/Button'

export interface TimelineEventLink {
  text: string
  href: string
}

export interface TimelineEvent {
  title: string
  date: string
  description: string
  links?: TimelineEventLink[]
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-base sm:text-lg font-semibold text-textPrimary dark:text-white">
              {event.title}
            </h3>
            <span className="block text-xs sm:text-sm text-textSecondary dark:text-gray-400">
              {event.date}
            </span>
            <p className="mt-2 text-xs sm:text-sm text-primary dark:text-gray-300 whitespace-pre-line">
              {event.description}
              {event.links && event.links.length > 0 && (
                <>
                  {' '}
                  {event.links.map((link, linkIndex) => (
                    <React.Fragment key={linkIndex}>
                      <LinkButton
                        to={link.href}
                        variant="outline"
                        subVariant="rounded"
                        size="sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text || 'Länk'}
                      </LinkButton>
                      {linkIndex < event.links.length - 1 ? ' | ' : ''}{' '}
                    </React.Fragment>
                  ))}
                </>
              )}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}