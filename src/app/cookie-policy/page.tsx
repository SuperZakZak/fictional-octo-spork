import { Metadata } from "next";
import { Cookie, Shield, Settings, ExternalLink } from "lucide-react";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Cookie Policy | Blooma",
  description: "Learn about how Blooma uses cookies and similar tracking technologies",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <Cookie className="text-primary-500" size={40} />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Cookie Policy
              </h1>
            </div>
            <p className="text-gray-600">
              Last Updated: <time dateTime="2025-10-09">October 9, 2025</time>
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              This Cookie Policy explains how Sofia Kovalchuk uses cookies and similar tracking technologies on our website.
            </p>

            {/* What Are Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help the website remember your preferences and improve your browsing experience.
              </p>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>

              {/* Essential Cookies */}
              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <Shield className="text-green-500" size={24} />
                  <span>1. Essential Cookies (Strictly Necessary)</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Session management cookies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Security cookies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Load balancing cookies</span>
                  </li>
                </ul>
                <div className="mt-4 bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Legal basis:</strong> These cookies are necessary for contract performance and do not require consent.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <Settings className="text-blue-500" size={24} />
                  <span>2. Analytics Cookies (Performance)</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting anonymous information.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Google Analytics (if used) - tracks page views, user behavior, and traffic sources</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Session duration tracking</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Error monitoring</span>
                  </li>
                </ul>
                <div className="mt-4 bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Legal basis:</strong> Consent required (opt-in).
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Retention period:</strong> Typically 2 years or as specified by the analytics provider.
                  </p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <ExternalLink className="text-purple-500" size={24} />
                  <span>3. Marketing Cookies (Targeting/Advertising)</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  These cookies are used to show relevant advertisements based on your interests.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Remarketing cookies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Social media pixels (Facebook, Instagram, if used)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Advertising network cookies</span>
                  </li>
                </ul>
                <div className="mt-4 bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Legal basis:</strong> Consent required (opt-in).
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Retention period:</strong> Typically 1-2 years or as specified by the advertising provider.
                  </p>
                </div>
              </div>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies in several ways:
              </p>

              {/* Cookie Banner */}
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Cookie Banner</h3>
                <p className="text-gray-700 mb-3">
                  When you first visit our website, you will see a cookie banner allowing you to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">✓</span>
                    <span>Accept all cookies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">✓</span>
                    <span>Reject non-essential cookies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">✓</span>
                    <span>Customize your preferences</span>
                  </li>
                </ul>
              </div>

              {/* Browser Settings */}
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Browser Settings</h3>
                <p className="text-gray-700 mb-3">
                  You can also manage cookies through your browser settings:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Firefox:</strong> Settings &gt; Privacy & Security &gt; Cookies and Site Data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span><strong>Edge:</strong> Settings &gt; Cookies and site permissions</span>
                  </li>
                </ul>
                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Please note:</strong> Blocking all cookies may affect your experience on our website.
                  </p>
                </div>
              </div>

              {/* Opt-Out Links */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Opt-Out Links</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>
                      <strong>Google Analytics:</strong>{" "}
                      <a 
                        href="https://tools.google.com/dlpage/gaoptout" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 underline"
                      >
                        https://tools.google.com/dlpage/gaoptout
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>
                      <strong>Facebook:</strong>{" "}
                      <a 
                        href="https://www.facebook.com/settings?tab=ads" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 underline"
                      >
                        https://www.facebook.com/settings?tab=ads
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>
                      <strong>Other third-party opt-outs:</strong>{" "}
                      <a 
                        href="https://www.youronlinechoices.eu/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 underline"
                      >
                        https://www.youronlinechoices.eu/
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that set cookies on our website:
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics providers</h3>
                  <p className="text-gray-700">To analyze website traffic and user behavior</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Payment processors</h3>
                  <p className="text-gray-700">To facilitate secure transactions</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Social media platforms</h3>
                  <p className="text-gray-700">To enable social sharing features</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                These third parties have their own privacy policies and cookie policies.
              </p>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Cookie Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time. The "Last Updated" date at the top indicates when changes were last made.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 space-y-2">
                <p className="text-gray-900 font-semibold">Sofia Kovalchuk</p>
                <p className="text-gray-700">Email: <a href="mailto:sonmima@me.com" className="text-primary-500 hover:text-primary-600 font-medium">sonmima@me.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:+351922280992" className="text-primary-500 hover:text-primary-600 font-medium">+351 922 280 992</a></p>
              </div>
            </section>
          </div>

          {/* Print Button */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center print:hidden">
            <PrintButton />
          </div>
        </div>
      </div>
    </div>
  );
}
