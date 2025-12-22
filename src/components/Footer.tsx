import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { PrivacyModal } from './PrivacyModal';
import { TermsModal } from './TermsModal';
import logo from '../assets/logos/logo.png';
export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  return <>
      <footer className="relative bg-gradient-to-b from-[#0a1628] to-[#071018] text-slate-300 pt-16 pb-8 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
              linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)
            `,
        backgroundSize: '60px 60px'
      }} />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${10 + Math.random() * 10}s`
        }} />)}
        </div>

        {/* Radial Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/[0.08] rounded-full blur-3xl animate-pulse" style={{
        animationDuration: '8s'
      }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/[0.15] rounded-full blur-3xl animate-pulse" style={{
        animationDuration: '10s',
        animationDelay: '2s'
      }} />

        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <img src={logo} alt="Soluciones Industriales de Antioquia S.A.S Logo" className="h-10 mr-3" />
                <div className="flex flex-col">
                  <span className="font-bold text-white leading-none text-base">
                    SOLUCIONES INDUSTRIALES
                  </span>
                  <span className="text-xs text-slate-400 tracking-widest">
                    DE ANTIOQUIA S.A.S
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Empresa líder en soluciones industriales integrales, enfocada en
                eficiencia, calidad y respaldo técnico para los sectores
                productivos de Colombia.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/nosotros" className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link to="/soluciones" className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    Soluciones Industriales
                  </Link>
                </li>
                <li>
                  <Link to="/servicios" className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    Servicios Especializados
                  </Link>
                </li>
                <li>
                  <Link to="/sectores" className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    Sectores
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Soluciones</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/soluciones/transmision-potencia" className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    Transmisión de Potencia
                  </Link>
                </li>
                <li>
                  <Link to="/soluciones/bombas-industriales" className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    Bombas Industriales
                  </Link>
                </li>
                <li>
                  <Link to="/soluciones/mineria-equipos" className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    Minería y Equipos
                  </Link>
                </li>
                <li>
                  <Link to="/soluciones/construccion" className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    Construcción
                  </Link>
                </li>
                <li>
                  <Link to="/soluciones/seguridad-industrial" className="hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block duration-300">
                    Seguridad Industrial
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start group">
                  <MapPin className="h-5 w-5 mr-3 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>
                    Cra 82C No. 30A – 105 Of. 218
                    <br />
                    Medellín, Antioquia
                  </span>
                </li>
                <li className="flex items-center group">
                  <Phone className="h-5 w-5 mr-3 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="tel:+576042389198" className="hover:text-cyan-400 transition-colors">
                    (604) 238 91 98
                  </a>
                </li>
                <li className="flex items-center group">
                  <Phone className="h-5 w-5 mr-3 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="https://wa.me/573207702522" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    320 770 2522
                  </a>
                </li>
                <li className="flex items-center group">
                  <Mail className="h-5 w-5 mr-3 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:Soluciones_ind@une.net.co" className="hover:text-cyan-400 transition-colors break-all">
                    Soluciones_ind@une.net.co
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Soluciones Industriales de
              Antioquia S.A.S. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <button onClick={() => setShowPrivacy(true)} className="hover:text-cyan-400 transition-colors cursor-pointer">
                Política de Privacidad
              </button>
              <button onClick={() => setShowTerms(true)} className="hover:text-cyan-400 transition-colors cursor-pointer">
                Términos de Uso
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>;
}