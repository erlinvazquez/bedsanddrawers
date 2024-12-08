export interface BuyingGuide {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  category: string;
}

export const buyingGuides: BuyingGuide[] = [
  {
    id: 'choosing-right-bed',
    title: 'How to Choose the Right Bed for Your Home',
    slug: 'how-to-choose-bed',
    description: 'A comprehensive guide to selecting the perfect bed',
    content: '# How to Choose the Right Bed\n\nConsider these factors...',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    category: 'beds'
  },
  {
    id: 'baby-bed-safety',
    title: 'Baby Bed Safety Guidelines',
    slug: 'baby-bed-safety',
    description: 'Essential safety tips for baby beds',
    content: '# Baby Bed Safety Guidelines\n\nEnsure your baby\'s safety...',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    category: 'baby-beds'
  },
  {
    id: 'space-saving-storage',
    title: 'Space-saving Storage Ideas for Small Bedrooms',
    slug: 'space-saving-storage',
    description: 'Smart storage solutions for compact spaces',
    content: '# Space-saving Storage Ideas\n\nMaximize your space...',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    category: 'drawers'
  }
];