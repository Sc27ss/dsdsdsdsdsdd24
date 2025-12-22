import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'elevated' | 'bordered';
  hoverEffect?: boolean;
}
export function Card({
  className = '',
  variant = 'default',
  hoverEffect = false,
  children,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-white border border-zinc-200',
    elevated: 'bg-white shadow-lg border border-zinc-100',
    bordered: 'bg-transparent border-2 border-zinc-200'
  };
  const hoverStyles = hoverEffect ? 'hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 cursor-pointer' : '';
  return <motion.div className={`rounded-xl overflow-hidden ${variants[variant]} ${hoverStyles} ${className}`} whileHover={hoverEffect ? {
    y: -5
  } : undefined} {...props}>
      {children}
    </motion.div>;
}