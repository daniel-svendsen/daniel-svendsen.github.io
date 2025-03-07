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
    <div className="relative border-l-4 border-gray-300 pl-12">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 1 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ scale: 1.05 }}
          exit={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
          viewport={{ amount: 0.5, once: false }}
          className="relative mb-8"
        >
          <motion.div
            className="absolute -left-8 top-0 w-8 h-8 bg-gray-800 rounded-full border-4 border-white shadow-lg"
            whileInView={{ scale: 1.2 }}
            exit={{ scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />

          <div className="ml-4 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              {event.title}
            </h3>
            <span className="block text-sm text-gray-500">{event.date}</span>
            <p className="mt-2 text-gray-700">
              {event.description}
              {event.link && event.link.href && (
                <span>
                  {' '}
                  <a
                    href={event.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
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