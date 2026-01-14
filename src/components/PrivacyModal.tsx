import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Lock, Eye, FileText, User, Database } from 'lucide-react';
interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function PrivacyModal({
  isOpen,
  onClose
}: PrivacyModalProps) {
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
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">
                        🔐 Política de Privacidad
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
                        <User className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white m-0">
                          1. Responsable del Tratamiento de Datos
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Soluciones Industriales de Antioquia S.A.S, identificada
                        como responsable del tratamiento de los datos
                        personales, actúa conforme a lo dispuesto en la Ley 1581
                        de 2012, el Decreto 1377 de 2013 y demás normas
                        concordantes de la República de Colombia.
                      </p>
                      <div className="mt-4 bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                        <p className="text-slate-300 font-semibold mb-2">
                          Datos de contacto del responsable:
                        </p>
                        <ul className="text-slate-300 space-y-1 list-none pl-0">
                          <li>
                            <strong className="text-white">
                              Razón Social:
                            </strong>{' '}
                            Soluciones Industriales de Antioquia S.A.S
                          </li>
                          <li>
                            <strong className="text-white">Email:</strong>{' '}
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Solusas.ind@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Solusas.ind@gmail.com</a>
                          </li>
                          <li>
                            <strong className="text-white">Celular:</strong>{' '}
                            <a href="https://wa.me/573207702522" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">320 770 2522</a>
                          </li>
                          <li>
                            <strong className="text-white">Dirección:</strong>{' '}
                            Cra 82C No. 30A – 105 Of. 218, Medellín, Antioquia
                          </li>
                        </ul>
                      </div>
                    </section>

                    {/* Sección 2 */}
                    <section className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Database className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white m-0">
                          2. Información que Recopilamos
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        A través de este sitio web{' '}
                        <strong className="text-white">
                          NO recopilamos datos de manera automática, NO usamos
                          cookies, NO realizamos seguimiento
                        </strong>
                        , ni almacenamos información sin el consentimiento del
                        usuario.
                      </p>
                      <p className="text-slate-300 leading-relaxed mt-4">
                        Únicamente recopilamos información cuando el usuario la
                        proporciona voluntariamente mediante formularios de
                        contacto, tales como:
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        <li>Nombre completo</li>
                        <li>Correo electrónico</li>
                        <li>Nombre de la empresa</li>
                        <li>Número de teléfono</li>
                        <li>Servicio de interés</li>
                        <li>Mensaje o descripción escrita por el usuario</li>
                      </ul>
                      <div className="mt-4 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <p className="text-blue-300 m-0">
                          👉 El envío de esta información no es obligatorio y el
                          usuario decide libremente si desea contactarnos.
                        </p>
                      </div>
                    </section>

                    {/* Sección 3 */}
                    <section className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Eye className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white m-0">
                          3. Finalidad del Tratamiento
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        La información suministrada será utilizada
                        exclusivamente para:
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        <li>Atender solicitudes de información o cotización</li>
                        <li>Brindar asesoría técnica o comercial</li>
                        <li>Responder mensajes enviados por el usuario</li>
                        <li>
                          Mantener comunicación relacionada con los servicios
                          solicitados
                        </li>
                      </ul>
                      <p className="text-slate-300 leading-relaxed mt-4">
                        En ningún caso los datos serán utilizados para fines
                        distintos sin autorización previa.
                      </p>
                    </section>

                    {/* Sección 4 */}
                    <section className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Lock className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white m-0">
                          4. Almacenamiento y Seguridad de la Información
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Soluciones Industriales de Antioquia S.A.S implementa
                        medidas técnicas y organizativas razonables para
                        proteger la información personal contra acceso no
                        autorizado, pérdida, alteración o uso indebido.
                      </p>
                      <p className="text-slate-300 leading-relaxed mt-4">
                        No obstante, el usuario reconoce que ningún sistema es
                        completamente infalible en entornos digitales.
                      </p>
                    </section>

                    {/* Sección 5 */}
                    <section className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white m-0">
                          5. Compartición de Información
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Soluciones Industriales de Antioquia S.A.S{' '}
                        <strong className="text-white">
                          NO vende, NO alquila y NO cede
                        </strong>{' '}
                        datos personales a terceros.
                      </p>
                      <p className="text-slate-300 leading-relaxed mt-4">
                        Los datos solo podrán ser compartidos cuando:
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        <li>Sea requerido por autoridad competente</li>
                        <li>Sea necesario para cumplir obligaciones legales</li>
                      </ul>
                    </section>

                    {/* Sección 6 */}
                    <section className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <FileText className="h-6 w-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white m-0">
                          6. Derechos del Titular de los Datos
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        De acuerdo con la legislación colombiana, el titular de
                        los datos tiene derecho a:
                      </p>
                      <ul className="text-slate-300 space-y-2">
                        <li>
                          Conocer, actualizar y rectificar sus datos personales
                        </li>
                        <li>Solicitar prueba de la autorización otorgada</li>
                        <li>Ser informado sobre el uso de su información</li>
                        <li>
                          Revocar la autorización y solicitar la eliminación de
                          los datos
                        </li>
                        <li>
                          Presentar quejas ante la Superintendencia de Industria
                          y Comercio
                        </li>
                        <li>Acceder gratuitamente a sus datos personales</li>
                      </ul>
                    </section>

                    {/* Sección 7 */}
                    <section className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">
                        7. Procedimiento para Ejercer sus Derechos
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        Las solicitudes relacionadas con datos personales podrán
                        realizarse mediante:
                      </p>
                        <p className="text-slate-300 leading-relaxed mt-2">
                        <strong className="text-white">
                          Correo electrónico:
                        </strong>{' '}
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Solusas.ind@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Solusas.ind@gmail.com</a>
                      </p>
                      <p className="text-slate-300 leading-relaxed mt-4">
                        Las solicitudes serán atendidas en un plazo máximo de
                        quince (15) días hábiles, conforme a la ley.
                      </p>
                    </section>

                    {/* Sección 8 */}
                    <section className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">
                        8. Datos de Menores de Edad
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        Este sitio web no está dirigido a menores de edad. No
                        recopilamos intencionalmente datos personales de menores
                        sin la autorización expresa de padres o representantes
                        legales.
                      </p>
                    </section>

                    {/* Sección 9 */}
                    <section className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">
                        9. Modificaciones a la Política
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        Soluciones Industriales de Antioquia S.A.S se reserva el
                        derecho de modificar esta política en cualquier momento.
                        Las actualizaciones serán publicadas en esta misma
                        sección con la fecha correspondiente.
                      </p>
                    </section>

                    {/* Contacto */}
                    <section className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                      <h3 className="text-xl font-bold text-white mb-4">
                        📞 Contacto
                      </h3>
                      <p className="text-slate-300 leading-relaxed mb-4">
                        Para ejercer sus derechos o resolver dudas sobre esta
                        política:
                      </p>
                      <div className="space-y-2 text-slate-300">
                        <p>
                          <strong className="text-white">Razón Social:</strong>{' '}
                          Soluciones Industriales de Antioquia S.A.S
                        </p>
                        <p>
                          <strong className="text-white">Email:</strong>{' '}
                          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Solusas.ind@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Solusas.ind@gmail.com</a>
                        </p>
                        <p>
                          <strong className="text-white">Celular:</strong>{' '}
                          <a href="https://wa.me/573207702522" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">320 770 2522</a>
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