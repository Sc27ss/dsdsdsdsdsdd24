import React, { useEffect, Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
// Layout Components
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
// Core Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SectorsPage } from './pages/SectorsPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { SolutionsPage } from './pages/SolutionsPage';
// Division Pages (restructured)
import { Construccion } from './pages/divisions/Construccion';
import { ManejoDeFluidos } from './pages/divisions/ManejoDeFluidos';
import { Agroindustriales } from './pages/divisions/Agroindustriales';
import { TrasPotencia } from './pages/divisions/TrasPotencia';
import { FiltracionFluidos } from './pages/divisions/FiltracionFluidos';
import { Motores } from './pages/divisions/Motores';

// Scroll to top on route change
function ScrollToTop() {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
// Page transition wrapper
const PageTransition = ({
  children
}: {
  children: React.ReactNode;
}) => <motion.div initial={{
  opacity: 0,
  y: 20
}} animate={{
  opacity: 1,
  y: 0
}} exit={{
  opacity: 0,
  y: -20
}} transition={{
  duration: 0.3
}}>
    {children}
  </motion.div>;
export function App() {
  return <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-white text-zinc-900 overflow-x-hidden">
        <Navigation />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageTransition>
                    <HomePage />
                  </PageTransition>} />
              <Route path="/nosotros" element={<PageTransition>
                    <AboutPage />
                  </PageTransition>} />
              <Route path="/servicios" element={<PageTransition>
                    <ServicesPage />
                  </PageTransition>} />
              <Route path="/sectores" element={<PageTransition>
                    <SectorsPage />
                  </PageTransition>} />
              <Route path="/equipo" element={<PageTransition>
                    <TeamPage />
                  </PageTransition>} />
              <Route path="/contacto" element={<PageTransition>
                    <ContactPage />
                  </PageTransition>} />

              {/* Solutions Hub */}
              <Route path="/soluciones" element={<PageTransition>
                    <SolutionsPage />
                  </PageTransition>} />

              {/* Division Pages */}
              <Route path="/soluciones/construccion" element={<PageTransition>
                    <Construccion />
                  </PageTransition>} />
              <Route path="/soluciones/manejo-de-fluidos" element={<PageTransition>
                    <ManejoDeFluidos />
                  </PageTransition>} />
              <Route path="/soluciones/agroindustriales" element={<PageTransition>
                    <Agroindustriales />
                  </PageTransition>} />
              <Route path="/soluciones/tras-potencia" element={<PageTransition>
                    <TrasPotencia />
                  </PageTransition>} />
              <Route path="/soluciones/filtracion-fluidos" element={<PageTransition>
                    <FiltracionFluidos />
                  </PageTransition>} />
              <Route path="/soluciones/motores" element={<PageTransition>
                    <Motores />
                  </PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>;
}