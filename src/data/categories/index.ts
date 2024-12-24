import type { Category, Subcategory } from '../../types';
import { bedsCategory } from './beds';
import { drawersCategory } from './drawers';
import { setsCategory } from './sets';

export const categories = [bedsCategory, drawersCategory, setsCategory];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}

export function getSubcategoryBySlug(categorySlug: string, subcategorySlug: string): Subcategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find(subcategory => subcategory.slug === subcategorySlug);
}

export type { Category, Subcategory } from '../../types';