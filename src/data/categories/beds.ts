import type { Category } from './types';

export const bedsCategory: Category = {
  id: 'beds',
  name: 'Beds',
  slug: 'beds',
  description: 'Discover our complete range of beds for every need and style',
  metaTitle: 'Premium Beds Collection | Functional, Stylish & Space-Saving Options',
  metaDescription: 'Explore our extensive collection of high-quality beds. From storage beds to luxury designs, find the perfect bed for your space.',
  image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  subcategories: [
    {
      id: 'functional-beds',
      name: 'Functional Beds',
      slug: 'functional-beds',
      description: 'Practical bed solutions for modern living',
      count: 48,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      items: [
        { name: 'Beds with Drawers', slug: 'beds-with-drawers' },
        { name: 'Storage Beds', slug: 'storage-beds' },
        { name: 'Platform Beds', slug: 'platform-beds' },
        { name: 'Adjustable Beds', slug: 'adjustable-beds' },
        { name: 'Foldable Beds', slug: 'foldable-beds' },
        { name: 'Sofa Beds', slug: 'sofa-beds' },
        { name: 'Murphy Beds', slug: 'murphy-beds' },
        { name: 'Daybeds', slug: 'daybeds' }
      ]
    },
    {
      id: 'audience-beds',
      name: 'Beds by Age Group',
      slug: 'audience-beds',
      description: 'Age-appropriate beds for every stage of life',
      count: 35,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
      items: [
        { name: 'Beds for Girls', slug: 'girls-beds' },
        { name: 'Beds for Boys', slug: 'boys-beds' },
        { name: 'Cribs', slug: 'baby-cribs' },
        { name: 'Toddler Beds', slug: 'toddler-beds' },
        { name: 'Teen Beds', slug: 'teenage-beds' },
        { name: 'Adult Beds', slug: 'adult-beds' },
        { name: 'Senior-Friendly Beds', slug: 'senior-beds' }
      ]
    },
    {
      id: 'design-beds',
      name: 'Design & Style',
      slug: 'design-beds',
      description: 'Beds that make a style statement',
      count: 30,
      image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c',
      items: [
        { name: 'Modern Beds', slug: 'modern-beds' },
        { name: 'Rustic Beds', slug: 'rustic-beds' },
        { name: 'Canopy Beds', slug: 'canopy-beds' },
        { name: 'Poster Beds', slug: 'poster-beds' },
        { name: 'Minimalist Beds', slug: 'minimalist-beds' },
        { name: 'Luxury Beds', slug: 'luxury-beds' }
      ]
    },
    {
      id: 'space-saving-beds',
      name: 'Space-Saving Solutions',
      slug: 'space-saving-beds',
      description: 'Smart bed solutions for any space',
      count: 20,
      image: 'https://images.unsplash.com/photo-1505693414898-9f1463e9f7a4',
      items: [
        { name: 'Bunk Beds', slug: 'bunk-beds' },
        { name: 'Loft Beds', slug: 'loft-beds' },
        { name: 'Trundle Beds', slug: 'trundle-beds' },
        { name: 'Compact Beds', slug: 'compact-beds' }
      ]
    }
  ]
};