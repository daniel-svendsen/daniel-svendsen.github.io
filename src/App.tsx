import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import { LanguageProvider } from '@/context/LanguageContext'
import { AuthProvider } from '@/admin/context/AuthContext'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

const Home = React.lazy(() => import('./pages/Home'))
const Services = React.lazy(() => import('./pages/Services'))
const Portraits = React.lazy(() => import('./pages/Portraits'))
const Weddings = React.lazy(() => import('./pages/Weddings'))
const Contact = React.lazy(() => import('./pages/Contact'))
const FAQ = React.lazy(() => import('./pages/FAQ'))
const Work = React.lazy(() => import('./pages/Work'))
const WebServicesPage = React.lazy(() => import('./pages/WebServices'))
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'))

// --- Nya och ändrade admin-importer ---
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

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <AuthProvider>
          <Router
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
          >
            <Navbar />
            <ScrollToTop />
            <Suspense
              fallback={
                <div className="h-screen flex justify-center items-center text-lg">
                  Laddar sidan...
                </div>
              }
            >
              <Routes>
                {/* === Publika Routes === */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portraits" element={<Portraits />} />
                <Route path="/weddings" element={<Weddings />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/work" element={<Work />} />
                <Route path="/webservices" element={<WebServicesPage />} />
                <Route
                  path="/galleri/:galleryId"
                  element={<CustomerGalleryPage />}
                />
                <Route path="/privacy" element={<PrivacyPolicy />} />

                {/* === Admin Routes === */}
                <Route path="/admin/login" element={<AdminLoginPage />} />

                {/* Skyddade admin-sidor */}
                <Route path="/admin" element={<ProtectedRoute />}>
                  <Route index element={<AdminDashboardPage />} />
                  <Route
                    path="gallery/:galleryId"
                    element={<GalleryDetailPage />}
                  />
                </Route>
              </Routes>
            </Suspense>
          </Router>
        </AuthProvider>
      </LanguageProvider>
    </HelmetProvider>
  )
}

export default App
