import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappUrlForMessage } from '../utils/whatsapp';

export function WhatsAppButton() {
  const message = 'Hola, estoy interesado en sus soluciones industriales. Me gustaría recibir más información.';
  const whatsappUrl = whatsappUrlForMessage(message);
  return <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors" initial={{
    scale: 0,
    opacity: 0
  }} animate={{
    scale: 1,
    opacity: 1
  }} whileHover={{
    scale: 1.1
  }} whileTap={{
    scale: 0.9
  }} title="Contactar por WhatsApp">
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-75"></span>
      <MessageCircle className="h-8 w-8 relative z-10" />
    </motion.a>;
}