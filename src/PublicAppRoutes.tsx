import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from '@/components/Navbar'
import PublicFooter from '@/components/PublicFooter'
import ScrollToTop from '@/components/ScrollToTop'

import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Home from './pages/Home'
import Portraits from './pages/Portraits'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Services from './pages/Services'
import WebServicesPage from './pages/WebServices'
import Weddings from './pages/Weddings'

export const prerenderRoutes = [
  '/',
  '/services',
  '/portraits',
  '/weddings',
  '/contact',
  '/faq',
  '/webservices',
  '/privacy',
]

export default function PublicAppRoutes() {
  const location = useLocation()
  const footerRoutes = new Set(prerenderRoutes)
  const showPublicFooter = footerRoutes.has(location.pathname)

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/webservices" element={<WebServicesPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      {showPublicFooter && <PublicFooter />}
    </>
  )
}
