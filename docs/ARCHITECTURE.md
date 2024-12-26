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
- Dynamic language routes (`[lang]`)
  - Home page (`index.astro`)
  - Product pages (`product/[...slug].astro`)
  - Blog system (`blog/[...slug].astro`)
  - Buying guides (`buying-guides/[...slug].astro`)
  - Tips and advice (`tips/[...slug].astro`)
  - FAQ pages (`faq/[category].astro`)
  - About page (`about.astro`)
  - 404 error page (`404.astro`)
- RSS feed generation (`rss.xml.js`)


### 2. Components (`/src/components`)
#### Layout Components
- `Layout.astro`: Main layout wrapper
- `Navigation.astro`: Site navigation with mobile menu
- `Header.astro`: Site header with navigation
- `Footer.astro`: Site footer
- `BaseHead.astro`: Common head elements
- `HeaderLink.astro`: Navigation link component
- `Logo.astro`: Site logo component
- `LanguagePicker.astro`: Language selection component

#### Product Components
- `ProductCard.astro`: Product display card
- `ProductComparison.astro`: Product comparison tool
- `TrendingProducts.astro`: Trending products showcase
- `FeaturedProducts.astro`: Featured products section

#### Category Components
- `CategoryCard.astro`: Category display card
- `CategoryHero.astro`: Category header section
- `CategoryWidget.astro`: Category preview widget
- `SubcategoryGrid.astro`: Grid display for subcategories

#### Blog Components
- `BlogPostCard.astro`: Blog post preview card
- `FormattedDate.astro`: Date formatting component

#### UI Components
- `Hero.astro`: Hero section component
- `SearchBar.astro`: Search functionality
- `StarRating.astro`: Rating display
- `FAQ.astro`: FAQ accordion

### 3. Internationalization (`/src/i18n`)
- Translation files
  - JSON-based translations (`en.json`, `es.json`)
  - Component-specific translations
    - `hero.ts`: Hero section translations
    - `guides.ts`: Buying guides translations
    - `tips.ts`: Tips and advice translations
- URL management (`urls.ts`)
- Language preferences (`preferences.ts`)
- Translation types (`types.ts`)
  - Navigation translations
  - Meta translations
  - Common UI translations
  - Category translations
  - Tips translations
- Language utilities (`utils.ts`)
  - Language detection
  - URL generation
  - Translation helpers

### 4. Data Layer (`/src/data`)
- Product data
- Category data
- Comparison data
- FAQ data
- Shopping guides
- Blog content

### 5. Content (`/src/content`)
- Blog posts
- Shopping guides
- Product reviews
- Category descriptions
- Collections schemas

### 6. Middleware (`/src/middleware`)
- Language detection and routing (`language.ts`)
- Request handling
- Response transformation

### 7. Types (`/src/types`)
- Product interfaces
- Category interfaces
- Blog post types
- Common type definitions
- Component props types

### 8. Utilities (`/src/utils`)
- Price formatting
- Affiliate link generation
- Navigation helpers
- SEO utilities
- Routing utilities
- Date formatting

## Key Features

### 1. Multilingual Support
- Language detection and routing
- Component-specific translations
- JSON and TypeScript based translation system
- Language preferences management
- SEO-friendly URL structure
- Default language fallback
- RSS feed localization

### 2. Product Management
- Product categorization
- Product comparison system
- Trending products showcase
- Featured products
- Product reviews
- Shopping guides integration

### 3. Content Management
- Blog system with MDX
- Shopping guides
- FAQ sections
- Category descriptions
- Product collections
- Dynamic content routing

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