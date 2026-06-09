import { useParams, Link, Navigate } from "react-router-dom";
import { PhoneCall, CheckCircle, Clock, Calendar, ArrowRight, Laptop, Sparkles, Volume2 } from "lucide-react";
import { SERVICES_CATALOGUE, CORE_PHONE, CORE_HOURS, BRAND_NAME } from "../types";

export default function ServiceDetail() {
  const { serviceId } = useParams();

  // Locate the specific service item data based on the parameters
  const service = SERVICES_CATALOGUE.find((item) => item.id === serviceId);

  // If the parameter is invalid, redirect back to the main services panel
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Define sidebar lists
  const sidebarLinks = [
    { name: "Web & Software Development", id: "development" },
    { name: "Creative & UI/UX Design", id: "creative" },
    { name: "IT Solutions & Support", id: "solution" },
    { name: "Digital Marketing", id: "digital" },
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
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Service Details</span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{service.title}</h1>
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-slate-400 mt-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&rsaquo;</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>&rsaquo;</span>
            <span className="text-slate-200">{service.title}</span>
          </div>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT SIDEBAR & main CONTENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SIDEBAR COLUMN (col-span-4) */}
          <aside className="lg:col-span-4 flex flex-col space-y-8 lg:sticky lg:top-24 h-fit">
            
            {/* Nav Categories */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6">
              <h4 className="font-extrabold text-neutral-dark text-sm mb-4 uppercase tracking-wider">All Services</h4>
              <nav className="flex flex-col space-y-2">
                {sidebarLinks.map((link) => {
                  const isActive = link.id === service.id;
                  return (
                    <Link
                      key={link.id}
                      to={`/services/${link.id}`}
                      className={`flex justify-between items-center text-sm font-semibold py-3 px-4 rounded-xl transition-all ${
                        isActive
                           ? "bg-primary text-white shadow-md shadow-primary/10"
                           : "text-slate-700 bg-white hover:bg-slate-100 border border-slate-150"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Opening Hours Info Box */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6">
              <div className="flex items-center space-x-2 font-bold text-neutral-dark text-sm mb-4 uppercase tracking-wider">
                <Clock className="w-5 h-5 text-primary" />
                <span>Office Hours</span>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-slate-500">
                <li className="flex justify-between py-1.5 border-b border-slate-150">
                  <span>Mon - Fri</span>
                  <span className="text-neutral-dark font-bold">09.00 AM - 5.00 PM</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-150">
                  <span>Saturday</span>
                  <span className="text-red-500 font-bold">Closed</span>
                </li>
                <li className="flex justify-between py-1.5 pb-0">
                  <span>Sunday</span>
                  <span className="text-red-500 font-bold">Closed</span>
                </li>
              </ul>
            </div>

            {/* Need Help Card banner */}
            <div className="bg-gradient-to-tr from-secondary to-primary/95 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8" />
              <PhoneCall className="w-10 h-10 text-white/50 mb-4" />
              <h4 className="font-extrabold text-sm uppercase tracking-wider mb-2">Need Immediate Help?</h4>
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                Consult with our local agents or request a free system scoping session today.
              </p>
              <a
                href={`tel:${CORE_PHONE.replace(/\s+/g, "")}`}
                className="bg-white text-primary font-bold text-xs uppercase tracking-widest text-center block py-3 rounded-xl transition-all shadow hover:shadow-lg"
              >
                Call {CORE_PHONE}
              </a>
            </div>

          </aside>

          {/* MAIN CONTENTS COLUMN (col-span-8) */}
          <article className="lg:col-span-8 flex flex-col space-y-10 text-left">
            
            {/* Visual Icon block Header */}
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Scoping Detail</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-dark leading-tight">
                {service.subtitle}
              </h2>
            </div>

            {/* Service introduction markdown texts */}
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              {service.description}
            </p>

            {/* Dynamic Services Lists under detail page */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-neutral-dark mb-4">Core Scope Elements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.servicesList.map((item) => (
                  <div key={item} className="flex items-center space-x-2 text-slate-800 font-semibold text-sm">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-xs">&rsaquo;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Render case study IF configured */}
            {service.caseStudy && (
              <div className="border border-slate-100 rounded-2xl p-8 bg-white shadow-sm space-y-4">
                <span className="text-xs font-extrabold text-primary uppercase tracking-widest block">Success Case Study</span>
                <h4 className="text-lg font-bold text-neutral-dark">Platform Delivery & Impact</h4>
                <p className="text-xs leading-relaxed text-slate-500">
                  {service.caseStudy}
                </p>
              </div>
            )}

            {/* Why Choose list */}
            <div>
              <h3 className="text-xl font-bold text-neutral-dark mb-6">Why Choose {BRAND_NAME} for this solution?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs leading-relaxed text-slate-600 font-medium">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA panel bottom */}
            <div className="border-t border-slate-100 pt-8 flex items-center justify-between flex-wrap gap-4">
              <p className="text-xs text-slate-400 font-semibold leading-none">Estimate and project turnaround time typically takes 15 days.</p>
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary/95 text-white text-sm font-semibold py-3 px-6 rounded-xl transition-all"
              >
                Request Consultation
              </Link>
            </div>

          </article>

        </div>
      </section>
    </div>
  );
}
