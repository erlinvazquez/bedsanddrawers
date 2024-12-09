import type { Category } from './types';

export const setsCategory: Category = {
  id: 'sets',
  name: 'Product Sets',
  slug: 'sets',
  description: 'Complete furniture solutions and matching sets',
  metaTitle: 'Furniture Sets & Collections | Coordinated Room Solutions',
  metaDescription: 'Shop our carefully curated furniture sets and collections. Find perfectly matched pieces for a cohesive look.',
  image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  subcategories: [
    {
      id: 'bedroom-sets',
      name: 'Bedroom Sets',
      slug: 'bedroom-sets',
      description: 'Complete bedroom furniture solutions',
      count: 20,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      items: [
        { name: 'Beds with Matching Dressers', slug: 'bed-dresser-sets' },
        { name: 'Complete Bedroom Sets', slug: 'complete-bedroom-sets' },
        { name: 'Bunk Bed Sets with Storage', slug: 'bunk-bed-storage-sets' },
        { name: 'Daybed Sets', slug: 'daybed-sets' }
      ]
    },
    {
      id: 'accessories',
      name: 'Related Products',
      slug: 'accessories',
      description: 'Essential bedroom accessories and storage',
      count: 25,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      items: [
        { name: 'Mattresses', slug: 'mattresses' },
        { name: 'Bed Frames', slug: 'bed-frames' },
        { name: 'Headboards', slug: 'headboards' },
        { name: 'Under-Bed Storage', slug: 'under-bed-storage' },
        { name: 'Nightstands', slug: 'nightstands' },
        { name: 'Closet Organizers', slug: 'closet-organizers' },
        { name: 'Shelves and Cabinets', slug: 'shelves-cabinets' }
      ]
    }
  ]
};