import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProductCard } from '../../components/ProductCard';
import { Button } from '../../components/ui/Button';
import { getProductsByDivision } from '../../data/products';
import { DivisionVideo } from '../../components/DivisionVideo';

export function Motores() {
  const products = getProductsByDivision('/soluciones/motores');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="bg-[#0a1628] min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                DIVISIÓN ESPECIALIZADA
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Soluciones en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Motores
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-8">
              Impulsando la industria con motores de alto rendimiento,
              confiabilidad y eficiencia energética.
            </p>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500"
              onClick={() => (window.location.href = '#catalogo')}
            >
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Potencia que Transforma
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                  Ofrecemos una gama completa de motores eléctricos diseñados para
                  satisfacer las demandas de cualquier aplicación industrial.
                  Desde motores estándar hasta soluciones personalizadas.
                </p>
                <h3 className="text-lg font-bold text-white mb-4">
                  Nuestro Portafolio Incluye:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Motores Eléctricos',
                    'Motorreductores',
                    'Variadores de Frecuencia',
                    'Arrancadores Suaves',
                    'Generadores Eléctricos',
                    'Transformadores',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
            >
              <h3 className="font-bold text-white mb-4">Servicios Asociados</h3>
              <ul className="space-y-4">
                {[
                  'Diagnóstico y Pruebas Eléctricas',
                  'Mantenimiento Predictivo y Preventivo',
                  'Rebobinado y Reparación General',
                  'Alineación Láser de Ejes',
                ].map((service, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-blue-500/10 p-1.5 rounded mt-1 mr-3">
                      <Zap className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-sm text-slate-300">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <DivisionVideo videoName="Soluciones-en-Motores" />

      <section id="catalogo" className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
              EQUIPOS DE ALTO RENDIMIENTO
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Catálogo de <span className="text-blue-400">Motores</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-6"></div>
          </motion.div>

            {products.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  index={index}
                  name={product.name}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-slate-400"
            >
              <p>No hay productos en esta división por el momento.</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              ¿Busca una solución a medida?
            </h3>
            <p className="text-slate-400 mb-6">
              Nuestro equipo de ingeniería puede desarrollar una solución
              específica para su necesidad.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500"
              onClick={() => (window.location.href = '/contacto')}
            >
              Contactar a un especialista
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
