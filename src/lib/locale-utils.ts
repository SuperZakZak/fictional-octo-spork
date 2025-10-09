/**
 * Utility functions for locale detection
 */

/**
 * Get browser locale from navigator
 * @returns Browser locale string (e.g., 'en-US', 'pt-PT', 'ru-RU')
 */
export const getBrowserLocale = (): string => {
  if (typeof window === "undefined") {
    return "unknown";
  }

  // Try to get the most specific locale
  const locale =
    navigator.language ||
    (navigator.languages && navigator.languages[0]) ||
    "unknown";

  return locale;
};

/**
 * Get site locale from URL or default
 * @returns Site locale string (e.g., 'en', 'pt', 'ru')
 */
export const getSiteLocale = (): string => {
  if (typeof window === "undefined") {
    return "en"; // default
  }

  // Try to extract locale from URL path
  // Assuming URL structure: /locale/path or just /path
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  
  // Check if first part is a locale code (2 letter code)
  if (pathParts.length > 0 && pathParts[0].length === 2) {
    return pathParts[0];
  }

  // Try to get from HTML lang attribute
  const htmlLang = document.documentElement.lang;
  if (htmlLang) {
    return htmlLang.split("-")[0]; // Get just the language part
  }

  // Default to English
  return "en";
};

/**
 * Get full locale information
 * @returns Object with browser and site locale
 */
export const getLocaleInfo = () => {
  return {
    browserLocale: getBrowserLocale(),
    siteLocale: getSiteLocale(),
  };
};
