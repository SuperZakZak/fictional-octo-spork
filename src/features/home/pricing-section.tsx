"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calculator, TrendingDown, Zap, AlertCircle, Download, Mail } from "lucide-react";
import {
  PrintSize,
  SIZE_DIMENSIONS,
  comparePrices,
  requiresCustomQuote,
  getDiscountPercentage,
} from "@/lib/pricing";
import { getLocaleInfo } from "@/lib/locale-utils";
import { PRICE_LIST_CONFIG } from "@/lib/constants";

const sizes: Array<{ id: string; name: PrintSize }> = [
  { id: "a5", name: "A5" },
  { id: "a4", name: "A4" },
  { id: "a3", name: "A3" },
  { id: "a2", name: "A2" },
];

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const [selectedSize, setSelectedSize] = useState(sizes[1]); // Default A4
  const [quantity, setQuantity] = useState(20);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Calculate prices using the new pricing system
  const priceComparison = comparePrices(selectedSize.name, quantity);
  const needsQuote = requiresCustomQuote(quantity);
  const discountPercentage = getDiscountPercentage(quantity);

  const vinylTotal = priceComparison.vinyl.total;
  const dtfTotal = priceComparison.dtf.total;
  const cheaperOption = priceComparison.cheaperMethod;
  const savings = priceComparison.savings.toFixed(2);
  const sizeDimensions = SIZE_DIMENSIONS[selectedSize.name];

  const handleDownloadPriceList = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get locale information
      const localeInfo = getLocaleInfo();

      // Send request to API endpoint (sends webhook and returns download URL)
      const response = await fetch('/api/download-price-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          siteLocale: localeInfo.siteLocale,
          browserLocale: localeInfo.browserLocale,
          googleDriveUrl: PRICE_LIST_CONFIG.googleDriveUrl,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to process request');
      }

      // Trigger download from Google Drive
      if (data.downloadUrl) {
        // Open Google Drive link in new tab to trigger download
        window.open(data.downloadUrl, '_blank');
      }

      setEmailSubmitted(true);
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setShowEmailForm(false);
        setEmailSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Download error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container-custom">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Transparent <span className="text-black">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your project cost instantly. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            {/* Calculator Header */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Calculator className="text-vibrant-yellow" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black">Price Calculator</h3>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select Print Size
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sizes.map((size) => {
                  const dims = SIZE_DIMENSIONS[size.name];
                  return (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedSize.id === size.id
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-black"
                      }`}
                    >
                      <div className={`font-bold text-lg ${
                        selectedSize.id === size.id ? "text-white" : "text-gray-900"
                      }`}>
                        {size.name}
                      </div>
                      <div className={`text-sm ${
                        selectedSize.id === size.id ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {dims.width} × {dims.height} mm
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <div className="text-2xl font-bold text-black">{quantity}</div>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>5</span>
                <span>20</span>
                <span>50</span>
                <span>100+</span>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                {needsQuote && (
                  <div className="flex items-center justify-center gap-1 text-vibrant-purple font-medium">
                    <AlertCircle size={14} />
                    <span>Quantities over 50 require a custom quote</span>
                  </div>
                )}
              </div>
            </div>

            {/* Price Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Vinyl Price */}
              <motion.div
                animate={cheaperOption === "vinyl" ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.5 }}
                className={`relative p-6 rounded-2xl border-2 ${
                  cheaperOption === "vinyl"
                    ? "border-vibrant-green bg-green-50"
                    : "border-black bg-white"
                }`}
              >
                {cheaperOption === "vinyl" && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-vibrant-green text-white text-xs font-bold rounded-full flex items-center space-x-1">
                    <TrendingDown size={12} />
                    <span>BEST VALUE</span>
                  </div>
                )}
                <div className="text-center">
                  <div className="text-gray-600 font-medium mb-2">Vinyl Printing</div>
                  <div className="text-4xl font-bold text-black mb-2">
                    €{vinylTotal.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600">
                    €{priceComparison.vinyl.perUnit.toFixed(2)} per print
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Clean one-color graphics
                  </div>
                </div>
              </motion.div>

              {/* DTF Price */}
              <motion.div
                animate={cheaperOption === "dtf" ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.5 }}
                className={`relative p-6 rounded-2xl border-2 ${
                  cheaperOption === "dtf"
                    ? "border-vibrant-green bg-green-50"
                    : "border-black bg-white"
                }`}
              >
                {cheaperOption === "dtf" && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-vibrant-green text-white text-xs font-bold rounded-full flex items-center space-x-1">
                    <TrendingDown size={12} />
                    <span>BEST VALUE</span>
                  </div>
                )}
                <div className="text-center">
                  <div className="text-gray-600 font-medium mb-2">DTF Printing</div>
                  <div className="text-4xl font-bold text-black mb-2">
                    €{dtfTotal.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600">
                    €{priceComparison.dtf.perUnit.toFixed(2)} per print
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Full-color, even photos
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Savings Badge */}
            {parseFloat(savings) > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-vibrant-green text-white rounded-2xl p-6 text-center mb-8"
              >
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Zap size={24} />
                  <span className="text-lg font-bold">You save €{savings}</span>
                </div>
                <div className="text-sm opacity-90">
                  by choosing {cheaperOption === "vinyl" ? "Vinyl" : "DTF"} printing for this project
                </div>
              </motion.div>
            )}

            {/* Get Full Price List */}
            <div className="bg-gray-50 border-2 border-black rounded-2xl p-6">
              {!showEmailForm ? (
                <div className="text-center">
                  <h4 className="font-bold text-black mb-3">Want to see all pricing options?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Get our complete price list with all sizes and volume discounts
                  </p>
                  <button
                    onClick={() => setShowEmailForm(true)}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all font-medium"
                  >
                    <Download size={20} />
                    <span>Get Full Price List</span>
                  </button>
                </div>
              ) : (
                <div>
                  {!emailSubmitted ? (
                    <form onSubmit={handleDownloadPriceList} className="space-y-4">
                      <div>
                        <h4 className="font-bold text-black mb-2">Enter your email to download</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          We'll send you the complete price list right away
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1 relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-full focus:border-black focus:outline-none"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin">⏳</span>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Download size={20} />
                              <span>Download</span>
                            </>
                          )}
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowEmailForm(false)}
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        ← Back
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-4">
                      <div className="text-4xl mb-3">✅</div>
                      <h4 className="font-bold text-black mb-2">Price list downloaded!</h4>
                      <p className="text-sm text-gray-600">
                        Check your downloads folder for the complete price list
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#configurator"
                className="flex-1 text-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                Start Your Design
              </a>
              <a
                href="#contact"
                className="flex-1 text-center px-8 py-4 bg-white text-black border-2 border-black rounded-full hover:bg-gray-100 transition-all font-medium"
              >
                Request Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
