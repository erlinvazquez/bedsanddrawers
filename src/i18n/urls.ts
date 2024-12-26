import type { Locale } from '../consts';

// URL segment translations for each language
export const URL_SEGMENTS = {
  en: {
    // Categories
    beds: 'beds',
    drawers: 'drawers',
    'by-room': 'by-room',
    sets: 'sets',
    
    // Subcategories - Beds
    'baby-beds': 'baby-beds',
    'kids-beds': 'kids-beds',
    'single-beds': 'single-beds',
    'double-beds': 'double-beds',
    'king-queen-beds': 'king-queen-beds',
    'sofa-beds': 'sofa-beds',
    'space-saving-beds': 'space-saving-beds',
    
    // Subcategories - Drawers
    'chest-of-drawers': 'chest-of-drawers',
    'under-bed-storage': 'under-bed-storage',
    'bedside-tables': 'bedside-tables',
    'modular-drawers': 'modular-drawers',
    
    // Subcategories - By Room
    'baby-rooms': 'baby-rooms',
    'kids-rooms': 'kids-rooms',
    'bedrooms': 'bedrooms',
    'studio-apartments': 'studio-apartments',
    
    // Subcategories - Sets
    'bedroom-sets': 'bedroom-sets',
    'nursery-sets': 'nursery-sets',
    'storage-sets': 'storage-sets',

    // Product slugs - Beds
    'convertible-cribs': 'convertible-cribs',
    'mini-cribs': 'mini-cribs',
    'bassinets': 'bassinets',
    'portable-baby-beds': 'portable-baby-beds',
    'toddler-beds': 'toddler-beds',
    'bunk-beds': 'bunk-beds',
    'loft-beds': 'loft-beds',
    'kids-storage-beds': 'kids-storage-beds',
    'wooden-single-beds': 'wooden-single-beds',
    'metal-single-beds': 'metal-single-beds',
    'upholstered-single-beds': 'upholstered-single-beds',
    'compact-double-beds': 'compact-double-beds',
    'platform-double-beds': 'platform-double-beds',
    'vintage-double-beds': 'vintage-double-beds',
    'luxury-king-beds': 'luxury-king-beds',
    'affordable-queen-beds': 'affordable-queen-beds',
    'adjustable-beds': 'adjustable-beds',
    'futons': 'futons',
    'pull-out-beds': 'pull-out-beds',
    'sectional-sofa-beds': 'sectional-sofa-beds',
    'murphy-beds': 'murphy-beds',
    'trundle-beds': 'trundle-beds',
    'foldable-beds': 'foldable-beds',

    // Product slugs - Drawers
    'wooden-chest-drawers': 'wooden-chest-drawers',
    'metal-frame-drawers': 'metal-frame-drawers',
    'minimalist-drawers': 'minimalist-drawers',
    'slide-out-drawers': 'slide-out-drawers',
    'under-bed-bins': 'under-bed-bins',
    'storage-nightstands': 'storage-nightstands',
    'compact-nightstands': 'compact-nightstands',
    'stackable-drawers': 'stackable-drawers',
    'configurable-drawers': 'configurable-drawers',

    // Product slugs - By Room
    'nursery-set': 'nursery-set',
    'changing-station': 'changing-station',
    'kids-bedroom-sets': 'kids-bedroom-sets',
    'kids-study-furniture': 'kids-study-furniture',
    'master-bedroom-sets': 'master-bedroom-sets',
    'guest-room-sets': 'guest-room-sets',
    'studio-living-sets': 'studio-living-sets',
    'space-saving-solutions': 'space-saving-solutions',

    // Product slugs - Sets
    'complete-nursery-sets': 'complete-nursery-sets',
    'mini-nursery-sets': 'mini-nursery-sets',
    'convertible-nursery-sets': 'convertible-nursery-sets',
    'bedroom-storage-sets': 'bedroom-storage-sets',
    'wardrobe-systems': 'wardrobe-systems',
    'modular-storage-sets': 'modular-storage-sets',
    'teen-room-sets': 'teen-room-sets'
  },
  es: {
    // Categories
    beds: 'camas',
    drawers: 'cajones',
    'by-room': 'por-habitacion',
    sets: 'conjuntos',
    
    // Subcategories - Beds
    'baby-beds': 'camas-bebe',
    'kids-beds': 'camas-ninos',
    'single-beds': 'camas-individuales',
    'double-beds': 'camas-dobles',
    'king-queen-beds': 'camas-king-queen',
    'sofa-beds': 'sofa-camas',
    'space-saving-beds': 'camas-ahorro-espacio',
    
    // Subcategories - Drawers
    'chest-of-drawers': 'comoda-cajones',
    'under-bed-storage': 'almacenamiento-bajo-cama',
    'bedside-tables': 'mesas-noche',
    'modular-drawers': 'cajones-modulares',
    
    // Subcategories - By Room
    'baby-rooms': 'habitaciones-bebe',
    'kids-rooms': 'habitaciones-ninos',
    'bedrooms': 'dormitorios',
    'studio-apartments': 'apartamentos-estudio',
    
    // Subcategories - Sets
    'bedroom-sets': 'conjuntos-dormitorio',
    'nursery-sets': 'conjuntos-guarderia',
    'storage-sets': 'conjuntos-almacenamiento',

    // Product slugs - Beds
    'convertible-cribs': 'cunas-convertibles',
    'mini-cribs': 'mini-cunas',
    'bassinets': 'moisés',
    'portable-baby-beds': 'camas-bebe-portatiles',
    'toddler-beds': 'camas-infantiles',
    'bunk-beds': 'literas',
    'loft-beds': 'camas-altas',
    'kids-storage-beds': 'camas-ninos-almacenamiento',
    'wooden-single-beds': 'camas-individuales-madera',
    'metal-single-beds': 'camas-individuales-metal',
    'upholstered-single-beds': 'camas-individuales-tapizadas',
    'compact-double-beds': 'camas-dobles-compactas',
    'platform-double-beds': 'camas-dobles-plataforma',
    'vintage-double-beds': 'camas-dobles-vintage',
    'luxury-king-beds': 'camas-king-lujo',
    'affordable-queen-beds': 'camas-queen-economicas',
    'adjustable-beds': 'camas-ajustables',
    'futons': 'futones',
    'pull-out-beds': 'camas-plegables',
    'sectional-sofa-beds': 'sofa-camas-seccionales',
    'murphy-beds': 'camas-murphy',
    'trundle-beds': 'camas-nido',
    'foldable-beds': 'camas-plegables',

    // Product slugs - Drawers
    'wooden-chest-drawers': 'comoda-cajones-madera',
    'metal-frame-drawers': 'cajones-marco-metal',
    'minimalist-drawers': 'cajones-minimalistas',
    'slide-out-drawers': 'cajones-deslizantes',
    'under-bed-bins': 'cajas-bajo-cama',
    'storage-nightstands': 'mesas-noche-almacenamiento',
    'compact-nightstands': 'mesas-noche-compactas',
    'stackable-drawers': 'cajones-apilables',
    'configurable-drawers': 'cajones-configurables',

    // Product slugs - By Room
    'nursery-set': 'conjunto-guarderia',
    'changing-station': 'estacion-cambio',
    'kids-bedroom-sets': 'conjuntos-dormitorio-ninos',
    'kids-study-furniture': 'muebles-estudio-ninos',
    'master-bedroom-sets': 'conjuntos-dormitorio-principal',
    'guest-room-sets': 'conjuntos-habitacion-huespedes',
    'studio-living-sets': 'conjuntos-estudio',
    'space-saving-solutions': 'soluciones-ahorro-espacio',

    // Product slugs - Sets
    'complete-nursery-sets': 'conjuntos-guarderia-completos',
    'mini-nursery-sets': 'conjuntos-guarderia-mini',
    'convertible-nursery-sets': 'conjuntos-guarderia-convertibles',
    'bedroom-storage-sets': 'conjuntos-almacenamiento-dormitorio',
    'wardrobe-systems': 'sistemas-armario',
    'modular-storage-sets': 'conjuntos-almacenamiento-modular',
    'teen-room-sets': 'conjuntos-habitacion-adolescentes'
  }
} as const;

// Helper function to get localized URL segment
export function getLocalizedUrlSegment(segment: string, locale: Locale): string {
  const segments = URL_SEGMENTS[locale];
  return segments[segment as keyof typeof segments] || segment;
}

// Helper function to get localized full path
export function getLocalizedPath(path: string, locale: Locale): string {
  if (!path) return '';
  
  // Remove leading slash and split path into segments
  const segments = path.replace(/^\//, '').split('/');
  
  // Translate each segment
  const localizedSegments = segments.map(segment => getLocalizedUrlSegment(segment, locale));
  
  // Reconstruct the path
  return '/' + localizedSegments.join('/');
}

// Helper function to get original path from localized path
export function getOriginalPath(localizedPath: string, locale: Locale): string {
  if (!localizedPath) return '';
  
  // Create reverse mapping
  const reverseSegments: { [key: string]: string } = {};
  Object.entries(URL_SEGMENTS[locale]).forEach(([original, localized]) => {
    reverseSegments[localized] = original;
  });
  
  // Remove leading slash and split path into segments
  const segments = localizedPath.replace(/^\//, '').split('/');
  
  // Translate each segment back to original
  const originalSegments = segments.map(segment => reverseSegments[segment] || segment);
  
  // Reconstruct the path
  return '/' + originalSegments.join('/');
}
