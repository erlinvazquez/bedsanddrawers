import type { Locale } from '../consts';
import en from './en.json' assert { type: 'json' };
import es from './es.json' assert { type: 'json' };

interface Translations {
  meta: {
    defaultTitle: string;
    defaultDescription: string;
  };
  nav: {
    home: string;
    categories: string;
    about: string;
    contact: string;
  };
  common: {
    categories: string;
    productComparison: string;
    viewDetails: string;
    learnMore: string;
  };
  categories: {
    beds: string;
    mattresses: string;
    furniture: string;
    accessories: string;
  };
}

export function getTranslations(locale: Locale): Translations {
  const translations = {
    en,
    es,
  };
  return translations[locale];
}

export type TranslationKey = keyof Translations;
