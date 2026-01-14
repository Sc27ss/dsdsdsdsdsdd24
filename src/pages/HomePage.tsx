import React, { Children, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, Settings, Users, Award, Briefcase, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { useCountUp } from '../hooks/useCountUp'
import { SearchBar } from '../components/SearchBar'
import { VideoSection } from '../components/VideoSection';
import LogoCarousel from '../components/LogoCarousel';
import { DivisionVideo } from '../components/DivisionVideo';
import heroVideo from '../assets/videos/hero-background.mp4';

function StatCard({
  number,
  label,
  icon,
  suffix = ''
}: {
  number: number
  label: string
  icon: React.ReactNode
  suffix?: string
}) {
  const {
    count,
    ref
  } = useCountUp(number, 2000, suffix);
  return <motion.div ref={ref} initial={{
    opacity: 0,
    scale: 0.8
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    duration: 0.5
  }} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-4">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">
        {label}
      </div>
    </motion.div>;
}
export function HomePage() {
  const {
    scrollY
  } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const solutionsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const handleScrollToSolutions = () => {
    if (solutionsRef.current) {
      solutionsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const divisions = [{
    name: 'Construcción',
    icon: '🏗️',
    path: '/soluciones/construccion'
  }, {
    name: 'Manejo de Fluidos',
    icon: '💧',
    path: '/soluciones/manejo-de-fluidos'

  }, {
    name: 'Agroindustriales',
    icon: '🌾',
    path: '/soluciones/agroindustriales'
  }, {
    name: 'Transmisión de Potencia',
    icon: '⚙️',
    path: '/soluciones/tras-potencia'
  }, {
    name: 'Filtración de Fluidos',
    icon: '🔬',
    path: '/soluciones/filtracion-fluidos'
  }, {
    name: 'Motores',
    icon: '⚡',
    path: '/soluciones/motores'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <div className="bg-[#0a1628] min-h-screen">
      {/* Hero Section with Search */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{
        y: y1
      }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-blue-900/40 to-[#0a1628] z-10" />
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            src={heroVideo}
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20 w-full">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <motion.span initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2
          }} className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wider mb-8">
              INGENIERÍA & SUMINISTROS
            </motion.span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Impulsamos la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Productividad
              </span>
              <br />
              de su Industria
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Especialistas en transmisión de potencia, minería y fluidos.
              Integramos las mejores marcas globales con soporte técnico local
              en Medellín.
            </p>

            {/* Search Bar Integration */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }} className="mb-10">
              <SearchBar />
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 bg-blue-600 hover:bg-blue-500 text-white" onClick={handleScrollToSolutions}>
                Ver Catálogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 text-white border-slate-600 hover:bg-slate-800" onClick={() => window.location.href = '/contacto'}>
                Hablar con Asesor
              </Button>
            </div>
          </motion.div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            <StatCard number={15} label="Años de Experiencia" icon={<Briefcase className="h-6 w-6" />} suffix="+" />
            <StatCard number={500} label="Clientes Satisfechos" icon={<Users className="h-6 w-6" />} suffix="+" />
            <StatCard number={1000} label="Proyectos Ejecutados" icon={<Settings className="h-6 w-6" />} suffix="+" />
            <StatCard number={100} label="Garantía Técnica" icon={<Award className="h-6 w-6" />} suffix="%" />
          </div>
        </div>

        <motion.div style={{
        opacity
      }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center" animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }}>
          <span className="text-xs uppercase tracking-widest mb-2 text-slate-500">
            Descubre Más
          </span>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-blue-400 rounded-full animate-scroll" />
          </div>
        </motion.div>
      </section>

      {/* About Teaser */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl transform rotate-3"></div>
              <img src="https://i.imgur.com/FVHdLKq.jpeg" alt="Industrial Facility" className="relative rounded-2xl shadow-2xl border border-slate-700/50" />
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
                QUIÉNES SOMOS
              </span>
              <h2 className="text-4xl font-bold text-white mb-4">
                Experiencia y Respaldo{' '}
                <span className="text-blue-400">Técnico</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Soluciones Industriales de Antioquia S.A.S es una empresa
                dedicada a suministrar equipos y servicios para el sector
                industrial, energético y construcción.
              </p>

              <div className="space-y-6 mb-8">
                {[{
                title: 'Asesoría Técnica Especializada',
                desc: 'Contamos con ingenieros expertos para guiarle en la selección óptima de equipos.'
              }, {
                title: 'Portafolio Integral',
                desc: 'Desde transmisión de potencia hasta seguridad industrial, cubrimos todas sus necesidades.'
              }, {
                title: 'Respaldo y Garantía',
                desc: 'Trabajamos con marcas reconocidas y garantizamos la calidad de nuestros productos.'
              }].map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>)}
              </div>

              <Button className="bg-blue-600 hover:bg-blue-500 text-white" onClick={() => window.location.href = '/nosotros'}>
                Conocer Más Sobre Nosotros
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inserted Division Video (Inicio) */}
      <DivisionVideo videoName="video-seccion-inicio" />

      {/* Solutions Grid */}
      <section ref={solutionsRef} id="soluciones" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
              CATÁLOGO GENERAL
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nuestras <span className="text-blue-400">Divisiones</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Seleccione una categoría para ver especificaciones técnicas y
              productos disponibles
            </p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-6"></div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, index) => <Link key={index} to={division.path}>
                <motion.div variants={itemVariants} whileHover={{
              y: -8,
              scale: 1.02
            }} className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className="text-4xl mb-6 w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    {division.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {division.name}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Equipos y componentes de alta calidad para optimizar sus
                    procesos productivos.
                  </p>
                  <span className="text-blue-400 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform">
                    VER PRODUCTOS <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </motion.div>
              </Link>)}
          </motion.div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="text-white border-slate-600 hover:bg-slate-800" onClick={() => window.location.href = '/soluciones'}>
              Ver Todas las Soluciones
            </Button>
          </div>
        </div>
      </section>

      <VideoSection />

      <LogoCarousel />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para optimizar su industria?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Contáctenos hoy mismo para recibir asesoría técnica personalizada
              y una cotización adaptada a sus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white" onClick={() => window.location.href = '/contacto'}>
                Solicitar Asesoría
              </Button>
              <Button variant="outline" size="lg" className="text-white border-slate-600 hover:bg-slate-800" onClick={() => window.location.href = '/servicios'}>
                Nuestros Servicios
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
}