"use client";

import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Cookie } from "lucide-react";
import Image from "next/image";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { useCookieSettings } from "@/hooks/use-cookie-settings";
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();
  const { open: openCookieSettings } = useCookieSettings();

  return (
    <footer className="bg-charcoal text-white border-t border-glass-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="inline-block">
              <Image 
                src="/blooma-logo.png" 
                alt="Blooma" 
                width={150} 
                height={30}
                className="h-8 w-auto"
              />
            </a>
            <p className="text-glass-400 text-sm">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#technologies" className="text-glass-400 hover:text-white transition-all duration-300">Technologies</a></li>
              <li><a href="#products" className="text-glass-400 hover:text-white transition-all duration-300">Products</a></li>
              <li><a href="#pricing" className="text-glass-400 hover:text-white transition-all duration-300">Pricing</a></li>
              <li><a href="#configurator" className="text-glass-400 hover:text-white transition-all duration-300">Configurator</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-glass-400">DTF Printing</li>
              <li className="text-glass-400">Vinyl Printing</li>
              <li className="text-glass-400">Custom Apparel</li>
              <li className="text-glass-400">Corporate Branding</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-glass-400">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-all duration-300">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start space-x-2 text-glass-400">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-all duration-300">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2 text-glass-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-glass-400 hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-glass-400 hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-glass-400 hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-glass-400 text-sm">
            © {currentYear} Blooma. {t('allRightsReserved')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a href="/legal-notice" className="text-glass-400 hover:text-white text-sm transition-all duration-300">
              {t('legalNotice')}
            </a>
            <a href="/privacy-policy" className="text-glass-400 hover:text-white text-sm transition-all duration-300">
              {t('privacyPolicy')}
            </a>
            <a href="/cookie-policy" className="text-glass-400 hover:text-white text-sm transition-all duration-300">
              {t('cookiePolicy')}
            </a>
            <a href="/terms" className="text-glass-400 hover:text-white text-sm transition-all duration-300">
              {t('termsOfService')}
            </a>
            <button
              onClick={openCookieSettings}
              className="flex items-center gap-2 text-glass-400 hover:text-white text-sm transition-all duration-300 group"
            >
              <Cookie size={16} className="group-hover:rotate-12 transition-transform" />
              {t('cookiePolicy')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
