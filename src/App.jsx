// App.jsx

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";

// Lazy load dina sidkomponenter
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Portraits = React.lazy(() => import('./pages/Portraits'));
const Weddings = React.lazy(() => import('./pages/Weddings'));
const Contact = React.lazy(() => import('./pages/Contact'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
// Lägg till andra sidor vid behov

function App() {
    return (
        <Router>
            <Navbar />
            <Suspense fallback={<div>Laddar...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portraits" element={<Portraits />} />
                    <Route path="/weddings" element={<Weddings />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    {/* Lägg till andra rutter */}
                </Routes>
            </Suspense>
        </Router>
    );
}


export default App;
