import { sequence } from 'astro:middleware';
import { DEFAULT_LOCALE, LOCALES, type Locale } from './consts';
import { ensureTrailingSlash } from './utils/url';

export function languageMiddleware({ request, redirect }, next) {
  const url = new URL(request.url);
  const [, lang] = url.pathname.split('/');

  // Skip redirect for static assets and API routes
  if (url.pathname.match(/\.(css|js|jpg|png|gif|svg|ico)$/) || url.pathname.startsWith('/api/')) {
    return next();
  }

  // If no language in URL or invalid language, redirect to default language
  if (!lang || !LOCALES.includes(lang as Locale)) {
    const redirectPath = url.pathname === '/' ? `/${DEFAULT_LOCALE}/` : ensureTrailingSlash(`/${DEFAULT_LOCALE}${url.pathname}`);
    return redirect(redirectPath);
  }

  // Enforce trailing slash
  if (!url.pathname.endsWith('/')) {
    return redirect(ensureTrailingSlash(url.pathname));
  }

  const response = next();
  return response;
}

export const onRequest = sequence(languageMiddleware);