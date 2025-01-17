// Site metadata
export const SITE_TITLE = 'Beds & Dreams';
export const SITE_DESCRIPTION = 'Find your perfect bed and mattress';
export const COMPANY_NAME = 'Beds & Dreams';

// Contact Information
export const CONTACT_EMAIL = 'contact@bdfurniture.com';
export const CONTACT_PHONE = '+1 (555) 123-4567';
export const COMPANY_ADDRESS = '123 Sleep Street, Dreamland, CA 94105';

// Social Media
export const TWITTER_HANDLE = '@bdfurniture';
export const FACEBOOK_HANDLE = 'bdfurniture';
export const INSTAGRAM_HANDLE = 'bdfurniture';

// Internationalization
import { Locale } from './types/common/navigation';

export const LOCALES: Locale[] = ['en', 'es'];

export const LANGUAGES = {
  en: {
    name: 'English'
  },
  es: {
    name: 'Español'
  }
} as const;

export const DEFAULT_LOCALE: Locale = 'en';

// Navigation
import type { NavItem } from './types/common/navigation';

// Navigation
export const NAV_ITEMS: NavItem[] = [
  { href: '/beds', label: 'beds', subItems: [
    { href: '/beds/baby-beds', label: 'baby_beds' },
    { href: '/beds/kids-beds', label: 'kids_beds' },
    { href: '/beds/single-beds', label: 'single_beds' },
    { href: '/beds/double-beds', label: 'double_beds' },
    { href: '/beds/king-queen-beds', label: 'king_queen_beds' },
    { href: '/beds/sofa-beds', label: 'sofa_beds' },
    { href: '/beds/space-saving-beds', label: 'space_saving_beds' }
  ]},
  { href: '/drawers', label: 'drawers', subItems: [
    { href: '/drawers/chest-of-drawers', label: 'chest_of_drawers' },
    { href: '/drawers/under-bed-storage', label: 'under_bed_storage' },
    { href: '/drawers/bedside-tables', label: 'bedside_tables' },
    { href: '/drawers/modular-drawers', label: 'modular_drawers' }
  ]},
  { href: '/by-room', label: 'by_room', subItems: [
    { href: '/by-room/baby-rooms', label: 'baby_rooms' },
    { href: '/by-room/kids-rooms', label: 'kids_rooms' },
    { href: '/by-room/bedrooms', label: 'bedrooms' },
    { href: '/by-room/studio-apartments', label: 'studio_apartments' }
  ]},
  { href: '/sets', label: 'sets', subItems: [
    { href: '/sets/bedroom-sets', label: 'bedroom_sets' },
    { href: '/sets/nursery-sets', label: 'nursery_sets' },
    { href: '/sets/storage-sets', label: 'storage_sets' }
  ]},
  { href: '/tips', label: 'tips' },
  { href: '/buying-guides', label: 'buying_guides' }
] as const;