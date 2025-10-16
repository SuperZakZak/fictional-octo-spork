"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n';
import { Globe, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

export function LanguageSwitcher({ isMobile = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    // Remove current locale from pathname
    const segments = pathname.split('/');
    const currentLocaleIndex = segments.findIndex(segment => locales.includes(segment as Locale));
    
    if (currentLocaleIndex !== -1) {
      segments[currentLocaleIndex] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    
    const newPathname = segments.join('/');
    router.push(newPathname);
    setIsOpen(false);
  };

  // Mobile version - expanded list
  if (isMobile) {
    return (
      <div className="w-full" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2 text-charcoal/80 hover:text-charcoal transition-colors rounded-xl hover:bg-white/40"
          aria-label="Switch language"
        >
          <div className="flex items-center space-x-2">
            <Globe size={20} />
            <span className="text-sm font-medium">{localeNames[locale as Locale]}</span>
          </div>
          <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="mt-2 w-full glass-card rounded-xl overflow-hidden">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full text-left px-6 py-3 text-sm transition-colors ${
                  locale === loc
                    ? 'bg-charcoal text-white'
                    : 'text-charcoal/80 hover:bg-white/60'
                }`}
              >
                {localeNames[loc]}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop version - dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 text-charcoal/80 hover:text-charcoal transition-colors rounded-full hover:bg-white/40"
        aria-label="Switch language"
      >
        <Globe size={20} />
        <span className="text-sm font-medium uppercase">{locale}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 glass-card rounded-xl shadow-xl overflow-hidden z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                locale === loc
                  ? 'bg-charcoal text-white'
                  : 'text-charcoal/80 hover:bg-white/60'
              }`}
            >
              {localeNames[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
