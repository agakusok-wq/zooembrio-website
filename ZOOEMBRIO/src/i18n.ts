export type Locale = 'ru' | 'en';

export const locales: Locale[] = ['ru', 'en'];

export const localeLabels: Record<Locale, string> = {
  ru: 'RU',
  en: 'EN',
};

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  return maybeLocale === 'en' ? 'en' : 'ru';
}

export function localizedPath(path: string, locale: Locale): string {
  const clean = path === '/' ? '' : path;
  return locale === 'ru' ? clean || '/' : `/en${clean}`;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const withoutLocale = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return localizedPath(withoutLocale === '/' ? '/' : withoutLocale, target);
}
