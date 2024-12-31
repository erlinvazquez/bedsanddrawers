export type Locale = 'en' | 'es';

export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  subItems?: NavSubItem[];
}
