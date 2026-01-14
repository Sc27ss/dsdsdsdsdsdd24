import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, Droplets, Hammer, HardHat, Shield, Zap, Gauge, Fuel, Disc, ChevronRight, Wrench } from 'lucide-react';
import { Button } from '../components/ui/Button';
export function SolutionsPage() {
  const divisions = [{
    id: 'construccion',
    name: 'Construcción',
    description: 'Soluciones integrales para obras civiles y proyectos de infraestructura',
    icon: <Hammer className="h-8 w-8" />,
    path: '/soluciones/construccion'
  }, {
    id: 'manejo-de-fluidos',
    name: 'Manejo de Fluidos',
    description: 'Sistemas completos para control, transporte y tratamiento de fluidos',
    icon: <Droplets className="h-8 w-8" />,
    path: '/soluciones/manejo-de-fluidos'
  }, {
    id: 'agroindustriales',
    name: 'Agroindustriales',
    description: 'Equipos y soluciones diseñadas para la agroindustria moderna',
    icon: <HardHat className="h-8 w-8" />,
    path: '/soluciones/agroindustriales'
  }, {
    id: 'motores',
    name: 'Motores',
    description: 'Equipos y sistemas de motores para aplicaciones industriales y móviles',
    icon: <Zap className="h-8 w-8" />,
    path: '/soluciones/motores'
  }, {
    id: 'tras-potencia',
    name: 'Transmisión de Potencia',
    description: 'Componentes y sistemas para transmisión de potencia industrial',
    icon: <Settings className="h-8 w-8" />,
    path: '/soluciones/tras-potencia'
  }, {
    id: 'filtracion-fluidos',
    name: 'Filtración de Fluidos',
    description: 'Soluciones de filtración y separación para procesos industriales',
    icon: <Droplets className="h-8 w-8" />,
    path: '/soluciones/filtracion-fluidos'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center">
            <motion.span initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2
          }} className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wider mb-6">
              CATÁLOGO GENERAL
            </motion.span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nuestras{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Divisiones
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Seleccione una categoría para ver especificaciones técnicas y
              productos disponibles
            </p>

            <div className="w-20 h-1 bg-blue-500 mx-auto mt-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map(division => <Link key={division.id} to={division.path}>
                <motion.div variants={itemVariants} whileHover={{
              y: -8,
              scale: 1.02
            }} className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    {division.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {division.name}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {division.description}
                  </p>
                  <span className="text-blue-400 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform">
                    VER PRODUCTOS <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </motion.div>
              </Link>)}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

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
              ¿No encuentra lo que busca?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Nuestro catálogo es extenso y constantemente actualizado. Si
              requiere un equipo específico o una referencia especial, nuestro
              equipo de ingeniería puede localizarlo o fabricarlo para usted.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500" onClick={() => window.location.href = '/contacto'}>
              Consultar Requerimiento Especial
            </Button>
          </motion.div>
        </div>
      </section>
    </div>;
}