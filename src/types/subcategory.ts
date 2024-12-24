// Base interfaces for subcategory items
export interface SubcategoryItem {
  name: string;
  slug: string;
}

// Core subcategory interface
export interface BaseSubcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}

// Extended subcategory with optional fields
export interface Subcategory extends BaseSubcategory {
  metaTitle?: string;
  metaDescription?: string;
  items: SubcategoryItem[];
  products?: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }>;
}