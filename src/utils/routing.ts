import { getLocalizedPath as getLocalizedUrlPath } from '../i18n/urls';
import type { Locale } from '../consts';

export function parseLocalizedPath(path: string, locale: Locale) {
  // Parse the path segments
  const segments = path.split('/').filter(Boolean);
  
  // Extract category and subcategory
  const category = segments[0] || '';
  const subcategory = segments[1] || '';
  
  return {
    category,
    subcategory,
    originalPath: path,
  };
}

export function buildLocalizedPath(category: string, subcategory: string = '', locale: Locale) {
  const path = subcategory ? `/${category}/${subcategory}` : `/${category}`;
  return getLocalizedUrlPath(path, locale);
}