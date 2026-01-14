import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Crear mensaje para WhatsApp
    const whatsappMessage = `*Nuevo Contacto desde la Web*%0A%0A*Nombre:* ${formData.nombre}%0A*Empresa:* ${formData.empresa}%0A*Email:* ${formData.email}%0A*Teléfono:* ${formData.telefono}%0A*Servicio:* ${formData.servicio}%0A*Mensaje:* ${formData.mensaje}`;
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Abrir WhatsApp con el mensaje
      window.open(`https://wa.me/573207702522?text=${whatsappMessage}`, '_blank');
    }, 1500);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              CONTACTO
            </motion.span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hablemos de su{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Proyecto
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Estamos listos para atender sus requerimientos industriales.
              Escríbanos y un asesor técnico se pondrá en contacto a la
              brevedad.
            </p>

            <div className="w-20 h-1 bg-blue-500 mx-auto mt-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Información de Contacto
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-white">Dirección</p>
                      <p className="text-slate-400">
                        Cra 82C No. 30A – 105 Of. 218
                      </p>
                      <p className="text-slate-400">Medellín, Antioquia</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Smartphone className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-white">Celular (WhatsApp)</p>
                      <a href="https://wa.me/573207702522" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors block">
                        320 770 2522
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-white">Email</p>
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Solusas.ind@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                        Solusas.ind@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-400 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-white">
                        Horario de Atención
                      </p>
                      <p className="text-slate-400">
                        Lunes - Viernes: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-slate-400">
                        Sábados: 8:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div initial={{
              opacity: 0,
              x: 30
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-10">
                {isSuccess ? <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-slate-400 mb-8">
                      Gracias por contactarnos. Hemos recibido su solicitud y un
                      asesor se comunicará con usted muy pronto.
                    </p>
                    <Button onClick={() => setIsSuccess(false)} variant="outline" className="text-white border-slate-600 hover:bg-slate-800">
                      Enviar otro mensaje
                    </Button>
                  </div> : <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Envíenos un Mensaje
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Nombre Completo *
                        </label>
                        <input type="text" name="nombre" required value={formData.nombre} onChange={handleChange} className="w-full h-12 rounded-lg border border-slate-600 bg-slate-900/50 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Su nombre" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Empresa
                        </label>
                        <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} className="w-full h-12 rounded-lg border border-slate-600 bg-slate-900/50 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Nombre de su empresa" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Email Corporativo *
                        </label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full h-12 rounded-lg border border-slate-600 bg-slate-900/50 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="email@empresa.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Teléfono / Celular *
                        </label>
                        <input type="tel" name="telefono" required value={formData.telefono} onChange={handleChange} className="w-full h-12 rounded-lg border border-slate-600 bg-slate-900/50 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+57 300 000 0000" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Tipo de Servicio / Interés *
                      </label>
                      <select name="servicio" required value={formData.servicio} onChange={handleChange} className="w-full h-12 rounded-lg border border-slate-600 bg-slate-900/50 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Seleccione una opción</option>
                        <option value="cotizacion">Solicitar Cotización</option>
                        <option value="asesoria">Asesoría Técnica</option>
                        <option value="soporte">Soporte y Mantenimiento</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Mensaje o Requerimiento *
                      </label>
                      <textarea name="mensaje" required value={formData.mensaje} onChange={handleChange} className="w-full min-h-[150px] rounded-lg border border-slate-600 bg-slate-900/50 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="Describa su necesidad o los equipos que requiere..."></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white" isLoading={isSubmitting}>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full relative border-t border-slate-800">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.336763483478!2d-75.60478968474936!3d6.219245328351568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44299691655555%3A0x1234567890abcdef!2sCra.%2082c%20%2330a-105%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1625000000000!5m2!1ses!2sco" width="100%" height="100%" style={{
        border: 0
      }} allowFullScreen loading="lazy" title="Ubicación Soluciones Industriales de Antioquia" className="brightness-75 contrast-125"></iframe>
      </section>
    </div>;
}