import type { Category } from './index';

export const roomCategory: Category = {
  id: 'by-room',
  name: 'Furniture by Room',
  slug: 'by-room',
  description: 'Complete furniture solutions for every room',
  image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  subcategories: [
    {
      id: 'baby-rooms',
      name: 'Baby Rooms',
      slug: 'baby-rooms',
      description: 'Complete nursery furniture sets',
      count: 10,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
      products: [
        { id: 'nursery-set', name: 'Complete Nursery Set', description: 'Everything you need for the nursery', price: 999, image: '', features: [] },
        { id: 'changing-station', name: 'Changing Station with Drawers', description: 'Practical changing solution with storage', price: 399, image: '', features: [] }
      ]
    },
    // Additional subcategories...
  ]
};