import type { Category, Subcategory } from '../types';
import { LOCALES, type Locale } from '../consts';
import { URL_SEGMENTS } from './urls';
import { categories } from '../data/categories';

export type RouteParams = {
  lang: Locale;
  category?: string;
  subcategory?: string;
  id?: string;
};

function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}

function getSubcategoryBySlug(categorySlug: string, subcategorySlug: string): Subcategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find(subcategory => subcategory.slug === subcategorySlug);
}

export function getLocalizedSlug(locale: Locale, slug: string): string {
  return URL_SEGMENTS[locale][slug] || slug;
}

export function getOriginalSlug(locale: Locale, localizedSlug: string): string {
  const segments = URL_SEGMENTS[locale];
  const originalSlug = Object.entries(segments).find(([_, value]) => value === localizedSlug)?.[0];
  return originalSlug || localizedSlug;
}

export function getIndexStaticPaths() {
  return LOCALES.map((lang) => ({
    params: { lang },
    props: { locale: lang }
  }));
}

export function getCategoryStaticPaths() {
  return LOCALES.flatMap((lang) => {
    // Generate paths for main categories
    const categoryPaths = categories.map((category) => {
      const localizedSlug = getLocalizedSlug(lang, category.slug);
      
      return {
        params: { 
          lang,
          category: localizedSlug 
        },
        props: { 
          locale: lang,
          category,
          originalSlug: category.slug
        }
      };
    });

    // Generate paths for subcategories
    const subcategoryPaths = categories.flatMap((category) => 
      category.subcategories.map((subcategory) => {
        const localizedCategorySlug = getLocalizedSlug(lang, category.slug);
        const localizedSubcategorySlug = getLocalizedSlug(lang, subcategory.slug);
        
        return {
          params: {
            lang,
            category: localizedCategorySlug,
            subcategory: localizedSubcategorySlug
          },
          props: {
            locale: lang,
            category,
            subcategory,
            originalCategorySlug: category.slug,
            originalSubcategorySlug: subcategory.slug
          }
        };
      })
    );

    return [...categoryPaths, ...subcategoryPaths];
  });
}

export function getCategoryFromSlug(locale: Locale, slug: string): Category | undefined {
  // First try to find a direct category match
  const originalSlug = getOriginalSlug(locale, slug);
  const category = getCategoryBySlug(originalSlug);
  if (category) return category;

  // If not found, check if it's a subcategory path
  const [categorySlug, subcategorySlug] = slug.split('/').map(s => getOriginalSlug(locale, s));
  if (categorySlug && subcategorySlug) {
    const category = getCategoryBySlug(categorySlug);
    if (category) {
      const subcategory = getSubcategoryBySlug(categorySlug, subcategorySlug);
      if (subcategory) {
        return {
          ...category,
          subcategories: [subcategory]
        };
      }
    }
  }

  return undefined;
}

export function getSubcategoryFromSlug(locale: Locale, categorySlug: string, subcategorySlug: string): Subcategory | undefined {
  const originalCategorySlug = getOriginalSlug(locale, categorySlug);
  const originalSubcategorySlug = getOriginalSlug(locale, subcategorySlug);
  return getSubcategoryBySlug(originalCategorySlug, originalSubcategorySlug);
}
