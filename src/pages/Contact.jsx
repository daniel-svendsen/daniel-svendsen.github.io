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
        'Annat',
    ];

    return (
        <main className="p-6 max-w-4xl mx-auto">
            <header>
                <h1 className="text-2xl font-bold mb-6">Kontakta mig gärna via e-post!</h1>
            </header>
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

                {/* E-post */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        E-postadress *
                    </label>
                    <input
                        id="email"
                        name="_replyto"
                        type="email"
                        required
                        placeholder="Din e-postadress"
                        className="block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Tjänst */}
                <fieldset className="md:col-span-2">
                    <legend className="block text-sm font-medium mb-2">
                        Vilken tjänst är du intresserad av? *
                    </legend>
                    <div className="space-y-2">
                        {services.map((service) => (
                            <div key={service} className="flex items-center">
                                <input
                                    type="radio"
                                    id={service}
                                    name="service"
                                    value={service}
                                    checked={selectedService === service}
                                    onChange={() => setSelectedService(service)}
                                    className="form-radio h-4 w-4 text-blue-600"
                                />
                                <label htmlFor={service} className="ml-2 text-sm text-gray-700">
                                    {service}
                                </label>
                            </div>
                        ))}
                    </div>
                </fieldset>

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
        </main>
    );
}
