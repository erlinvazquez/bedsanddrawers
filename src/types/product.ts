export interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  additionalImages?: string[];
  affiliateLink: string;
  category: string;
  description: string;
  features: string[];
  specifications: {
    dimensions: string;
    material: string;
    color: string;
    weight: string;
  };
}