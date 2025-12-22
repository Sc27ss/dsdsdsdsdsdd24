import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, AlertCircle, CheckCircle, Scale, ShieldCheck, Briefcase } from 'lucide-react';
interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function TermsModal({
  isOpen,
  onClose
}: TermsModalProps) {
  return <AnimatePresence>
      {isOpen && <>
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }} animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }} exit={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }} className="relative w-full max-w-4xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
                {/* Header */}
                <div className="relative bg-gradient-to-r from-slate-700 to-slate-800 p-8">
                  <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <X className="h-6 w-6 text-white" />
                  </button>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <Scale className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">
                        📄 Términos y Condiciones de Uso
                      </h2>
                      <p className="text-slate-300">
                        Última actualización: Diciembre de 2025
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 max-h-[70vh] overflow-y-auto">
                  <div className="prose prose-invert prose-slate max-w-none">
                    {/* Sección 1 */}
                    <section className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <FileText className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white m-0">
                          1. Aceptación de los Términos
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Al acceder y utilizar el sitio web de Soluciones
                        Industriales de Antioquia S.A.S, el usuario acepta
                        cumplir estos términos y condiciones. Si no está de
                        acuerdo con alguno de ellos, deberá abstenerse de
                        utilizar el sitio.
                      </p>
                    </section>

                    {/* Sección 2 */}
                    <section className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <CheckCircle className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white m-0">
                          2. Uso del Sitio Web
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        El sitio tiene como finalidad brindar información
                        general sobre productos y servicios industriales.
                      </p>
                      <p className="text-slate-300 leading-relaxed mt-4">
                        El usuario se compromete a:
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        <li>Utilizar el sitio de forma legal y legítima</li>
                        <li>
                          No vulnerar la seguridad o funcionalidad del sitio
                        </li>
                        <li>No intentar acceder a áreas restringidas</li>
                        <li>No introducir virus, malware o código dañino</li>
                        <li>No realizar ingeniería inversa ni copiar código</li>
                        <li>
                          Proporcionar información veraz en los formularios
                        </li>
                      </ul>
                    </section>

                    {/* Sección 3 */}
                    <section className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <AlertCircle className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white m-0">
                          3. Información de Productos y Servicios
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        La información publicada es de carácter informativo y
                        referencial.
                      </p>
                      <ul className="text-slate-300 space-y-2 mt-4">
                        <li>
                          Las especificaciones técnicas, precios y
                          disponibilidad pueden variar sin previo aviso
                        </li>
                        <li>
                          Las cotizaciones oficiales deben solicitarse
                          directamente
                        </li>
                        <li>
                          La validez de las cotizaciones será la indicada en
                          cada documento
                        </li>
                      </ul>
                    </section>

                    {/* Sección 4 */}
                    <section className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <ShieldCheck className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white m-0">
                          4. Propiedad Intelectual
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Todo el contenido del sitio (textos, imágenes,
                        logotipos, diseños, software) es propiedad de Soluciones
                        Industriales de Antioquia S.A.S o de terceros
                        autorizados, y está protegido por la legislación
                        colombiana sobre propiedad intelectual.
                      </p>
                      <p className="text-slate-300 leading-relaxed mt-4">
                        Las marcas de terceros pertenecen a sus respectivos
                        propietarios y se usan únicamente con fines
                        informativos.
                      </p>
                    </section>

                    {/* Sección 5 */}
                    <section className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">
                        5. Garantías y Responsabilidad
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        Soluciones Industriales de Antioquia S.A.S no garantiza
                        que:
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        <li>El sitio esté libre de errores o interrupciones</li>
                        <li>
                          La información sea completamente exacta en todo
                          momento
                        </li>
                      </ul>
                      <p className="text-slate-300 leading-relaxed mt-4">
                        No nos hacemos responsables por:
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        <li>Daños derivados del uso del sitio</li>
                        <li>
                          Decisiones tomadas con base en la información
                          publicada
                        </li>
                      </ul>
                      <p className="text-slate-300 leading-relaxed mt-4">
                        Las garantías de los productos se rigen por las
                        condiciones establecidas por cada fabricante.
                      </p>
                    </section>

                    {/* Sección 6 */}
                    <section className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">
                        6. Enlaces a Sitios de Terceros
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        El sitio puede contener enlaces a páginas externas.
                        Soluciones Industriales de Antioquia S.A.S no es
                        responsable del contenido, políticas o prácticas de
                        dichos sitios.
                      </p>
                    </section>

                    {/* Sección 7 */}
                    <section className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white m-0">
                          7. Condiciones Comerciales
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Las operaciones comerciales están sujetas a:
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        <li>Cotización formal aceptada por el cliente</li>
                        <li>Disponibilidad de productos</li>
                        <li>Condiciones de pago vigentes</li>
                        <li>Tiempos de entrega estimados</li>
                        <li>Garantías según fabricante y producto</li>
                      </ul>
                    </section>

                    {/* Sección 8 */}
                    <section className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">
                        8. Modificaciones
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        La empresa se reserva el derecho de modificar estos
                        términos en cualquier momento. Los cambios entrarán en
                        vigor desde su publicación en el sitio web.
                      </p>
                    </section>

                    {/* Sección 9 */}
                    <section className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Scale className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white m-0">
                          9. Ley Aplicable y Jurisdicción
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Estos términos se rigen por las leyes de la República de
                        Colombia. Cualquier controversia será resuelta ante los
                        tribunales competentes de Medellín, Antioquia.
                      </p>
                    </section>

                    {/* Contacto Legal */}
                    <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                      <h3 className="text-xl font-bold text-white mb-4">
                        📞 Contacto Legal
                      </h3>
                      <div className="space-y-2 text-slate-300">
                        <p>
                          <strong className="text-white">Razón Social:</strong>{' '}
                          Soluciones Industriales de Antioquia S.A.S
                        </p>
                        <p>
                          <strong className="text-white">Email:</strong>{' '}
                          Soluciones_ind@une.net.co
                        </p>
                        <p>
                          <strong className="text-white">Teléfono:</strong> (604)
                          238 91 98
                        </p>
                        <p>
                          <strong className="text-white">Dirección:</strong> Cra
                          82C No. 30A – 105 Of. 218, Medellín, Antioquia
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>}
    </AnimatePresence>;
}