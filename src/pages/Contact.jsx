import React, { useState } from 'react';

export default function Contact() {
    const [selectedService, setSelectedService] = useState(''); // State för valt alternativ

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Kontakta mig gärna via email!</h1>
            <form
                action="https://formspree.io/f/xvgowldv" // Din Formspree-länk
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
                        {[
                            'Utefotografering',
                            'Studiofoto',
                            'Bröllop',
                            'Företagsporträtt',
                            'Produktfotografering',
                            'Presentkort',
                            'Annat',
                        ].map((service) => (
                            <div
                                key={service}
                                className="flex items-center cursor-pointer"
                                onClick={() => setSelectedService(service)} // Uppdaterar valt alternativ
                            >
                                <div
                                    className={`h-4 w-4 rounded-full border border-gray-300 flex items-center justify-center ${
                                        selectedService === service ? 'bg-blue-600 border-blue-600' : ''
                                    }`}
                                >
                                    {selectedService === service && (
                                        <div className="h-2 w-2 bg-white rounded-full"></div>
                                    )}
                                </div>
                                <label
                                    htmlFor={service}
                                    className="ml-2 text-sm text-gray-700 cursor-pointer"
                                >
                                    {service}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dold fält för tjänst */}
                <input
                    type="hidden"
                    name="service"
                    value={selectedService} // Lägg till valt alternativ i det dolda fältet
                />

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
