# Project Architecture Documentation

## Overview
This is a multilingual e-commerce website built with Astro, focusing on furniture products (beds and drawers). 
The project uses a component-based architecture with TypeScript, Tailwind CSS, and Alpine.js for interactivity.

## Core Technologies
- **Astro**: Static site generator and framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Alpine.js**: Lightweight JavaScript framework for interactivity
- **MDX**: Enhanced markdown for content

## Project Structure

### Directory Overview
```
src/
├── components/     # Reusable UI components
├── content/        # Static content and data
├── data/          # Static data models only
│   └── categories/  # Category data definitions
├── i18n/          # Internationalization files and routing
│   ├── routing.ts # URL routing and category/subcategory resolution
│   └── urls.ts    # URL segment translations
├── layouts/       # Page layout templates
├── middleware/    # Request/response middleware
├── pages/         # Application pages/routes
├── scripts/       # Utility scripts
├── styles/        # Global styles and CSS
├── types/         # TypeScript type definitions
└── utils/         # Helper functions and utilities
    ├── affiliate.ts    # Affiliate link utilities
    ├── navigation.ts   # Navigation utilities
    ├── price.ts        # Price formatting utilities
    ├── seo.ts          # SEO utilities
    └── url.ts          # URL manipulation utilities
```

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
#### Core Layout Components
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
- `ProductGrid.astro`: Grid layout for products
- `TrendingProducts.astro`: Trending products showcase
- `FeaturedProducts.astro`: Featured products section

#### Category Components
- `CategoryCard.astro`: Category display card
- `CategoryHero.astro`: Category header section
- `CategoryWidget.astro`: Category preview widget
- `SubcategoryGrid.astro`: Grid display for subcategories
- `RelatedCategories.astro`: Related categories section

#### Content Components
- `BlogPostCard.astro`: Blog post preview card
- `FormattedDate.astro`: Date formatting component
- `FAQ.astro`: FAQ accordion component

#### UI Components
- `Hero.astro`: Hero section component
- `SearchBar.astro`: Search functionality
- `StarRating.astro`: Rating display

#### Specialized Component Directories
- `/hero`: Hero section variants
- `/home`: Homepage-specific components
- `/product`: Product-specific components
- `/shopping-guide`: Shopping guide components
- `/tips`: Tips and advice components
- `/ui`: Reusable UI components

### 3. Data Layer (`/src/data`)
- Product data (`products.ts`)
- Category management
  - Main categories (`categories.ts`)
  - Subcategories (`categories/`)
- Content data
  - Buying guides (`buying-guides.ts`)
  - Shopping guides (`shopping-guides/`)
  - Tips and advice (`tips.ts`)
  - FAQ content (`faq.ts`)
- Product comparisons (`comparisons.ts`)

### 4. Internationalization (`/src/i18n`)
- Translation files
  - JSON-based translations (`en.json`, `es.json`)
  - Component-specific translations
    - Navigation translations
    - Meta translations
    - Common UI translations
    - Category translations
- URL management (`urls.ts`)
- Language preferences (`preferences.ts`)
- Translation types (`types.ts`)
- Language utilities (`utils.ts`)
  - Language detection
  - URL generation
  - Translation helpers

### 5. Content (`/src/content`)
- Blog posts
- Shopping guides
- Product reviews
- Category descriptions
- Collections schemas

### 6. Middleware (`/src/middleware`)
- Language detection and routing (`middleware.ts`)
- Request handling
- Response transformation

### 7. Additional Components
- **Types** (`/src/types`): TypeScript type definitions
- **Utils** (`/src/utils`): Utility functions
- **Scripts** (`/src/scripts`): Build and maintenance scripts
- **Styles** (`/src/styles`): Global styles and Tailwind configuration
- **Constants** (`/src/consts.ts`): Global constants and configuration

## Development Guidelines

### Adding New Categories

1. **Update Categories Data**
   - Navigate to `src/data/categories/`
   - Add new category to the `categories` array with the following structure:
     ```typescript
     {
       id: "unique-category-id",
       name: "Category Name",
       slug: "category-slug",
       description: "Category Description",
       metaTitle: "SEO Title for Category",
       metaDescription: "SEO Description for Category",
       image: "https://path-to-category-image",
       subcategories: [
         {
           id: "subcategory-id",
           name: "Subcategory Name",
           slug: "subcategory-slug",
           description: "Subcategory Description",
           count: 0,
           image: "https://path-to-subcategory-image",
           items: [
             { name: "Item Name", slug: "item-slug" }
           ]
         }
       ]
     }
     ```

2. **Add Category Translations**
   - Update translations in `src/i18n/en.json` and `src/i18n/es.json`
   - Add category name and description in all supported languages

3. **Update URL Mappings**
   - Add new category routes in `src/i18n/urls.ts`

### Adding New Products

1. **Add Product Data**
   - Navigate to `src/data/products.ts`
   - Add new product to the `products` array:
     ```typescript
     {
       id: "unique-product-id",
       name: "Product Name",
       price: 99.99,
       image: "https://path-to-product-image",
       category: "Product Category",
       subcategory: "Product Subcategory",
       slug: "product-slug",
       rating: 4.5,
       affiliateLink: "https://affiliate-link",
       description: "Product Description",
       features: [
         "Feature 1",
         "Feature 2"
       ],
       specifications: {
         // Product specifications
       }
     }
     ```

2. **Add Product Translations**
   - Add translations in `src/i18n/en.json` and `src/i18n/es.json`
   - Include product name, description, and features in all supported languages

### Internationalization Management

1. **Adding New Translations**
   - Locate language JSON files in `src/i18n/`
   - Add new translation keys and values
   - Ensure all keys are present in all language files

2. **Adding a New Language**
   - Create new JSON file in `src/i18n/` (e.g., `fr.json`)
   - Copy structure from existing language file
   - Update `translations.ts`:
     ```typescript
     import newLang from './fr.json' assert { type: 'json' };
     
     export function getTranslations(locale: Locale): Translations {
       const translations: Record<Locale, Translations> = {
         en,
         es,
         fr: newLang as unknown as Translations,
       };
       return translations[locale];
     }
     ```
   - Add URL mappings in `urls.ts`
   - Update locale type in `src/consts.ts`

### Best Practices

1. **Code Organization**
   - Keep components small and focused
   - Use TypeScript types for all data structures
   - Follow the established folder structure

2. **Naming Conventions**
   - Use kebab-case for file names
   - Use PascalCase for component names
   - Use camelCase for variables and functions

3. **Documentation**
   - Add JSDoc comments for functions and components
   - Keep documentation updated when making structural changes
   - Document any non-obvious code behavior

4. **Testing**
   - Write tests for new components
   - Update existing tests when modifying functionality
   - Ensure all tests pass before committing

### Build and Deployment

1. **Build Process**
   ```bash
   npm run build
   ```

2. **Preview Build**
   ```bash
   npm run preview
   ```

## Architecture Diagrams

### 1. High-Level System Architecture
```
┌─────────────────────────────────────────────────────────────────────┐
│                           Client Browser                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌──────────┐  │
│  │   Alpine.js │  │ TailwindCSS │  │   Images    │  │  Fonts   │  │
│  └──────┬──────┘  └─────────────┘  └─────────────┘  └──────────┘  │
│         │                                                          │
│         ▼                                                          │
│  ┌─────────────┐                                                   │
│  │ Interactivity│                                                   │
│  └─────────────┘                                                   │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                             CDN/Edge                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌──────────┐  │
│  │ Static HTML │  │ Optimized   │  │ Compressed  │  │ Cached   │  │
│  │   Pages    │  │   Assets    │  │    JS/CSS   │  │ Resources│  │
│  └─────────────┘  └─────────────┘  └─────────────┘  └──────────┘  │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                           Astro Build Layer                         │
│  ┌─────────────────────┐    ┌───────────────────┐   ┌──────────┐   │
│  │      Pages          │    │    Components     │   │ Layouts  │   │
│  │  ┌─────────────┐   │    │  ┌─────────────┐  │   │┌────────┐│   │
│  │  │[lang]/      │   │    │  │Product/     │  │   ││Base    ││   │
│  │  │├─index      │   │    │  │├─Card      │  │   ││Layout  ││   │
│  │  │├─product    │   │    │  │├─Grid      │  │   │└────────┘│   │
│  │  │├─blog       │   │    │  │└─Compare   │  │   │┌────────┐│   │
│  │  │└─guides     │   │    │  │Category/    │  │   ││Header  ││   │
│  │  └─────────────┘   │    │  │├─Card      │  │   │└────────┘│   │
│  └─────────────────────┘    │  │└─Hero      │  │   └──────────┘   │
│                             └───────────────────┘                   │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Data & Content Layer                        │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐     │
│  │    Products     │  │   Categories    │  │     Content     │     │
│  │  ┌──────────┐  │  │  ┌──────────┐   │  │  ┌──────────┐  │     │
│  │  │products.ts│  │  │  │categories│   │  │  │blog/     │  │     │
│  │  │          │  │  │  │.ts       │   │  │  │guides/   │  │     │
│  │  └──────────┘  │  │  └──────────┘   │  │  │tips/     │  │     │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘     │
│                                                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐     │
│  │ Internationalization│    Utilities    │  │    Types        │     │
│  │  ┌──────────┐  │  │  ┌──────────┐   │  │  ┌──────────┐  │     │
│  │  │urls.ts   │  │  │  │format.ts │   │  │  │Product   │  │     │
│  │  │i18n/     │  │  │  │utils/    │   │  │  │Category  │  │     │
│  │  └──────────┘  │  │  └──────────┘   │  │  └──────────┘  │     │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘     │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      Integration Layer                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐     │
│  │    Analytics    │  │     SEO         │  │   Performance   │     │
│  │  ┌──────────┐  │  │  ┌──────────┐   │  │  ┌──────────┐  │     │
│  │  │Google    │  │  │  │Meta Tags │   │  │  │Caching   │  │     │
│  │  │Analytics │  │  │  │Schema.org│   │  │  │Optimization│     │
│  │  └──────────┘  │  │  └──────────┘   │  │  └──────────┘  │     │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘     │
└─────────────────────────────────────────────────────────────────────┘
```

### 2. Data Flow Architecture
```
┌──────────────┐     ┌───────────────┐     ┌────────────────┐
│ HTTP Request │ ──► │   Language    │ ──► │  Astro Router  │
│              │     │   Detection   │     │                │
└──────────────┘     └───────────────┘     └────────────────┘
                                                   │
                                                   ▼
┌──────────────┐     ┌───────────────┐     ┌────────────────┐
│   Product    │ ◄── │    Data       │ ◄── │    Page        │
│   Loading    │     │    Layer      │     │   Component    │
└──────────────┘     └───────────────┘     └────────────────┘
       │                     │                     │
       ▼                     ▼                     ▼
┌──────────────┐     ┌───────────────┐     ┌────────────────┐
│   Product    │     │   Category    │     │    Content     │
│ Components   │     │  Components   │     │   Components   │
└──────────────┘     └───────────────┘     └────────────────┘
       │                     │                     │
       └─────────────────────┼─────────────────────┘
                            │
                            ▼
┌──────────────┐     ┌───────────────┐     ┌────────────────┐
│    i18n      │ ──► │    Final      │ ──► │   Static      │
│  Translation │     │    Render     │     │   Generation   │
└──────────────┘     └───────────────┘     └────────────────┘
```

### 3. Component Dependency Graph
```
Layout.astro
├── BaseHead.astro
│   ├── SEO Meta Tags
│   └── Style Imports
├── Navigation.astro
│   ├── Logo.astro
│   ├── LanguagePicker.astro
│   │   └── i18n/urls.ts
│   └── HeaderLink.astro
├── Page Content
│   ├── ProductGrid.astro
│   │   └── ProductCard.astro
│   ├── CategoryGrid.astro
│   │   └── CategoryCard.astro
│   └── ContentSection.astro
└── Footer.astro
    ├── Logo.astro
    └── Navigation Links
```

### 4. Build Process Flow
```
Source Files                Build Process              Output
┌──────────┐               ┌──────────┐               ┌──────────┐
│  .astro  │──┐         ┌─►│  Astro   │──┐         ┌─►│  HTML    │
└──────────┘  │         │  └──────────┘  │         │  └──────────┘
┌──────────┐  │  ┌──────┴───┐  ┌────────┴───┐  ┌───┴────┐
│   .ts    │──┼─►│ TypeScript│─►│ Bundling   │─►│ Assets  │
└──────────┘  │  └──────────┘  └──────────┘  └──────────┘
┌──────────┐  │         ┌──────────┐               ┌──────────┐
│   .css   │──┘         └─►│ Tailwind │──────────────►│   CSS    │
└──────────┘               └──────────┘               └──────────┘
```

## Data Flow
```
┌─────────────────┐     ┌───────────────┐     ┌────────────────┐
│  Client Request │ ──► │   Middleware  │ ──► │  Astro Router  │
└─────────────────┘     └───────────────┘     └────────────────┘
                                                      │
                                                      ▼
┌─────────────────┐     ┌───────────────┐     ┌────────────────┐
│    Response     │ ◄── │   Components  │ ◄── │   Data Layer   │
└─────────────────┘     └───────────────┘     └────────────────┘
```

## Key Features
1. **Multilingual Support**
   - Language detection and routing
   - Translated content and UI
   - URL localization

2. **Product Management**
   - Categorized product listings
   - Product comparison functionality
   - Related products

3. **Content Management**
   - Blog system
   - Shopping guides
   - Tips and advice
   - FAQ system

4. **User Experience**
   - Responsive design
   - Fast page loads
   - SEO optimization
   - Interactive UI elements

## Performance Considerations
- Static site generation for fast page loads
- Image optimization
- Efficient data structures
- Component-based architecture for code reuse
- Type safety with TypeScript