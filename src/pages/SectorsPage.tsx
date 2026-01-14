import React, { Children, Component } from 'react';
import { motion } from 'framer-motion';
import { Factory, HardHat, Zap, Tractor, Building2, Truck, Utensils } from 'lucide-react';
export function SectorsPage() {
  const sectors = [{
    title: 'Industria Manufacturera',
    description: 'Soluciones para líneas de producción, automatización y mantenimiento de planta.',
    icon: <Factory className="h-10 w-10" />,
    image: 'https://i.imgur.com/q6RJN8Q.png'
  }, {
    title: 'Minería',
    description: 'Equipos robustos para extracción, transporte y procesamiento de minerales en condiciones extremas.',
    icon: <HardHat className="h-10 w-10" />,
    image: 'https://i.imgur.com/0xP2c1E.jpeg'
  }, {
    title: 'Energía',
    description: 'Componentes para generación, transmisión y distribución de energía eléctrica.',
    icon: <Zap className="h-10 w-10" />,
    image: 'https://i.imgur.com/gS14kLF.jpeg'
  }, {
    title: 'Agroindustria',
    description: 'Tecnología para el procesamiento de alimentos, sistemas de riego y maquinaria agrícola.',
    icon: <Tractor className="h-10 w-10" />,
    image: 'https://i.imgur.com/AbtIOBT.jpeg'
  }, {
    title: 'Sector Alimenticio',
    description: 'Equipos y soluciones para el procesamiento, empaque y conservación de alimentos y bebidas.',
    icon: <Utensils className="h-10 w-10" />,
    image: 'https://i.imgur.com/tYx8vkD.png'
  }, {
    title: 'Construcción',
    description: 'Equipos para obras civiles, bombeo de concreto y movimiento de tierras.',
    icon: <Building2 className="h-10 w-10" />,
    image: 'https://i.imgur.com/qpzkL1Z.png'
  }, {
    title: 'Infraestructura',
    description: 'Soluciones para acueductos, tratamiento de aguas y obras públicas.',
    icon: <Truck className="h-10 w-10" />,
    image: 'https://i.imgur.com/W3O8N96.jpeg'
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
              COBERTURA INDUSTRIAL
            </motion.span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sectores que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Atendemos
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Nuestra experiencia abarca los principales motores económicos del
              país, adaptando nuestras soluciones a las necesidades específicas
              de cada industria
            </p>

            <div className="w-20 h-1 bg-blue-500 mx-auto mt-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => <motion.div key={index} variants={itemVariants} whileHover={{
            y: -8
          }} className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent z-10"></div>
                  <img src={sector.image} alt={sector.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-60" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                      {sector.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </section>
    </div>;
}