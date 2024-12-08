export interface ComparisonItem {
  name: string;
  image: string;
  rating: number;
  firmness: string;
  material: string;
  cooling: boolean;
  bestFor: string[];
  link: string;
}

export const mattressComparison: ComparisonItem[] = [
  {
    name: "Brooklyn Bedding Titan Plus Luxe",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    rating: 4.4,
    firmness: "Firm: 7.5/10",
    material: "Hybrid",
    cooling: false,
    bestFor: ["Side Sleepers", "Back Sleepers"],
    link: "/product/titan-plus-luxe"
  },
  {
    name: "Helix Plus Mattress",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    rating: 4.5,
    firmness: "Firm: 7/10",
    material: "Hybrid",
    cooling: false,
    bestFor: ["Back Sleepers", "Side Sleepers", "Stomach Sleepers"],
    link: "/product/helix-plus"
  },
  {
    name: "Saatva Mattress",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    rating: 4.8,
    firmness: "Multiple options",
    material: "Innerspring",
    cooling: true,
    bestFor: ["Back Sleepers", "Stomach Sleepers", "Hot Sleepers"],
    link: "/product/saatva-mattress"
  }
];