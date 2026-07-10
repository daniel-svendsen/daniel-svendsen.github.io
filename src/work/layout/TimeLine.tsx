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
    <div className="space-y-5">
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl border border-black/6 bg-[#f8f9fb] p-5">
            <h3 className="text-base font-semibold text-textPrimary sm:text-lg">
              {event.title}
            </h3>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary sm:text-sm">
              {event.date}
            </span>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-textPrimary/68">
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
