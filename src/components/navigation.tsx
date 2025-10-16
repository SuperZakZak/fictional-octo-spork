"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from "./language-switcher";

export function Navigation() {
  const t = useTranslations('navigation');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: t('home') },
    { href: "#technologies", label: t('technologies') },
    { href: "#products", label: t('products') },
    { href: "#pricing", label: t('pricing') },
    { href: "#use-cases", label: t('useCases') },
    { href: "#configurator", label: t('configurator') },
    { href: "#contact", label: t('contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2; // 20% от высоты экрана
      setIsScrolled(window.scrollY > 50);
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/20"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Image 
              src="/blooma-logo.png" 
              alt="Blooma" 
              width={150} 
              height={30}
              className="h-7 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-charcoal/80 hover:text-charcoal font-medium transition-all duration-300 whitespace-nowrap text-sm relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-charcoal transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <a
              href="#configurator"
              className="px-6 py-2 bg-charcoal text-white rounded-full hover:bg-charcoal-light transition-all duration-300 font-medium whitespace-nowrap text-sm shadow-lg hover:shadow-xl"
            >
              {t('createDesign')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal/80 hover:text-charcoal transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 glass-card rounded-2xl p-4"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-charcoal/80 hover:text-charcoal font-medium transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/40"
                  >
                    {link.label}
                  </a>
                ))}
                
                {/* Language Switcher - Mobile Version */}
                <div className="border-t border-glass-300 pt-3 mt-2">
                  <LanguageSwitcher isMobile={true} />
                </div>
                
                <a
                  href="#configurator"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-3 bg-charcoal text-white rounded-full hover:bg-charcoal-light transition-all duration-300 font-medium text-center shadow-lg"
                >
                  {t('createDesign')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
