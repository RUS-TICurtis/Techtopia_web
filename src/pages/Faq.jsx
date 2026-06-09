import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle, PhoneCall, Mail } from "lucide-react";
import { FAQS, CORE_PHONE, CORE_EMAIL, BRAND_NAME } from "../types";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-neutral-light">
      {/* 1. BREADCRUMB HEADER */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(55,114,255,0.15),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-1 text-center md:text-left">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Support & FAQ</span>
          <h1 className="text-4xl font-extrabold tracking-tight">Frequently Asked Questions</h1>
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-slate-400 mt-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&rsaquo;</span>
            <span className="text-slate-200">FAQ</span>
          </div>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FAQ Accordion Column (col-span-8) */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-2">Common Inquiries</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-dark mb-8 leading-tight">
              Keep Your Business Safe & Ensure High Availability
            </h2>

            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-all duration-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleIndex(index)}
                      className="w-full text-left p-6 flex justify-between items-center space-x-4 cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center space-x-3">
                        <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-bold text-neutral-dark text-sm md:text-base">{faq.question}</span>
                      </div>
                      <span className="w-8 h-8 rounded-lg bg-white border border-slate-200/50 flex items-center justify-center text-slate-600 flex-shrink-0">
                        {isOpen ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                          <div className="p-6 pt-0 border-t border-slate-100 text-xs md:text-sm text-slate-600 leading-relaxed pl-14">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Help Desk Sidebar Column (col-span-4) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 h-fit">
            <div className="bg-gradient-to-tr from-secondary to-primary/95 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8" />
              <HelpCircle className="w-10 h-10 text-white/50 mb-4" />
              <h4 className="font-extrabold text-sm uppercase tracking-wider mb-2">Still Have Questions?</h4>
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                Our Accra team is ready to consult on custom software builds, hosting architectures, and project budgets.
              </p>
              
              <div className="space-y-3">
                <a
                  href={`tel:${CORE_PHONE.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center space-x-2 bg-white text-primary font-bold text-xs uppercase tracking-widest py-3 rounded-xl transition-all shadow hover:shadow-lg"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call {CORE_PHONE}</span>
                </a>
                <a
                  href={`mailto:${CORE_EMAIL}`}
                  className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-xl transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Support</span>
                </a>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
