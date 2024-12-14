import type { MiddlewareResponseHandler } from 'astro';
import { DEFAULT_LOCALE, LOCALES } from '../consts';
import { getStoredLanguage } from '../i18n/preferences';

export const onRequest: MiddlewareResponseHandler = async ({ request, redirect }, next) => {
  const url = new URL(request.url);
  const [, lang] = url.pathname.split('/');

  // Skip redirect for static assets
  if (url.pathname.match(/\.(css|js|jpg|png|gif|svg|ico)$/)) {
    return next();
  }

  // If no language in URL or invalid language, redirect to stored preference or default
  if (!lang || !LOCALES.includes(lang as any)) {
    const storedLang = getStoredLanguage();
    const targetLang = storedLang && LOCALES.includes(storedLang) ? storedLang : DEFAULT_LOCALE;
    return redirect(`/${targetLang}${url.pathname === '/' ? '' : url.pathname}`);
  }

  const response = await next();
  return response;
};
