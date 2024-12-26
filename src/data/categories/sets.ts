import type { Category } from './types';

export const setsCategory: Category = {
  id: 'sets',
  name: 'Furniture Sets',
  slug: 'sets',
  description: 'Complete furniture solutions and matching sets',
  metaTitle: 'Furniture Sets & Collections | Coordinated Room Solutions',
  metaDescription: 'Shop our carefully curated furniture sets and collections. Find perfectly matched pieces for a cohesive look.',
  image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  subcategories: [
    {
      id: 'bedroom-sets',
      name: 'Complete Bedroom Sets',
      slug: 'bedroom-sets',
      description: 'Complete bedroom furniture solutions',
      count: 20,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      items: [
        { name: 'Master Bedroom Sets', slug: 'master-bedroom-sets' },
        { name: 'Guest Room Sets', slug: 'guest-room-sets' },
        { name: 'Teen Room Sets', slug: 'teen-room-sets' }
      ],
      metaTitle: 'Complete Bedroom Sets | Coordinated Bedroom Solutions',
      metaDescription: 'Shop our complete bedroom furniture sets. Find perfectly coordinated pieces for a cohesive bedroom design.'
    },
    {
      id: 'nursery-sets',
      name: 'Nursery Collections',
      slug: 'nursery-sets',
      description: 'Complete nursery furniture collections',
      count: 15,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
      items: [
        { name: 'Complete Nursery Sets', slug: 'complete-nursery-sets' },
        { name: 'Mini Nursery Sets', slug: 'mini-nursery-sets' },
        { name: 'Convertible Nursery Sets', slug: 'convertible-nursery-sets' }
      ],
      metaTitle: 'Nursery Furniture Sets | Complete Baby Room Solutions',
      metaDescription: 'Discover our nursery furniture collections. From complete sets to convertible solutions for your growing baby.'
    },
    {
      id: 'storage-sets',
      name: 'Storage Solution Sets',
      slug: 'storage-sets',
      description: 'Coordinated storage solutions for every room',
      count: 12,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      items: [
        { name: 'Bedroom Storage Sets', slug: 'bedroom-storage-sets' },
        { name: 'Wardrobe Systems', slug: 'wardrobe-systems' },
        { name: 'Modular Storage Sets', slug: 'modular-storage-sets' }
      ],
      metaTitle: 'Storage Solution Sets | Coordinated Storage Systems',
      metaDescription: 'Shop our coordinated storage solution sets. Find perfectly matched storage pieces for organized living.'
    }
  ]
};