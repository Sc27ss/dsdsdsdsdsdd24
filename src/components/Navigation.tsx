import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Smartphone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import logo from '../assets/logos/logo.png';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
    setSolutionsOpen(false);
  }, [location]);
    const navLinks = [{
    name: 'Inicio',
    path: '/'
  }, {
    name: 'Nosotros',
    path: '/nosotros'
    }, {
    name: 'Soluciones',
    path: '/soluciones',
    dropdown: [{
      name: 'Construcción',
      path: '/soluciones/construccion'
    }, {
      name: 'Manejo de Fluidos',
      path: '/soluciones/manejo-de-fluidos'
    }, {
      name: 'Agroindustriales',
      path: '/soluciones/agroindustriales'
    }, {
      name: 'Transmisión de Potencia',
      path: '/soluciones/tras-potencia'
    }, {
      name: 'Filtración de Fluidos',
      path: '/soluciones/filtracion-fluidos'
    }, {
      name: 'Motores',
      path: '/soluciones/motores'
    }]
  }, {
    name: 'Servicios',
    path: '/servicios'
  }, {
    name: 'Sectores',
    path: '/sectores'
  }, {
    name: 'Equipo',
    path: '/equipo'
  }, {
    name: 'Contacto',
    path: '/contacto'
  }];
  return <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="https://wa.me/573207702522" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400 transition-colors">
              <Smartphone className="h-3 w-3 mr-2 text-blue-400" /> Cel. 320 770 2522
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Solusas.ind@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400 transition-colors">
              <Mail className="h-3 w-3 mr-2 text-blue-400" /> Solusas.ind@gmail.com
            </a>
          </div>
          <div className="text-slate-400">
            Cra 82C No. 30A – 105 Of. 218, Medellín
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/20 py-2' : 'bg-[#0a1628] py-4'} border-b border-slate-800/50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img src={logo} alt="Soluciones Industriales de Antioquia S.A.S Logo" className="h-10 mr-3" />
              <div className="flex flex-col">
                <span className="font-bold text-white leading-none text-lg">
                  SOLUCIONES INDUSTRIALES
                </span>
                <span className="text-xs text-slate-400 tracking-widest">
                  DE ANTIOQUIA S.A.S
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map(link => <div key={link.name} className="relative group">
                  {link.dropdown ? <div className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-blue-400 cursor-pointer flex items-center transition-colors" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
                      <Link to={link.path}>{link.name}</Link>
                      <ChevronDown className="ml-1 h-4 w-4" />

                      <AnimatePresence>
                        {solutionsOpen && <motion.div initial={{
                    opacity: 0,
                    y: 10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: 10
                  }} className="absolute top-full left-0 w-64 bg-slate-800 border border-slate-700 shadow-xl rounded-lg py-2 mt-1">
                            {link.dropdown.map(item => <Link key={item.path} to={item.path} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-blue-400 transition-colors">
                                {item.name}
                              </Link>)}
                          </motion.div>}
                      </AnimatePresence>
                    </div> : <Link to={link.path} className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'}`}>
                      {link.name}
                    </Link>}
                </div>)}
              <div className="ml-4">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-500" onClick={() => window.location.href = '/contacto'}>
                  Cotizar
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-blue-400 focus:outline-none">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} className="lg:hidden bg-slate-900 border-t border-slate-800 overflow-hidden">
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map(link => <div key={link.name}>
                    {link.dropdown ? <>
                        <div className="px-3 py-2 text-base font-medium text-white">
                          {link.name}
                        </div>
                        <div className="pl-6 space-y-1 border-l-2 border-slate-700 ml-3">
                          {link.dropdown.map(item => <Link key={item.path} to={item.path} className="block px-3 py-2 text-sm text-slate-400 hover:text-blue-400">
                              {item.name}
                            </Link>)}
                        </div>
                      </> : <Link to={link.path} className={`block px-3 py-2 text-base font-medium rounded-md ${location.pathname === link.path ? 'bg-slate-800 text-blue-400' : 'text-slate-300 hover:bg-slate-800 hover:text-blue-400'}`}>
                        {link.name}
                      </Link>}
                  </div>)}
                <div className="pt-4 px-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-500" onClick={() => window.location.href = '/contacto'}>
                    Solicitar Cotización
                  </Button>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </header>
    </>;
}