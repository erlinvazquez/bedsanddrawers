import type { Category } from './index';

export const bedsCategory: Category = {
  id: 'beds',
  name: 'Beds',
  slug: 'beds',
  description: 'Discover our complete range of beds for every need and style',
  image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  subcategories: [
    {
      id: 'baby-beds',
      name: 'Baby Beds',
      slug: 'baby-beds',
      description: 'Safe and comfortable beds for your little ones',
      count: 15,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
      products: [
        { id: 'convertible-cribs', name: 'Convertible Cribs', description: 'Versatile cribs that grow with your baby', price: 299, image: '', features: [] },
        { id: 'mini-cribs', name: 'Mini Cribs', description: 'Space-saving cribs for smaller nurseries', price: 199, image: '', features: [] },
        { id: 'bassinets', name: 'Bassinets', description: 'Cozy sleeping solutions for newborns', price: 149, image: '', features: [] },
        { id: 'portable-baby-beds', name: 'Portable Baby Beds', description: 'Travel-friendly beds for babies', price: 179, image: '', features: [] }
      ]
    },
    {
      id: 'kids-beds',
      name: 'Kids\' Beds',
      slug: 'kids-beds',
      description: 'Fun and functional beds for growing children',
      count: 20,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      products: [
        { id: 'toddler-beds', name: 'Toddler Beds', description: 'Safe transition beds for toddlers', price: 249, image: '', features: [] },
        { id: 'bunk-beds', name: 'Bunk Beds', description: 'Space-efficient sleeping solutions', price: 499, image: '', features: [] },
        { id: 'loft-beds', name: 'Loft Beds', description: 'Elevated beds with space underneath', price: 399, image: '', features: [] },
        { id: 'storage-beds', name: 'Beds with Storage', description: 'Practical beds with built-in storage', price: 449, image: '', features: [] }
      ]
    },
    // Additional subcategories...
  ]
};