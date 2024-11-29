// components/Navbar.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/pictures/LOGO.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { to: '/', label: 'Hem' },
        { to: '/services', label: 'Tjänster' },
        { to: '/faq', label: 'FAQ' },
        { to: '/contact', label: 'Kontakt' },
    ];

    const linkClasses = 'text-gray-700 hover:text-gray-900 font-medium transition-colors';

    return (
        <header className="w-full bg-white shadow-md py-4 px-6">
            <nav className="flex justify-between items-center" aria-label="Huvudnavigation">
                {/* Logotyp och text */}
                <div className="flex items-center space-x-4">
                    <a href="/" className="flex items-center">
                        <img src={logo} alt="Svendsén Photography logotyp" className="w-10 h-10 object-cover rounded-full" />
                        <span className="text-lg font-bold text-gray-900 hover:text-gray-700 ml-2">
                            Svendsén Photography
                        </span>
                    </a>
                </div>

                {/* Hamburger-meny för mobiler */}
                <button
                    className="block md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Öppna huvudmeny"
                    aria-expanded={isMenuOpen}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Navigeringslänkar (desktop) */}
                <ul className="hidden md:flex space-x-4">
                    {navLinks.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `${linkClasses} ${isActive ? 'text-blue-600' : ''}`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Popdown-menyn för mobiler */}
            {isMenuOpen && (
                <nav className="mt-4 md:hidden" aria-label="Mobil huvudnavigation">
                    <ul className="flex flex-col space-y-2">
                        {navLinks.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={linkClasses}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
