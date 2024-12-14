import { DEFAULT_LOCALE, LOCALES, type Locale } from '../consts';
import { getTranslations } from './translations';
import { setStoredLanguage } from './preferences';

export function getLocaleFromUrl(pathname: string): Locale {
  const [, locale] = pathname.split('/');
  if (LOCALES.includes(locale as Locale)) {
    // Store the language preference when it's valid
    setStoredLanguage(locale as Locale);
    return locale as Locale;
  }
  return DEFAULT_LOCALE;
}

export function useTranslations(locale: Locale) {
  const messages = getTranslations(locale);
  return function t(key: string): string {
    return key.split('.').reduce((obj, k) => obj?.[k], messages as any) || key;
  };
}

export function getLocalizedPathname(pathname: string, locale: Locale): string {
  const segments = pathname.split('/');
  const currentLocale = LOCALES.includes(segments[1] as Locale) ? segments[1] : null;
  
  if (currentLocale) {
    segments[1] = locale;
  } else {
    segments.splice(1, 0, locale);
  }
  
  return segments.join('/');
}

export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/');
  if (LOCALES.includes(segments[1] as Locale)) {
    segments.splice(1, 1);
  }
  return segments.join('/') || '/';
}
