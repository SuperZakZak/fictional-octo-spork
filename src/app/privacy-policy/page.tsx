import { Metadata } from "next";
import { Shield, Mail, Phone, Lock, Eye, FileText, UserCheck, Clock, Globe, Baby, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Blooma",
  description: "Learn how Blooma collects, uses, and protects your personal data in compliance with GDPR",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="text-primary-500" size={40} />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Privacy Policy
              </h1>
            </div>
            <p className="text-gray-600">
              Last Updated: <time dateTime="2025-10-09">October 9, 2025</time>
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Sofia Kovalchuk ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website and use our custom t-shirt manufacturing services.
            </p>

            {/* Table of Contents */}
            <nav className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
              <ol className="space-y-2 text-gray-700">
                <li><a href="#data-controller" className="hover:text-primary-500 transition-colors">1. Data Controller</a></li>
                <li><a href="#data-collection" className="hover:text-primary-500 transition-colors">2. Personal Data We Collect</a></li>
                <li><a href="#legal-basis" className="hover:text-primary-500 transition-colors">3. Legal Basis for Processing</a></li>
                <li><a href="#data-usage" className="hover:text-primary-500 transition-colors">4. How We Use Your Data</a></li>
                <li><a href="#data-sharing" className="hover:text-primary-500 transition-colors">5. Data Sharing and Disclosure</a></li>
                <li><a href="#data-retention" className="hover:text-primary-500 transition-colors">6. Data Retention</a></li>
                <li><a href="#your-rights" className="hover:text-primary-500 transition-colors">7. Your Rights Under GDPR</a></li>
                <li><a href="#data-security" className="hover:text-primary-500 transition-colors">8. Data Security</a></li>
                <li><a href="#cookies" className="hover:text-primary-500 transition-colors">9. Cookies and Tracking Technologies</a></li>
                <li><a href="#international-transfers" className="hover:text-primary-500 transition-colors">10. International Data Transfers</a></li>
                <li><a href="#children-privacy" className="hover:text-primary-500 transition-colors">11. Children's Privacy</a></li>
                <li><a href="#policy-changes" className="hover:text-primary-500 transition-colors">12. Changes to This Privacy Policy</a></li>
                <li><a href="#contact-us" className="hover:text-primary-500 transition-colors">13. Contact Us</a></li>
                <li><a href="#complaint" className="hover:text-primary-500 transition-colors">14. Right to Lodge a Complaint</a></li>
              </ol>
            </nav>

            {/* Section 1 */}
            <section id="data-controller">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <UserCheck className="text-primary-500" size={28} />
                <span>1. Data Controller</span>
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <p className="text-gray-900 font-semibold">Sofia Kovalchuk</p>
                <p className="text-gray-700">Praceta Dionísio Matias 9 R/C D</p>
                <p className="text-gray-700">2770-051 Paço de Arcos, Oeiras, Portugal</p>
                <p className="text-gray-700">Email: <a href="mailto:sonmima@me.com" className="text-primary-500 hover:text-primary-600">sonmima@me.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:+351922280992" className="text-primary-500 hover:text-primary-600">+351 922 280 992</a></p>
                <p className="text-gray-700">NIF: 312292694</p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="data-collection">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <FileText className="text-primary-500" size={28} />
                <span>2. Personal Data We Collect</span>
              </h2>
              <p className="text-gray-700 mb-4">We collect the following personal information that you provide to us:</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 font-bold">•</span>
                  <div>
                    <strong className="text-gray-900">Name</strong> - to identify you and personalize our service
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 font-bold">•</span>
                  <div>
                    <strong className="text-gray-900">Email address</strong> - to communicate with you about your order and send confirmations
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 font-bold">•</span>
                  <div>
                    <strong className="text-gray-900">Phone number</strong> - to contact you regarding your order if necessary
                  </div>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                We only collect data that is necessary for processing your order and providing our services.
              </p>
            </section>

            {/* Section 3 */}
            <section id="legal-basis">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <FileText className="text-primary-500" size={28} />
                <span>3. Legal Basis for Processing</span>
              </h2>
              <p className="text-gray-700 mb-4">We process your personal data based on the following legal grounds under GDPR:</p>
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-gray-900"><strong>Contract performance</strong> (Article 6(1)(b) GDPR) - to fulfill your order for custom t-shirt manufacturing</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-gray-900"><strong>Consent</strong> (Article 6(1)(a) GDPR) - for marketing communications (only if you opt-in)</p>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <p className="text-gray-900"><strong>Legitimate interests</strong> (Article 6(1)(f) GDPR) - to improve our services and respond to inquiries</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="data-usage">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Eye className="text-primary-500" size={28} />
                <span>4. How We Use Your Data</span>
              </h2>
              <p className="text-gray-700 mb-4">Your personal information is used for the following purposes:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Processing and fulfilling your custom t-shirt orders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Communicating with you about your order status</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Responding to your inquiries and providing customer support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Sending order confirmations and shipping updates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Improving our products and services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Sending marketing communications (only with your explicit consent)</span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="data-sharing">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Globe className="text-primary-500" size={28} />
                <span>5. Data Sharing and Disclosure</span>
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, rent, or trade your personal information to third parties. We may share your data only in the following circumstances:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Service providers</h3>
                  <p className="text-gray-700">Shipping companies and payment processors who help us fulfill your orders (they are bound by confidentiality agreements)</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Legal obligations</h3>
                  <p className="text-gray-700">When required by law or to protect our legal rights</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Business transfers</h3>
                  <p className="text-gray-700">In the event of a merger, acquisition, or sale of business assets</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                All third-party service providers are carefully selected and required to comply with GDPR requirements.
              </p>
            </section>

            {/* Section 6 */}
            <section id="data-retention">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Clock className="text-primary-500" size={28} />
                <span>6. Data Retention</span>
              </h2>
              <p className="text-gray-700 mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                  <Clock className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-gray-900">Order data</strong>
                    <p className="text-gray-700">7 years (as required by Portuguese tax and accounting laws)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                  <Clock className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-gray-900">Marketing consent data</strong>
                    <p className="text-gray-700">Until you withdraw your consent</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                  <Clock className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-gray-900">Inquiry data</strong>
                    <p className="text-gray-700">2 years after the last communication</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                After these periods, your data will be securely deleted or anonymized.
              </p>
            </section>

            {/* Section 7 */}
            <section id="your-rights">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Shield className="text-primary-500" size={28} />
                <span>7. Your Rights Under GDPR</span>
              </h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal data:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right of access</h3>
                  <p className="text-gray-700 text-sm">Request a copy of your personal data we hold</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to rectification</h3>
                  <p className="text-gray-700 text-sm">Request correction of inaccurate or incomplete data</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to erasure</h3>
                  <p className="text-gray-700 text-sm">Request deletion of your data ("right to be forgotten")</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to restriction</h3>
                  <p className="text-gray-700 text-sm">Request limitation of processing in certain circumstances</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to data portability</h3>
                  <p className="text-gray-700 text-sm">Receive your data in a structured, machine-readable format</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Right to object</h3>
                  <p className="text-gray-700 text-sm">Object to processing based on legitimate interests</p>
                </div>
              </div>
              <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded mt-4">
                <p className="text-gray-900">
                  <strong>To exercise any of these rights,</strong> please contact us at{" "}
                  <a href="mailto:sonmima@me.com" className="text-primary-500 hover:text-primary-600 font-medium">sonmima@me.com</a> or{" "}
                  <a href="tel:+351922280992" className="text-primary-500 hover:text-primary-600 font-medium">+351 922 280 992</a>.
                  We will respond to your request within 30 days.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="data-security">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Lock className="text-primary-500" size={28} />
                <span>8. Data Security</span>
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">🔒</span>
                  <span>SSL/TLS encryption for data transmission (HTTPS)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">🔒</span>
                  <span>Secure servers and databases</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">🔒</span>
                  <span>Access controls and authentication</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">🔒</span>
                  <span>Regular security assessments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">🔒</span>
                  <span>Confidentiality agreements with employees and partners</span>
                </li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
                <p className="text-gray-700">
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="cookies">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">Our website uses cookies to enhance your browsing experience. We use:</p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Essential cookies</h3>
                  <p className="text-gray-700">Necessary for the website to function (no consent required)</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics cookies</h3>
                  <p className="text-gray-700">To understand how visitors use our website (requires consent)</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Marketing cookies</h3>
                  <p className="text-gray-700">To show relevant advertisements (requires consent)</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                You can manage your cookie preferences through the cookie banner displayed on your first visit. You can also adjust your browser settings to refuse cookies.
              </p>
              <p className="text-gray-700 mt-4">
                For more information, please see our{" "}
                <Link href="/cookie-policy" className="text-primary-500 hover:text-primary-600 font-medium underline">
                  Cookie Policy
                </Link>.
              </p>
            </section>

            {/* Section 10 */}
            <section id="international-transfers">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Globe className="text-primary-500" size={28} />
                <span>10. International Data Transfers</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Your data is primarily stored and processed within the European Economic Area (EEA). If we transfer data outside the EEA, we ensure adequate protection through:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>EU Standard Contractual Clauses</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Adequacy decisions by the European Commission</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Other legally approved mechanisms</span>
                </li>
              </ul>
            </section>

            {/* Section 11 */}
            <section id="children-privacy">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Baby className="text-primary-500" size={28} />
                <span>11. Children's Privacy</span>
              </h2>
              <p className="text-gray-700">
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.
              </p>
            </section>

            {/* Section 12 */}
            <section id="policy-changes">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <AlertCircle className="text-primary-500" size={28} />
                <span>12. Changes to This Privacy Policy</span>
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Posting the updated policy on our website</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Updating the "Last Updated" date at the top of this policy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Sending you an email notification (for significant changes)</span>
                </li>
              </ul>
            </section>

            {/* Section 13 */}
            <section id="contact-us">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Mail className="text-primary-500" size={28} />
                <span>13. Contact Us</span>
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data processing practices, please contact us:
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 space-y-3">
                <p className="text-gray-900 font-semibold text-lg">Sofia Kovalchuk</p>
                <p className="text-gray-700">Email: <a href="mailto:sonmima@me.com" className="text-primary-500 hover:text-primary-600 font-medium">sonmima@me.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:+351922280992" className="text-primary-500 hover:text-primary-600 font-medium">+351 922 280 992</a></p>
                <p className="text-gray-700">Address: Praceta Dionísio Matias 9 R/C D, 2770-051 Paço de Arcos, Oeiras, Portugal</p>
              </div>
            </section>

            {/* Section 14 */}
            <section id="complaint">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <AlertCircle className="text-primary-500" size={28} />
                <span>14. Right to Lodge a Complaint</span>
              </h2>
              <p className="text-gray-700 mb-4">
                If you believe we have not handled your personal data properly, you have the right to lodge a complaint with the Portuguese Data Protection Authority:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <p className="text-gray-900 font-semibold mb-3">Comissão Nacional de Proteção de Dados (CNPD)</p>
                <div className="space-y-2 text-gray-700">
                  <p>Website: <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 font-medium">https://www.cnpd.pt</a></p>
                  <p>Address: Av. D. Carlos I, 134, 1º, 1200-651 Lisboa, Portugal</p>
                  <p>Phone: <a href="tel:+351213928400" className="text-primary-500 hover:text-primary-600 font-medium">+351 213 928 400</a></p>
                  <p>Email: <a href="mailto:geral@cnpd.pt" className="text-primary-500 hover:text-primary-600 font-medium">geral@cnpd.pt</a></p>
                </div>
              </div>
            </section>
          </div>

          {/* Print Button */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center print:hidden">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all font-medium shadow-lg hover:shadow-xl"
            >
              Print This Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
