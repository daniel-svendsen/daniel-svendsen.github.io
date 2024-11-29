import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pictures/LOGO.png'; // Importera logotypen

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Hantera menyns öppna/stängda status

    return (
        <nav className="w-full bg-white shadow-md py-4 px-6">
            <div className="flex justify-between items-center">
                {/* Logotyp och text */}
                <div className="flex items-center space-x-4">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-10 h-10 object-cover rounded-full" // Justera storlek och form
                    />
                    <Link to="/" className="text-lg font-bold text-gray-900 hover:text-gray-700">
                        Svendsén Photography
                    </Link>
                </div>

                {/* Hamburger-meny för mobiler */}
                <button
                    className="block md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Navigeringslänkar (desktop) */}
                <div className="hidden md:flex space-x-4">
                    <Link
                        to="/"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                    >
                        Hem
                    </Link>
                    <Link
                        to="/services"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                    >
                        Tjänster
                    </Link>
                    <Link
                        to="/faq"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                    >
                        FAQ
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                    >
                        Kontakt
                    </Link>
                </div>
            </div>

            {/* Popdown-menyn för mobiler */}
            {isMenuOpen && (
                <div className="mt-4 md:hidden flex flex-col space-y-2">
                    <Link
                        to="/"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Hem
                    </Link>
                    <Link
                        to="/services"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Tjänster
                    </Link>
                    <Link
                        to="/faq"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        FAQ
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Kontakt
                    </Link>
                </div>
            )}
        </nav>
    );
}
