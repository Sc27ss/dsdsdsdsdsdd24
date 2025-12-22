import React, { Children } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Users, Lightbulb, Wrench, TrendingUp, Clock, Award, Target, Briefcase, Settings } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
function StatCard({
  number,
  label,
  icon,
  suffix = ''
}: {
  number: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
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
export function AboutPage() {
  const {
    scrollY
  } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity1 = useTransform(scrollY, [0, 300], [1, 0]);
  const differentials = [{
    title: 'Acompañamiento Técnico Real',
    description: 'Ingenieros especializados disponibles para asesorarlo en cada etapa de su proyecto',
    icon: <Lightbulb className="h-7 w-7" />
  }, {
    title: 'Portafolio Amplio',
    description: 'Más de 150 productos de las mejores marcas nacionales e internacionales',
    icon: <Target className="h-7 w-7" />
  }, {
    title: 'Experiencia Comprobada',
    description: 'Más de 15 años resolviendo los desafíos más exigentes de la industria',
    icon: <Award className="h-7 w-7" />
  }, {
    title: 'Atención Personalizada',
    description: 'Cada cliente recibe un trato único adaptado a sus necesidades específicas',
    icon: <Users className="h-7 w-7" />
  }, {
    title: 'Respuesta Rápida',
    description: 'Tiempos de cotización y entrega que se ajustan a sus urgencias operativas',
    icon: <Clock className="h-7 w-7" />
  }, {
    title: 'Soluciones Integrales',
    description: 'Desde la consultoría hasta el soporte post-venta, cubrimos todo el ciclo',
    icon: <TrendingUp className="h-7 w-7" />
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
        <motion.div style={{
        y: y1,
        opacity: opacity1
      }} className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />

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
              INGENIERÍA & SUMINISTROS
            </motion.span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Impulsamos la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Productividad
              </span>
              <br />
              de su Industria
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Especialistas en transmisión de potencia, minería y fluidos.
              Integramos las mejores marcas globales con soporte técnico local
              en Medellín.
            </p>
          </motion.div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <StatCard number={15} label="Años de Experiencia" icon={<Briefcase className="h-6 w-6" />} suffix="+" />
            <StatCard number={500} label="Clientes Activos" icon={<Users className="h-6 w-6" />} suffix="+" />
            <StatCard number={150} label="Productos en Stock" icon={<Settings className="h-6 w-6" />} suffix="+" />
            <StatCard number={24} label="Soporte Técnico" icon={<Clock className="h-6 w-6" />} suffix="/7" />
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
              ¿POR QUÉ ELEGIRNOS?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nuestros <span className="text-blue-400">Diferenciales</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Lo que nos distingue en el mercado industrial colombiano
            </p>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-6"></div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: '-100px'
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => <motion.div key={index} variants={itemVariants} whileHover={{
            y: -8,
            transition: {
              duration: 0.3
            }
          }} className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 mb-6 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Matching Styles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300"></div>

              <div className="relative p-10 rounded-3xl">
                <div className="absolute top-6 right-6 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-6 left-6 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                    <Target className="h-8 w-8 text-blue-400" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">Misión</h3>
                  <div className="w-16 h-1 bg-blue-400 mb-6"></div>

                  <p className="text-slate-200 leading-relaxed text-lg">
                    Proveer soluciones industriales integrales de alta calidad,
                    combinando productos de vanguardia con asesoría técnica
                    especializada, para optimizar la eficiencia y productividad
                    de nuestros clientes en los sectores industrial, energético
                    y de construcción.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300"></div>

              <div className="relative p-10 rounded-3xl">
                <div className="absolute top-6 right-6 w-20 h-20 bg-cyan-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-6 left-6 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                    <TrendingUp className="h-8 w-8 text-cyan-400" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">Visión</h3>
                  <div className="w-16 h-1 bg-cyan-400 mb-6"></div>

                  <p className="text-slate-200 leading-relaxed text-lg">
                    Consolidarnos como la empresa líder en Antioquia y Colombia
                    en el suministro de equipos industriales y servicios de
                    ingeniería, reconocidos por nuestra excelencia técnica,
                    innovación y compromiso inquebrantable con el éxito de
                    nuestros clientes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
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
              Nuestros <span className="text-blue-400">Valores</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-6"></div>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          staggerChildren: 0.1
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: <Shield className="h-8 w-8" />,
            title: 'Calidad',
            desc: 'Productos certificados'
          }, {
            icon: <Users className="h-8 w-8" />,
            title: 'Compromiso',
            desc: 'Con cada cliente'
          }, {
            icon: <Lightbulb className="h-8 w-8" />,
            title: 'Innovación',
            desc: 'Tecnología de punta'
          }, {
            icon: <Wrench className="h-8 w-8" />,
            title: 'Experiencia',
            desc: 'Más de 15 años'
          }].map((value, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            scale: 1.05
          }} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 text-blue-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm">{value.desc}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </section>
    </div>;
}