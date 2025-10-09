import { Metadata } from "next";
import { FileText, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, Scale, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Blooma",
  description: "Terms and Conditions for using Blooma's custom t-shirt manufacturing services",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="text-primary-500" size={40} />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Terms and Conditions
              </h1>
            </div>
            <p className="text-gray-600">
              Last Updated: <time dateTime="2025-10-09">October 9, 2025</time>
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              These Terms and Conditions ("Terms") govern your use of our website and the purchase of custom t-shirt manufacturing services from Sofia Kovalchuk.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Information</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <p className="text-gray-900"><strong>Business Name:</strong> Sofia Kovalchuk</p>
                <p className="text-gray-900"><strong>Address:</strong> Praceta Dionísio Matias 9 R/C D, 2770-051 Paço de Arcos, Oeiras, Portugal</p>
                <p className="text-gray-900"><strong>Email:</strong> <a href="mailto:sonmima@me.com" className="text-primary-500 hover:text-primary-600">sonmima@me.com</a></p>
                <p className="text-gray-900"><strong>Phone:</strong> <a href="tel:+351922280992" className="text-primary-500 hover:text-primary-600">+351 922 280 992</a></p>
                <p className="text-gray-900"><strong>NIF:</strong> 312292694</p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-700">
                We offer custom t-shirt manufacturing and printing services. All orders are subject to acceptance and availability.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <ShoppingCart className="text-primary-500" size={28} />
                <span>3. Orders and Acceptance</span>
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Orders placed through our website constitute an offer to purchase</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>We reserve the right to accept or decline any order</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Order confirmation will be sent via email once accepted</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Contract is formed when order confirmation is sent</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pricing</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>All prices are displayed in Euros (EUR) unless otherwise stated</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Prices include applicable VAT</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Shipping costs are additional and calculated at checkout</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>We reserve the right to change prices without notice, but price changes will not affect confirmed orders</span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <CreditCard className="text-primary-500" size={28} />
                <span>5. Payment</span>
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Payment is required before production begins</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Accepted payment methods: Bank transfer, Credit/Debit cards, PayPal</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Payment is processed securely through trusted payment processors</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>All transactions are encrypted and secure</span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Custom Orders</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Custom designs require approval before production</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Proof/mockup will be provided for your approval</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Production begins only after design approval</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Changes after approval may incur additional charges</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Truck className="text-primary-500" size={28} />
                <span>7. Production and Delivery Time</span>
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Standard production time: 5-10 business days</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Delivery time depends on shipping method selected</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Estimated delivery times are approximate and not guaranteed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Delays due to force majeure are beyond our control</span>
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Shipping</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Shipping costs calculated based on destination and order size</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Available shipping methods: Standard, Express, International</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Risk of loss passes to customer upon delivery to carrier</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>International orders may be subject to customs duties (customer responsibility)</span>
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <RotateCcw className="text-primary-500" size={28} />
                <span>9. Right of Withdrawal (Cancellation Policy)</span>
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-4">
                <p className="text-gray-700 mb-3">
                  Under EU Consumer Rights Directive, you have the right to withdraw from the contract within 14 days without giving any reason.
                </p>
                <p className="text-gray-700 font-semibold">
                  However, custom-made products are excluded from this right according to Article 16(c) of the Directive.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">For non-customized products:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>Withdrawal period: 14 days from delivery date</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>Return shipping costs borne by customer</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>Products must be unused and in original condition</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>Refund processed within 14 days of receiving returned items</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Returns and Refunds</h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Custom Products:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Custom-made t-shirts cannot be returned unless defective</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Manufacturing defects must be reported within 7 days of delivery</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Proof of defect required (photos)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Standard Products:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Returns accepted within 14 days of delivery</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Items must be unworn, unwashed, and in original packaging</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Refund issued after inspection</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Refund Process:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Refunds processed to original payment method</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Processing time: 5-10 business days after approval</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Quality and Defects</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>We guarantee quality of materials and workmanship</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Defective products will be replaced or refunded</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Color variations may occur due to screen display differences</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Minor print variations are within acceptable tolerance</span>
                </li>
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Shield className="text-primary-500" size={28} />
                <span>12. Intellectual Property</span>
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Customers retain ownership of their submitted designs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>By submitting designs, you grant us license to reproduce for order fulfillment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>You warrant that you have rights to submitted designs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>We are not liable for copyright infringement by customer-submitted designs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Customer indemnifies us against third-party claims related to designs</span>
                </li>
              </ul>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <AlertCircle className="text-primary-500" size={28} />
                <span>13. Limitation of Liability</span>
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 mb-3">To the extent permitted by law:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>We are liable only for damages caused by intentional acts or gross negligence</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Liability for slight negligence is excluded</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>Maximum liability limited to order value</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>We are not liable for indirect or consequential damages</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Data Protection</h2>
              <p className="text-gray-700">
                Your personal data is processed according to our Privacy Policy. Please refer to our{" "}
                <Link href="/privacy-policy" className="text-primary-500 hover:text-primary-600 font-medium underline">
                  Privacy Policy
                </Link>{" "}
                for detailed information.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Scale className="text-primary-500" size={28} />
                <span>15. Applicable Law and Jurisdiction</span>
              </h2>
              <p className="text-gray-700">
                These Terms are governed by Portuguese law. Any disputes shall be subject to the jurisdiction of Portuguese courts.
              </p>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Dispute Resolution</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <p className="text-gray-700 mb-3">
                  <strong>Online Dispute Resolution (ODR):</strong>
                </p>
                <p className="text-gray-700 mb-3">
                  EU platform:{" "}
                  <a 
                    href="https://ec.europa.eu/consumers/odr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="text-gray-700">
                  We are committed to resolving disputes amicably and are willing to participate in alternative dispute resolution.
                </p>
              </div>
            </section>

            {/* Section 17 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with updated "Last Updated" date. Continued use of our services after changes constitutes acceptance.
              </p>
            </section>

            {/* Section 18 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms is found invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            {/* Section 19 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms and Conditions:
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 space-y-2">
                <p className="text-gray-900 font-semibold">Sofia Kovalchuk</p>
                <p className="text-gray-700">Email: <a href="mailto:sonmima@me.com" className="text-primary-500 hover:text-primary-600 font-medium">sonmima@me.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:+351922280992" className="text-primary-500 hover:text-primary-600 font-medium">+351 922 280 992</a></p>
                <p className="text-gray-700">Address: Praceta Dionísio Matias 9 R/C D, 2770-051 Paço de Arcos, Oeiras, Portugal</p>
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
