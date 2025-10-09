"use client";

import Link from "next/link";
import { AlertCircle } from "lucide-react";

interface PrivacyConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: boolean;
  required?: boolean;
  className?: string;
}

/**
 * Privacy Consent Checkbox Component
 * GDPR-compliant checkbox for privacy policy consent
 * Must be unchecked by default and explicitly checked by user
 */
export function PrivacyConsentCheckbox({
  checked,
  onChange,
  error = false,
  required = true,
  className = "",
}: PrivacyConsentCheckboxProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="flex items-start space-x-3 cursor-pointer group">
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            required={required}
            className={`w-5 h-5 rounded border-2 transition-all cursor-pointer
              ${error 
                ? "border-red-500 focus:ring-red-500" 
                : "border-gray-300 focus:ring-primary-500"
              }
              ${checked 
                ? "bg-primary-500 border-primary-500" 
                : "bg-white"
              }
              focus:ring-2 focus:ring-offset-2`}
          />
        </div>
        <span className={`text-sm leading-relaxed ${error ? "text-red-600" : "text-gray-700"}`}>
          I agree to the{" "}
          <Link 
            href="/privacy-policy" 
            target="_blank"
            className="text-primary-500 hover:text-primary-600 underline font-medium"
          >
            Privacy Policy
          </Link>
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </label>
      
      {error && (
        <div className="flex items-start space-x-2 text-red-600 text-xs">
          <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
          <span>You must accept the Privacy Policy to continue</span>
        </div>
      )}
      
      <p className="text-xs text-gray-500 ml-8">
        Your data will be processed according to our Privacy Policy. Required for order processing.
      </p>
    </div>
  );
}
