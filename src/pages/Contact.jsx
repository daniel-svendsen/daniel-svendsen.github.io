// pages/Contact.jsx

import React, { useState } from 'react';

export default function Contact() {
    const [selectedService, setSelectedService] = useState('');

    const services = [
        'Utefotografering',
        'Studiofoto',
        'Bröllop',
        'Företagsporträtt',
        'Produktfotografering',
        'Presentkort',
        'Annat',
    ];

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Kontakta mig gärna via email!</h1>
            <form
                action="https://formspree.io/f/xvgowldv"
                method="POST"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {/* Namn */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Ditt namn *
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ditt namn"
                        className="block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email adress *
                    </label>
                    <input
                        id="email"
                        name="_replyto"
                        type="email"
                        required
                        placeholder="Din emailadress"
                        className="block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Tjänst */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                        Vilken tjänst är du intresserad av? *
                    </label>
                    <div className="space-y-2">
                        {services.map((service) => (
                            <label key={service} className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="service"
                                    value={service}
                                    checked={selectedService === service}
                                    onChange={() => setSelectedService(service)}
                                    className="form-radio h-4 w-4 text-blue-600"
                                />
                                <span className="ml-2 text-sm text-gray-700">{service}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Meddelande */}
                <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Meddelande *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Ditt meddelande här"
                        className="block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Skicka-knapp */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Skicka
                    </button>
                </div>
            </form>
        </div>
    );
}
