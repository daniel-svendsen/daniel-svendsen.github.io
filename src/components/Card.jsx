// components/Card.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ image, title, description, price, buttonText, buttonLink, onClick }) {
    return (
        <div className="flex flex-col border rounded-lg shadow-md p-4 h-full" onClick={onClick}>
            {image && (
                <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg mb-4 group">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            )}
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">{description}</p>
            {price && <p className="text-lg font-bold mt-6">{price}</p>}
            {buttonText && buttonLink && (
                <Link
                    to={buttonLink}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
                >
                    {buttonText}
                </Link>
            )}
        </div>
    );
}
