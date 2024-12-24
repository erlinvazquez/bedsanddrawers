import type { Category, Subcategory } from '../../types';

const subcategories: Subcategory[] = [
  {
    id: 'wooden-furniture',
    name: 'Wooden Furniture',
    slug: 'wooden-furniture',
    description: 'Classic and timeless wooden pieces',
    count: 25,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    items: [
      { name: 'Solid Wood Bed', slug: 'solid-wood-bed' },
      { name: 'Sustainable Wood Options', slug: 'sustainable-wood' }
    ]
  }
];

export const stylesCategory: Category = {
  id: 'styles',
  name: 'Styles & Materials',
  slug: 'styles',
  description: 'Furniture categorized by style and material',
  metaTitle: 'Furniture Styles & Materials | Classic to Modern Collections',
  metaDescription: 'Explore our furniture collections by style and material. From classic wood to modern designs.',
  image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  subcategories
};