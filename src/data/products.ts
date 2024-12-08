export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  affiliateLink: string;
  description: string;
  features: string[];
  specifications: {
    dimensions: string;
    material: string;
    color: string;
    weight: string;
  };
}

export const products: Product[] = [
  {
    id: "luxury-king-bed-1",
    title: "Royal Comfort King Bed",
    price: 1299,
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c",
    category: "Luxury Beds",
    rating: 4.8,
    affiliateLink: "https://example.com/affiliate/luxury-king-bed",
    description: "Experience ultimate comfort with our premium king-size bed featuring plush upholstery and elegant design.",
    features: [
      "Premium quality fabric upholstery",
      "Sturdy wooden frame",
      "Extra padding for comfort",
      "Built-in USB charging ports"
    ],
    specifications: {
      dimensions: "76\" x 80\" x 48\"",
      material: "Solid oak wood, premium fabric",
      color: "Pearl Grey",
      weight: "180 lbs"
    }
  },
  {
    id: "modern-drawer-set-1",
    title: "Modern Oak Drawer Set",
    price: 899,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2",
    category: "Designer Drawers",
    rating: 4.7,
    affiliateLink: "https://example.com/affiliate/oak-drawer-set",
    description: "Sleek and spacious drawer set crafted from premium oak wood with soft-close mechanisms.",
    features: [
      "Soft-close drawers",
      "Dovetail joints",
      "Anti-tilt mechanism",
      "Adjustable shelf heights"
    ],
    specifications: {
      dimensions: "36\" x 20\" x 60\"",
      material: "Solid oak wood",
      color: "Natural Oak",
      weight: "120 lbs"
    }
  },
  {
    id: "storage-bed-premium-1",
    title: "Premium Storage Bed",
    price: 1499,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    category: "Storage Beds",
    rating: 4.9,
    affiliateLink: "https://example.com/affiliate/storage-bed",
    description: "Maximize your space with this luxurious storage bed featuring hydraulic lift mechanism.",
    features: [
      "Hydraulic storage system",
      "Premium mattress support",
      "Reinforced frame",
      "Easy-lift mechanism"
    ],
    specifications: {
      dimensions: "60\" x 80\" x 45\"",
      material: "Engineered wood, metal mechanisms",
      color: "Dark Walnut",
      weight: "200 lbs"
    }
  }
];