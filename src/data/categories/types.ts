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

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  count: number;
  image: string;
  items: SubcategoryItem[];
}

export interface SubcategoryItem {
  name: string;
  slug: string;
}