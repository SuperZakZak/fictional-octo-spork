"use client";

import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Cookie } from "lucide-react";
import Image from "next/image";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { useCookieSettings } from "@/hooks/use-cookie-settings";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { open: openCookieSettings } = useCookieSettings();

  return (
    <footer className="bg-black text-white border-t-4 border-white">
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
            <p className="text-gray-400 text-sm">
              Professional DTF and Vinyl printing services for custom apparel and accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#technologies" className="text-gray-400 hover:text-white transition-colors">Technologies</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#configurator" className="text-gray-400 hover:text-white transition-colors">Configurator</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">DTF Printing</li>
              <li className="text-gray-400">Vinyl Printing</li>
              <li className="text-gray-400">Custom Apparel</li>
              <li className="text-gray-400">Corporate Branding</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Blooma. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <button
              onClick={openCookieSettings}
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group"
            >
              <Cookie size={16} className="group-hover:rotate-12 transition-transform" />
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
