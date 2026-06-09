import React from "react";
import { Link } from "react-router-dom";
import { Cpu, ShieldCheck, Sparkles, PhoneCall, Compass, Check } from "lucide-react";
import { SERVICES_CATALOGUE, PRICING_PLANS } from "../types";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const diffs = [
    {
      title: "Tailored Solutions, Not Templates",
      desc: "Every system, web, or app workflow we deliver is bespoke—crafted from the ground up to match your operational logic and corporate workflow."
    },
    {
      title: "Security-First Mindset",
      desc: "We prioritize security-by-design, deploying data-hardening patterns, strict credentials safeguards, and secure API bindings."
    },
    {
      title: "24/7 Support & Maintenance",
      desc: "Our localized support help desks ensure around-the-clock remote IT audits, keeping your mission-critical applications fast and secure."
    },
    {
      title: "ROI-Focused Partnership",
      desc: "We do not just compile code; we collaborate to enhance visitor engagement, simplify manual overhead, and trigger measurable growth."
    }
  ];

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
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Our Capabilities</span>
          <h1 className="text-4xl font-extrabold tracking-tight">Services & Solutions</h1>
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-slate-400 mt-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&rsaquo;</span>
            <span className="text-slate-200">Services</span>
          </div>
        </div>
      </section>

      {/* 2. SERVICES CATALOGUE GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl text-left mb-16">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">Enterprise Suite</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-dark mb-4">
              We Solve Business Problems With Technology
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Explore our core corporate services. From agile software implementation to high-impact marketing, Techtopia provides custom systems designed for the Ghanaian economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_CATALOGUE.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE TECHTOPIA BRAND DIFFERENCE */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Progress Stats Left */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-8">
              <h4 className="font-extrabold text-neutral-dark text-lg mb-4">The Techtopia Difference</h4>
              
              {/* Progress 1 */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  <span>Client Retention</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-slate-150 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "100%" }} />
                </div>
              </div>

              {/* Progress 2 */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  <span>Industries Served</span>
                  <span>20+</span>
                </div>
                <div className="w-full bg-slate-150 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: "85%" }} />
                </div>
              </div>

              {/* Mini callout footer */}
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 leading-relaxed flex items-center space-x-2">
                <Compass className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <span>Localized and international delivery standards.</span>
              </div>
            </div>
          </div>

          {/* Text grid on Right */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">Why Choose Us</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-dark mb-10 leading-tight">
              A Results-Oriented Tech Partnership
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-10">
              {diffs.map((diff) => (
                <div key={diff.title} className="flex flex-col items-start">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mb-4">
                     <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-neutral-dark text-sm mb-2">{diff.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLEXIBLE PRICING PLAN */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">Flexible Pricing Plan</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-dark mb-4">
              We Adapt to Your Budget and Project Needs
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We align our scope directly with your business goals. Choose a starting point below that matches your scale, and we will deliver a custom quotation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, index) => {
              const isPopular = plan.name === "Growth Package";
              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-all hover:shadow-xl ${
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

                    <div className="border-t border-slate-100/80 pt-6 mb-6">
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-1">Includes features:</span>
                      <ul className="space-y-2.5 text-xs text-slate-600">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-start space-x-2">
                            <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-[9px] flex-shrink-0 mt-0.5">
                              ✓
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

      {/* 5. DYNAMIC CALL OUT BANNER PHONE SUPPORT */}
      <section className="bg-neutral-dark text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-1">
          <div className="md:col-span-8 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Custom Enterprise Audits</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
              If your organization requires unique databases mappings, multi-tenant cloud sync endpoints, or 3rd-party banking APIs integrations, our team is equipped to execute.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/95 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md"
            >
              <span>Consult with our Lead Architect</span>
            </Link>
          </div>
          <div className="md:col-span-4 hidden md:flex justify-end relative">
            <img 
              src="/assets/images/thumbs/laptop-man.png" 
              alt="Laptop Man" 
              className="max-h-48 object-contain animate-bounce-slow"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
