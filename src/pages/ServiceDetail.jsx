import { useParams, Link, Navigate } from "react-router-dom";
import { PhoneCall, CheckCircle, Clock, Calendar, ArrowRight, Laptop, Sparkles, Volume2 } from "lucide-react";
import { SERVICES_CATALOGUE, CORE_PHONE, CORE_HOURS, BRAND_NAME } from "../types";
import PageBannerBg from "../components/interactive/PageBannerBg";
import { useSEO } from "../hooks/useSEO";

export default function ServiceDetail() {
  const { serviceId } = useParams();

  // Locate the specific service item data based on the parameters
  const service = SERVICES_CATALOGUE.find((item) => item.id === serviceId);

  const seo = useSEO({
    title: service ? `${service.title} | Techtopia Ghana IT Services` : "Service | Techtopia",
    description: service ? service.description.slice(0, 155) + "..." : "Explore Techtopia's IT services in Ghana.",
    canonical: service ? `/services/${serviceId}` : "/services"
  });

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
      {seo}
      {/* 1. BREADCRUMB HEADER */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <PageBannerBg />
        <div className="max-w-7xl mx-auto px-6 relative z-1 text-center md:text-left">
          <span className="text-xs font-bold text-accent-purple uppercase tracking-widest block mb-2">Service Details</span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-md">{service.title}</h1>
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
      <section className="py-20 bg-theme-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SIDEBAR COLUMN (col-span-4) */}
          <aside className="lg:col-span-4 flex flex-col space-y-8 lg:sticky lg:top-24 h-fit">
            
            {/* Nav Categories */}
            <div className="bg-theme-bg/50 border border-theme-border rounded-2xl p-6">
              <h4 className="font-extrabold text-theme-heading text-sm mb-4 uppercase tracking-wider">All Services</h4>
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
                           : "text-theme-heading bg-theme-surface hover:bg-theme-bg border border-slate-150"
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
            <div className="bg-theme-bg/50 border border-theme-border rounded-2xl p-6">
              <div className="flex items-center space-x-2 font-bold text-theme-heading text-sm mb-4 uppercase tracking-wider">
                <Clock className="w-5 h-5 text-primary" />
                <span>Office Hours</span>
              </div>
              <ul className="space-y-2 text-xs font-semibold text-theme-text">
                <li className="flex justify-between py-1.5 border-b border-slate-150">
                  <span>Mon - Fri</span>
                  <span className="text-theme-heading font-bold">09.00 AM - 5.00 PM</span>
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
              <div className="absolute top-0 right-0 w-24 h-24 bg-theme-surface/5 rounded-full -mr-8 -mt-8" />
              <PhoneCall className="w-10 h-10 text-white/50 mb-4" />
              <h4 className="font-extrabold text-sm uppercase tracking-wider mb-2">Need Immediate Help?</h4>
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                Consult with our local agents or request a free system scoping session today.
              </p>
              <a
                href={`tel:${CORE_PHONE.replace(/\s+/g, "")}`}
                className="bg-theme-surface text-primary font-bold text-xs uppercase tracking-widest text-center block py-3 rounded-xl transition-all shadow hover:shadow-lg"
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
              <h2 className="text-3xl font-extrabold tracking-tight text-theme-heading leading-tight">
                {service.subtitle}
              </h2>
            </div>

            {/* Service introduction markdown texts */}
            <p className="text-sm md:text-base text-theme-text leading-relaxed">
              {service.description}
            </p>

            {/* Dynamic Services Lists under detail page */}
            <div className="bg-theme-bg/50 border border-theme-border rounded-2xl p-8">
              <h3 className="text-lg font-bold text-theme-heading mb-4">Core Scope Elements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.servicesList.map((item) => (
                  <div key={item} className="flex items-center space-x-2 text-theme-heading font-semibold text-sm">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-xs">&rsaquo;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Render case study IF configured */}
            {service.caseStudy && (
              <div className="border border-theme-border rounded-2xl p-8 bg-theme-surface shadow-sm space-y-4">
                <span className="text-xs font-extrabold text-primary uppercase tracking-widest block">Success Case Study</span>
                <h4 className="text-lg font-bold text-theme-heading">Platform Delivery & Impact</h4>
                <p className="text-xs leading-relaxed text-theme-text">
                  {service.caseStudy}
                </p>
              </div>
            )}

            {/* Why Choose list */}
            <div>
              <h3 className="text-xl font-bold text-theme-heading mb-6">Why Choose {BRAND_NAME} for this solution?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs leading-relaxed text-theme-text font-medium">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA panel bottom */}
            <div className="border-t border-theme-border pt-8 flex items-center justify-between flex-wrap gap-4">
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
