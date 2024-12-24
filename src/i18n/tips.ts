---
import type { Tip, TipsTranslations } from '../types/tips';

export const tips: Tip[] = [
  // ... existing tips array ...
];

export const tipsTranslations: Record<string, TipsTranslations> = {
  en: {
    title: 'Expert Tips & Guides',
    description: 'Discover helpful tips and guides for choosing the perfect furniture for your home',
    viewMore: 'View More Tips',
    categories: {
      beds: 'Beds',
      drawers: 'Storage',
      health: 'Health',
      pets: 'Pets'
    }
  },
  es: {
    title: 'Consejos y Guías de Expertos',
    description: 'Descubre consejos útiles y guías para elegir los muebles perfectos para tu hogar',
    viewMore: 'Ver Más Consejos',
    categories: {
      beds: 'Camas',
      drawers: 'Almacenamiento',
      health: 'Salud',
      pets: 'Mascotas'
    }
  }
};