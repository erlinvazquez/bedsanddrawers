import type { Category } from './types';

export const bedsCategory: Category = {
  id: 'beds',
  name: 'Beds',
  slug: 'beds',
  description: 'Discover our complete range of beds for every need and style, from baby cribs to luxury king beds',
  metaTitle: 'Premium Beds Collection | High-Quality Beds for Every Room',
  metaDescription: 'Explore our extensive collection of high-quality beds. From baby cribs to luxury king beds, find the perfect bed for your space and needs.',
  image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  subcategories: [
    {
      id: 'baby-beds',
      name: 'Baby Beds',
      slug: 'baby-beds',
      description: 'Safe and comfortable baby beds designed to help your little one sleep soundly',
      metaTitle: 'Baby Beds & Cribs | Safe & Comfortable Sleeping Solutions',
      metaDescription: 'Find the perfect baby bed for your nursery. Browse our collection of convertible cribs, mini cribs, bassinets, and portable baby beds.',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
      items: [
        { name: 'Convertible Cribs', slug: 'convertible-cribs' },
        { name: 'Mini Cribs', slug: 'mini-cribs' },
        { name: 'Bassinets', slug: 'bassinets' },
        { name: 'Portable Baby Beds', slug: 'portable-baby-beds' }
      ],
      count: 0
    },
    {
      id: 'kids-beds',
      name: 'Kids\' Beds',
      slug: 'kids-beds',
      description: 'Fun and functional beds perfect for growing children',
      metaTitle: 'Kids Beds | Bunk Beds, Loft Beds & Storage Beds for Children',
      metaDescription: 'Create the perfect bedroom for your child with our range of kids\' beds. From bunk beds to storage beds, find the ideal solution.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      items: [
        { name: 'Toddler Beds', slug: 'toddler-beds' },
        { name: 'Bunk Beds', slug: 'bunk-beds' },
        { name: 'Loft Beds', slug: 'loft-beds' },
        { name: 'Beds with Storage', slug: 'kids-storage-beds' }
      ],
      count: 0
    },
    {
      id: 'single-beds',
      name: 'Single Beds',
      slug: 'single-beds',
      description: 'Stylish and space-efficient single beds for any room',
      metaTitle: 'Single Beds | Wooden, Metal & Upholstered Options',
      metaDescription: 'Find the perfect single bed for your guest room or small space. Choose from wooden, metal frame, or upholstered designs.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      items: [
        { name: 'Wooden Single Beds', slug: 'wooden-single-beds' },
        { name: 'Metal Frame Beds', slug: 'metal-single-beds' },
        { name: 'Upholstered Single Beds', slug: 'upholstered-single-beds' }
      ],
      count: 0
    },
    {
      id: 'double-beds',
      name: 'Double Beds',
      slug: 'double-beds',
      description: 'Comfortable double beds that combine style and functionality',
      metaTitle: 'Double Beds | Modern & Vintage-Style Options',
      metaDescription: 'Upgrade your bedroom with our collection of double beds. From compact to platform beds, find your perfect match.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      items: [
        { name: 'Compact Double Beds', slug: 'compact-double-beds' },
        { name: 'Modern Platform Beds', slug: 'platform-double-beds' },
        { name: 'Vintage-style Beds', slug: 'vintage-double-beds' }
      ],
      count: 0
    },
    {
      id: 'king-queen-beds',
      name: 'King & Queen Beds',
      slug: 'king-queen-beds',
      description: 'Luxurious king and queen beds for ultimate comfort',
      metaTitle: 'King & Queen Beds | Luxury & Affordable Options',
      metaDescription: 'Experience ultimate comfort with our king and queen beds. From luxury designs to affordable options, find your perfect bed.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      items: [
        { name: 'Luxury King Beds', slug: 'luxury-king-beds' },
        { name: 'Affordable Queen Beds', slug: 'affordable-queen-beds' },
        { name: 'Adjustable Beds', slug: 'adjustable-beds' }
      ],
      count: 0
    },
    {
      id: 'sofa-beds',
      name: 'Sofa Beds',
      slug: 'sofa-beds',
      description: 'Versatile sofa beds perfect for multi-use spaces',
      metaTitle: 'Sofa Beds | Convertible Sleeping Solutions',
      metaDescription: 'Maximize your space with our collection of sofa beds. Choose from futons, pull-out beds, and sectional sofa beds.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      items: [
        { name: 'Futons', slug: 'futons' },
        { name: 'Pull-out Beds', slug: 'pull-out-beds' },
        { name: 'Sectional Sofa Beds', slug: 'sectional-sofa-beds' }
      ],
      count: 0
    },
    {
      id: 'space-saving-beds',
      name: 'Space-saving Beds',
      slug: 'space-saving-beds',
      description: 'Innovative bed solutions for maximizing space',
      metaTitle: 'Space-Saving Beds | Murphy Beds, Trundle Beds & More',
      metaDescription: 'Make the most of your space with our collection of space-saving beds. From Murphy beds to foldable options.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      items: [
        { name: 'Murphy Beds', slug: 'murphy-beds' },
        { name: 'Trundle Beds', slug: 'trundle-beds' },
        { name: 'Foldable Beds', slug: 'foldable-beds' }
      ],
      count: 0
    }
  ],
  buyingGuide: {
    title: 'How to Choose the Right Bed for Your Home',
    content: `
      Finding the perfect bed involves considering several key factors:

      1. Room Size and Layout
      - Measure your space carefully
      - Consider door locations and traffic flow
      - Leave enough space for other furniture

      2. Bed Size
      - Single: Ideal for children or guest rooms
      - Double: Good for individuals or couples in smaller spaces
      - Queen: Popular choice for master bedrooms
      - King: Maximum space for couples

      3. Style and Design
      - Consider your room's décor
      - Think about long-term appeal
      - Look at headboard options

      4. Special Features
      - Storage options
      - Adjustability
      - Easy assembly

      5. Budget Considerations
      - Factor in mattress costs
      - Consider longevity and durability
      - Look for warranty coverage
    `
  }
};