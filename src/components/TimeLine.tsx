import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'

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
      {events.map((event, index) => {
        const ref = useRef<HTMLDivElement>(null)
        const { isInView, delayedOutOfView } = useInView(ref, 0.5, 500)

        const scaleClass = isInView
          ? 'scale-105 shadow-xl'
          : delayedOutOfView
            ? 'scale-100'
            : 'scale-100'

        return (
          <div
            key={index}
            ref={ref}
            className={`relative mb-8 transition-transform duration-500 ease-out transform group ${scaleClass}`}
          >
            <div className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 ease-out group-hover:scale-105">
              <h3 className="text-base sm:text-xl font-semibold text-gray-900">
                {event.title}
              </h3>
              <span className="block text-xs sm:text-sm text-gray-500">
                {event.date}
              </span>
              <p className="mt-2 text-xs sm:text-sm text-gray-700">
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
          </div>
        )
      })}
    </div>
  )
}