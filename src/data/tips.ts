import type { Tip, TipsTranslations } from '../types/tips';

export const tips: Tip[] = [
  {
    id: 'healthy-sleep',
    title: 'Choose the Right Bed for Your Back',
    description: 'Expert tips on selecting a bed that promotes healthy sleep and prevents back pain.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
    category: 'health',
    link: '/buying-guides/healthy-sleep'
  },
  {
    id: 'pet-beds',
    title: 'Best Beds for Your Furry Friends',
    description: 'Guide to choosing comfortable and durable pet beds for dogs and cats.',
    image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=800&h=600&fit=crop',
    category: 'pets',
    link: '/buying-guides/pet-beds'
  },
  {
    id: 'storage-tips',
    title: 'Smart Storage Solutions',
    description: 'Maximize your space with these clever drawer organization tips.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop',
    category: 'drawers',
    link: '/buying-guides/storage-tips'
  },
  {
    id: 'mattress-guide',
    title: 'Mattress Types Explained',
    description: 'Understanding different mattress types and their benefits for better sleep.',
    image: 'https://images.unsplash.com/photo-1505693414898-9f1463e9f7a4?w=800&h=600&fit=crop',
    category: 'beds',
    link: '/buying-guides/mattress-guide'
  },
  {
    id: 'kids-beds',
    title: 'Creating Perfect Kids Bedrooms',
    description: 'Design tips for comfortable and safe children sleeping spaces.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
    category: 'beds',
    link: '/buying-guides/kids-beds'
  },
  {
    id: 'drawer-organization',
    title: 'Drawer Organization 101',
    description: 'Professional tips for organizing drawers in every room.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop',
    category: 'drawers',
    link: '/buying-guides/drawer-organization'
  },
  {
    id: 'senior-friendly',
    title: 'Senior-Friendly Bed Solutions',
    description: 'Making bedrooms safe and comfortable for elderly family members.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
    category: 'health',
    link: '/buying-guides/senior-friendly'
  },
  {
    id: 'small-spaces',
    title: 'Beds for Small Spaces',
    description: 'Smart bed solutions for apartments and compact rooms.',
    image: 'https://images.unsplash.com/photo-1505693414898-9f1463e9f7a4?w=800&h=600&fit=crop',
    category: 'beds',
    link: '/buying-guides/small-spaces'
  },
  {
    id: 'pet-friendly-furniture',
    title: 'Pet-Friendly Furniture Care',
    description: 'Maintaining furniture in homes with pets.',
    image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=800&h=600&fit=crop',
    category: 'pets',
    link: '/buying-guides/pet-furniture'
  },
  {
    id: 'seasonal-storage',
    title: 'Seasonal Storage Tips',
    description: 'Organizing drawers for different seasons and occasions.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop',
    category: 'drawers',
    link: '/buying-guides/seasonal-storage'
  },
  {
    id: 'ergonomic-beds',
    title: 'Ergonomic Bed Design',
    description: 'Features to look for in ergonomic bed designs.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
    category: 'health',
    link: '/buying-guides/ergonomic-beds'
  },
  {
    id: 'multi-pet-homes',
    title: 'Beds for Multi-Pet Homes',
    description: 'Creating harmonious sleeping spaces for multiple pets.',
    image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=800&h=600&fit=crop',
    category: 'pets',
    link: '/buying-guides/multi-pet-beds'
  }
];

export const tipsTranslations: Record<string, TipsTranslations> = {
  en: {
    title: 'Expert Tips & Guides',
    description: 'Discover helpful tips and guides for choosing the perfect furniture for your home',
    categories: {
      beds: 'Beds',
      drawers: 'Storage',
      health: 'Health',
      pets: 'Pets'
    },
    viewMore: 'View More'
  },
  es: {
    title: 'Consejos y Guías de Expertos',
    description: 'Descubre consejos útiles y guías para elegir los muebles perfectos para tu hogar',
    categories: {
      beds: 'Camas',
      drawers: 'Almacenamiento',
      health: 'Salud',
      pets: 'Mascotas'
    },
    viewMore: 'Ver Más'
  }
};