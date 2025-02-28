import React, {FormEvent, useState} from 'react';
import {Helmet} from "react-helmet-async";

export default function Contact() {
    const [selectedService, setSelectedService] = useState<string>('');
    const [formStatus, setFormStatus] = useState<string | null>(null);

    const services = [
        'Utefotografering',
        'Studiofoto',
        'Bröllop',
        'Företagsporträtt',
        'Produktfotografering',
        'Hobby',
        'Annat',
    ];

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        // Konvertera FormData till JSON
        const formData = new FormData(form);
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
            data[key] = value as string;
        });

        try {
            const response = await fetch('https://formspree.io/f/xvgowldv', {
                method: 'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus('success');
                if (form) form.reset();
            } else {
                const errorData = await response.json();
                console.error("Formspree error:", errorData);
                setFormStatus('error');
            }
        } catch (error) {
            console.error("Formspree network error:", error);
            setFormStatus('error');
        }
    };


    return (
        <main className="p-6 max-w-4xl mx-auto">
            <Helmet>
                <title>Kontakta Fotograf i Göteborg & Kungälv - Svendsén Photography</title>
                <meta name="description"
                      content="Kontakta Svendsén Photography för bröllop, porträtt, företagsfoto och eventfotografering i Göteborg och Kungälv. Skicka din förfrågan idag!"/>
                <meta name="keywords"
                      content="kontakt fotograf, fotograf göteborg kontakt, fotograf kungälv kontakt, boka fotograf, offert fotografering"/>
                <meta property="og:title" content="Kontakta Svendsén Photography"/>
                <meta property="og:description"
                      content="Boka en fotografering i Göteborg & Kungälv. Skicka en förfrågan enkelt via vårt kontaktformulär."/>
                <meta property="og:url" content="https://www.svendsenphotography.com/contact"/>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Kontakta Svendsén Photography",
                        "description": "Boka en fotografering i Kungälv & Göteborg",
                        "url": "https://www.svendsenphotography.com/contact",
                    })}
                </script>
            </Helmet>

            <header>
                <h1 className="text-2xl font-bold mb-6">Kontakta mig gärna via e-post!</h1>
            </header>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Ditt namn *</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ditt namn"
                        className="block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">E-postadress *</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Din e-postadress"
                        className="block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <fieldset className="md:col-span-2">
                    <legend className="block text-sm font-medium mb-2">Vilken tjänst är du intresserad av? *</legend>
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
                                <label htmlFor={service} className="ml-2 text-sm text-gray-700">{service}</label>
                            </div>
                        ))}
                    </div>
                </fieldset>
                <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Meddelande *</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Ditt meddelande här"
                        className="block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Skicka
                    </button>
                </div>
            </form>
            {formStatus === 'success' && <p className="mt-4 text-green-600">Tack! Ditt meddelande har skickats.</p>}
            {formStatus === 'error' && <p className="mt-4 text-red-600">Ett fel uppstod. Försök igen senare.</p>}
        </main>
    );
}