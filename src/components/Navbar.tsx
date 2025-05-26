import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/pictures/LOGO.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Hem' },
    { to: '/services', label: 'Tjänster' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Kontakt' },
    { to: '/portraits', label: 'Porträtt' },
    { to: '/weddings', label: 'Bröllop' },
  ]

  const linkClasses =
    'text-textPrimary hover:text-highlight font-medium transition-colors'

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 transition-all duration-300 z-50 
        ${isScrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-5 backdrop-blur-lg'}`}
    >
      <nav className="flex items-center justify-between py-4 px-6 w-full">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Svendsén Photography logo"
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="text-lg font-bold text-textPrimary hover:text-highlight">
              Svendsén Photography
            </span>
          </a>
        </div>
        <div className="flex-1 hidden md:flex justify-end space-x-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? 'text-highlight' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <button
          className="block md:hidden text-textPrimary focus:outline-none"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <nav
          className="mt-4 md:hidden bg-white bg-opacity-90 shadow-md p-4"
          aria-label="Mobile main navigation"
        >
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
  )
}

export default Navbar