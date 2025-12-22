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
// Division Pages
import { TransmisionPotencia } from './pages/divisions/TransmisionPotencia';
import { BombasIndustriales } from './pages/divisions/BombasIndustriales';
import { FabricacionPoleas } from './pages/divisions/FabricacionPoleas';
import { MineriaEquipos } from './pages/divisions/MineriaEquipos';
import { Construccion } from './pages/divisions/Construccion';
import { SeguridadIndustrial } from './pages/divisions/SeguridadIndustrial';
import { EnergiaMotores } from './pages/divisions/EnergiaMotores';
import { InstrumentacionValvulas } from './pages/divisions/InstrumentacionValvulas';
import { LubricacionCombustibles } from './pages/divisions/LubricacionCombustibles';
import { EquiposComplementarios } from './pages/divisions/EquiposComplementarios';
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
      <div className="flex flex-col min-h-screen font-sans bg-white text-zinc-900">
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
              <Route path="/soluciones/transmision-potencia" element={<PageTransition>
                    <TransmisionPotencia />
                  </PageTransition>} />
              <Route path="/soluciones/bombas-industriales" element={<PageTransition>
                    <BombasIndustriales />
                  </PageTransition>} />
              <Route path="/soluciones/fabricacion-poleas" element={<PageTransition>
                    <FabricacionPoleas />
                  </PageTransition>} />
              <Route path="/soluciones/mineria-equipos" element={<PageTransition>
                    <MineriaEquipos />
                  </PageTransition>} />
              <Route path="/soluciones/construccion" element={<PageTransition>
                    <Construccion />
                  </PageTransition>} />
              <Route path="/soluciones/seguridad-industrial" element={<PageTransition>
                    <SeguridadIndustrial />
                  </PageTransition>} />
              <Route path="/soluciones/energia-motores" element={<PageTransition>
                    <EnergiaMotores />
                  </PageTransition>} />
              <Route path="/soluciones/instrumentacion-valvulas" element={<PageTransition>
                    <InstrumentacionValvulas />
                  </PageTransition>} />
              <Route path="/soluciones/lubricacion-combustibles" element={<PageTransition>
                    <LubricacionCombustibles />
                  </PageTransition>} />
              <Route path="/soluciones/equipos-complementarios" element={<PageTransition>
                    <EquiposComplementarios />
                  </PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>;
}