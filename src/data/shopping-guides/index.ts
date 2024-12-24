export interface ShoppingGuide {
  category: string;
  factors: Array<{
    name: string;
    description: string;
  }>;
  brands: Array<{
    name: string;
    logo: string;
    description: string;
    rating: number;
    reviewCount: number;
    knownFor: string[];
  }>;
  priceRanges: Array<{
    label: string;
    min: number;
    max?: number;
  }>;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function getShoppingGuide(category: string): ShoppingGuide {
  // In a real application, this would fetch from a database or API
  return {
    category,
    factors: [
      {
        name: 'Material',
        description: 'Consider the material quality and durability for long-term use.'
      },
      {
        name: 'Size',
        description: 'Ensure the dimensions fit your space and needs.'
      },
      {
        name: 'Style',
        description: 'Choose a design that matches your room\'s aesthetic.'
      }
    ],
    brands: [
      {
        name: 'Premium Collection',
        logo: '/brands/premium.jpg',
        description: 'Luxury furniture with premium materials and craftsmanship',
        rating: 4.8,
        reviewCount: 1250,
        knownFor: ['Quality materials', 'Elegant designs', 'Durability']
      }
    ],
    priceRanges: [
      { label: 'budget', min: 0, max: 500 },
      { label: 'mid-range', min: 500, max: 1500 },
      { label: 'premium', min: 1500 }
    ],
    questions: [
      {
        question: 'What should I consider when choosing?',
        answer: 'Consider your space, budget, and specific needs. Look for quality materials and construction.'
      },
      {
        question: 'How do I maintain it?',
        answer: 'Regular cleaning and following care instructions will help maintain quality and extend lifespan.'
      }
    ]
  };
}