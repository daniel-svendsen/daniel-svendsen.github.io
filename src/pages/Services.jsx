// pages/Services.jsx

import React from 'react';
import Card from '../components/Card';
import { serviceCards } from '../data/cards';

export default function Services() {
    return (
        <main className="p-6">
            <header>
                <h1 className="text-center text-3xl font-bold mb-12">Prislista</h1>
            </header>
            <section
                aria-label="Våra tjänster"
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {serviceCards.map((service, index) => (
                    <Card key={index} {...service} />
                ))}
            </section>
        </main>
    );
}
