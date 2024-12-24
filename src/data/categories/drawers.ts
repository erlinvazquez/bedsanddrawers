import type { Category } from './types';

export const drawersCategory: Category = {
  id: 'drawers',
  name: 'Drawers',
  slug: 'drawers',
  description: 'Explore our collection of designer drawers and storage solutions for every room',
  metaTitle: 'Premium Drawer Collection | Storage Solutions for Every Room',
  metaDescription: 'Discover our range of high-quality drawers and storage solutions. From chest of drawers to modular units, find the perfect storage for your space.',
  image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
  subcategories: [
    {
      id: 'chest-of-drawers',
      name: 'Chest of Drawers',
      slug: 'chest-of-drawers',
      description: 'Classic and modern chest of drawers for any room',
      metaTitle: 'Chest of Drawers | Wooden, Metal & Modern Designs',
      metaDescription: 'Find the perfect chest of drawers for your home. Choose from wooden, metal frame, and modern minimalist designs.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      items: [
        { name: 'Wooden Chest of Drawers', slug: 'wooden-chest-drawers' },
        { name: 'Metal Frame Drawers', slug: 'metal-frame-drawers' },
        { name: 'Modern Minimalist Drawers', slug: 'minimalist-drawers' }
      ],
      count: 0
    },
    {
      id: 'under-bed-storage',
      name: 'Under-Bed Storage',
      slug: 'under-bed-storage',
      description: 'Maximize your space with under-bed storage solutions',
      metaTitle: 'Under-Bed Storage | Smart Storage Solutions',
      metaDescription: 'Make the most of your space with our under-bed storage solutions. From slide-out drawers to storage bins.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      items: [
        { name: 'Slide-out Drawer Systems', slug: 'slide-out-drawers' },
        { name: 'Plastic Under-Bed Bins', slug: 'under-bed-bins' }
      ],
      count: 0
    },
    {
      id: 'bedside-tables',
      name: 'Bedside Tables',
      slug: 'bedside-tables',
      description: 'Functional and stylish bedside storage solutions',
      metaTitle: 'Bedside Tables | Nightstands with Storage',
      metaDescription: 'Complete your bedroom with our range of bedside tables. From storage nightstands to compact designs.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      items: [
        { name: 'Nightstands with Storage', slug: 'storage-nightstands' },
        { name: 'Compact Nightstands', slug: 'compact-nightstands' }
      ],
      count: 0
    },
    {
      id: 'modular-drawers',
      name: 'Modular Drawers',
      slug: 'modular-drawers',
      description: 'Customizable drawer solutions for any space',
      metaTitle: 'Modular Drawers | Customizable Storage Solutions',
      metaDescription: 'Create your perfect storage solution with our modular drawer systems. From stackable units to DIY configurations.',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      items: [
        { name: 'Stackable Drawer Units', slug: 'stackable-drawers' },
        { name: 'DIY Configurable Drawers', slug: 'configurable-drawers' }
      ],
      count: 0
    }
  ],
  buyingGuide: {
    title: 'How to Choose the Right Storage Solution',
    content: `
      Select the perfect storage solution with these key considerations:

      1. Space Assessment
      - Measure available space carefully
      - Consider room layout and access
      - Think about vertical storage potential

      2. Storage Needs
      - Calculate required storage capacity
      - List items to be stored
      - Consider future storage needs

      3. Style and Material
      - Match with existing furniture
      - Consider durability requirements
      - Think about maintenance

      4. Functionality
      - Drawer depth and width
      - Soft-close mechanisms
      - Built-in organizers

      5. Installation and Assembly
      - DIY vs professional assembly
      - Tool requirements
      - Warranty coverage
    `
  }
};