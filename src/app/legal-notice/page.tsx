import { Metadata } from "next";
import { Scale, Mail, Phone, MapPin } from "lucide-react";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Legal Notice | Blooma",
  description: "Legal information about Blooma - Custom T-shirt Manufacturing and Printing Services",
};

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Legal Notice
            </h1>
            <p className="text-gray-600">
              Last Updated: <time dateTime="2025-10-09">October 9, 2025</time>
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-gray-700 leading-relaxed">
                In accordance with the legal requirements, the following information is provided about the operator of this website:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Owner</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <p className="text-gray-900 font-semibold text-lg">Sofia Kovalchuk</p>
                <p className="text-gray-600">Sole Proprietor (Trabalhador Independente)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Registered Address</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-900">Praceta Dionísio Matias 9 R/C D</p>
                    <p className="text-gray-900">2770-051 Paço de Arcos</p>
                    <p className="text-gray-900">Oeiras, Portugal</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary-500 flex-shrink-0" size={20} />
                  <div>
                    <span className="text-gray-600 text-sm">Telephone:</span>
                    <a href="tel:+351922280992" className="text-gray-900 font-medium ml-2 hover:text-primary-500 transition-colors">
                      +351 922 280 992
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary-500 flex-shrink-0" size={20} />
                  <div>
                    <span className="text-gray-600 text-sm">Email:</span>
                    <a href="mailto:sonmima@me.com" className="text-gray-900 font-medium ml-2 hover:text-primary-500 transition-colors">
                      sonmima@me.com
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tax Identification Number (NIF)</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-900 font-mono text-lg">312292694</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Postal Code</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-900 font-mono">2770-051</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsible for Content</h2>
              <p className="text-gray-700">Sofia Kovalchuk</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Activity</h2>
              <p className="text-gray-700">Custom T-shirt Manufacturing and Printing Services</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                The European Commission provides a platform for online dispute resolution (ODR) available at:
              </p>
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 font-medium underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <p className="text-gray-700 mt-4">
                We are not obliged to participate in dispute resolution proceedings before a consumer arbitration board, but we are willing to do so.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection Officer</h2>
              <p className="text-gray-700">
                For questions regarding the processing of your personal data, please contact us using the contact details provided above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Copyright Notice</h2>
              <p className="text-gray-700">
                All content on this website, including text, images, and graphics, is protected by copyright law. Unauthorized use or reproduction is prohibited.
              </p>
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
