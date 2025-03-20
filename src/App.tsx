import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Work from './pages/Work'

const Home = React.lazy(() => import('./pages/Home'))
const Services = React.lazy(() => import('./pages/Services'))
const Portraits = React.lazy(() => import('./pages/Portraits'))
const Weddings = React.lazy(() => import('./pages/Weddings'))
const Contact = React.lazy(() => import('./pages/Contact'))
const FAQ = React.lazy(() => import('./pages/FAQ'))
const Recipes = React.lazy(() => import('./pages/Recipes'))

function App() {
  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portraits" element={<Portraits />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/work" element={<Work />} />
            <Route path="/recipes" element={<Recipes />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  )
}

export default App