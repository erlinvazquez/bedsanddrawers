import type { Category } from './types';

export const byRoomCategory: Category = {
  id: 'by-room',
  name: 'By Room',
  slug: 'by-room',
  description: 'Complete furniture solutions for every room',
  metaTitle: 'Room Furniture Collections | Complete Room Solutions',
  metaDescription: 'Discover our complete room furniture collections. From nurseries to master bedrooms.',
  image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  subcategories: [
    {
      id: 'baby-rooms',
      name: 'Baby Rooms',
      slug: 'baby-rooms',
      description: 'Complete nursery furniture sets',
      metaTitle: 'Baby Room Furniture | Complete Nursery Solutions',
      metaDescription: 'Create the perfect nursery with our complete baby room furniture sets. From cribs to changing stations.',
      count: 10,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
      items: [
        { name: 'Complete Nursery Set', slug: 'nursery-set' },
        { name: 'Changing Station with Drawers', slug: 'changing-station' }
      ]
    },
    {
      id: 'kids-rooms',
      name: 'Kids Rooms',
      slug: 'kids-rooms',
      description: 'Fun and functional kids room furniture',
      metaTitle: 'Kids Room Furniture | Fun & Functional Solutions',
      metaDescription: 'Design the perfect kids room with our fun and functional furniture collections. From bedroom sets to study areas.',
      count: 15,
      image: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9',
      items: [
        { name: 'Kids Bedroom Sets', slug: 'kids-bedroom-sets' },
        { name: 'Study Area Furniture', slug: 'kids-study-furniture' }
      ]
    },
    {
      id: 'bedrooms',
      name: 'Bedrooms',
      slug: 'bedrooms',
      description: 'Elegant bedroom collections',
      metaTitle: 'Bedroom Furniture | Complete Room Solutions',
      metaDescription: 'Transform your bedroom with our elegant furniture collections. From master suites to guest rooms.',
      count: 20,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      items: [
        { name: 'Master Bedroom Sets', slug: 'master-bedroom-sets' },
        { name: 'Guest Room Collections', slug: 'guest-room-sets' }
      ]
    },
    {
      id: 'studio-apartments',
      name: 'Studio Apartments',
      slug: 'studio-apartments',
      description: 'Space-saving solutions for studio living',
      metaTitle: 'Studio Apartment Furniture | Smart Space Solutions',
      metaDescription: 'Maximize your studio apartment with our smart furniture solutions. From multifunctional pieces to space-saving designs.',
      count: 12,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      items: [
        { name: 'Studio Living Sets', slug: 'studio-living-sets' },
        { name: 'Space-saving Solutions', slug: 'space-saving-solutions' }
      ]
    }
  ]
};
