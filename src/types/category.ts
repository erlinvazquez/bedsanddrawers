import type { Subcategory } from './subcategory';

// Base interface for common fields
export interface BaseItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

// SEO metadata interface
export interface SEOMetadata {
  metaTitle: string;
  metaDescription: string;
}

export interface BuyingGuide {
  title: string;
  content: string;
}

// Main category interface combining all the pieces
export interface Category extends BaseItem, SEOMetadata {
  subcategories: Subcategory[];
  buyingGuide?: BuyingGuide;
}