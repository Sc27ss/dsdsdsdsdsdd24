import React, { useEffect, useRef } from "react";
import { clients } from "../data/clients"; // Importa los clientes desde tu archivo de datos

const LogoCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const currentPos = useRef(0);
  const speedRef = useRef(1.0); // Velocidad inicial ligeramente reducida
  const targetSpeedRef = useRef(1.0);

  useEffect(() => {
    const animate = () => {
      if (!trackRef.current) return;

      // Suavizado de velocidad (Lerp) para una animación más fluida
      const lerpFactor = 0.04;
      speedRef.current += (targetSpeedRef.current - speedRef.current) * lerpFactor;
      
      // Actualizar posición
      currentPos.current -= speedRef.current;

      // Lógica para el bucle infinito
      // El ancho del scroll se divide por 3 porque triplicamos la lista de logos
      const scrollWidth = trackRef.current.scrollWidth / 3;
      if (Math.abs(currentPos.current) >= scrollWidth) {
        currentPos.current %= scrollWidth;
      }

      // Aplicar transformación para el movimiento
      trackRef.current.style.transform = `translate3d(${currentPos.current}px, 0, 0)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    // Limpieza al desmontar el componente
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => (targetSpeedRef.current = 0.2); // Desacelera al pasar el mouse
  const handleMouseLeave = () => (targetSpeedRef.current = 1.0); // Reanuda la velocidad normal

  // Triplicamos la lista de clientes para un efecto de bucle continuo y sin cortes
  const displayBrands = [...clients, ...clients, ...clients];

  return (
    <section className="bg-[#050a14] w-full py-16 sm:py-20 flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-sm tracking-[5px] uppercase text-white/50 mb-12 text-center font-sans">
          Empresas que confían en nosotros
        </h2>
      </div>

      <div
        className="w-full relative py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={trackRef} className="flex items-center whitespace-nowrap will-change-transform overflow-hidden">
          {displayBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="group flex-shrink-0 w-[140px] mx-[25px] md:w-[180px] md:mx-[45px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full brightness-0 invert opacity-30 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:filter-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;