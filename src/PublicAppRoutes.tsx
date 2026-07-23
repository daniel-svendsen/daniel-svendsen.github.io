import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Navbar from '@/components/Navbar'
import PublicFooter from '@/components/PublicFooter'
import ScrollToTop from '@/components/ScrollToTop'
import {
  PUBLIC_ROUTE_KEYS,
  PUBLIC_ROUTE_PATHS,
  type PublicRouteKey,
} from '@/config/publicRoutes'
import { isIndexablePublicRoute } from '@/config/routeClassification'

import Contact from './pages/Contact'
import BusinessPhotography from './pages/BusinessPhotography'
import ProductPhotography from './pages/ProductPhotography'
import ProductCaseForPros from './pages/ProductCaseForPros'
import FAQ from './pages/FAQ'
import FamilyCaseEventladan from './pages/FamilyCaseEventladan'
import FamilyPhotography from './pages/FamilyPhotography'
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

export default function PublicAppRoutes() {
  const location = useLocation()
  const showPublicFooter = isIndexablePublicRoute(location.pathname)

  return (
    <>
      <Navbar />
      <ScrollToTop />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showPublicFooter && <PublicFooter />}
    </>
  )
}
