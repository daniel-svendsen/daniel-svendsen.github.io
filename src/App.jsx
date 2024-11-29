import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
