import type { CookiePreferences, CookieConsentState, CookieCategoryInfo } from "@/types";

const COOKIE_CONSENT_KEY = "blooma_cookie_consent";
const COOKIE_CONSENT_VERSION = "1.0";

/**
 * Default cookie preferences - only necessary cookies enabled
 */
export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

/**
 * All cookies accepted
 */
export const ALL_ACCEPTED_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
};

/**
 * Cookie categories information
 */
export const COOKIE_CATEGORIES: CookieCategoryInfo[] = [
  {
    id: "necessary",
    name: "Essential",
    description: "These cookies are necessary for the website to function and cannot be disabled.",
    required: true,
    examples: ["Session", "Security", "Cookie consent"],
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Help us understand how visitors interact with the site by collecting anonymous information.",
    required: false,
    examples: ["Google Analytics", "Usage statistics"],
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Used to track visitors across websites and display relevant advertising.",
    required: false,
    examples: ["Facebook Pixel", "Google Ads", "Retargeting"],
  },
  {
    id: "preferences",
    name: "Preferences",
    description: "Allow the site to remember your settings (language, region, font size, etc.).",
    required: false,
    examples: ["Language", "Theme", "Display settings"],
  },
];

/**
 * Get cookie consent state from localStorage
 */
export const getCookieConsent = (): CookieConsentState | null => {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored);
    
    // Validate structure
    if (
      typeof parsed.hasConsented === "boolean" &&
      typeof parsed.preferences === "object" &&
      typeof parsed.timestamp === "number"
    ) {
      return parsed as CookieConsentState;
    }

    return null;
  } catch (error) {
    console.error("Error reading cookie consent:", error);
    return null;
  }
};

/**
 * Save cookie consent state to localStorage
 */
export const saveCookieConsent = (preferences: CookiePreferences): void => {
  if (typeof window === "undefined") return;

  const state: CookieConsentState = {
    hasConsented: true,
    preferences: {
      ...preferences,
      necessary: true, // Always true
    },
    timestamp: Date.now(),
  };

  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(state));
    
    // Trigger custom event for other parts of the app
    window.dispatchEvent(
      new CustomEvent("cookieConsentChanged", { detail: state })
    );
  } catch (error) {
    console.error("Error saving cookie consent:", error);
  }
};

/**
 * Clear cookie consent (for testing or reset)
 */
export const clearCookieConsent = (): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    window.dispatchEvent(new CustomEvent("cookieConsentCleared"));
  } catch (error) {
    console.error("Error clearing cookie consent:", error);
  }
};

/**
 * Check if user has consented to cookies
 */
export const hasUserConsented = (): boolean => {
  const consent = getCookieConsent();
  return consent?.hasConsented ?? false;
};

/**
 * Check if a specific cookie category is enabled
 */
export const isCookieCategoryEnabled = (
  category: keyof CookiePreferences
): boolean => {
  const consent = getCookieConsent();
  if (!consent) return false;
  return consent.preferences[category] ?? false;
};

/**
 * Accept all cookies
 */
export const acceptAllCookies = (): void => {
  saveCookieConsent(ALL_ACCEPTED_PREFERENCES);
};

/**
 * Accept only necessary cookies
 */
export const acceptNecessaryCookies = (): void => {
  saveCookieConsent(DEFAULT_PREFERENCES);
};

/**
 * Update specific cookie preferences
 */
export const updateCookiePreferences = (
  preferences: Partial<CookiePreferences>
): void => {
  const current = getCookieConsent();
  const currentPreferences = current?.preferences ?? DEFAULT_PREFERENCES;

  saveCookieConsent({
    ...currentPreferences,
    ...preferences,
    necessary: true, // Always true
  });
};

/**
 * Get consent age in days
 */
export const getConsentAge = (): number | null => {
  const consent = getCookieConsent();
  if (!consent) return null;

  const ageInMs = Date.now() - consent.timestamp;
  return Math.floor(ageInMs / (1000 * 60 * 60 * 24));
};

/**
 * Check if consent needs renewal (older than 365 days)
 */
export const needsConsentRenewal = (): boolean => {
  const age = getConsentAge();
  if (age === null) return true;
  return age > 365;
};
