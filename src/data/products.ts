export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  categoryPath: string;
  image: string;
  keywords?: string[];
}

// images now inlined per-product; removed shared constant I

export const productsDatabase: Product[] = [
  // Construcción (4)
  { id: 'cons-001', name: 'Pluma Grúa Eléctrica', description: 'Elevación segura y eficiente de carga en construcciones verticales.', category: 'Construcción', categoryPath: '/soluciones/construccion', image: 'https://i.imgur.com/LTtPorY.png', keywords: ['pluma','grua','electrica','izaje','carga','elevacion','construccion'] },
    { id: 'cons-002', name: 'Cortadora de Ladrillo', description: 'Corte exacto y rápido de bloques y materiales cerámicos.', category: 'Construcción', categoryPath: '/soluciones/construccion', image: 'https://i.imgur.com/UTYe4Cf.png', keywords: ['cortadora','ladrillo','bloques','ceramica','corte','disco','obra'] },
    { id: 'cons-003', name: 'Mezcladora de Concreto', description: 'Mezcla homogénea y eficiente para concreto de alta calidad.', category: 'Construcción', categoryPath: '/soluciones/construccion', image: 'https://i.imgur.com/g57YvoD.png', keywords: ['mezcladora','concreto','cemento','hormigon','mezcla','obra','construccion'] },
    { id: 'cons-004', name: 'Apisonador Tipo Canguro', description: 'Compactación potente en suelos cohesivos y espacios reducidos.', category: 'Construcción', categoryPath: '/soluciones/construccion', image: 'https://i.imgur.com/DWRGkAx.png', keywords: ['apisonador','canguro','compactacion','suelo','obra','compactador','construccion'] },

  // Manejo de Fluidos (4)
  { id: 'mdf-001', name: 'Bombas Centrífugas para Lodos', description: 'Manejo eficiente de fluidos viscosos en minería e industria pesada.', category: 'Manejo de Fluidos', categoryPath: '/soluciones/manejo-de-fluidos', image: 'https://i.imgur.com/vXHOtiX.png', keywords: ['bomba','centrifuga','lodos','fluidos','mineria','industrial','bombeo'] },
  { id: 'mdf-002', name: 'Bombas de Desplazamiento Positivo', description: 'Bombeo preciso de líquidos y sólidos en aplicaciones exigentes.', category: 'Manejo de Fluidos', categoryPath: '/soluciones/manejo-de-fluidos', image: 'https://i.imgur.com/mmffvIR.png', keywords: ['bomba','desplazamiento','positivo','liquidos','solidos','presion','industrial'] },
  { id: 'mdf-003', name: 'Bombas Multietapas', description: 'Alta potencia con control gradual de presión.', category: 'Manejo de Fluidos', categoryPath: '/soluciones/manejo-de-fluidos', image: 'https://i.imgur.com/48oEZLQ.png', keywords: ['bomba','multietapas','presion','potencia','agua','industrial','bombeo'] },
  { id: 'mdf-004', name: 'Bombas Sumergibles', description: 'Soluciones para drenaje, trituración y manejo de lodos.', category: 'Manejo de Fluidos', categoryPath: '/soluciones/manejo-de-fluidos', image: 'https://i.imgur.com/fie7f9o.png', keywords: ['bomba','sumergible','drenaje','agua','lodos','industrial','pozo'] },

  // Agroindustriales (4)
  { id: 'agr-001', name: 'Fumigadora de Motor', description: 'Aspersión uniforme y eficiente para la protección de cultivos.', category: 'Agroindustriales', categoryPath: '/soluciones/agroindustriales', image: 'https://i.imgur.com/uf39yw5.png', keywords: ['fumigadora','motor','aspersora','cultivos','agricola','fumigacion','plagas'] },
  { id: 'agr-002', name: 'Guadañadora Profesional', description: 'Corte preciso de maleza en terrenos irregulares.', category: 'Agroindustriales', categoryPath: '/soluciones/agroindustriales', image: 'https://i.imgur.com/kyBgxON.png', keywords: ['guadañadora','maleza','corte','terreno','agricola','desbroce','profesional'] },
  { id: 'agr-003', name: 'Hidrolavadora Eléctrica', description: 'Limpieza profunda con bajo consumo de agua.', category: 'Agroindustriales', categoryPath: '/soluciones/agroindustriales', image: 'https://i.imgur.com/tK4SBxJ.png', keywords: ['hidrolavadora','electrica','limpieza','agua','presion','lavado','hogar'] },
  { id: 'agr-004', name: 'Máquina Cortacésped', description: 'Corte uniforme y acabado profesional en prados.', category: 'Agroindustriales', categoryPath: '/soluciones/agroindustriales', image: 'https://i.imgur.com/DtvSOVx.png', keywords: ['cortacesped','cesped','prado','jardin','corte','maquina','acabado'] },

  // Transmisión de Potencia (4)
  { id: 'tpn-001', name: 'Acople Rex Omega Elastómero', description: 'Transmisión de energía suave y segura entre ejes.', category: 'Transmisión de Potencia', categoryPath: '/soluciones/tras-potencia', image: 'https://i.imgur.com/UeK3zRS.png', keywords: ['acople','rex','omega','elastomero','ejes','transmision','potencia'] },
  { id: 'tpn-002', name: 'Reductores Pendulares', description: 'Control de torque y velocidad para alto rendimiento industrial.', category: 'Transmisión de Potencia', categoryPath: '/soluciones/tras-potencia', image: 'https://i.imgur.com/7khROnB.png', keywords: ['reductor','pendular','torque','velocidad','industrial','potencia','mecanico'] },
  { id: 'tpn-003', name: 'Piñones de Precisión', description: 'Componentes confiables para sistemas de transmisión mecánica.', category: 'Transmisión de Potencia', categoryPath: '/soluciones/tras-potencia', image: 'https://i.imgur.com/eG5iABH.png', keywords: ['pinon','precision','engranaje','transmision','mecanico','industrial','movimiento'] },
  { id: 'tpn-004', name: 'Chumaceras Industriales', description: 'Soporte y estabilidad para ejes rotativos.', category: 'Transmisión de Potencia', categoryPath: '/soluciones/tras-potencia', image: 'https://i.imgur.com/s4tFSrL.png', keywords: ['chumacera','soporte','ejes','rodamiento','industrial','rotacion','mecanico'] },

  // Filtración de Fluidos (4)
  { id: 'fil-001', name: 'Filtros Parker FBO-10 y FBO-14', description: 'Filtración avanzada para combustible diésel.', category: 'Filtración de Fluidos', categoryPath: '/soluciones/filtracion-fluidos', image: 'https://i.imgur.com/iQQc5sO.png', keywords: ['filtro','parker','fbo10','fbo14','diesel','combustible','filtracion'] },
  { id: 'fil-002', name: 'Sistemas de Filtración Móvil', description: 'Limpieza micrónica adaptable a cualquier punto operativo.', category: 'Filtración de Fluidos', categoryPath: '/soluciones/filtracion-fluidos', image: 'https://i.imgur.com/RroeyDu.png', keywords: ['filtracion','movil','sistema','aceite','particulas','industrial','limpieza'] },
  { id: 'fil-003', name: 'Carcasas Facet Series 21 y 22', description: 'Soluciones robustas para filtración industrial crítica.', category: 'Filtración de Fluidos', categoryPath: '/soluciones/filtracion-fluidos', image: 'https://i.imgur.com/4Sbs7rF.png', keywords: ['carcasa','facet','series21','series22','filtracion','industrial','proteccion'] },
  { id: 'fil-004', name: 'Filtración Higroscópica Des-Case', description: 'Control eficiente de humedad en aceites industriales.', category: 'Filtración de Fluidos', categoryPath: '/soluciones/filtracion-fluidos', image: 'https://i.imgur.com/oHlbBYO.png', keywords: ['filtracion','higroscopica','descase','humedad','aceite','industrial','proteccion'] },

  // Motores (4)
  { id: 'mot-005', name: 'Motor de Combustión Interna', description: 'Motor a gasolina compacto y potente para maquinaria móvil y estacionaria.', category: 'Motores', categoryPath: '/soluciones/motores', image: 'https://i.imgur.com/anKW1sg.png', keywords: ['motor', 'combustion', 'gasolina', 'compacto', 'maquinaria', 'potente', 'estacionaria'] },
  { id: 'mot-006', name: 'Generador Eléctrico', description: 'Sistema de respaldo energético con cabina insonorizada y panel de control integrado.', category: 'Motores', categoryPath: '/soluciones/motores', image: 'https://i.imgur.com/hgI4CPn.png', keywords: ['generador', 'electrico', 'respaldo', 'insonorizada', 'panel', 'control', 'energia'] },
  { id: 'mot-007', name: 'Caja de Conexiones', description: 'Punto de distribución eléctrica seguro para la alimentación de motores trifásicos.', category: 'Motores', categoryPath: '/soluciones/motores', image: 'https://i.imgur.com/Ewf2eik.png', keywords: ['caja', 'conexiones', 'distribucion', 'electrica', 'trifasico', 'motores', 'seguro'] },
  { id: 'mot-008', name: 'Motor Eléctrico de Inducción', description: 'Motor de inducción industrial diseñado para alto rendimiento y operación continua.', category: 'Motores', categoryPath: '/soluciones/motores', image: 'https://i.imgur.com/DFb5ntK.png', keywords: ['motor', 'electrico', 'induccion', 'industrial', 'rendimiento', 'operacion', 'continua'] },
];

export function searchProducts(q: string): Product[] {
  if (!q || !q.trim()) return [];
  const n = (t: string) => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const nq = n(q.trim());
  return productsDatabase.filter(p => n(p.name).includes(nq) || n(p.description).includes(nq) || n(p.category).includes(nq) || p.keywords?.some(k => n(k).includes(nq)));
}

export function getProductsByCategory(c: string): Product[] {
  return productsDatabase.filter(p => p.category === c);
}

export function getAllCategories(): string[] {
  return [...new Set(productsDatabase.map(p => p.category))];
}

export function getProductsByDivision(d: string): Product[] {
  return productsDatabase.filter(p => p.categoryPath === d);
}
