"use client";

import { useState, useEffect } from "react";
import {
  hasUserConsented,
  acceptAllCookies,
  acceptNecessaryCookies,
  needsConsentRenewal,
} from "@/lib/cookie-consent";

interface CookieConsentProps {
  onOpenSettings?: () => void;
}

export function CookieConsent({ onOpenSettings }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already consented and consent is still valid
    const hasConsented = hasUserConsented();
    const needsRenewal = needsConsentRenewal();

    if (!hasConsented || needsRenewal) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    handleClose();
  };

  const handleAcceptNecessary = () => {
    acceptNecessaryCookies();
    handleClose();
  };

  const handleCustomize = () => {
    onOpenSettings?.();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isClosing ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="bg-black text-white border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Text */}
            <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
              We use cookies to improve your experience.{" "}
              <button
                onClick={handleCustomize}
                className="underline hover:text-white transition-colors"
              >
                Manage preferences
              </button>
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={handleAcceptNecessary}
                className="px-4 py-1.5 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-1.5 text-xs sm:text-sm bg-white text-black hover:bg-gray-200 transition-colors rounded"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
