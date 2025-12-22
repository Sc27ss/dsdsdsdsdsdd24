import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ShoppingBag, Headphones, Settings, PenTool, Package } from 'lucide-react';
import { Button } from '../components/ui/Button';
export function ServicesPage() {
  const services = [{
    title: 'Comercialización de Equipos',
    description: 'Amplio portafolio de equipos industriales de las mejores marcas internacionales',
    details: ['Transmisión de potencia', 'Bombas industriales', 'Motores eléctricos'],
    icon: <Package className="h-8 w-8" />,
    number: '01'
  }, {
    title: 'Mantenimiento Especializado',
    description: 'Servicio técnico para bombas, motores y equipos industriales',
    details: ['Mantenimiento preventivo', 'Reparaciones', 'Diagnósticos'],
    icon: <Wrench className="h-8 w-8" />,
    number: '02'
  }, {
    title: 'Asesoría Técnica',
    description: 'Ingenieros especializados para cálculo y selección de equipos',
    details: ['Análisis de requerimientos', 'Selección óptima', 'Optimización de procesos'],
    icon: <Headphones className="h-8 w-8" />,
    number: '03'
  }, {
    title: 'Instalación y Puesta en Marcha',
    description: 'Montaje profesional y capacitación de personal operativo',
    details: ['Instalación certificada', 'Pruebas de funcionamiento', 'Capacitación técnica'],
    icon: <Settings className="h-8 w-8" />,
    number: '04'
  }, {
    title: 'Soluciones a Medida',
    description: 'Diseño y fabricación de sistemas especiales según sus necesidades',
    details: ['Ingeniería personalizada', 'Fabricación especial', 'Automatización'],
    icon: <PenTool className="h-8 w-8" />,
    number: '05'
  }];
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
              SERVICIOS
            </motion.span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Servicios{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Especializados
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Más que un proveedor, somos su socio estratégico con servicios
              integrales que abarcan todo el ciclo de vida de sus equipos
            </p>

            <div className="w-20 h-1 bg-blue-500 mx-auto mt-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Alternating Layout */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6
          }} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                {/* Number Side */}
                <div className="flex-shrink-0 relative">
                  <div className="text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500/20 to-transparent leading-none">
                    {service.number}
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1">
                  <motion.div whileHover={{
                x: index % 2 === 0 ? 10 : -10
              }} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 lg:p-10 hover:border-blue-500/50 transition-all duration-300">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.details.map((detail, idx) => <li key={idx} className="flex items-center text-slate-300">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                          {detail}
                        </li>)}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>)}
          </div>
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
              ¿Necesita un servicio a medida?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Entendemos que cada industria es única. Contáctenos para discutir
              sus requerimientos específicos y diseñar una solución
              personalizada.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white" onClick={() => window.location.href = '/contacto'}>
              Hablar con un Ingeniero
            </Button>
          </motion.div>
        </div>
      </section>
    </div>;
}