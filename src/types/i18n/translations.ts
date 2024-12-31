export interface NavTranslations {
  home: string;
  products: string;
  categories: string;
  about: string;
  contact: string;
  search: string;
  cart: string;
  account: string;
}

export interface MetaTranslations {
  title: string;
  description: string;
}

export interface CommonTranslations {
  loading: string;
  error: string;
  notFound: string;
  back: string;
  next: string;
  previous: string;
}

export interface CategoriesTranslations {
  all: string;
  featured: string;
  new: string;
  sale: string;
}

export interface TipsTranslations {
  title: string;
  description: string;
}

export interface Translations {
  nav: NavTranslations;
  meta: MetaTranslations;
  common: CommonTranslations;
  categories: CategoriesTranslations;
  tips: TipsTranslations;
}
