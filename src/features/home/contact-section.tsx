"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Phone, MapPin, MessageSquare, CheckCircle } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { PrivacyConsentCheckbox } from "@/components/privacy-consent-checkbox";
import { MarketingConsentCheckbox } from "@/components/marketing-consent-checkbox";

interface FormData {
  name: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
  privacyConsent: boolean;
  marketingConsent: boolean;
}

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
    privacyConsent: false,
    marketingConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPrivacyError, setShowPrivacyError] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate privacy consent
    if (!formData.privacyConsent) {
      setShowPrivacyError(true);
      return;
    }
    
    setShowPrivacyError(false);
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      // Send to API endpoint
      console.log("Submitting form data:", formData);
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("API response:", data);

      if (!response.ok) {
        // Show validation errors if available
        if (data.errors) {
          console.error("Validation errors:", data.errors);
          const errorMessages = data.errors.map((err: any) => 
            `${err.path.join('.')}: ${err.message}`
          ).join(', ');
          throw new Error(errorMessages || data.message || "Validation failed");
        }
        throw new Error(data.message || "Failed to submit form");
      }

      // Success
      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          quantity: "",
          message: "",
          privacyConsent: false,
          marketingConsent: false,
        });
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to learn more about your printing services.");
    window.open(`${SOCIAL_LINKS.whatsapp}?text=${message}`, '_blank');
  };

  const handleTelegramClick = () => {
    window.open(SOCIAL_LINKS.telegram, '_blank');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-glass-100 to-glass-50 relative overflow-hidden"
    >
      {/* Background Glass Orbs */}
      <div className="absolute top-0 left-20 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-liquid"></div>
      <div className="absolute bottom-0 right-20 w-80 h-80 bg-glass-200/30 rounded-full blur-3xl animate-liquid" style={{animationDelay: '2s'}}></div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-glass-700 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Fill&nbsp;out&nbsp;the&nbsp;form&nbsp;below and we&apos;ll get&nbsp;back&nbsp;to&nbsp;you within&nbsp;24&nbsp;hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-3xl shadow-2xl p-8 border border-white/30">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Send Us a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-500" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-charcoal mb-2">Thank You!</h4>
                  <p className="text-gray-600 mb-2">
                    We&apos;ve received your message and will contact you soon.
                  </p>
                  <p className="text-sm text-gray-500">
                    Thank you for reaching out to us!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Personal Info */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="+351922280992"
                      />
                    </div>
                  </div>

                  {/* Step 2: Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Type *
                      </label>
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select product</option>
                        <option value="tshirt">T-Shirt</option>
                        <option value="hoodie">Hoodie</option>
                        <option value="tote">Tote Bag</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity *
                      </label>
                      <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select quantity</option>
                        <option value="1-20">1-20 pieces</option>
                        <option value="20-50">20-50 pieces</option>
                        <option value="50-100">50-100 pieces</option>
                        <option value="100+">100+ pieces</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 3: Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project, design requirements, timeline, etc."
                    />
                  </div>

                  {/* Privacy Consent */}
                  <PrivacyConsentCheckbox
                    checked={formData.privacyConsent}
                    onChange={(checked) => {
                      setFormData({ ...formData, privacyConsent: checked });
                      if (checked) setShowPrivacyError(false);
                    }}
                    error={showPrivacyError}
                    required={true}
                  />

                  {/* Marketing Consent */}
                  <MarketingConsentCheckbox
                    checked={formData.marketingConsent}
                    onChange={(checked) => setFormData({ ...formData, marketingConsent: checked })}
                  />

                  {/* Error Message */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-xl"
                    >
                      <p className="text-sm text-red-600">{submitError}</p>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-charcoal text-white rounded-full hover:bg-charcoal-light transition-all duration-300 font-medium shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Quick Contact */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="relative glass-card rounded-3xl p-8 text-charcoal overflow-hidden shadow-2xl border border-white/30">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    d="M0,50 Q25,30 50,50 T100,50"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-charcoal">Contact Information</h3>

                <div className="space-y-4">
                  {/* Email */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="p-6 glass-card rounded-2xl border border-white/20"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium mb-1 text-glass-700">Email</div>
                        <a href={`mailto:${SITE_CONFIG.email}`} className="text-charcoal hover:text-charcoal-light transition-all duration-300 break-all">
                          {SITE_CONFIG.email}
                        </a>
                      </div>
                    </div>
                    {/* Animated line */}
                    <motion.div
                      className="mt-4 h-0.5 bg-glass-200 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1, delay: 0.3 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-charcoal to-charcoal-light"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Phone / WhatsApp / Telegram */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="p-6 glass-card rounded-2xl border border-white/20"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium mb-1 text-glass-700">Phone / WhatsApp / Telegram</div>
                        <a href={`tel:${SITE_CONFIG.phone}`} className="text-charcoal hover:text-charcoal-light transition-all duration-300">
                          {SITE_CONFIG.phone}
                        </a>
                      </div>
                    </div>
                    {/* Animated line */}
                    <motion.div
                      className="mt-4 h-0.5 bg-glass-200 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1, delay: 0.4 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-charcoal to-charcoal-light"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="p-6 glass-card rounded-2xl border border-white/20"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium mb-1 text-glass-700">Location</div>
                        <p className="text-charcoal">{SITE_CONFIG.location}</p>
                      </div>
                    </div>
                    {/* Animated line */}
                    <motion.div
                      className="mt-4 h-0.5 bg-glass-200 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-charcoal to-charcoal-light"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="glass-card rounded-3xl shadow-xl p-8 border border-white/30">
              <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center space-x-2">
                <MessageSquare size={24} className="text-charcoal" />
                <span>Quick Contact</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Prefer instant messaging? Reach&nbsp;out&nbsp;to&nbsp;us&nbsp;directly:
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full px-6 py-4 bg-charcoal text-white rounded-xl hover:bg-charcoal-light transition-all duration-300 font-medium flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Message on WhatsApp</span>
                </button>

                <button
                  onClick={handleTelegramClick}
                  className="w-full px-6 py-4 bg-charcoal text-white rounded-xl hover:bg-charcoal-light transition-all duration-300 font-medium flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <span>Message on Telegram</span>
                </button>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-card rounded-3xl p-8 border border-white/30">
              <h3 className="text-xl font-bold text-charcoal mb-4">Business Hours</h3>
              <div className="space-y-2 text-glass-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
