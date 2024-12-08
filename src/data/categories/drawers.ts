import type { Category } from './index';

export const drawersCategory: Category = {
  id: 'drawers',
  name: 'Drawers',
  slug: 'drawers',
  description: 'Storage solutions for every room and need',
  image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
  subcategories: [
    {
      id: 'chest-of-drawers',
      name: 'Chest of Drawers',
      slug: 'chest-of-drawers',
      description: 'Classic storage solutions for any room',
      count: 12,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      products: [
        { id: 'wooden-chest', name: 'Wooden Chest of Drawers', description: 'Traditional wooden storage', price: 399, image: '', features: [] },
        { id: 'metal-frame', name: 'Metal Frame Drawers', description: 'Modern industrial style storage', price: 349, image: '', features: [] },
        { id: 'minimalist', name: 'Modern Minimalist Drawers', description: 'Clean and simple storage solutions', price: 299, image: '', features: [] }
      ]
    },
    // Additional subcategories...
  ]
};