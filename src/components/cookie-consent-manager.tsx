"use client";

import { CookieConsent } from "./cookie-consent";
import { CookieSettings } from "./cookie-settings";
import { useCookieSettings } from "@/hooks/use-cookie-settings";

/**
 * Cookie Consent Manager
 * Manages the state and interaction between cookie banner and settings modal
 */
export function CookieConsentManager() {
  const { isOpen, open, close } = useCookieSettings();

  return (
    <>
      <CookieConsent onOpenSettings={open} />
      <CookieSettings isOpen={isOpen} onClose={close} />
    </>
  );
}
