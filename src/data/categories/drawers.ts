import type { Category } from './types';

export const drawersCategory: Category = {
  id: 'drawers',
  name: 'Drawers',
  slug: 'drawers',
  description: 'Explore our collection of designer drawers and storage solutions',
  metaTitle: 'Premium Drawer Collection | Functional Storage Solutions',
  metaDescription: 'Discover our range of high-quality drawers for every room. From bedroom dressers to specialized storage solutions.',
  image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
  subcategories: [
    {
      id: 'functional-drawers',
      name: 'Functional Drawers',
      slug: 'functional-drawers',
      description: 'Purpose-built drawer solutions',
      count: 25,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      items: [
        { name: 'Chest of Drawers', slug: 'chest-of-drawers' },
        { name: 'Storage Drawers', slug: 'storage-drawers' },
        { name: 'Clothes Drawers', slug: 'clothes-drawers' },
        { name: 'Toy Drawers', slug: 'toy-drawers' },
        { name: 'Bedside Drawers', slug: 'bedside-drawers' }
      ]
    },
    {
      id: 'material-drawers',
      name: 'Drawers by Material',
      slug: 'material-drawers',
      description: 'Quality drawers in various materials',
      count: 15,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      items: [
        { name: 'Wooden Drawers', slug: 'wooden-drawers' },
        { name: 'Plastic Drawers', slug: 'plastic-drawers' },
        { name: 'Metal Drawers', slug: 'metal-drawers' }
      ]
    },
    {
      id: 'room-drawers',
      name: 'Drawers by Room',
      slug: 'room-drawers',
      description: 'Room-specific storage solutions',
      count: 30,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      items: [
        { name: 'Bedroom Drawers', slug: 'bedroom-drawers' },
        { name: 'Kids Room Drawers', slug: 'kids-room-drawers' },
        { name: 'Office Drawers', slug: 'office-drawers' },
        { name: 'Bathroom Drawers', slug: 'bathroom-drawers' },
        { name: 'Living Room Drawers', slug: 'living-room-drawers' }
      ]
    },
    {
      id: 'special-drawers',
      name: 'Special Features',
      slug: 'special-drawers',
      description: 'Drawers with unique features',
      count: 18,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      items: [
        { name: 'Lockable Drawers', slug: 'lockable-drawers' },
        { name: 'Stackable Drawers', slug: 'stackable-drawers' },
        { name: 'Customizable Drawers', slug: 'customizable-drawers' }
      ]
    }
  ]
};