import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
interface ProductCardProps {
  name: string;
  description: string;
  category?: string;
  index?: number;
}
export function ProductCard({
  name,
  description,
  category,
  index = 0
}: ProductCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    delay: index * 0.03
  }} whileHover={{
    y: -5
  }} className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
      <div className="aspect-square bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt={name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>
      <div className="p-5">
        {category && <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 block">
            {category}
          </span>}
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-slate-400 mb-4 line-clamp-2">
          {description}
        </p>
        <Button variant="outline" size="sm" className="w-full text-white border-slate-600 hover:border-blue-500 hover:text-blue-400 hover:bg-transparent group/btn">
          <span className="group-hover/btn:scale-110 transition-transform">
            Cotizar
          </span>
        </Button>
      </div>
    </motion.div>;
}