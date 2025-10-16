import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always use locale prefix (e.g., /en, /pt)
  localePrefix: 'always',

  // Automatically detect locale from Accept-Language header
  localeDetection: true,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
