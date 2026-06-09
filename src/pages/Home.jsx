import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { SERVICES_CATALOGUE, CORE_PHONE } from "../types";
import ServiceCard from "../components/ServiceCard";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import PartnerCarousel from "../components/PartnerCarousel";

export default function Home() {
  const steps = [
    {
      num: "01",
      title: "Understand Your Needs",
      desc: "We start by understanding your business goals, challenges, and requirements through a detailed, personal consultation."
    },
    {
      num: "02",
      title: "Plan & Strategize",
      desc: "Our team creates a customized strategy, outlining the best tech solutions to achieve your objectives efficiently."
    },
    {
      num: "03",
      title: "Execute with Precision",
      desc: "We deploy cutting-edge tools and technologies with precision, ensuring minimal disruption to your operations."
    },
    {
      num: "04",
      title: "Support & Optimize",
      desc: "We provide continuous support, monitoring, and optimization to keep your critical systems running smoothly."
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. BRANDS LOGO SCROLL */}
      <section className="bg-white border-y border-slate-100 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Trusted by Brands & Enterprises Across Ghana
          </p>
          <PartnerCarousel />
        </div>
      </section>

      {/* 3. CORE SERVICES GRID */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-6">
            <div>
              <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">Our Offerings</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-dark">
                We Solve Business Problems With Technology
              </h2>
            </div>
            <Link
              to="/services"
              className="group-item inline-flex items-center text-sm font-semibold text-primary hover:underline hover:text-primary/90 whitespace-nowrap self-end"
            >
              <span>See All Services</span>
              <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_CATALOGUE.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACCRA LOCAL HIGH FIDELITY HIGHLIGHT - WHO WE ARE */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Metrics indicators bento Left */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-primary/95 text-white p-8 rounded-3xl relative overflow-hidden shadow-xl shadow-primary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-12 -mt-12" />
              <div className="relative z-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-content/80 block mb-2 opacity-75">Local Performance Standard</span>
                <h3 className="text-4xl font-black mb-4">100%</h3>
                <h4 className="text-lg font-bold mb-3">User Engagement & Delivery Time</h4>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  We maintain strict adherence to development milestones and support response times, guaranteeing that our solutions deliver optimal ROI for Accra organizations.
                </p>
                <div className="flex items-center space-x-2 text-xs font-semibold text-white/90">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ISO SLA Benchmarked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text block Right */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-dark mb-6 leading-tight">
              Techtopia is the Leading Technology Solutions Provider in Ghana
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              With a team of experienced professionals, we are committed to helping our clients achieve digital transformation, streamline operations, and secure their future in an ever-evolving tech landscape. At Techtopia, we believe in the power of technology to drive growth and innovation. Whether you are a startup or an established enterprise, we tailor our solutions to meet your unique needs, ensuring you stay ahead in today's competitive market.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center space-x-2 text-slate-800 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-800 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Custom Solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-800 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Commitment to Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STANDARD WORK PROCESS PROGRESS WORK TIMELINE */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">How We Partner</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-dark">
              Our Standard Work Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Visual connector line in desktop */}
            <div className="hidden lg:block absolute top-[44px] left-1/10 right-1/10 h-0.5 bg-slate-100 z-0" />

            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-1">
                {/* Number Circle bubble */}
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 hover:border-primary hover:text-primary transition-colors flex items-center justify-center font-black text-slate-800 text-lg shadow-sm mb-6">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-neutral-dark mb-3">{step.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRUSTED SOLUTIONS CUSTOMER TESTIMONIALS */}
      <section className="bg-slate-50 border-t border-slate-100 py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="max-w-lg mx-auto mb-16">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">What They Say</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-dark">
              Truly Trusted IT Business Solutions Provider
            </h2>
          </div>

          <Testimonial />
        </div>
      </section>

      {/* 7. QUICK INTERACTIVE CTA CALLOUT SECTION BANNER */}
      <section className="bg-neutral-dark text-white py-16 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-max blur-2xl opacity-10 flex space-x-12 select-none pointer-events-none">
          <span className="text-8xl font-black uppercase tracking-widest select-none text-white/5 whitespace-nowrap">ACCRA TECH</span>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-1">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider mb-4 opacity-90">
            Have a project in mind? We'd love to help!
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight max-w-2xl mx-auto">
            Stay Connected With Cutting Edge IT
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary/95 text-white font-semibold py-3.5 px-8 rounded-xl w-full sm:w-auto shadow-lg shadow-primary/20"
            >
              Get A Quote
            </Link>
            <a
              href={`tel:${CORE_PHONE.replace(/\s+/g, "")}`}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-3.5 px-8 rounded-xl w-full sm:w-auto transition-colors"
            >
              Call {CORE_PHONE}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
