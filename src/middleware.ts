import { sequence } from 'astro:middleware';
import { DEFAULT_LOCALE, LOCALES } from './consts';

export function languageMiddleware({ request, redirect }, next) {
  const url = new URL(request.url);
  const [, lang] = url.pathname.split('/');

  // Skip redirect for static assets and API routes
  if (url.pathname.match(/\.(css|js|jpg|png|gif|svg|ico)$/) || url.pathname.startsWith('/api/')) {
    return next();
  }

  // If no language in URL or invalid language, redirect to default language
  if (!lang || !LOCALES.includes(lang)) {
    const redirectPath = url.pathname === '/' ? `/${DEFAULT_LOCALE}` : `/${DEFAULT_LOCALE}${url.pathname}`;
    return redirect(redirectPath);
  }

  const response = next();
  return response;
}

export const onRequest = sequence(languageMiddleware);
