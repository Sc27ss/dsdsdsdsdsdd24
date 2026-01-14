import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Mail, Smartphone, Briefcase } from 'lucide-react';
export function TeamPage() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
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
              NUESTRO EQUIPO
            </motion.span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Respaldo{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Técnico
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Un equipo de profesionales comprometidos con la excelencia
              industrial
            </p>

            <div className="w-20 h-1 bg-blue-500 mx-auto mt-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-100px'
        }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Diana Martínez Card */}
            <motion.div variants={itemVariants} whileHover={{
            y: -8
          }} className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                      <img src="https://i.imgur.com/6ylpPnD.png" alt="Diana Ma. Martínez Arias" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      Diana Ma. Martínez Arias
                    </h3>
                    <p className="text-blue-400 font-semibold mb-4">
                      Gerente General
                    </p>

                    <p className="text-slate-400 leading-relaxed mb-6">
                      Liderazgo estratégico y visión empresarial para el
                      crecimiento sostenible de la compañía.
                    </p>

                    <div className="flex items-center gap-2 text-slate-400">
                      <Mail className="h-4 w-4 text-blue-400" />
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Solusas.ind@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400 transition-colors">
                        Solusas.ind@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ramiro Durán Card */}
            <motion.div variants={itemVariants} whileHover={{
            y: -8
          }} className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                      <img src="https://i.imgur.com/vIysGaR.png" alt="Ing. Ramiro Durán Zambrano" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      Ing. Ramiro Durán Zambrano
                    </h3>
                    <p className="text-blue-400 font-semibold mb-4">
                      Ingeniero / Asesor Técnico
                    </p>

                    <p className="text-slate-400 leading-relaxed mb-6">
                      Ingeniero en Equipos Industriales con amplia experiencia
                      en transmisión de potencia y sistemas industriales.
                    </p>

                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                      <Smartphone className="h-4 w-4 text-blue-400" />
                      <a href="https://wa.me/573207702522" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400 transition-colors">
                        Cel. 320 770 2522
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Team Description */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 text-center">
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto">
              Nuestro equipo de profesionales está comprometido con brindarle
              las mejores soluciones industriales. Contamos con una red de
              proveedores nacionales e internacionales para garantizar la
              calidad y disponibilidad que su operación requiere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20">
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Estructura <span className="text-blue-400">Organizacional</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Equipos especializados para atender cada aspecto de su proyecto
            </p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-6"></div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            title: 'Departamento Comercial',
            subtitle: 'Ventas y Atención',
            description: 'Asesores dedicados a entender sus necesidades y ofrecer las mejores soluciones',
            icon: <Briefcase className="h-8 w-8" />
          }, {
            title: 'Departamento Técnico',
            subtitle: 'Ingeniería y Soporte',
            description: 'Especialistas en montaje, mantenimiento y soporte técnico especializado',
            icon: <Briefcase className="h-8 w-8" />
          }, {
            title: 'Departamento Logístico',
            subtitle: 'Entregas y Coordinación',
            description: 'Gestión eficiente de inventarios y entregas oportunas a sus instalaciones',
            icon: <Briefcase className="h-8 w-8" />
          }].map((dept, index) => <motion.div key={index} variants={itemVariants} whileHover={{
            y: -8,
            scale: 1.02
          }} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/10 text-blue-400 mb-6 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  {dept.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {dept.title}
                </h3>

                <p className="text-blue-400 font-semibold text-sm mb-4">
                  {dept.subtitle}
                </p>

                <p className="text-slate-400 leading-relaxed">
                  {dept.description}
                </p>
              </motion.div>)}
          </motion.div>
        </div>
      </section>
    </div>;
}