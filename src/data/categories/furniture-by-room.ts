import type { Category, Subcategory } from '../../types';

const subcategories: Subcategory[] = [
  {
    id: 'baby-rooms',
    name: 'Baby Rooms',
    slug: 'baby-rooms',
    description: 'Complete nursery furniture sets',
    count: 10,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    items: [
      { name: 'Complete Nursery Set', slug: 'nursery-set' },
      { name: 'Changing Station with Drawers', slug: 'changing-station' }
    ]
  }
];

export const roomCategory: Category = {
  id: 'by-room',
  name: 'Furniture by Room',
  slug: 'by-room',
  description: 'Complete furniture solutions for every room',
  metaTitle: 'Room Furniture Collections | Complete Room Solutions',
  metaDescription: 'Discover our complete room furniture collections. From nurseries to master bedrooms.',
  image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  subcategories
};