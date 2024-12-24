export interface Tip {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'beds' | 'drawers' | 'health' | 'pets';
  link: string;
}

export interface TipsTranslations {
  title: string;
  description: string;
  categories: {
    beds: string;
    drawers: string;
    health: string;
    pets: string;
  };
}