import type { Category } from './index';

export const stylesCategory: Category = {
  id: 'styles',
  name: 'Styles & Materials',
  slug: 'styles',
  description: 'Furniture categorized by style and material',
  image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  subcategories: [
    {
      id: 'wooden-furniture',
      name: 'Wooden Furniture',
      slug: 'wooden-furniture',
      description: 'Classic and timeless wooden pieces',
      count: 25,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      products: [
        { id: 'solid-wood-bed', name: 'Solid Wood Bed', description: 'Premium solid wood construction', price: 899, image: '', features: [] },
        { id: 'sustainable-wood', name: 'Sustainable Wood Options', description: 'Eco-friendly wooden furniture', price: 799, image: '', features: [] }
      ]
    },
    // Additional subcategories...
  ]
};