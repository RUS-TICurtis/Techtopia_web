import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";
import { CORE_EMAIL, CORE_PHONE, CORE_LOCATION, BRAND_NAME } from "../types";

export default function Terms() {
  return (
    <div className="w-full">
      {/* 1. BREADCRUMB HEADER */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(55,114,255,0.15),transparent)] pointer-events-none z-0" />
        <img 
          src="/assets/images/shapes/wave-line-shadow.png" 
          alt="Wave Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-1 text-center md:text-left">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Legal Commitments</span>
          <h1 className="text-4xl font-extrabold tracking-tight">Terms & Conditions</h1>
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-slate-400 mt-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&rsaquo;</span>
            <span className="text-slate-200">Terms & Conditions</span>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL TERMS BODY LAYOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-left">
          {/* Main Info Callout */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-4 mb-12">
            <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold">
              These Terms and Conditions outline the rules and regulations for the use of our website, products, and services. By accessing or using our website ("Site"), you agree to comply with these terms. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </div>

          {/* Sub-sections grid */}
          <div className="space-y-10 prose max-w-none text-slate-600 text-sm leading-relaxed">
            
            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-3">1. Definitions</h3>
              <p>
                <strong>Company</strong>, "we," "us," or "our" refers to <strong>{BRAND_NAME}</strong>.
                <br />
                <strong>User</strong>, "you," or "your" refers to any person or entity accessing our Site or services.
                <br />
                <strong>Services</strong> refers to all technological, layout, software, creative, support, or branding offerings compiled by our Ghanaian agency.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-3">2. Use of the Website & Services</h3>
              <div className="space-y-4">
                <p>
                  <strong>2.1 Eligibility:</strong> To use our services, you must be at least 18 years old or have parental/guardian consent if you are a minor.
                </p>
                <p>
                  <strong>2.2 Acceptable Use:</strong> You agree not to:
                  <ul className="list-disc pl-5 space-y-1.5 mt-2">
                    <li>Use our Site for illegal, fraudulent, or unauthorized purposes.</li>
                    <li>Attempt to hack, disrupt, or gain unauthorized access to our core systems.</li>
                    <li>Misuse our intellectual property, databases credentials, or layouts.</li>
                  </ul>
                </p>
                <p>
                  <strong>2.3 Account Registration:</strong> Certain services may require secure client portal registration. You are responsible for maintaining the confidentiality of your account credentials and passwords.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-3">3. Intellectual Property</h3>
              <p>
                All content on this Site, including logos, designs, text, graphics, and software, is owned by <strong>{BRAND_NAME}</strong> and protected under intellectual property laws. Unauthorized use, reproduction, or distribution without prior agreement is strictly prohibited.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-3">4. Payments & Refund Policies</h3>
              <div className="space-y-4">
                <p>
                  <strong>4.1 Pricing:</strong> All prices for our Services will be clearly communicated in our custom proposal before engagement. Prices may be subject to change.
                </p>
                <p>
                  <strong>4.2 Payment Terms:</strong> Payments must be made as per the agreed contract terms and milestones outlined in the signed scoping documentation.
                </p>
                <p>
                  <strong>4.3 Refunds:</strong> Refunds are granted only under specific conditions, such as failure to deliver agreed-upon services. Custom software systems, branding assets, and digital products are <strong>non-refundable</strong> once work has commenced.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-3">5. Limitation of Liability</h3>
              <p>
                <strong>{BRAND_NAME}</strong> is not liable for:
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li>Any direct, indirect, or incidental damages arising from the use of our services.</li>
                  <li>Loss of data, business, or revenue resulting from website downtime or unexpected technical failures.</li>
                  <li>Unauthorized access to your account due to negligence in maintaining secure credentials.</li>
                </ul>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-3">6. Third-Party Links & Services</h3>
              <p>
                Our Site may contain links to third-party web pages. We do not control or endorse their content, and we are not responsible for any transactions, data leaks, or interactions with third-party services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-3">7. Termination of Services</h3>
              <p>
                We reserve the right to terminate or suspend access to our Site or services at any time, without prior notice, if we determine a violation of these terms has occurred.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-3">8. Privacy Policy</h3>
              <p>
                Your use of our Site is also governed by our <strong>Privacy Policy</strong>, which outlines how we collect, use, and protect your data. Under no circumstances do we sell, rent, or lease your personal information to third parties.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-3">9. Changes to Terms</h3>
              <p>
                We may update these Terms and Conditions at any time. Continued use of our Site or services after changes indicates your acceptance of the revised legal terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-3">10. Governing Law & Dispute Resolution</h3>
              <p>
                These terms are governed by the laws of the <strong>Republic of Ghana</strong>. Any disputes arising from this legal framework shall be resolved through arbitration or legal proceedings in Ghana first.
              </p>
            </div>

            {/* Contact Address Footer */}
            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-lg font-bold text-neutral-dark mb-4">11. Contact Information</h3>
              <p className="text-xs leading-relaxed text-slate-500 mb-6">
                If you have any questions or concerns about these Terms and Conditions, please contact our legal scoping team at:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-semibold text-slate-700">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`mailto:${CORE_EMAIL}`} className="hover:underline">{CORE_EMAIL}</a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{CORE_LOCATION}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`tel:${CORE_PHONE.replace(/\s+/g, "")}`} className="hover:underline">{CORE_PHONE}</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
