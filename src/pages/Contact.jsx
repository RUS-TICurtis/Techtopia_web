import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";
import { CORE_PHONE, CORE_EMAIL, CORE_HOURS, CORE_LOCATION, BRAND_NAME } from "../types";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preSelectedPackage = searchParams.get("package");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Prefill the subject/message if navigated from pricing card
  useEffect(() => {
    if (preSelectedPackage) {
      const formattedPackageName =
        preSelectedPackage.charAt(0).toUpperCase() + preSelectedPackage.slice(1);
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding ${formattedPackageName}`,
        message: `Hello ${BRAND_NAME} Team, I would like to get a customized quote and consultation regarding your ${formattedPackageName} configuration to support our business transformation.`
      }));
    }
  }, [preSelectedPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated API timeout
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Submitting contact form directly via callback hook:", formData);
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="w-full">
      {/* 1. BREADCRUMB HEADER */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(55,114,255,0.15),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-1 text-center md:text-left">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Connect with us</span>
          <h1 className="text-4xl font-extrabold tracking-tight">Contact Us</h1>
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-slate-400 mt-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&rsaquo;</span>
            <span className="text-slate-200">Contact Us</span>
          </div>
        </div>
      </section>

      {/* 2. SPLIT CONTACT SYSTEM GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: CONTACT CARDS & INFRASTRUCTURE MAP (col-span-12 lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block">Ghana Head Office</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-dark mb-4 leading-tight">
              Get in Touch Directly With Techtopia
            </h2>

            {/* Tactile Cards */}
            <div className="space-y-4">
              {/* Call Card */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Call Us</h4>
                  <a href={`tel:${CORE_PHONE.replace(/\s+/g, "")}`} className="text-sm font-bold text-neutral-dark hover:text-primary transition-colors block">
                    {CORE_PHONE}
                  </a>
                  <span className="text-[10px] text-slate-500 font-semibold">{CORE_HOURS}</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email Address</h4>
                  <a href={`mailto:${CORE_EMAIL}`} className="text-sm font-bold text-neutral-dark hover:text-primary transition-colors block">
                    {CORE_EMAIL}
                  </a>
                  <span className="text-[10px] text-slate-500 font-semibold">24-hour scoping requests</span>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Location</h4>
                  <span className="text-sm font-bold text-neutral-dark block">{CORE_LOCATION}</span>
                  <span className="text-[10px] text-slate-500 font-semibold">Accra Metropolitan Area, Ghana</span>
                </div>
              </div>
            </div>

            {/* Geolocation Embed Iframe mapped directly from Accra */}
            <div className="w-full rounded-2xl overflow-hidden border border-slate-150 h-64 shadow-sm relative group bg-slate-100">
              <iframe
                title="Accra Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.72273040644!2d-0.2621306941005995!3d5.591373806788055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1743117852929!5m2!1sen!2sgh"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE INPUT FORM (col-span-12 lg:col-span-7) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* abstract sparkle graphics */}
            <div className="absolute top-6 right-6 text-primary/10">
              <Sparkles className="w-16 h-16" />
            </div>

            <div className="relative z-1">
              <h3 className="text-2xl font-bold tracking-tight text-neutral-dark mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                We'd love to hear from you! Whether you have a question about our services, need robust support, or want to collaborate on a dynamic software venture, feel free to reach out.
              </p>

              {/* Form submit alert feedback on success */}
              {submitSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 text-slate-800 p-6 rounded-2xl flex items-start space-x-4 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-sm text-neutral-dark mb-1">Message Sent Successfully!</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thank you for contacting Techtopia. Our Accra corporate scoping team will review your parameters and get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitSuccess(false)}
                      className="text-xs font-bold text-primary mt-3 hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-slate-700 w-full focus:outline-none"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-slate-700 w-full focus:outline-none"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject select / preset */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Subject / Scope Requirement</label>
                    <select
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-slate-600 w-full focus:outline-none cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      <option value="Inquiry regarding Starter Package">Starter Enterprise Package Setup</option>
                      <option value="Inquiry regarding Growth Package">Growth Package Consultation</option>
                      <option value="Inquiry regarding Premium Package">Premium Dedicated Infrastructure</option>
                      <option value="Direct Custom Scoping Request">Direct Custom System Scoping</option>
                      <option value="Help Desk / Operational Support">Help Desk / Remote Assistance</option>
                    </select>
                  </div>

                  {/* Message body */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Write Message *</label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-slate-700 w-full focus:outline-none min-h-[160px]"
                      placeholder="Tell us about your organization's challenges, timeline constraints, or specific software objectives..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/95 text-white font-semibold py-4 px-8 rounded-xl w-full transition-all shadow-md flex items-center justify-content-center space-x-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>Simulating API Submission...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
