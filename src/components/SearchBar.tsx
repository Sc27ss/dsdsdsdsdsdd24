import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Package } from 'lucide-react';
import { searchProducts, Product } from '../data/products';
import { useNavigate } from 'react-router-dom';
export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  // Búsqueda en tiempo real
  useEffect(() => {
    if (query.trim().length > 0) {
      const searchResults = searchProducts(query);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);
  // Cerrar al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };
  const handleProductClick = (product: Product) => {
    navigate(product.categoryPath);
    setQuery('');
    setIsOpen(false);
    setIsFocused(false);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClear();
    }
  };
  return <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className={`relative transition-all duration-300 ${isFocused ? 'scale-105' : 'scale-100'}`}>
        <div className={`w-full h-14 rounded-xl bg-slate-800/50 backdrop-blur-sm border-2  text-white placeholder:text-slate-500 transition-all duration-300 flex items-center ${isFocused ? 'border-cyan-500/50 bg-slate-800/80' : 'border-slate-700/50'}`}>
          <div className="pl-5 pr-3 pointer-events-none">
            <Search className={`h-6 w-6 transition-colors duration-300 ${isFocused ? 'text-cyan-400' : 'text-slate-200'}`} />
          </div>
          <input 
            type="text" 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            onFocus={() => setIsFocused(true)} 
            onKeyDown={handleKeyDown} 
            placeholder="Buscar productos industriales... (ej: martillo, válvula, bomba)" 
            className="w-full h-full bg-transparent focus:outline-none pr-12 text-white placeholder:text-slate-500"
          />
        </div>

        {query && <button onClick={handleClear} className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors">
            <X className="h-5 w-5" />
          </button>}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -10
      }} transition={{
        duration: 0.2
      }} className="absolute z-50 w-full mt-2 bg-slate-900 border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden max-h-[500px] overflow-y-auto">
            {results.length > 0 ? <div className="p-2">
                <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {results.length}{' '}
                  {results.length === 1 ? 'Resultado' : 'Resultados'}{' '}
                  encontrados
                </div>

                <div className="space-y-1">
                  {results.map((product, index) => <motion.button key={product.id} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.05
            }} onClick={() => handleProductClick(product)} className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group text-left">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-slate-800">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-cyan-400 transition-colors truncate">
                          {product.name}
                        </h4>
                        <p className="text-slate-400 text-xs mb-1 line-clamp-1">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Package className="h-3 w-3 text-blue-400" />
                          <span className="text-blue-400 text-xs font-medium">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      {/* Arrow Icon */}
                      <div className="flex-shrink-0 text-slate-600 group-hover:text-cyan-400 transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>)}
                </div>
              </div> : <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 mb-4">
                  <Search className="h-8 w-8 text-slate-600" />
                </div>
                <h4 className="text-white font-semibold mb-2">
                  No se encontraron productos
                </h4>
                <p className="text-slate-400 text-sm">
                  No hay productos relacionados con "
                  <span className="text-cyan-400">{query}</span>"
                </p>
                <p className="text-slate-500 text-xs mt-2">
                  Intenta con otros términos como: bomba, válvula, motor,
                  martillo
                </p>
              </div>}
          </motion.div>}
      </AnimatePresence>

      {/* Backdrop blur when open */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10" onClick={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>;
}