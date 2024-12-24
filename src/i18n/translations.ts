import type { Locale } from '../consts';
import en from './en.json' assert { type: 'json' };
import es from './es.json' assert { type: 'json' };

interface NavTranslations {
  home: string;
  beds: string;
  baby_beds: string;
  kids_beds: string;
  single_beds: string;
  double_beds: string;
  king_queen_beds: string;
  sofa_beds: string;
  space_saving_beds: string;
  drawers: string;
  chest_of_drawers: string;
  under_bed_storage: string;
  bedside_tables: string;
  modular_drawers: string;
  by_room: string;
  baby_rooms: string;
  kids_rooms: string;
  bedrooms: string;
  studio_apartments: string;
  styles_materials: string;
  wooden_furniture: string;
  upholstered_furniture: string;
  metal_frame_furniture: string;
  eco_friendly_furniture: string;
  buying_guides: string;
  tips: string;
}

interface Translations {
  meta: {
    defaultTitle: string;
    defaultDescription: string;
  };
  nav: NavTranslations;
  common: {
    categories: string;
    productComparison: string;
    viewDetails: string;
    learnMore: string;
  };
  categories: {
    beds: string;
    drawers: string;
    by_room: string;
    styles_materials: string;
  };
}

export function getTranslations(locale: Locale): Translations {
  const translations: Record<Locale, Translations> = {
    en: en as unknown as Translations,
    es: es as unknown as Translations,
  };
  return translations[locale];
}

export type TranslationKey = keyof Translations;