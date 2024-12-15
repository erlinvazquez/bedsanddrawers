import type { Locale } from '../consts';

// URL segment translations for each language
export const URL_SEGMENTS = {
  en: {
    // Categories
    beds: 'beds',
    drawers: 'drawers',
    'by-room': 'by-room',
    'styles-materials': 'styles-materials',
    accessories: 'accessories',
    
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
    'master-bedrooms': 'master-bedrooms',
    'guest-rooms': 'guest-rooms',
    
    // Subcategories - Styles & Materials
    wooden: 'wooden',
    metal: 'metal',
    upholstered: 'upholstered',
    modern: 'modern',
    classic: 'classic',
    rustic: 'rustic'
  },
  es: {
    // Categories
    beds: 'camas',
    drawers: 'cajones',
    'by-room': 'por-habitacion',
    'styles-materials': 'estilos-materiales',
    accessories: 'accesorios',
    
    // Subcategories - Beds
    'baby-beds': 'cunas',
    'kids-beds': 'camas-infantiles',
    'single-beds': 'camas-individuales',
    'double-beds': 'camas-dobles',
    'king-queen-beds': 'camas-king-queen',
    'sofa-beds': 'sofa-camas',
    'space-saving-beds': 'camas-ahorro-espacio',
    
    // Subcategories - Drawers
    'chest-of-drawers': 'comodas',
    'under-bed-storage': 'almacenamiento-bajo-cama',
    'bedside-tables': 'mesas-noche',
    'modular-drawers': 'cajones-modulares',
    
    // Subcategories - By Room
    'baby-rooms': 'cuartos-bebe',
    'kids-rooms': 'cuartos-ninos',
    'master-bedrooms': 'dormitorios-principales',
    'guest-rooms': 'cuartos-huespedes',
    
    // Subcategories - Styles & Materials
    wooden: 'madera',
    metal: 'metal',
    upholstered: 'tapizado',
    modern: 'moderno',
    classic: 'clasico',
    rustic: 'rustico'
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
