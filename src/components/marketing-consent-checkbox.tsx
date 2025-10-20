"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

interface MarketingConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

/**
 * Marketing Consent Checkbox Component
 * Optional checkbox for marketing communications consent
 * Must be unchecked by default (opt-in) per GDPR requirements
 */
export function MarketingConsentCheckbox({
  checked,
  onChange,
  className = "",
}: MarketingConsentCheckboxProps) {
  const t = useTranslations('consent.marketing');
  
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="flex items-start space-x-3 cursor-pointer group">
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className={`w-5 h-5 rounded border-2 border-gray-300 transition-all cursor-pointer
              ${checked 
                ? "bg-primary-500 border-primary-500" 
                : "bg-white"
              }
              focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
          />
        </div>
        <span className="text-sm text-gray-700 leading-relaxed">
          {t('label')}{" "}
          <Link 
            href="/privacy-policy" 
            target="_blank"
            className="text-primary-500 hover:text-primary-600 underline font-medium"
          >
            {t('link')}
          </Link>
        </span>
      </label>
      
      <p className="text-xs text-gray-500 ml-8">
        {t('description')}
      </p>
    </div>
  );
}
