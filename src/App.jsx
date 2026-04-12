import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/theme.css';
import Navbar from './components/Navbar';
import ScrollToHash from './components/ScrollToHash';
import EcoToggle, { EcoProvider } from './components/EcoToggle';
import Footer from './components/Footer';
import GlobalBackground from './components/GlobalBackground';

import { HelmetProvider } from 'react-helmet-async';

// Lazy loading af sider for optimal performance og bæredygtighed
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const StartProject = lazy(() => import('./pages/StartProject'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const BookIntro = lazy(() => import('./pages/BookIntro'));
const About = lazy(() => import('./pages/About'));
const Clients = lazy(() => import('./pages/Clients'));

function App() {
  return (
    <HelmetProvider>
    <EcoProvider>
    <div className="app-container">
      <div className="global-bg"></div>
      <GlobalBackground />
      <ScrollToHash />
      <Navbar />
      <main className="main-layout" style={{ position: 'relative' }}>
        <Suspense fallback={<div style={{ minHeight: '80vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/start-project" element={<StartProject />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/book-intro" element={<BookIntro />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <EcoToggle />
    </div>
    </EcoProvider>
    </HelmetProvider>
  );
}

export default App;
