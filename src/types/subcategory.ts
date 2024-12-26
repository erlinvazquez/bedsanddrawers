import type { BaseItem } from './category';

// Base interfaces for subcategory items
export interface SubcategoryItem {
  name: string;
  slug: string;
}

export interface Product extends BaseItem {
  price: number;
}

// Extended subcategory with all fields
export interface Subcategory extends BaseItem {
  metaTitle?: string;
  metaDescription?: string;
  items: SubcategoryItem[];
  products?: Product[];
  count: number;
}