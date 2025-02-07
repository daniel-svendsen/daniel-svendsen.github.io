import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/pictures/LOGO.png';
import React from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navLinks = [
        { to: '/', label: 'Hem' },
        { to: '/services', label: 'Tjänster' },
        { to: '/faq', label: 'FAQ' },
        { to: '/contact', label: 'Kontakt' },
        { to: '/portraits', label: 'Porträtt' },
        { to: '/weddings', label: 'Bröllop' },
    ];

    const linkClasses = 'text-gray-700 hover:text-gray-900 font-medium transition-colors';

    return (
        <header className="w-full bg-white shadow-md py-4 px-6">
            <nav className="flex justify-between items-center" aria-label="Main navigation">
                <div className="flex items-center space-x-4">
                    <a href="/" className="flex items-center">
                        <img src={logo} alt="Svendsén Photography logo" className="w-10 h-10 object-cover rounded-full" />
                        <span className="text-lg font-bold text-gray-900 hover:text-gray-700 ml-2">
                            Svendsén Photography
                        </span>
                    </a>
                </div>
                <button
                    className="block md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Open main menu"
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
                <ul className="hidden md:flex space-x-4">
                    {navLinks.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) => `${linkClasses} ${isActive ? 'text-blue-600' : ''}`}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            {isMenuOpen && (
                <nav className="mt-4 md:hidden" aria-label="Mobile main navigation">
                    <ul className="flex flex-col space-y-2">
                        {navLinks.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink to={to} className={linkClasses} onClick={() => setIsMenuOpen(false)}>
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
