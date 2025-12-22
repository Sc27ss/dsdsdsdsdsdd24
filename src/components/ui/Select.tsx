import React from 'react';
import { ChevronDown } from 'lucide-react';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: {
    value: string;
    label: string;
  }[];
}
export function Select({
  className = '',
  label,
  error,
  options,
  id,
  ...props
}: SelectProps) {
  const selectId = id || props.name;
  return <div className="w-full">
      {label && <label htmlFor={selectId} className="block text-sm font-medium text-zinc-700 mb-1">
          {label}
        </label>}
      <div className="relative">
        <select id={selectId} className={`
            flex h-10 w-full appearance-none rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `} {...props}>
          <option value="" disabled>
            Seleccione una opción
          </option>
          {options.map(option => <option key={option.value} value={option.value}>
              {option.label}
            </option>)}
        </select>
        <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-zinc-400 pointer-events-none" />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>;
}