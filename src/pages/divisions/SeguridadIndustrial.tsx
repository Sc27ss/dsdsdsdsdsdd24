import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProductCard } from '../../components/ProductCard';
import { Button } from '../../components/ui/Button';
import { getProductsByDivision } from '../../data/products';
export function SeguridadIndustrial() {
  const products = getProductsByDivision('/soluciones/seguridad-industrial');
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  return <div className="bg-[#0a1628] min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">
                DIVISIÓN ESPECIALIZADA
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Seguridad{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Industrial
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-8">
              Protegemos lo más valioso de su empresa: su gente. Equipos de
              protección personal (EPP) y seguridad industrial certificados.
            </p>

            <Button size="lg" className="bg-green-600 hover:bg-green-500" onClick={() => window.location.href = '#catalogo'}>
              Ver Catálogo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }}>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Protección Integral
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                  Cumplimos con las normativas nacionales e internacionales de
                  seguridad (ANSI, OSHA, NTC).
                </p>
                <h3 className="text-lg font-bold text-white mb-4">
                  Líneas de Protección:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Protección de Cabeza y Rostro', 'Protección Auditiva y Respiratoria', 'Protección Manual (Guantes)', 'Calzado de Seguridad', 'Trabajo en Alturas', 'Ropa de Trabajo'].map((item, i) => <li key={i} className="flex items-center text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>)}
                </ul>
              </motion.div>
            </div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">Normatividad</h3>
              <ul className="space-y-4">
                {['Certificación ANSI/ISEA', 'Cumplimiento SG-SST', 'Fichas técnicas certificadas'].map((norm, i) => <li key={i} className="flex items-start">
                    <div className="bg-green-500/10 p-1.5 rounded mt-1 mr-3">
                      <Shield className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-sm text-slate-300">{norm}</span>
                  </li>)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="py-20 border-t border-slate-800">
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
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm mb-4 block">
              SEGURIDAD CERTIFICADA
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Catálogo <span className="text-green-400">EPP</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-6"></div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => <ProductCard key={product.id} index={index} name={product.name} description={product.description} category={product.category} />)}
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mt-12 text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              ¿Necesita dotación para su personal?
            </h3>
            <p className="text-slate-400 mb-6">
              Manejamos paquetes de dotación completa con precios corporativos.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-500" onClick={() => window.location.href = '/contacto'}>
              Cotizar Dotación
            </Button>
          </motion.div>
        </div>
      </section>
    </div>;
}