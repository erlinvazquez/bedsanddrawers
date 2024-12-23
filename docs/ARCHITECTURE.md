# Project Architecture Documentation

## Overview
This is a multilingual e-commerce website built with Astro, focusing on furniture products (beds and drawers). 
The project uses a component-based architecture with TypeScript, Tailwind CSS, and Alpine.js for interactivity.

## Core Technologies
- **Astro**: Static site generator and framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Alpine.js**: Lightweight JavaScript framework for interactivity
- **MDX**: Enhanced markdown for blog content

## Project Structure

### 1. Pages (`/src/pages`)
- Dynamic routes with language support (`[lang]`)
- Product pages
- Blog system
- Category pages
- Buying guides

### 2. Components (`/src/components`)
#### Layout Components
- `Layout.astro`: Main layout wrapper
- `Navigation.astro`: Site navigation
- `Footer.astro`: Site footer
- `BaseHead.astro`: Common head elements

#### Product Components
- `ProductCard.astro`: Product display card
- `ProductGallery.astro`: Product image gallery
- `ProductInfo.astro`: Product details
- `ProductComparison.astro`: Product comparison tool

#### Category Components
- `CategoryCard.astro`: Category display card
- `CategoryHero.astro`: Category header section
- `CategoryWidget.astro`: Category preview widget

#### UI Components
- `Button.astro`: Reusable button component
- `StarRating.astro`: Rating display
- `FAQ.astro`: FAQ accordion

### 3. Internationalization (`/src/i18n`)
- Translation files (`en.ts`, `es.ts`)
- URL management (`urls.ts`)
- Language utilities (`utils.ts`)
- Translation types and interfaces

### 4. Data Layer (`/src/data`)
- Product data
- Category data
- Comparison data
- FAQ data
- Shopping guides

### 5. Types (`/src/types`)
- Product interfaces
- Category interfaces
- Common type definitions

### 6. Utilities (`/src/utils`)
- Price formatting
- Affiliate link generation
- Navigation helpers
- SEO utilities
- Routing utilities

## Key Features

### 1. Multilingual Support
- Language detection and routing
- Translated content and URLs
- Language switcher component
- Default language fallback

### 2. Product Management
- Product categorization
- Product comparison
- Product galleries
- Related products

### 3. Content Management
- Blog system with MDX
- Buying guides
- FAQ sections
- Category descriptions

### 4. SEO Optimization
- Meta tags management
- Structured data
- Canonical URLs
- Sitemap generation

### 5. Performance
- Image optimization
- Lazy loading
- Component-level code splitting
- Static site generation

## Component Relationships

### Page Layout Flow
```
Layout.astro
├── BaseHead.astro
├── Navigation.astro
├── Page Content
└── Footer.astro
```

### Product Page Flow
```
[lang]/product/[id].astro
├── Breadcrumb.astro
├── ProductGallery.astro
├── ProductInfo.astro
└── RelatedProducts.astro
```

### Category Page Flow
```
[lang]/[slug].astro
├── CategoryHero.astro
├── SubcategoryGrid.astro
└── ProductGrid.astro
```

## Data Flow

### Product Data
```
data/products.ts
└── ProductCard.astro
    └── Product Page
```

### Category Data
```
data/categories.ts
└── CategoryWidget.astro
    └── Category Page
```

## Best Practices

### Code Organization
- Components are small and focused
- Logic is separated from presentation
- Utilities are reusable and pure functions
- Types are well-defined and shared

### Performance
- Images are optimized
- Components are lazy-loaded when possible
- Static generation for faster page loads
- Efficient bundling and code splitting

### SEO
- Proper meta tags
- Structured data implementation
- Semantic HTML
- Accessible components

### Internationalization
- Consistent translation structure
- URL localization
- Language detection
- Fallback handling

## Future Considerations
- E-commerce integration
- User authentication
- Shopping cart functionality
- Payment processing
- Order management
- Customer reviews
- Inventory management