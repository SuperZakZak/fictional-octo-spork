"use client";

import { useState, useEffect } from "react";
import { X, Check, Cookie } from "lucide-react";
import type { CookiePreferences } from "@/types";
import {
  getCookieConsent,
  saveCookieConsent,
  COOKIE_CATEGORIES,
  DEFAULT_PREFERENCES,
} from "@/lib/cookie-consent";

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CookieSettings({ isOpen, onClose }: CookieSettingsProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Load current preferences
      const consent = getCookieConsent();
      if (consent) {
        setPreferences(consent.preferences);
      }
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === "necessary") return; // Can't disable necessary cookies

    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    saveCookieConsent(preferences);
    handleClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-white max-w-2xl w-full max-h-[90vh] overflow-hidden transition-all duration-300 ${
          isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-black text-white px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <Cookie className="w-5 h-5" />
            <h2 className="text-xl font-semibold">
              Cookie Settings
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-800 rounded transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] px-6 py-6">
          <p className="text-gray-700 text-sm mb-6">
            Manage your cookie preferences. Essential cookies are always enabled as they are required for the site to function properly.
          </p>

          {/* Cookie Categories */}
          <div className="space-y-4">
            {COOKIE_CATEGORIES.map((category) => {
              const isEnabled = preferences[category.id];
              const canToggle = !category.required;

              return (
                <div
                  key={category.id}
                  className="border border-gray-200 p-4 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-gray-900">
                          {category.name}
                        </h3>
                        {category.required && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mb-2">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {category.examples.map((example, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      onClick={() => handleToggle(category.id)}
                      disabled={!canToggle}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ${
                        isEnabled
                          ? "bg-black"
                          : "bg-gray-300"
                      } ${
                        !canToggle ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                      }`}
                      aria-label={`Toggle ${category.name}`}
                    >
                      <span
                        className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                          isEnabled ? "translate-x-5" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-3 bg-gray-50 border border-gray-200">
            <p className="text-xs text-gray-700">
              <strong>Note:</strong> Disabling certain cookies may affect your experience on the site.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-3 flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 bg-white hover:bg-gray-50 text-gray-900 text-sm font-medium py-2 px-4 border border-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 bg-black hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
