export function generateBreadcrumbs(path: string) {
  const parts = path.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', href: '/' }];
  
  let currentPath = '';
  for (const part of parts) {
    currentPath += `/${part}`;
    breadcrumbs.push({
      name: part.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '),
      href: currentPath
    });
  }
  
  return breadcrumbs;
}

export function isActiveLink(currentPath: string, href: string): boolean {
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export const navigation = {
  en: {
    categories: 'Categories',
    blog: 'Blog',
    expertGuides: 'Expert Buying Guides',
    about: 'About',
    contact: 'Contact'
  },
  es: {
    categories: 'Categorías',
    blog: 'Blog',
    expertGuides: 'Guías de Compra',
    about: 'Acerca de',
    contact: 'Contacto'
  }
} as const;

export const navigationLinks = {
  en: [
    { name: navigation.en.categories, href: '/en/categories' },
    { name: navigation.en.expertGuides, href: '/en/buying-guides' },
    { name: navigation.en.blog, href: '/en/blog' },
    { name: navigation.en.about, href: '/en/about' },
    { name: navigation.en.contact, href: '/en/contact' }
  ],
  es: [
    { name: navigation.es.categories, href: '/es/categories' },
    { name: navigation.es.expertGuides, href: '/es/buying-guides' },
    { name: navigation.es.blog, href: '/es/blog' },
    { name: navigation.es.about, href: '/es/about' },
    { name: navigation.es.contact, href: '/es/contact' }
  ]
} as const;