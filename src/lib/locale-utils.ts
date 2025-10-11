/**
 * Utility functions for locale detection
 */

import { NextRequest } from "next/server";

/**
 * Get browser locale from navigator (client-side)
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
 * Get full locale information (client-side)
 * @returns Object with browser and site locale
 */
export const getLocaleInfo = () => {
  return {
    browserLocale: getBrowserLocale(),
    siteLocale: getSiteLocale(),
  };
};

/**
 * Detect browser locale from request headers (server-side)
 * @param request - NextRequest object
 * @returns Browser locale string (e.g., 'en-US', 'pt-PT', 'ru-RU')
 */
export const detectBrowserLocale = (request: NextRequest): string => {
  const acceptLanguage = request.headers.get("accept-language");
  
  if (!acceptLanguage) {
    return "unknown";
  }

  // Parse accept-language header (e.g., "en-US,en;q=0.9,pt;q=0.8")
  // Get the first (highest priority) locale
  const locales = acceptLanguage.split(",");
  const primaryLocale = locales[0].split(";")[0].trim();
  
  return primaryLocale || "unknown";
};

/**
 * Detect site locale from request (server-side)
 * @param request - NextRequest object
 * @returns Site locale string (e.g., 'en', 'pt', 'ru')
 */
export const detectSiteLocale = (request: NextRequest): string => {
  // Try to extract locale from URL path
  const pathname = request.nextUrl.pathname;
  const pathParts = pathname.split("/").filter(Boolean);
  
  // Check if first part is a locale code (2 letter code)
  if (pathParts.length > 0 && pathParts[0].length === 2) {
    return pathParts[0];
  }

  // Try to get from referer header
  const referer = request.headers.get("referer");
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      const refererParts = refererUrl.pathname.split("/").filter(Boolean);
      if (refererParts.length > 0 && refererParts[0].length === 2) {
        return refererParts[0];
      }
    } catch {
      // Invalid URL, ignore
    }
  }

  // Default to English
  return "en";
};
