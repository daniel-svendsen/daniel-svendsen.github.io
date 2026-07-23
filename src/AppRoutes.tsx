import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'

import { AuthProvider } from '@/admin/context/AuthContext'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import Navbar from '@/components/Navbar'
import PublicFooter from '@/components/PublicFooter'
import ScrollToTop from '@/components/ScrollToTop'
import {
  PUBLIC_ROUTE_KEYS,
  PUBLIC_ROUTE_PATHS,
  type PublicRouteKey,
} from '@/config/publicRoutes'
import {
  APP_ROUTE_PATHS,
  isIndexablePublicRoute,
  shouldNoIndexRoute,
} from '@/config/routeClassification'

const Home = React.lazy(() => import('./pages/Home'))
const Services = React.lazy(() => import('./pages/Services'))
const BusinessPhotography = React.lazy(
  () => import('./pages/BusinessPhotography'),
)
const ProductPhotography = React.lazy(
  () => import('./pages/ProductPhotography'),
)
const ProductCaseForPros = React.lazy(
  () => import('./pages/ProductCaseForPros'),
)
const FamilyPhotography = React.lazy(() => import('./pages/FamilyPhotography'))
const FamilyCaseEventladan = React.lazy(
  () => import('./pages/FamilyCaseEventladan'),
)
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

const publicRouteComponents = {
  home: Home,
  services: Services,
  businessPhotography: BusinessPhotography,
  productPhotography: ProductPhotography,
  productCaseForPros: ProductCaseForPros,
  familyPhotography: FamilyPhotography,
  familyCaseEventladan: FamilyCaseEventladan,
  portraits: Portraits,
  weddings: Weddings,
  contact: Contact,
  faq: FAQ,
  webservices: WebServicesPage,
  guides: Guides,
  weddingPhotoPlanner: WeddingPhotoPlanner,
  weddingWalkGuide: WeddingWalkGuide,
  weddingTimelineGuide: WeddingTimelineGuide,
  weddingPhotographerKungalv: WeddingPhotographerKungalv,
  weddingCases: CaseStudies,
  weddingCaseKungalv: CaseKungalv,
  weddingCaseStenungsund: CaseStenungsund,
  privacy: PrivacyPolicy,
} satisfies Record<PublicRouteKey, React.ComponentType>

function RouteIndexingGuards() {
  const location = useLocation()

  if (!shouldNoIndexRoute(location.pathname)) {
    return null
  }

  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
    </Helmet>
  )
}

function AdminAuthRoutes() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}

export default function AppRoutes() {
  const location = useLocation()
  const showPublicFooter = isIndexablePublicRoute(location.pathname)

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
          {PUBLIC_ROUTE_KEYS.map((routeKey) => {
            const Component = publicRouteComponents[routeKey]

            return (
              <Route
                key={routeKey}
                path={PUBLIC_ROUTE_PATHS[routeKey]}
                element={<Component />}
              />
            )
          })}
          <Route path={APP_ROUTE_PATHS.work} element={<Work />} />
          <Route
            path={APP_ROUTE_PATHS.gallery}
            element={<CustomerGalleryPage />}
          />
          <Route
            path={APP_ROUTE_PATHS.appShell}
            element={<Navigate to={APP_ROUTE_PATHS.adminLogin} replace />}
          />
          <Route element={<AdminAuthRoutes />}>
            <Route
              path={APP_ROUTE_PATHS.adminLogin}
              element={<AdminLoginPage />}
            />
            <Route path={APP_ROUTE_PATHS.admin} element={<ProtectedRoute />}>
              <Route index element={<AdminDashboardPage />} />
              <Route
                path={APP_ROUTE_PATHS.adminGallery}
                element={<GalleryDetailPage />}
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {showPublicFooter && <PublicFooter />}
    </>
  )
}
