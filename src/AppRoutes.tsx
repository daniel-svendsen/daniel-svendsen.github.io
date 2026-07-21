import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { ProtectedRoute } from '@/components/ProtectedRoute'
import Navbar from '@/components/Navbar'
import PublicFooter from '@/components/PublicFooter'
import ScrollToTop from '@/components/ScrollToTop'
import { PUBLIC_ROUTE_PATHS, PUBLIC_ROUTER_PATHS } from '@/config/publicRoutes'

const Home = React.lazy(() => import('./pages/Home'))
const Services = React.lazy(() => import('./pages/Services'))
const Portraits = React.lazy(() => import('./pages/Portraits'))
const Weddings = React.lazy(() => import('./pages/Weddings'))
const Contact = React.lazy(() => import('./pages/Contact'))
const FAQ = React.lazy(() => import('./pages/FAQ'))
const Work = React.lazy(() => import('./pages/Work'))
const WebServicesPage = React.lazy(() => import('./pages/WebServices'))
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'))
const Guides = React.lazy(() => import('./pages/Guides'))
const WeddingPhotoPlanner = React.lazy(
  () => import('./pages/WeddingPhotoPlanner'),
)
const WeddingWalkGuide = React.lazy(() => import('./pages/WeddingWalkGuide'))
const WeddingTimelineGuide = React.lazy(
  () => import('./pages/WeddingTimelineGuide'),
)
const WeddingPhotographerKungalv = React.lazy(
  () => import('./pages/WeddingPhotographerKungalv'),
)
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'))
const CaseKungalv = React.lazy(() => import('./pages/CaseKungalv'))
const CaseStenungsund = React.lazy(() => import('./pages/CaseStenungsund'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const AdminLoginPage = React.lazy(() => import('./admin/pages/AdminLoginPage'))
const AdminDashboardPage = React.lazy(
  () => import('./admin/pages/AdminDashboardPage'),
)
const GalleryDetailPage = React.lazy(
  () => import('./admin/pages/GalleryDetailPage'),
)
const CustomerGalleryPage = React.lazy(
  () => import('./admin/pages/CustomerGalleryPage'),
)

const footerRoutes = new Set<string>(PUBLIC_ROUTER_PATHS)

function RouteIndexingGuards() {
  const location = useLocation()
  const isNoIndexRoute =
    location.pathname === '/work' ||
    location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/galleri/')

  if (!isNoIndexRoute) {
    return null
  }

  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
    </Helmet>
  )
}

export default function AppRoutes() {
  const location = useLocation()
  const normalizedPathname =
    location.pathname !== '/' && location.pathname.endsWith('/')
      ? location.pathname.slice(0, -1)
      : location.pathname
  const showPublicFooter = footerRoutes.has(normalizedPathname)

  return (
    <>
      <RouteIndexingGuards />
      <Navbar />
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center text-lg">
            Laddar sidan...
          </div>
        }
      >
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
          <Route path="/work" element={<Work />} />
          <Route
            path={PUBLIC_ROUTE_PATHS.webservices}
            element={<WebServicesPage />}
          />
          <Route path="/galleri/:galleryId" element={<CustomerGalleryPage />} />
          <Route
            path={PUBLIC_ROUTE_PATHS.privacy}
            element={<PrivacyPolicy />}
          />
          <Route
            path="/app-shell"
            element={<Navigate to="/admin/login" replace />}
          />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="gallery/:galleryId" element={<GalleryDetailPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {showPublicFooter && <PublicFooter />}
    </>
  )
}
