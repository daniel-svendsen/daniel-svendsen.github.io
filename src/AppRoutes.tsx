import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, Routes, useLocation } from 'react-router-dom'

import { ProtectedRoute } from '@/components/ProtectedRoute'
import Navbar from '@/components/Navbar'
import PublicFooter from '@/components/PublicFooter'
import ScrollToTop from '@/components/ScrollToTop'

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

export const prerenderRoutes = [
  '/',
  '/services/',
  '/portraits/',
  '/weddings/',
  '/contact/',
  '/faq/',
  '/webservices/',
  '/guider/',
  '/guider/brollopsplanerare/',
  '/guider/brollopsbilder-promenad/',
  '/guider/brollopstidslinje/',
  '/brollopsfotograf-kungalv/',
  '/brollop/',
  '/brollop/kungalv/',
  '/brollop/stenungsund/',
  '/privacy/',
]

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
  const footerRoutes = new Set([
    '/',
    '/services',
    '/portraits',
    '/weddings',
    '/contact',
    '/faq',
    '/webservices',
    '/guider',
    '/guider/brollopsplanerare',
    '/guider/brollopsbilder-promenad',
    '/guider/brollopstidslinje',
    '/brollopsfotograf-kungalv',
    '/brollop',
    '/brollop/kungalv',
    '/brollop/stenungsund',
    '/privacy',
  ])

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
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/guider" element={<Guides />} />
          <Route
            path="/guider/brollopsplanerare"
            element={<WeddingPhotoPlanner />}
          />
          <Route
            path="/guider/brollopsbilder-promenad"
            element={<WeddingWalkGuide />}
          />
          <Route
            path="/guider/brollopstidslinje"
            element={<WeddingTimelineGuide />}
          />
          <Route
            path="/brollopsfotograf-kungalv"
            element={<WeddingPhotographerKungalv />}
          />
          <Route path="/brollop" element={<CaseStudies />} />
          <Route path="/brollop/kungalv" element={<CaseKungalv />} />
          <Route path="/brollop/stenungsund" element={<CaseStenungsund />} />
          <Route path="/work" element={<Work />} />
          <Route path="/webservices" element={<WebServicesPage />} />
          <Route
            path="/galleri/:galleryId"
            element={<CustomerGalleryPage />}
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route index element={<AdminDashboardPage />} />
            <Route
              path="gallery/:galleryId"
              element={<GalleryDetailPage />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {showPublicFooter && <PublicFooter />}
    </>
  )
}
