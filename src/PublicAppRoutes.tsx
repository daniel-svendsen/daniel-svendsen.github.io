import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from '@/components/Navbar'
import PublicFooter from '@/components/PublicFooter'
import ScrollToTop from '@/components/ScrollToTop'
import { PUBLIC_ROUTE_PATHS, PUBLIC_ROUTER_PATHS } from '@/config/publicRoutes'

import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import CaseStudies from './pages/CaseStudies'
import CaseKungalv from './pages/CaseKungalv'
import CaseStenungsund from './pages/CaseStenungsund'
import Guides from './pages/Guides'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Portraits from './pages/Portraits'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Services from './pages/Services'
import WebServicesPage from './pages/WebServices'
import Weddings from './pages/Weddings'
import WeddingPhotoPlanner from './pages/WeddingPhotoPlanner'
import WeddingPhotographerKungalv from './pages/WeddingPhotographerKungalv'
import WeddingTimelineGuide from './pages/WeddingTimelineGuide'
import WeddingWalkGuide from './pages/WeddingWalkGuide'

const footerRoutes = new Set<string>(PUBLIC_ROUTER_PATHS)

export default function PublicAppRoutes() {
  const location = useLocation()
  const normalizedPathname =
    location.pathname !== '/' && location.pathname.endsWith('/')
      ? location.pathname.slice(0, -1)
      : location.pathname
  const showPublicFooter = footerRoutes.has(normalizedPathname)

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path={PUBLIC_ROUTE_PATHS.home} element={<Home />} />
        <Route path={PUBLIC_ROUTE_PATHS.services} element={<Services />} />
        <Route path={PUBLIC_ROUTE_PATHS.portraits} element={<Portraits />} />
        <Route path={PUBLIC_ROUTE_PATHS.weddings} element={<Weddings />} />
        <Route path={PUBLIC_ROUTE_PATHS.contact} element={<Contact />} />
        <Route path={PUBLIC_ROUTE_PATHS.faq} element={<FAQ />} />
        <Route path={PUBLIC_ROUTE_PATHS.guides} element={<Guides />} />
        <Route
          path={PUBLIC_ROUTE_PATHS.weddingPhotoPlanner}
          element={<WeddingPhotoPlanner />}
        />
        <Route
          path={PUBLIC_ROUTE_PATHS.weddingWalkGuide}
          element={<WeddingWalkGuide />}
        />
        <Route
          path={PUBLIC_ROUTE_PATHS.weddingTimelineGuide}
          element={<WeddingTimelineGuide />}
        />
        <Route
          path={PUBLIC_ROUTE_PATHS.weddingPhotographerKungalv}
          element={<WeddingPhotographerKungalv />}
        />
        <Route
          path={PUBLIC_ROUTE_PATHS.weddingCases}
          element={<CaseStudies />}
        />
        <Route
          path={PUBLIC_ROUTE_PATHS.weddingCaseKungalv}
          element={<CaseKungalv />}
        />
        <Route
          path={PUBLIC_ROUTE_PATHS.weddingCaseStenungsund}
          element={<CaseStenungsund />}
        />
        <Route
          path={PUBLIC_ROUTE_PATHS.webservices}
          element={<WebServicesPage />}
        />
        <Route path={PUBLIC_ROUTE_PATHS.privacy} element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showPublicFooter && <PublicFooter />}
    </>
  )
}
