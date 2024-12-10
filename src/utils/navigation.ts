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