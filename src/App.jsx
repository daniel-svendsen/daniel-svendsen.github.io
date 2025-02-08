import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Work from "./pages/Work";

const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Portraits = React.lazy(() => import('./pages/Portraits'));
const Weddings = React.lazy(() => import('./pages/Weddings'));
const Contact = React.lazy(() => import('./pages/Contact'));
const FAQ = React.lazy(() => import('./pages/FAQ'));

function App() {
    return (
        <Router>
            <Navbar/>
            <Suspense fallback={<div>Laddar...</div>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/portraits" element={<Portraits/>}/>
                    <Route path="/weddings" element={<Weddings/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="/work" element={<Work/>}/>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
