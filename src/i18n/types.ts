export interface NavTranslations {
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

export interface MetaTranslations {
  defaultTitle: string;
  defaultDescription: string;
}

export interface CommonTranslations {
  categories: string;
  productComparison: string;
  viewDetails: string;
  learnMore: string;
  buyNow: string;
  addToCart: string;
  moreInfo: string;
}

export interface CategoriesTranslations {
  beds: string;
  drawers: string;
  by_room: string;
  styles_materials: string;
}

export interface TipsTranslations {
  title: string;
  description: string;
}

export interface Translations {
  meta: MetaTranslations;
  nav: NavTranslations;
  common: CommonTranslations;
  categories: CategoriesTranslations;
  tips: TipsTranslations;
}
