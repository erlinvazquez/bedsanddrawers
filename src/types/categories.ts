export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
  metaTitle?: string;
  metaDescription?: string;
  items: Array<{ name: string; slug: string; }>;
  products?: Product[];
}

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