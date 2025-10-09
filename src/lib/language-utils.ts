/**
 * Utility functions for language detection
 */

/**
 * Get the current site language from the URL path
 * @returns Language code (en, pt, ru)
 */
export function getSiteLanguage(): string {
  if (typeof window === 'undefined') return 'en';
  
  const path = window.location.pathname;
  
  if (path.startsWith('/pt')) return 'pt';
  if (path.startsWith('/ru')) return 'ru';
  if (path.startsWith('/en')) return 'en';
  
  return 'en'; // default
}

/**
 * Get the browser's preferred language
 * @returns Language code
 */
export function getBrowserLanguage(): string {
  if (typeof window === 'undefined') return 'unknown';
  
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  // Extract primary language code (e.g., 'en-US' -> 'en')
  return browserLang ? browserLang.split('-')[0] : 'unknown';
}

/**
 * Get all available language information
 */
export function getLanguageInfo() {
  return {
    siteLanguage: getSiteLanguage(),
    browserLanguage: getBrowserLanguage(),
    fullBrowserLanguage: typeof window !== 'undefined' ? navigator.language : 'unknown',
  };
}
