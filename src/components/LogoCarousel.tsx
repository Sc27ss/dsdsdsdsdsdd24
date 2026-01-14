import React, { useEffect, useRef, useState } from "react";
import { clients } from "../data/clients"; // Importa los clientes desde tu archivo de datos

const LogoCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const positionRef = useRef(0);
  const speedRef = useRef(1.0); // Velocidad de desplazamiento normal
  const targetSpeedRef = useRef(1.0); // Velocidad objetivo (cambia al hacer hover)

  // Duplicamos los logos para el bucle infinito.
  // Usamos useState para asegurarnos de que React renderice la lista duplicada.
  const [logos] = useState(() => [...clients, ...clients]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Ancho del primer set de logos (la mitad del total)
    let firstSetWidth = 0;

    const animate = () => {
      // Interpola suavemente la velocidad actual hacia la velocidad objetivo
      const lerpFactor = 0.04;
      speedRef.current += (targetSpeedRef.current - speedRef.current) * lerpFactor;

      // Mueve la posición
      positionRef.current -= speedRef.current;

      // Si el carrusel se ha desplazado la longitud completa del primer set de logos...
      if (firstSetWidth > 0 && positionRef.current <= -firstSetWidth) {
        // ...lo reiniciamos sumando ese ancho.
        // Esto mueve la posición de, por ej., -2001px a -1px si el ancho es 2000px,
        // creando un reinicio imperceptible porque el contenido visual es idéntico.
        positionRef.current += firstSetWidth;
      }

      // Aplica la transformación
      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;

      // Sigue el bucle
      requestRef.current = requestAnimationFrame(animate);
    };

    // El ResizeObserver es clave para la robustez.
    // Se asegura de que tengamos el ancho correcto antes de empezar,
    // y lo recalcula si la ventana cambia de tamaño.
    const observer = new ResizeObserver(() => {
      if (track.scrollWidth) {
        firstSetWidth = track.scrollWidth / 2; // El ancho de un set de logos
        
        // Si la animación no ha empezado, la iniciamos.
        // Esto previene que el carrusel empiece a moverse sin tener el ancho calculado.
        if (!requestRef.current) {
          requestRef.current = requestAnimationFrame(animate);
        }
      }
    });

    observer.observe(track);

    // Función de limpieza al desmontar el componente
    return () => {
      observer.disconnect();
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Ralentiza el carrusel al pasar el ratón
  const handleMouseEnter = () => {
    targetSpeedRef.current = 0.2;
  };
  
  // Reanuda la velocidad normal al quitar el ratón
  const handleMouseLeave = () => {
    targetSpeedRef.current = 1.0;
  };

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
        <div ref={trackRef} className="flex items-center whitespace-nowrap will-change-transform">
          {logos.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="group flex-shrink-0 w-[140px] mx-[25px] md:w-[180px] md:mx-[45px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full brightness-0 invert opacity-30 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:filter-none"
                loading="lazy" // Ayuda a la carga inicial
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;