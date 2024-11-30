// components/Card.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({
                                 image,
                                 imageLink, // Lagt till imageLink som prop
                                 title,
                                 description,
                                 price,
                                 buttonText,
                                 buttonLink,
                                 onClick,
                             }) {
    return (
        <article
            className="flex flex-col border rounded-lg shadow-md p-4 h-full"
            onClick={onClick}
        >
            {image && (
                <figure className="w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg mb-4">
                    {imageLink ? (
                        <Link to={imageLink} aria-label={`Visa galleri för ${title}`}>
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                                loading="lazy"
                            />
                        </Link>
                    ) : (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            loading="lazy"
                        />
                    )}
                </figure>
            )}
            {/* Omslut innehållet i en flex-container som kan växa */}
            <div className="flex-grow flex flex-col">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-sm text-gray-600 mt-2 whitespace-pre-line flex-grow">
                    {description}
                </p>
                {price && <p className="text-lg font-bold mt-6">{price}</p>}
            </div>
            {/* Placera knappen längst ner */}
            {buttonText && buttonLink && (
                <Link
                    to={buttonLink}
                    className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-700 transition"
                >
                    {buttonText}
                </Link>
            )}
        </article>
    );
}
