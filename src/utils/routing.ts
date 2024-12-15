import { getOriginalPath } from '../i18n/urls';
import type { Locale } from '../consts';

export function parseLocalizedPath(path: string, locale: Locale) {
  // Get the original (non-localized) path
  const originalPath = getOriginalPath(path, locale);
  
  // Parse the path segments
  const segments = originalPath.split('/').filter(Boolean);
  
  // Extract category and subcategory
  const category = segments[0] || '';
  const subcategory = segments[1] || '';
  
  return {
    category,
    subcategory,
    originalPath,
  };
}

export function buildLocalizedPath(category: string, subcategory: string = '', locale: Locale) {
  const path = subcategory ? `/${category}/${subcategory}` : `/${category}`;
  return getLocalizedPath(path, locale);
}
