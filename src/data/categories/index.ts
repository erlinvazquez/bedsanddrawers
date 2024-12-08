export * from './beds';
export * from './drawers';
export * from './furniture-by-room';
export * from './styles-materials';
export * from './buying-guides';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
  image: string;
  products?: Product[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
}