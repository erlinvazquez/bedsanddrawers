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

### Key Files

#### Routing System
- **i18n/routing.ts**: Handles internationalized routing logic including:
  - Static path generation for all localized routes
  - Category and subcategory slug resolution
  - URL segment localization and original slug retrieval
  - Route parameter typing and validation

- **utils/routing.ts**: Provides utility functions for path manipulation:
  - Parsing localized paths into category/subcategory segments
  - Building localized paths from category and subcategory components
  - Integration with the URL localization system

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
- `CategoryHeader.astro`: Category header section
- `CategoryWidget.astro`: Category preview widget
- `CategoryShowcase.astro`: Featured category showcase
- `SubcategoryGrid.astro`: Grid display for subcategories
- `RelatedCategories.astro`: Related categories section

#### Content Components
- `FAQ.astro`: FAQ accordion component
- `FormattedDate.astro`: Date formatting component
- `SearchBar.astro`: Search functionality
- `StarRating.astro`: Rating display component

#### Specialized Component Directories
- `/hero`: Hero section components and variants
  - `HeroTitle.astro`: Hero title component
  - `HeroActions.astro`: Hero action buttons
- `/home`: Homepage-specific components
- `/product`: Product-specific components
  - Product details
  - Product reviews
  - Product specifications
  - Product images
- `/quiz`: Product recommendation quiz components
  - Quiz questions
  - Quiz results
  - Quiz navigation
  - Quiz summary
- `/shopping-guide`: Shopping guide components
  - Guide sections
  - Guide navigation
  - Guide highlights
  - Guide comparisons
  - Guide recommendations
- `/tips`: Tips and advice components
  - Tip cards
  - Tip categories
  - Tip search
  - Related tips
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

### Adding New Categories and Subcategories

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
           metaTitle: "SEO Title for Subcategory",
           metaDescription: "SEO Description for Subcategory",
           items: [
             { name: "Item Name", slug: "item-slug" }
           ]
         }
       ]
     }
     ```

2. **Add Category/Subcategory Translations**
   - Update translations in `src/i18n/en.json` and `src/i18n/es.json`
   - Add category and subcategory names and descriptions in all supported languages

3. **Update URL Mappings**
   - Add new category/subcategory routes in `src/i18n/urls.ts`

4. **Asset Management**
   - Upload category/subcategory images to `/public/images/categories/`
   - Ensure image naming follows the convention: `[category-slug]-[subcategory-slug].webp`
   - Optimize images for web performance (recommended size: 800x600px)

5. **Type Definitions**
   - Verify types in `src/types/subcategory.ts` and `src/types/categories.ts`
   - If adding new properties:
     ```typescript
     // src/types/subcategory.ts
     export interface Subcategory extends BaseItem {
       metaTitle?: string;
       metaDescription?: string;
       items: SubcategoryItem[];
       products?: Product[];
       count: number;
     }
     ```

6. **SEO Optimization**
   - Add required meta titles and descriptions for both category and subcategory
   - Follow SEO best practices:
     - Meta titles: 50-60 characters
     - Meta descriptions: 150-160 characters
     - Include relevant keywords
     - Ensure unique content for each subcategory

7. **Testing Implementation**
   - Verify UI rendering:
     - Check subcategory appears in parent category page
     - Validate subcategory page loads correctly
     - Test responsive design on mobile devices
   - Test navigation:
     - Confirm all links work in both languages
     - Verify breadcrumb navigation
   - Validate SEO elements:
     - Check meta tags are properly rendered
     - Verify structured data
   - Performance testing:
     - Check image loading optimization
     - Verify page load times

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
│  │  │├─guides     │   │    │  │Category/    │  │   ││Header  ││   │
│  │  │├─[category]/│   │    │  │├─Card      │  │   │└────────┘│   │
│  │  ││├─index     │   │    │  │└─Hero      │  │   └──────────┘   │
│  │  ││├─[subcategory]/││    │  │Subcategory/ │  │                   │
│  │  │││├─index     │││    │  │├─Grid      │  │                   │
│  │  │││└──────────┘││    │  │└──────────┘  │                   │
│  │  │└─────────────┘│    │  └─────────────┘  │                   │
│  │  └─────────────┘   │    └─────────────────┘                   │
│  └─────────────────────┘    ┌─────────────────┐                   │
│                             │    Shared       │                   │
│                             │  Components     │                   │
│                             └─────────────────┘                   │
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
│  Client Request │ ──► │   Language    │ ──► │  Astro Router  │
│              │     │   Detection   │     │                │
└──────┬───────┘     └───────────────┘     └────────────────┘
       │
       ▼
┌──────────────┐     ┌───────────────┐     ┌────────────────┐
│    Response     │ ◄── │   Components  │ ◄── │   Data Layer   │
└──────┬───────┘     └───────────────┘     └────────────────┘
       │                     │                     │
       └─────────────────────┼─────────────────────┘
                            │
                            ▼
┌──────────────┐     ┌───────────────┐     ┌────────────────┐
│    i18n      │ ──► │    Final      │ ──► │   Static       │
│  Translation │     │    Render     │     │   Generation   │
└──────┬───────┘     └───────────────┘     └────────────────┘
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
└──────┬───────┘     └───────────────┘     └────────────────┘
       │                     │                     │
       └─────────────────────┼─────────────────────┘
                            │
                            ▼
┌──────────────┐     ┌───────────────┐     ┌────────────────┐
│    i18n      │ ──► │    Final      │ ──► │   Static       │
│  Translation │     │    Render     │     │   Generation   │
└──────┬───────┘     └───────────────┘     └────────────────┘
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
   - Product reviews
   - Category descriptions
   - Collections schemas

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

## Dynamic Route Resolution
┌──────────────┐
│ Browser      │
│ Request      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Astro Router │
└──────┬───────┘
       │
       ▼
┌──────────────┐     ┌─────────────────┐
│ URL Pattern  │ ──► │ [lang]/[category]│
│ Match        │     │ /[subcategory]   │
└──────┬───────┘     └─────────────────┘
       │
       ▼
┌──────────────┐     ┌─────────────────┐
│ Language     │ ──► │ Locale          │
│ Resolution   │     │ Validation      │
└──────┬───────┘     └─────────────────┘
       │
       ▼
┌──────────────────────────────────────┐
│      Dynamic Route Resolution        │
├──────────────────────────────────────┤
│                                      │
│  ┌─────────────┐   ┌─────────────┐  │
│  │    Slug     │ ► │  Category   │  │
│  │Localization │   │   Lookup    │  │
│  └─────────────┘   └──────┬──────┘  │
│         ▲                 │          │
│         │                 ▼          │
│  ┌─────────────┐   ┌─────────────┐  │
│  │    i18n     │   │ Subcategory │  │
│  │   System    │   │   Lookup    │  │
│  └─────────────┘   └──────┬──────┘  │
│                           │          │
└───────────────────────────┼──────────┘
                           │
                           ▼
┌──────────────────────────────────────┐
│         Route Parameters             │
│  ┌────────────┐  ┌───────────────┐  │
│  │  Locale    │  │   Category    │  │
│  │  Params    │  │    Data       │  │
│  └────────────┘  └───────────────┘  │
└──────────────────────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│         Page Generation             │
└──────────────────────────────────────┘

### Dynamic Route Resolution Flow
1. **URL Pattern Match**: Identifies dynamic route patterns like `[lang]/[category]/[subcategory]`
2. **Language Resolution**: Validates and sets the current locale
3. **Category/Subcategory Resolution**:
   - Extracts localized slugs from URL
   - Converts localized slugs to original slugs
   - Looks up category/subcategory data
   - Validates existence and relationships
4. **Route Parameters**: Assembles validated parameters for page generation


## Contentful CMS Integration

This section outlines the necessary changes to integrate Contentful CMS for managing categories, subcategories, products, languages, and pages.

### Content Model Changes
- Move from static content in `/src/content/` and `/src/data/` to Contentful content models for:
  - Categories and subcategories
  - Products
  - Blog posts
  - Buying guides
  - FAQ pages
  - Translations/Languages

### New Integration Layer
Create a new directory `/src/cms/` to handle Contentful integration:

```typescript
src/cms/
├── client.ts          # Contentful client configuration
├── types/            # Content model types
├── mappers/          # Data transformation layers
└── queries/          # GraphQL/REST queries for Contentful
```

### Implementation Steps

#### 1. Environment Setup
```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
CONTENTFUL_PREVIEW_TOKEN=your_preview_token
CONTENTFUL_ENVIRONMENT=master
```

#### 2. Client Configuration
```typescript
// src/cms/client.ts
import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.CONTENTFUL_ENVIRONMENT
});
```

#### 3. Content Type Definitions
```typescript
// src/cms/types/index.ts
export interface Category {
  title: Record<string, string>;
  slug: Record<string, string>;
  description: Record<string, string>;
  subcategories: Subcategory[];
}

export interface Product {
  title: Record<string, string>;
  slug: Record<string, string>;
  price: number;
  category: Category;
  images: Asset[];
}
```

#### 4. Data Fetching
```typescript
// src/cms/queries/categories.ts
export async function getCategories(locale: string) {
  const entries = await contentfulClient.getEntries({
    content_type: 'category',
    locale,
    include: 2
  });
  return entries.items;
}
```

### Required Changes

#### Data Fetching Changes
- Replace static data imports with Contentful API calls
- Implement caching strategy for better performance
- Add preview mode for content editors
- Update build process to fetch content during build time

#### i18n System Updates
- Modify `/src/i18n/` to fetch translations from Contentful
- Update routing system to handle dynamic slugs from CMS
- Implement preview URLs for different locales

#### Component Updates
- Update components to handle rich text content from Contentful
- Add image optimization for Contentful's Asset API
- Implement preview components for draft content

#### Build Process Changes
- Add environment variables for Contentful credentials
- Implement build hooks for content updates
- Add revalidation strategy for incremental static regeneration

### Benefits

#### Content Management
- Non-technical users can manage content
- Preview changes before publishing
- Structured content validation

#### Localization
- Centralized translation management
- Better workflow for content editors
- Automatic language fallbacks

#### Performance
- CDN-delivered assets
- Optimized image delivery
- Incremental content updates

#### Development
- Type-safe content
- Better content modeling
- Separation of concerns

### Performance Considerations
- Implement efficient caching strategies
- Use Contentful's GraphQL API for optimized queries
- Set up Incremental Static Regeneration
- Use Contentful's Image API for optimized assets
