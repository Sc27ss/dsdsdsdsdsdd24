import React from 'react';
import { motion } from 'framer-motion';
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}
export function SectionTitle({
  title,
  subtitle,
  description,
  centered = true,
  light = false
}: SectionTitleProps) {
  return <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && <motion.span initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
          {subtitle}
        </motion.span>}
      <motion.h2 initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      delay: 0.1
    }} className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-zinc-900'}`}>
        {title}
      </motion.h2>
      {description && <motion.p initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      delay: 0.2
    }} className={`max-w-2xl mx-auto text-lg ${light ? 'text-zinc-300' : 'text-zinc-600'}`}>
          {description}
        </motion.p>}
      <motion.div initial={{
      scaleX: 0
    }} whileInView={{
      scaleX: 1
    }} viewport={{
      once: true
    }} transition={{
      delay: 0.3,
      duration: 0.8
    }} className={`h-1 w-24 bg-blue-600 mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>;
}