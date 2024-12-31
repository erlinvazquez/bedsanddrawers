export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  items: SubcategoryItem[];
}

export interface SubcategoryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  price?: number;
}
