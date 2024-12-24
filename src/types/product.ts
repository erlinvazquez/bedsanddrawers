import type { SubcategoryItem } from './subcategory';

export interface Product extends SubcategoryItem {
  id: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  description: string;
}

export interface DetailedProduct extends Product {
  rating: number;
  additionalImages?: string[];
  affiliateLink: string;
  features: string[];
  specifications: {
    dimensions: string;
    material: string;
    color: string;
    weight: string;
  };
}