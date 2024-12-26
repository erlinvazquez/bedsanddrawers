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

export interface Comparison {
  title: string;
  items: ComparisonItem[];
}
