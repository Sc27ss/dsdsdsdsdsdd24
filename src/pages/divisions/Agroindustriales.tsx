import React from 'react';
import { motion } from 'framer-motion';
import { Tractor, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProductCard } from '../../components/ProductCard';
import { Button } from '../../components/ui/Button';
import { getProductsByDivision } from '../../data/products';
import { DivisionVideo } from '../../components/DivisionVideo';

export function Agroindustriales() {
  const products = getProductsByDivision('/soluciones/agroindustriales');
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
  return <div className="bg-[#071018] min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <Tractor className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">DIVISIÓN: SOLUCIONES AGROINDUSTRIALES</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">SOLUCIONES AGROINDUSTRIALES</span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-8">
              Equipos, repuestos y servicios para la agroindustria: desde
              manejo de granos y semillas hasta sistemas de riego y procesamiento.
              Diseñados para mejorar rendimiento y reducir costos operativos.
            </p>

            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500" onClick={() => window.location.href = '#catalogo'}>
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
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-white mb-4">Equipos para Agroindustria</h2>
                <p className="text-slate-400 mb-6 leading-relaxed text-lg">Soluciones para manejo, procesamiento y almacenamiento agrícola, pensadas para maximizar rendimiento y eficiencia operativa.</p>
                <h3 className="text-lg font-bold text-white mb-4">Equipos Disponibles:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Sistemas de riego', 'Manejo de granos', 'Transportadores y elevadores', 'Sistemas de secado', 'Molinos y trituradoras', 'Tolvas de almacenamiento'].map((item, i) => <li key={i} className="flex items-center text-slate-300"><CheckCircle2 className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />{item}</li>)}
                </ul>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">Servicios</h3>
              <ul className="space-y-4">
                {['Optimización de procesos', 'Repuestos y soporte en campo', 'Consultoría en eficiencia'].map((service, i) => <li key={i} className="flex items-start"><div className="bg-emerald-500/10 p-1.5 rounded mt-1 mr-3"><Tractor className="h-4 w-4 text-emerald-400" /></div><span className="text-sm text-slate-300">{service}</span></li>)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <DivisionVideo videoName="SOLUCIONES-AGROINDUSTRIALES" />

      <section id="catalogo" className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-4 block">EQUIPOS AGROINDUSTRIALES</span>
            <h2 className="text-4xl font-bold text-white mb-4">Catálogo <span className="text-emerald-400">Agroindustriales</span></h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => <ProductCard key={product.id} index={index} name={product.name} description={product.description} category={product.category} image={product.image} />)}
          </motion.div>
        </div>
      </section>
    </div>;
}
