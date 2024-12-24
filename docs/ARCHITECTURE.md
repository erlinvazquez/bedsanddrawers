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

## Architecture Diagram
```
┌─────────────────────────────────────────────────────────────────────┐
│                           Client Browser                            │
└───────────────────────────────────┬─────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                             CDN/Edge                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌──────────┐  │
│  │   Images    │  │     CSS     │  │ JavaScript  │  │  Fonts   │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  └──────────┘  │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                           Astro SSG Build                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌──────────┐  │
│  │   Pages     │  │ Components  │  │  Layouts    │  │  Utils    │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  └──────────┘  │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                            Data Layer                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌──────────┐  │
│  │  Products   │  │ Categories  │  │    Blog     │  │   FAQ    │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  └──────────┘  │
└───────┬───────────────────┬────────────────┬──────────────┬────────┘
        │                   │                │              │
        ▼                   ▼                ▼              ▼
┌──────────────┐    ┌─────────────┐  ┌─────────────┐  ┌──────────┐
│  Affiliate   │    │  Analytics  │  │    SEO      │  │  i18n    │
│  Networks    │    │  Tracking   │  │    Meta     │  │  System  │
└──────────────┘    └─────────────┘  └─────────────┘  └──────────┘
        │                   │                │              │
        └───────────────────┴────────────────┴──────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         External Services                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌──────────┐  │
│  │  Amazon     │  │   Google    │  │  Other      │  │ Analytics│  │
│  │  Affiliate  │  │  Analytics  │  │ Affiliates  │  │ Services │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  └──────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

## Component Architecture
```
src/
├── components/               # UI Components
│   ├── layout/              # Layout components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Navigation.astro
│   ├── product/             # Product-related components
│   │   ├── Card.astro
│   │   ├── Gallery.astro
│   │   └── Comparison.astro
│   └── shared/              # Shared UI components
│       ├── Button.astro
│       └── Rating.astro
├── data/                    # Data management
│   ├── products/
│   ├── categories/
│   └── affiliate/
├── i18n/                    # Internationalization
│   ├── translations/
│   ├── urls.ts
│   └── utils.ts
├── utils/                   # Utility functions
│   ├── affiliate.ts
│   ├── price.ts
│   └── seo.ts
└── pages/                   # Route pages
    └── [lang]/             # Language-specific routes
```

## Data Flow Architecture
```
Request → Language Middleware → Page Component
     ↓
Data Layer (products, categories)
     ↓
Component Rendering
     ↓
Affiliate Link Generation
     ↓
Analytics/Tracking Integration
     ↓
Static HTML Generation
     ↓
CDN Distribution
```


## Suggested Improvements for Affiliate Website

### 1. Affiliate Management
- Create dedicated `/src/affiliate` directory
- Implement affiliate link tracking system
- Add affiliate disclaimer management
- Create affiliate network integrations module

### 2. Analytics Enhancement
- Add conversion tracking
- Implement click tracking for affiliate links
- Create performance analytics dashboard
- Add A/B testing capabilities

### 3. Content Optimization
- Implement automated product updates
- Add price comparison features
- Create review management system
- Add user-generated content support

### 4. Performance Improvements
- Implement incremental static regeneration
- Add automated price updates
- Create cache management system
- Implement automated affiliate link validation

### 5. Monetization Features
- Add multiple affiliate network support
- Implement price alert system
- Create deal aggregation
- Add automated best deal finder

### 6. SEO Enhancements
- Add rich snippets for products
- Implement automated sitemap updates
- Create automated meta description generation
- Add schema markup for reviews

### 7. User Experience
- Add product comparison tools
- Implement price history charts
- Create personalized recommendations
- Add email notification system

These improvements focus on maximizing affiliate revenue while maintaining excellent user experience and SEO performance.