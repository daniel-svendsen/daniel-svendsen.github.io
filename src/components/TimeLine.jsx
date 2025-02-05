import React from 'react';

export default function Timeline({ events }) {
    return (
        <div className="relative border-l-4 border-gray-300 pl-12">
            {events.map((event, index) => (
                <div
                    key={index}
                    className="mb-8 relative transform transition duration-300 hover:scale-105"
                >
                    <div className="absolute -left-8 top-0 w-8 h-8 bg-gray-800 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
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
                </div>
            ))}
        </div>
    );
}
