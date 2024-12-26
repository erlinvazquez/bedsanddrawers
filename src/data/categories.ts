import type { Category, BuyingGuide } from '../types/category';

export const categories: Category[] = [
  {
    id: 'beds',
    name: 'Beds',
    slug: 'beds',
    description: 'Discover our premium collection of beds for every room and need. From luxurious king-size beds to space-saving options.',
    metaTitle: 'Premium Beds Collection 2024 | Luxury to Space-Saving Options',
    metaDescription: 'Explore our curated selection of high-quality beds. Find the perfect bed for your home, from luxury king-size to smart storage solutions.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    subcategories: [
      {
        id: 'baby-beds',
        name: 'Baby Beds',
        slug: 'baby-beds',
        description: 'Safe and comfortable baby beds designed for your little one\'s peaceful sleep.',
        count: 15,
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
        items: [
          { name: 'Crib Bed', slug: 'crib-bed' },
          { name: 'Convertible Baby Bed', slug: 'convertible-baby-bed' }
        ]
      },
      {
        id: 'kids-beds',
        name: 'Kids\' Beds',
        slug: 'kids-beds',
        description: 'Fun and functional beds perfect for growing children.',
        count: 20,
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
        items: [
          { name: 'Twin Bed', slug: 'twin-bed' },
          { name: 'Bunk Bed', slug: 'bunk-bed' }
        ]
      },
      {
        id: 'single-beds',
        name: 'Single Beds',
        slug: 'single-beds',
        description: 'Comfortable single beds ideal for guest rooms or compact spaces.',
        count: 25,
        image: 'https://images.unsplash.com/photo-1505693414898-9f1463e9f7a4',
        items: [
          { name: 'Basic Single Bed', slug: 'basic-single-bed' },
          { name: 'Storage Single Bed', slug: 'storage-single-bed' }
        ]
      },
      {
        id: 'double-beds',
        name: 'Double Beds',
        slug: 'double-beds',
        description: 'Spacious double beds combining style and comfort.',
        count: 30,
        image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c',
        items: [
          { name: 'Classic Double Bed', slug: 'classic-double-bed' },
          { name: 'Modern Double Bed', slug: 'modern-double-bed' }
        ]
      }
    ],
    buyingGuide: undefined
  },
  {
    id: 'drawers',
    name: 'Drawers',
    slug: 'drawers',
    description: 'Explore our collection of designer drawers and storage solutions for every room.',
    metaTitle: 'Designer Drawers & Storage Solutions | Modern to Classic Styles',
    metaDescription: 'Find the perfect storage solution with our range of designer drawers. From chest of drawers to modular storage systems.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    subcategories: [
      {
        id: 'chest-of-drawers',
        name: 'Chest of Drawers',
        slug: 'chest-of-drawers',
        description: 'Classic and modern chest of drawers for ample storage.',
        count: 18,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
        items: [
          { name: '3-Drawer Chest', slug: '3-drawer-chest' },
          { name: '5-Drawer Chest', slug: '5-drawer-chest' }
        ]
      },
      {
        id: 'bedside-tables',
        name: 'Bedside Tables',
        slug: 'bedside-tables',
        description: 'Stylish bedside tables with practical storage options.',
        count: 12,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
        items: [
          { name: 'Simple Bedside Table', slug: 'simple-bedside-table' },
          { name: 'Storage Bedside Table', slug: 'storage-bedside-table' }
        ]
      },
      {
        id: 'modular-drawers',
        name: 'Modular Drawers',
        slug: 'modular-drawers',
        description: 'Customizable drawer systems for flexible storage solutions.',
        count: 15,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
        items: [
          { name: '2-Drawer Module', slug: '2-drawer-module' },
          { name: '4-Drawer Module', slug: '4-drawer-module' }
        ]
      }
    ],
    buyingGuide: undefined
  },
  {
    id: 'living-room',
    name: 'Living Room',
    slug: 'living-room',
    description: 'Transform your living space with our elegant collection of living room furniture.',
    metaTitle: 'Premium Living Room Furniture | Modern & Classic Designs',
    metaDescription: 'Discover our curated collection of living room furniture. From sofas to coffee tables, find pieces that reflect your style.',
    image: 'https://images.unsplash.com/photo-1560448075-bb485b067938',
    subcategories: [
      {
        id: 'sofas',
        name: 'Sofas',
        slug: 'sofas',
        description: 'Comfortable and stylish sofas for your living room.',
        count: 25,
        image: 'https://images.unsplash.com/photo-1560448075-bb485b067938',
        items: [
          { name: '2-Seater Sofa', slug: '2-seater-sofa' },
          { name: '3-Seater Sofa', slug: '3-seater-sofa' }
        ]
      },
      {
        id: 'coffee-tables',
        name: 'Coffee Tables',
        slug: 'coffee-tables',
        description: 'Elegant coffee tables to complete your living room setup.',
        count: 20,
        image: 'https://images.unsplash.com/photo-1560448075-bb485b067938',
        items: [
          { name: 'Round Coffee Table', slug: 'round-coffee-table' },
          { name: 'Rectangular Coffee Table', slug: 'rectangular-coffee-table' }
        ]
      },
      {
        id: 'tv-units',
        name: 'TV Units',
        slug: 'tv-units',
        description: 'Modern TV units with storage solutions.',
        count: 15,
        image: 'https://images.unsplash.com/photo-1560448075-bb485b067938',
        items: [
          { name: 'Wall-Mounted TV Unit', slug: 'wall-mounted-tv-unit' },
          { name: 'Floor-Standing TV Unit', slug: 'floor-standing-tv-unit' }
        ]
      }
    ],
    buyingGuide: undefined
  },
  {
    id: 'bedroom-sets',
    name: 'Bedroom Sets',
    slug: 'bedroom-sets',
    description: 'Complete bedroom solutions with matching furniture sets.',
    metaTitle: 'Complete Bedroom Sets | Coordinated Furniture Collections',
    metaDescription: 'Shop our carefully curated bedroom sets. Find perfectly matched furniture to create your dream bedroom.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    subcategories: [
      {
        id: 'modern-sets',
        name: 'Modern Sets',
        slug: 'modern-sets',
        description: 'Contemporary bedroom sets with clean lines and modern aesthetics.',
        count: 10,
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
        items: [
          { name: '3-Piece Modern Set', slug: '3-piece-modern-set' },
          { name: '5-Piece Modern Set', slug: '5-piece-modern-set' }
        ]
      },
      {
        id: 'classic-sets',
        name: 'Classic Sets',
        slug: 'classic-sets',
        description: 'Timeless bedroom sets with traditional design elements.',
        count: 8,
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
        items: [
          { name: '3-Piece Classic Set', slug: '3-piece-classic-set' },
          { name: '5-Piece Classic Set', slug: '5-piece-classic-set' }
        ]
      }
    ],
    buyingGuide: undefined
  },
  {
    id: 'storage',
    name: 'Storage',
    slug: 'storage',
    description: 'Smart storage solutions for every room in your home.',
    metaTitle: 'Smart Storage Solutions | Organize Your Space',
    metaDescription: 'Discover innovative storage solutions for your home. From wardrobes to shelving systems, find the perfect storage option.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
    subcategories: [
      {
        id: 'wardrobes',
        name: 'Wardrobes',
        slug: 'wardrobes',
        description: 'Spacious wardrobes with customizable interiors.',
        count: 15,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
        items: [
          { name: 'Single Wardrobe', slug: 'single-wardrobe' },
          { name: 'Double Wardrobe', slug: 'double-wardrobe' }
        ]
      },
      {
        id: 'shelving',
        name: 'Shelving',
        slug: 'shelving',
        description: 'Versatile shelving systems for books and displays.',
        count: 20,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
        items: [
          { name: 'Fixed Shelving Unit', slug: 'fixed-shelving-unit' },
          { name: 'Adjustable Shelving Unit', slug: 'adjustable-shelving-unit' }
        ]
      },
      {
        id: 'storage-boxes',
        name: 'Storage Boxes',
        slug: 'storage-boxes',
        description: 'Decorative storage boxes for organized living.',
        count: 25,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
        items: [
          { name: 'Small Storage Box', slug: 'small-storage-box' },
          { name: 'Large Storage Box', slug: 'large-storage-box' }
        ]
      }
    ],
    buyingGuide: undefined
  }
];