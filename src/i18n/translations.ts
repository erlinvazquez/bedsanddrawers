import type { Locale } from '../consts';
import type { Translations } from './types';
import en from './en.json' assert { type: 'json' };
import es from './es.json' assert { type: 'json' };

export function getTranslations(locale: Locale): Translations {
  const translations: Record<Locale, Translations> = {
    en: en as unknown as Translations,
    es: es as unknown as Translations,
  };
  return translations[locale];
}

export type TranslationKey = keyof Translations;