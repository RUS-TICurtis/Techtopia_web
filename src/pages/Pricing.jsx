import React from "react";
import { Link } from "react-router-dom";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
import { PRICING_PLANS, BRAND_NAME } from "../types";

export default function Pricing() {
  return (
    <div className="w-full bg-neutral-light">
      {/* 1. BREADCRUMB HEADER */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(55,114,255,0.15),transparent)] pointer-events-none z-0" />
        <img 
          src="/assets/images/shapes/wave-line-shadow.png" 
          alt="Wave Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-1 text-center md:text-left">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Our Plans</span>
          <h1 className="text-4xl font-extrabold tracking-tight">Pricing & Packages</h1>
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-slate-400 mt-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&rsaquo;</span>
            <span className="text-slate-200">Pricing</span>
          </div>
        </div>
      </section>

      {/* 2. PRICING CARDS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">Enterprise Setup</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-dark mb-4">
              Affordable Pricing Plans For Your Business
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We align our services to fit your budget. Choose a package level below to trigger a scoping call, and we will tailor the exact quotation to your milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => {
              const isPopular = plan.name === "Growth Package";
              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    isPopular
                      ? "border-primary bg-primary/5 shadow-md shadow-primary/5"
                      : "border-slate-100 bg-white"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute top-4 right-6 bg-gradient-to-r from-primary to-secondary text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  )}

                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider mb-1">
                      {plan.subtitle}
                    </span>
                    <h3 className="text-xl font-extrabold text-neutral-dark mb-4">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    <div className="border-t border-slate-100 pt-6 mb-6">
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-3">Includes features:</span>
                      <ul className="space-y-3 text-xs text-slate-600">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-start space-x-2">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-[9px] flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to={`/contact?package=${plan.name.replace(/\s+/g, "").toLowerCase()}`}
                    className={`block w-full text-center text-sm font-semibold py-3.5 px-6 rounded-xl transition-all cursor-pointer ${
                      isPopular
                        ? "bg-primary text-white shadow shadow-primary/20 hover:bg-primary/95"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    Select Plan & Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CUSTOM ENTERPRISE CTA */}
      <section className="bg-neutral-dark text-white py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-1 text-center md:text-left">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Custom Corporate Scope</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              If your organization requires unique databases, multi-tenant cloud sync endpoints, or 3rd-party banking API integrations, consult directly with our technical director.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex items-center space-x-2 bg-primary hover:bg-primary/95 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md flex-shrink-0"
          >
            <span>Consult lead architect</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
