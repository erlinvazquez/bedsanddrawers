import type { Locale } from '../consts';

const LANGUAGE_PREFERENCE_KEY = 'preferred_language';

export function getStoredLanguage(): Locale | null {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(LANGUAGE_PREFERENCE_KEY) as Locale | null;
  }
  return null;
}

export function setStoredLanguage(locale: Locale): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(LANGUAGE_PREFERENCE_KEY, locale);
  }
}
