import type { Subcategory } from './subcategory';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  subcategories: Subcategory[];
  buyingGuide?: {
    title: string;
    content: string;
  };
}