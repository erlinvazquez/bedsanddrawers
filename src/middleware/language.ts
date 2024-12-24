import type { MiddlewareHandler } from 'astro';
import { DEFAULT_LOCALE, LOCALES, type Locale } from '../consts';
import { getStoredLanguage } from '../i18n/preferences';

export const onRequest: MiddlewareHandler = async ({ request, redirect }, next) => {
  const url = new URL(request.url);
  const [, lang] = url.pathname.split('/');

  // Skip redirect for static assets
  if (url.pathname.match(/\.(css|js|jpg|png|gif|svg|ico)$/)) {
    return next();
  }

  // If no language in URL or invalid language, redirect to stored preference or default
  if (!lang || !LOCALES.includes(lang as Locale)) {
    const storedLang = getStoredLanguage();
    const targetLang = storedLang && LOCALES.includes(storedLang) ? storedLang : DEFAULT_LOCALE;
    return redirect(`/${targetLang}${url.pathname === '/' ? '' : url.pathname}`);
  }

  const response = await next();
  return response;
};