export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  categoryPath: string;
  image: string;
  keywords?: string[];
}
const I = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
export const productsDatabase: Product[] = [{
  id: 'tp-001',
  name: 'Motoreductores 20 HP',
  description: 'Motoreductores alta eficiencia',
  category: 'Transmisión de potencia',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['motoreductor', '20HP']
}, {
  id: 'tp-002',
  name: 'Reductor 20 HP',
  description: 'Reductor velocidad',
  category: 'Transmisión de potencia',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['reductor', '20HP']
}, {
  id: 'tp-003',
  name: 'Caja reductora',
  description: 'Caja reductora industrial',
  category: 'Transmisión de potencia',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['caja', 'reductora']
}, {
  id: 'tp-004',
  name: 'Caja reductora aluminio',
  description: 'Caja reductora aluminio',
  category: 'Transmisión de potencia',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['caja', 'aluminio']
}, {
  id: 'tp-005',
  name: 'Reductores eje libre',
  description: 'Reductores eje libre',
  category: 'Transmisión de potencia',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['reductor', 'eje']
}, {
  id: 'tp-006',
  name: 'Reductores sin fin corona',
  description: 'Reductores sin fin corona',
  category: 'Transmisión de potencia',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['reductor', 'sin fin']
}, {
  id: 'tp-007',
  name: 'Variadores de velocidad vectoriales',
  description: 'Variadores vectoriales',
  category: 'Velocidad variable',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['variador', 'velocidad']
}, {
  id: 'tp-008',
  name: 'Variador molino 5 HP – 1.5 T',
  description: 'Variador molino 5HP',
  category: 'Velocidad variable',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['variador', 'molino', '5HP']
}, {
  id: 'tp-009',
  name: 'Acople tipo cadena',
  description: 'Acoples cadena',
  category: 'Acoples',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['acople', 'cadena']
}, {
  id: 'tp-010',
  name: 'Acoples',
  description: 'Acoples industriales',
  category: 'Acoples',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['acople']
}, {
  id: 'tp-011',
  name: 'Chumaceras',
  description: 'Chumaceras soporte',
  category: 'Acoples',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['chumacera']
}, {
  id: 'tp-012',
  name: 'Piñones',
  description: 'Piñones industriales',
  category: 'Piñones',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['piñón']
}, {
  id: 'tp-013',
  name: 'Piñones helicoidales',
  description: 'Piñones helicoidales',
  category: 'Piñones',
  categoryPath: '/soluciones/transmision-potencia',
  image: I,
  keywords: ['piñón', 'helicoidal']
}, {
  id: 'bi-001',
  name: 'Bombas HCP A23',
  description: 'Bombas HCP A23',
  category: 'Bombas centrífugas',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'HCP', 'A23']
}, {
  id: 'bi-002',
  name: 'Bombas centrífugas superficie',
  description: 'Bombas centrífugas',
  category: 'Bombas centrífugas',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'centrífuga']
}, {
  id: 'bi-003',
  name: 'Bombas centrífugas / sistemas hidroneumáticos',
  description: 'Bombas hidroneumáticas',
  category: 'Bombas centrífugas',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'hidroneumático']
}, {
  id: 'bi-004',
  name: 'Bombas sumergibles HCP',
  description: 'Bombas sumergibles HCP',
  category: 'Bombas sumergibles',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'sumergible', 'HCP']
}, {
  id: 'bi-005',
  name: 'Bombas sumergibles tipo lapicero',
  description: 'Bombas lapicero',
  category: 'Bombas sumergibles',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'lapicero']
}, {
  id: 'bi-006',
  name: 'Bombas tipo lapicero',
  description: 'Bombas lapicero',
  category: 'Bombas sumergibles',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'lapicero']
}, {
  id: 'bi-007',
  name: 'Bomba sumergible caudal',
  description: 'Bomba alto caudal',
  category: 'Bombas sumergibles',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'caudal']
}, {
  id: 'bi-008',
  name: 'Bomba sumergible tipo cafetera',
  description: 'Bomba cafetera',
  category: 'Bombas sumergibles',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'cafetera']
}, {
  id: 'bi-009',
  name: 'Bombas multietapas',
  description: 'Bombas multietapas',
  category: 'Bombas especiales',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'multietapa']
}, {
  id: 'bi-010',
  name: 'Bombas verticales',
  description: 'Bombas verticales',
  category: 'Bombas especiales',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'vertical']
}, {
  id: 'bi-011',
  name: 'Bombas de baja presión',
  description: 'Bombas baja presión',
  category: 'Bombas especiales',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'baja presión']
}, {
  id: 'bi-012',
  name: 'Bombas alta presión',
  description: 'Bombas alta presión',
  category: 'Bombas especiales',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'alta presión']
}, {
  id: 'bi-013',
  name: 'Bomba alto caudal',
  description: 'Bomba alto caudal',
  category: 'Bombas especiales',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'alto caudal']
}, {
  id: 'bi-014',
  name: 'Bombas acero inoxidable',
  description: 'Bombas acero inoxidable',
  category: 'Bombas especiales',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'acero']
}, {
  id: 'bi-015',
  name: 'Bombas de engranaje',
  description: 'Bombas engranaje',
  category: 'Bombas especiales',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'engranaje']
}, {
  id: 'bi-016',
  name: 'Bombas hidráulicas',
  description: 'Bombas hidráulicas',
  category: 'Bombas especiales',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'hidráulica']
}, {
  id: 'bi-017',
  name: 'Bombas desplazamiento positivo',
  description: 'Bombas desplazamiento',
  category: 'Bombas especiales',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'desplazamiento']
}, {
  id: 'bi-018',
  name: 'Bombas neumáticas',
  description: 'Bombas neumáticas',
  category: 'Bombas especiales',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'neumática']
}, {
  id: 'bi-019',
  name: 'Bombas especiales',
  description: 'Bombas especiales',
  category: 'Bombas especiales',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'especial']
}, {
  id: 'bi-020',
  name: 'Bomba para lodos Grindex',
  description: 'Bomba Grindex',
  category: 'Bombas para lodos',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'lodo', 'Grindex']
}, {
  id: 'bi-021',
  name: 'Bombas para lodos',
  description: 'Bombas lodos',
  category: 'Bombas para lodos',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'lodo']
}, {
  id: 'bi-022',
  name: 'Bombas para la construcción',
  description: 'Bombas construcción',
  category: 'Bombas construcción',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'construcción']
}, {
  id: 'bi-023',
  name: 'Bombas jacuzzi / piscina',
  description: 'Bombas jacuzzi',
  category: 'Bombas especiales',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['bomba', 'jacuzzi']
}, {
  id: 'bi-024',
  name: 'Alineación bombas y motores',
  description: 'Alineación láser',
  category: 'Servicios',
  categoryPath: '/soluciones/bombas-industriales',
  image: I,
  keywords: ['alineación']
}, {
  id: 'fp-001',
  name: 'Fabricación de poleas industriales',
  description: 'Fabricación poleas',
  category: 'Fabricación',
  categoryPath: '/soluciones/fabricacion-poleas',
  image: I,
  keywords: ['fabricación', 'polea']
}, {
  id: 'fp-002',
  name: 'Polea 2 canales (física)',
  description: 'Polea 2 canales',
  category: 'Poleas estándar',
  categoryPath: '/soluciones/fabricacion-poleas',
  image: I,
  keywords: ['polea', '2 canales']
}, {
  id: 'fp-003',
  name: 'Polea 2.5',
  description: 'Polea 2.5',
  category: 'Poleas estándar',
  categoryPath: '/soluciones/fabricacion-poleas',
  image: I,
  keywords: ['polea', '2.5']
}, {
  id: 'fp-004',
  name: 'Polea 8x1 aluminio',
  description: 'Polea aluminio',
  category: 'Poleas aluminio',
  categoryPath: '/soluciones/fabricacion-poleas',
  image: I,
  keywords: ['polea', '8x1', 'aluminio']
}, {
  id: 'fp-005',
  name: 'Polea fundición hierro',
  description: 'Polea fundición',
  category: 'Poleas fundición',
  categoryPath: '/soluciones/fabricacion-poleas',
  image: I,
  keywords: ['polea', 'fundición']
}, {
  id: 'mi-001',
  name: 'Molino 1.5 ton',
  description: 'Molino 1.5 ton',
  category: 'Molinos',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['molino', '1.5']
}, {
  id: 'mi-002',
  name: 'Molinos VDV',
  description: 'Molinos VDV',
  category: 'Molinos',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['molino', 'VDV']
}, {
  id: 'mi-003',
  name: 'Molinos VDV – Timer',
  description: 'Molinos VDV timer',
  category: 'Molinos',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['molino', 'timer']
}, {
  id: 'mi-004',
  name: 'Variador molino 5 HP – 1.5 T',
  description: 'Variador molino',
  category: 'Molinos',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['variador', 'molino']
}, {
  id: 'mi-005',
  name: 'Mezcladora sin fin – corona',
  description: 'Mezcladora sin fin',
  category: 'Mezcladoras',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['mezcladora']
}, {
  id: 'mi-006',
  name: 'Malacate 1 ton',
  description: 'Malacate 1 ton',
  category: 'Malacates',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['malacate', '1 ton']
}, {
  id: 'mi-007',
  name: 'Malacate 700 mts',
  description: 'Malacate 700 mts',
  category: 'Malacates',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['malacate', '700']
}, {
  id: 'mi-008',
  name: 'Tambor malacate 300 mts – 5/8" Cap 1 L',
  description: 'Tambor malacate',
  category: 'Malacates',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['tambor', 'malacate']
}, {
  id: 'mi-009',
  name: 'Carro cable ang 45° – 1 ton',
  description: 'Carro cable',
  category: 'Transporte',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['carro', 'cable']
}, {
  id: 'mi-010',
  name: 'Banda transportadora móvil',
  description: 'Banda transportadora',
  category: 'Transporte',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['banda', 'transportadora']
}, {
  id: 'mi-011',
  name: 'Bombas para lodos',
  description: 'Bombas lodos',
  category: 'Bombas',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['bomba', 'lodo']
}, {
  id: 'mi-012',
  name: 'Bomba para lodos Grindex',
  description: 'Bomba Grindex',
  category: 'Bombas',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['bomba', 'Grindex']
}, {
  id: 'mi-013',
  name: 'Motor combustión interna',
  description: 'Motor combustión',
  category: 'Motores',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['motor', 'combustión']
}, {
  id: 'mi-014',
  name: 'Motores eléctricos trifásicos',
  description: 'Motores trifásicos',
  category: 'Motores',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['motor', 'trifásico']
}, {
  id: 'mi-015',
  name: 'Bombas hidráulicas',
  description: 'Bombas hidráulicas minería',
  category: 'Bombas',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['bomba', 'hidráulica']
}, {
  id: 'mi-016',
  name: 'Bombas de engranaje',
  description: 'Bombas engranaje minería',
  category: 'Bombas',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['bomba', 'engranaje']
}, {
  id: 'mi-017',
  name: 'Bombas desplazamiento positivo',
  description: 'Bombas desplazamiento minería',
  category: 'Bombas',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['bomba', 'desplazamiento']
}, {
  id: 'mi-018',
  name: 'Motores Siemens brida B5',
  description: 'Motores Siemens B5',
  category: 'Motores',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['motor', 'Siemens', 'B5']
}, {
  id: 'mi-019',
  name: 'Motoreductores 20 HP',
  description: 'Motoreductores 20HP',
  category: 'Motores',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['motoreductor', '20HP']
}, {
  id: 'mi-020',
  name: 'Reductores sin fin corona',
  description: 'Reductores sin fin',
  category: 'Motores',
  categoryPath: '/soluciones/mineria-equipos',
  image: I,
  keywords: ['reductor', 'sin fin', 'corona']
}, {
  id: 'co-001',
  name: 'Mezcladora convencional',
  description: 'Mezcladora convencional',
  category: 'Mezcladoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['mezcladora']
}, {
  id: 'co-002',
  name: 'Unidad motriz regla vibratoria K50',
  description: 'Regla vibratoria K50',
  category: 'Vibradores',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['regla', 'K50']
}, {
  id: 'co-003',
  name: 'Pluma grúa',
  description: 'Pluma grúa',
  category: 'Grúas',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['pluma', 'grúa']
}, {
  id: 'co-004',
  name: 'Banda transportadora móvil',
  description: 'Banda transportadora',
  category: 'Transporte',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['banda']
}, {
  id: 'co-005',
  name: 'Cono de Abraham (slump) (1481)',
  description: 'Cono slump 1481',
  category: 'Ensayos',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['cono', 'slump', '1481']
}, {
  id: 'co-006',
  name: 'Cono de Abraham (slump) (102)',
  description: 'Cono slump 102',
  category: 'Ensayos',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['cono', 'slump', '102']
}, {
  id: 'co-007',
  name: 'Molde cilíndrico para concreto (127)',
  description: 'Molde cilíndrico 127',
  category: 'Moldes',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['molde', '127']
}, {
  id: 'co-008',
  name: 'Molde cilíndrico para concreto (133)',
  description: 'Molde cilíndrico 133',
  category: 'Moldes',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['molde', '133']
}, {
  id: 'co-009',
  name: 'Molde para vigueta negro',
  description: 'Molde vigueta negro',
  category: 'Moldes',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['molde', 'vigueta']
}, {
  id: 'co-010',
  name: 'Molde para vigueta azul',
  description: 'Molde vigueta azul',
  category: 'Moldes',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['molde', 'vigueta']
}, {
  id: 'co-011',
  name: 'Cortadora de ladrillo',
  description: 'Cortadora ladrillo',
  category: 'Cortadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['cortadora', 'ladrillo']
}, {
  id: 'co-012',
  name: 'Cortadoras de ladrillo',
  description: 'Cortadoras ladrillo',
  category: 'Cortadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['cortadora', 'ladrillo']
}, {
  id: 'co-013',
  name: 'Cortadora de piso (pavimento) industrial',
  description: 'Cortadora piso',
  category: 'Cortadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['cortadora', 'piso']
}, {
  id: 'co-014',
  name: 'Cortadora de piso ref. CFC20-13H',
  description: 'Cortadora CFC20-13H',
  category: 'Cortadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['cortadora', 'CFC20-13H']
}, {
  id: 'co-015',
  name: 'Cortadora de piso ref. CFC14-95',
  description: 'Cortadora CFC14-95',
  category: 'Cortadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['cortadora', 'CFC14-95']
}, {
  id: 'co-016',
  name: 'Cortadora de piso ref. CFC20-13WG',
  description: 'Cortadora CFC20-13WG',
  category: 'Cortadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['cortadora', 'CFC20-13WG']
}, {
  id: 'co-017',
  name: 'Cortadora de piso ref. CFC20-13V',
  description: 'Cortadora CFC20-13V',
  category: 'Cortadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['cortadora', 'CFC20-13V']
}, {
  id: 'co-018',
  name: 'Cortadora de piso ref. CFC14-9WG',
  description: 'Cortadora CFC14-9WG',
  category: 'Cortadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['cortadora', 'CFC14-9WG']
}, {
  id: 'co-019',
  name: 'Cortadora BF51345 gasolina',
  description: 'Cortadora BF51345',
  category: 'Cortadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['cortadora', 'BF51345']
}, {
  id: 'co-020',
  name: 'Cortadora BFs1345 gasolina',
  description: 'Cortadora BFs1345',
  category: 'Cortadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['cortadora', 'BFs1345']
}, {
  id: 'co-021',
  name: 'Martillo kit BH65',
  description: 'Martillo BH65',
  category: 'Martillos',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['martillo', 'BH65']
}, {
  id: 'co-022',
  name: 'Martillo kit EH65',
  description: 'Martillo EH65',
  category: 'Martillos',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['martillo', 'EH65']
}, {
  id: 'co-023',
  name: 'Martillo EBH 11BLM',
  description: 'Martillo EBH 11BLM',
  category: 'Martillos',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['martillo', 'EBH', '11BLM']
}, {
  id: 'co-024',
  name: 'Allanadora ref. CPT36-5.5H',
  description: 'Allanadora CPT36-5.5H',
  category: 'Allanadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['allanadora', 'CPT36-5.5H']
}, {
  id: 'co-025',
  name: 'Allanadora ref. CPT36-6S',
  description: 'Allanadora CPT36-6S',
  category: 'Allanadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['allanadora', 'CPT36-6S']
}, {
  id: 'co-026',
  name: 'Allanadora ref. CPT36-6.5WG',
  description: 'Allanadora CPT36-6.5WG',
  category: 'Allanadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['allanadora', 'CPT36-6.5WG']
}, {
  id: 'co-027',
  name: 'Plancha VP1150AW',
  description: 'Plancha VP1150AW',
  category: 'Compactadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['plancha', 'VP1150AW']
}, {
  id: 'co-028',
  name: 'Placa compactadora 5.5H',
  description: 'Placa 5.5H',
  category: 'Compactadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['placa', '5.5H']
}, {
  id: 'co-029',
  name: 'Placa compactadora 6S',
  description: 'Placa 6S',
  category: 'Compactadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['placa', '6S']
}, {
  id: 'co-030',
  name: 'Placa compactadora 5.5HR',
  description: 'Placa 5.5HR',
  category: 'Compactadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['placa', '5.5HR']
}, {
  id: 'co-031',
  name: 'Placas vibrocompactadoras',
  description: 'Placas vibrocompactadoras',
  category: 'Compactadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['placa', 'vibrocompactadora']
}, {
  id: 'co-032',
  name: 'Apisonador',
  description: 'Apisonador',
  category: 'Compactadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['apisonador']
}, {
  id: 'co-033',
  name: 'Apisonador gasolina',
  description: 'Apisonador gasolina',
  category: 'Compactadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['apisonador', 'gasolina']
}, {
  id: 'co-034',
  name: 'Hidrolavadora eléctrica Annovi Reverberi',
  description: 'Hidrolavadora Annovi',
  category: 'Hidrolavadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['hidrolavadora', 'Annovi']
}, {
  id: 'co-035',
  name: 'Hidrolavadora eléctrica Power Blast',
  description: 'Hidrolavadora Power Blast',
  category: 'Hidrolavadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['hidrolavadora', 'Power Blast']
}, {
  id: 'co-036',
  name: 'Hidrolavadora a gasolina',
  description: 'Hidrolavadora gasolina',
  category: 'Hidrolavadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['hidrolavadora', 'gasolina']
}, {
  id: 'co-037',
  name: 'Hidrolavadora 5.5H',
  description: 'Hidrolavadora 5.5H',
  category: 'Hidrolavadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['hidrolavadora', '5.5H']
}, {
  id: 'co-038',
  name: 'Hidrolavadora 11L',
  description: 'Hidrolavadora 11L',
  category: 'Hidrolavadoras',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['hidrolavadora', '11L']
}, {
  id: 'co-039',
  name: 'Discos láser y diamantados',
  description: 'Discos láser',
  category: 'Discos',
  categoryPath: '/soluciones/construccion',
  image: I,
  keywords: ['disco', 'láser']
}, {
  id: 'si-001',
  name: 'Casco de seguridad',
  description: 'Casco seguridad',
  category: 'Protección Cabeza',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['casco']
}, {
  id: 'si-002',
  name: 'Casco de seguridad 2',
  description: 'Casco seguridad',
  category: 'Protección Cabeza',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['casco']
}, {
  id: 'si-003',
  name: 'Casco de seguridad 3',
  description: 'Casco seguridad',
  category: 'Protección Cabeza',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['casco']
}, {
  id: 'si-004',
  name: 'Protección visual',
  description: 'Protección visual',
  category: 'Protección Visual',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'visual']
}, {
  id: 'si-005',
  name: 'Protección visual 2',
  description: 'Protección visual',
  category: 'Protección Visual',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'visual']
}, {
  id: 'si-006',
  name: 'Protección visual 3',
  description: 'Protección visual',
  category: 'Protección Visual',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'visual']
}, {
  id: 'si-007',
  name: 'Protección visual 4',
  description: 'Protección visual',
  category: 'Protección Visual',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'visual']
}, {
  id: 'si-008',
  name: 'Protección respiratoria',
  description: 'Protección respiratoria',
  category: 'Protección Respiratoria',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'respiratoria']
}, {
  id: 'si-009',
  name: 'Protección facial',
  description: 'Protección facial',
  category: 'Protección Facial',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'facial']
}, {
  id: 'si-010',
  name: 'Protección auditiva',
  description: 'Protección auditiva',
  category: 'Protección Auditiva',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'auditiva']
}, {
  id: 'si-011',
  name: 'Protección auditiva inser',
  description: 'Protección inser',
  category: 'Protección Auditiva',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'inser']
}, {
  id: 'si-012',
  name: 'Protección auditiva copa',
  description: 'Protección copa',
  category: 'Protección Auditiva',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'copa']
}, {
  id: 'si-013',
  name: 'Protección auditiva copa casco',
  description: 'Protección copa casco',
  category: 'Protección Auditiva',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'copa']
}, {
  id: 'si-014',
  name: 'Protección auditiva copa casco tipo ala',
  description: 'Protección copa ala',
  category: 'Protección Auditiva',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'ala']
}, {
  id: 'si-015',
  name: 'Protección auditiva copa casco tipo ala New',
  description: 'Protección copa ala new',
  category: 'Protección Auditiva',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'ala']
}, {
  id: 'si-016',
  name: 'Protección auditiva copa casco tipo ala 2',
  description: 'Protección copa ala',
  category: 'Protección Auditiva',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['protección', 'ala']
}, {
  id: 'si-017',
  name: 'Respiración autónoma',
  description: 'Respiración autónoma',
  category: 'Protección Respiratoria',
  categoryPath: '/soluciones/seguridad-industrial',
  image: I,
  keywords: ['respiración', 'autónoma']
}, {
  id: 'em-001',
  name: 'Motores eléctricos',
  description: 'Motores eléctricos',
  category: 'Motores',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['motor', 'eléctrico']
}, {
  id: 'em-002',
  name: 'Motores eléctricos trifásicos',
  description: 'Motores trifásicos',
  category: 'Motores',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['motor', 'trifásico']
}, {
  id: 'em-003',
  name: 'Motores eléctricos monofásicos',
  description: 'Motores monofásicos',
  category: 'Motores',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['motor', 'monofásico']
}, {
  id: 'em-004',
  name: 'Motores Siemens brida B5',
  description: 'Motores Siemens B5',
  category: 'Motores',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['motor', 'Siemens', 'B5']
}, {
  id: 'em-005',
  name: 'Motofrenos MGM',
  description: 'Motofrenos MGM',
  category: 'Motores',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['motofreno', 'MGM']
}, {
  id: 'em-006',
  name: 'Motor combustión interna',
  description: 'Motor combustión',
  category: 'Motores',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['motor', 'combustión']
}, {
  id: 'em-007',
  name: 'Plantas de energía',
  description: 'Plantas energía',
  category: 'Generadores',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['planta', 'energía']
}, {
  id: 'em-008',
  name: 'Tablero de control y potencia',
  description: 'Tablero control',
  category: 'Control',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['tablero', 'control']
}, {
  id: 'em-009',
  name: 'Tablero de control y de potencia',
  description: 'Tablero potencia',
  category: 'Control',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['tablero', 'potencia']
}, {
  id: 'em-010',
  name: 'Circuito de control',
  description: 'Circuito control',
  category: 'Control',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['circuito']
}, {
  id: 'em-011',
  name: 'Botoneras y clavijas',
  description: 'Botoneras clavijas',
  category: 'Control',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['botonera', 'clavija']
}, {
  id: 'em-012',
  name: 'Turbina axial',
  description: 'Turbina axial',
  category: 'Turbinas',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['turbina', 'axial']
}, {
  id: 'em-013',
  name: 'Turbina caracol',
  description: 'Turbina caracol',
  category: 'Turbinas',
  categoryPath: '/soluciones/energia-motores',
  image: I,
  keywords: ['turbina', 'caracol']
}, {
  id: 'in-001',
  name: 'Manómetros',
  description: 'Manómetros',
  category: 'Medición',
  categoryPath: '/soluciones/instrumentacion-valvulas',
  image: I,
  keywords: ['manómetro']
}, {
  id: 'in-002',
  name: 'Válvulas de 5 vías',
  description: 'Válvulas 5 vías',
  category: 'Válvulas',
  categoryPath: '/soluciones/instrumentacion-valvulas',
  image: I,
  keywords: ['válvula', '5 vías']
}, {
  id: 'in-003',
  name: 'Presión',
  description: 'Medidores presión',
  category: 'Medición',
  categoryPath: '/soluciones/instrumentacion-valvulas',
  image: I,
  keywords: ['presión']
}, {
  id: 'in-004',
  name: 'Humedómetro',
  description: 'Humedómetro',
  category: 'Medición',
  categoryPath: '/soluciones/instrumentacion-valvulas',
  image: I,
  keywords: ['humedómetro']
}, {
  id: 'in-005',
  name: 'Esclerómetro',
  description: 'Esclerómetro',
  category: 'Ensayos',
  categoryPath: '/soluciones/instrumentacion-valvulas',
  image: I,
  keywords: ['esclerómetro']
}, {
  id: 'in-006',
  name: 'Máquina para ensayos de concreto a compresión',
  description: 'Máquina ensayos',
  category: 'Ensayos',
  categoryPath: '/soluciones/instrumentacion-valvulas',
  image: I,
  keywords: ['máquina', 'ensayo']
}, {
  id: 'in-007',
  name: 'Sensores',
  description: 'Sensores',
  category: 'Medición',
  categoryPath: '/soluciones/instrumentacion-valvulas',
  image: I,
  keywords: ['sensor']
}, {
  id: 'in-008',
  name: 'Medidores de combustibles',
  description: 'Medidores combustibles',
  category: 'Medición',
  categoryPath: '/soluciones/instrumentacion-valvulas',
  image: I,
  keywords: ['medidor', 'combustible']
}, {
  id: 'lu-001',
  name: 'Lubricadores automáticos',
  description: 'Lubricadores automáticos',
  category: 'Lubricación',
  categoryPath: '/soluciones/lubricacion-combustibles',
  image: I,
  keywords: ['lubricador']
}, {
  id: 'lu-002',
  name: 'Sistemas de filtración',
  description: 'Sistemas filtración',
  category: 'Filtración',
  categoryPath: '/soluciones/lubricacion-combustibles',
  image: I,
  keywords: ['filtración']
}, {
  id: 'ec-001',
  name: 'Compresores',
  description: 'Compresores',
  category: 'Compresión',
  categoryPath: '/soluciones/equipos-complementarios',
  image: I,
  keywords: ['compresor']
}, {
  id: 'ec-002',
  name: 'Ductos flexibles',
  description: 'Ductos flexibles',
  category: 'Ductos',
  categoryPath: '/soluciones/equipos-complementarios',
  image: I,
  keywords: ['ducto']
}, {
  id: 'ec-003',
  name: 'Ducto flexible',
  description: 'Ducto flexible',
  category: 'Ductos',
  categoryPath: '/soluciones/equipos-complementarios',
  image: I,
  keywords: ['ducto']
}, {
  id: 'ec-004',
  name: 'Mangueras de polietileno',
  description: 'Mangueras polietileno',
  category: 'Mangueras',
  categoryPath: '/soluciones/equipos-complementarios',
  image: I,
  keywords: ['manguera', 'polietileno']
}, {
  id: 'ec-005',
  name: 'Sistemas hidroneumáticos',
  description: 'Sistemas hidroneumáticos',
  category: 'Sistemas',
  categoryPath: '/soluciones/equipos-complementarios',
  image: I,
  keywords: ['hidroneumático']
}, {
  id: 'ec-006',
  name: 'Sistemas contra incendio',
  description: 'Sistemas incendio',
  category: 'Sistemas',
  categoryPath: '/soluciones/equipos-complementarios',
  image: I,
  keywords: ['incendio']
}, {
  id: 'ec-007',
  name: 'Máquinas corta césped',
  description: 'Corta césped',
  category: 'Jardinería',
  categoryPath: '/soluciones/equipos-complementarios',
  image: I,
  keywords: ['césped']
}, {
  id: 'ec-008',
  name: 'Guadañadoras',
  description: 'Guadañadoras',
  category: 'Jardinería',
  categoryPath: '/soluciones/equipos-complementarios',
  image: I,
  keywords: ['guadañadora']
}, {
  id: 'ec-009',
  name: 'Sopladoras',
  description: 'Sopladoras',
  category: 'Jardinería',
  categoryPath: '/soluciones/equipos-complementarios',
  image: I,
  keywords: ['sopladora']
}, {
  id: 'ec-010',
  name: 'Fumigación',
  description: 'Equipos fumigación',
  category: 'Jardinería',
  categoryPath: '/soluciones/equipos-complementarios',
  image: I,
  keywords: ['fumigación']
}, {
  id: 'ec-011',
  name: 'Motosierras',
  description: 'Motosierras',
  category: 'Jardinería',
  categoryPath: '/soluciones/equipos-complementarios',
  image: I,
  keywords: ['motosierra']
}, {
  id: 'ec-012',
  name: 'Cables',
  description: 'Cables industriales',
  category: 'Cables',
  categoryPath: '/soluciones/equipos-complementarios',
  image: I,
  keywords: ['cable']
}];
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