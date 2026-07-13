import React from 'react'
import { NavLink } from 'react-router-dom'

import { BUSINESS } from '@/config/seo'

const footerLinks = [
  { to: '/contact/', label: 'Kontakt' },
  { to: '/faq/', label: 'FAQ' },
  { to: '/webservices/', label: 'Webbtjänster' },
  { to: '/privacy/', label: 'Integritetspolicy' },
]

export default function PublicFooter() {
  return (
    <footer className="border-t border-black/5 bg-[rgba(249,248,245,0.88)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-textSecondary md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium tracking-[0.01em] text-textPrimary">
            Svendsén Photography
          </p>
          <p className="mt-1 text-textSecondary/90">
            Fotograf i Kungälv, Göteborg och Stenungsund
          </p>
          <p className="mt-1 text-textSecondary/90">
            {BUSINESS.openingHours} · {BUSINESS.phoneDisplay}
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6"
        >
          {footerLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="transition-colors hover:text-textPrimary"
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  )
}
