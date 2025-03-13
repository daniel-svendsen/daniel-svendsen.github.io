// src/components/TimeLine.tsx
import React from 'react'
import { motion } from 'framer-motion'

export interface TimelineEvent {
  title: string
  date: string
  description: string
  link?: { text: string; href: string }
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="w-full">
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="relative mb-8"
          initial={{ opacity: 1, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="bg-white p-4 rounded-lg shadow-md duration-300 ease-out group-hover:scale-105">
            <h3 className="text-base sm:text-xl font-semibold text-textPrimary">
              {event.title}
            </h3>
            <span className="block text-xs sm:text-sm text-textSecondary">
              {event.date}
            </span>
            <p className="mt-2 text-xs sm:text-sm text-textSecondary">
              {event.description}
              {event.link && event.link.href && (
                <span>
                  {' '}
                  <a
                    href={event.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight underline"
                  >
                    {event.link.text || event.link.href}
                  </a>
                </span>
              )}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
