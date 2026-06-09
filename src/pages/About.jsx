import { useState } from "react";
import { Link } from "react-router-dom";
import { Cpu, ArrowRight, HelpCircle, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from "lucide-react";
import {
  BRAND_NAME,
  CORE_VALUES,
  IMPACTS,
  FAQS,
  MARQUEE_ITEMS,
  BRANDS,
  CORE_PHONE
} from "../types";

export default function About() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Ghanaian IT Excellence</span>
          <h1 className="text-4xl font-extrabold tracking-tight">About Us</h1>
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-slate-400 mt-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&rsaquo;</span>
            <span className="text-slate-200">About Us</span>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW HISTORY STORY SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual grid illustration left */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/10 rounded-3xl -z-1" />
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl relative z-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-extrabold text-2xl shadow-md">
                  5+
                </div>
                <div>
                  <h4 className="font-extrabold text-neutral-dark text-lg leading-tight">Years +</h4>
                  <span className="text-xs font-bold text-slate-400 block pt-0.5">Of Ghana IT Experience</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Since our inception, we have stayed dedicated to delivering customized, scalable, and secure technology services.
              </p>
            </div>
            {/* abstract graphical highlight box */}
            <div className="mt-6 ml-6 p-6 rounded-3xl bg-neutral-dark text-white shadow-xl max-w-sm">
              <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Headquarters</span>
              </div>
              <h5 className="font-bold text-sm">Accra, Greater Accra, Ghana</h5>
            </div>
          </div>

          {/* Text content right */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">TECHTOPIA AGENCY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-dark leading-tight mb-6">
              Grow, Innovate, and Thrive<span className="text-primary font-black">.</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Techtopia was founded with a simple yet powerful vision: to help businesses in Ghana harness the power of technology to grow, innovate, and thrive. Since our inception, we have been dedicated to delivering custom IT solutions that solve real-world challenges and drive measurable results.
              <br /><br />
              From small startups to established enterprises, we have worked with businesses across various industries and countries, helping them achieve digital transformation, streamline operations, and secure their future in an increasingly tech-driven world.
            </p>

            <div className="space-y-4 w-full">
              <div className="flex items-start space-x-3.5 p-4 bg-white border border-slate-100 rounded-xl">
                <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-dark text-sm">Cutting-Edge Solutions</h4>
                  <span className="text-xs text-slate-500">We stay ahead of the curve with the latest frameworks and technologies.</span>
                </div>
              </div>
              <div className="flex items-start space-x-3.5 p-4 bg-white border border-slate-100 rounded-xl">
                <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-neutral-dark text-sm">Future-Proofing Your Business</h4>
                  <span className="text-xs text-slate-500">We equip your systems with the tools and strategies to scale with ease.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 GALLERY SHOWCASE SECTION */}
      <section className="pb-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num} 
                className="h-40 md:h-56 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100 group"
              >
                <img 
                  src={`/assets/images/thumbs/about-banner-img${num}.png`} 
                  alt={`Office Showcase ${num}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/images/thumbs/coming-soon-img.png";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SCROLLING MARQUEE ACCENTS */}
      <section className="bg-primary text-white py-4 overflow-hidden relative select-none">
        <div className="flex whitespace-nowrap space-x-12 animate-marquee">
          {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, index) => (
            <span key={index} className="text-xs font-bold uppercase tracking-widest inline-flex items-center space-x-2">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </span>
          ))}
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">Our Standards</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-dark">
              Our Work is Guided by a Set of Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-6">
                  {val.title.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-neutral-dark mb-2">{val.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMPACT NUMBERS STATISTICS SECTION */}
      <section className="bg-neutral-dark text-white py-20 md:py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-primary mb-12">
            Our Impact in Numbers
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACTS.map((metric) => (
              <div key={metric.desc} className="text-center flex flex-col items-center">
                <h3 className="text-3xl md:text-5xl font-black text-white font-display mb-2">{metric.value}</h3>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-1">{metric.label}</h4>
                <span className="text-xs text-slate-500">{metric.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE FAQS COLLAPSIBLE ACCORDION */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">See Our FAQs</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-dark">
              Keep Your Business Safe & Ensure High Availability
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors bg-slate-50/50"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm md:text-base font-bold text-neutral-dark">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100/50 animate-in fade-in duration-200">
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BRANDS PORTFOLIO DISPLAY */}
      <section className="py-12 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Working With Respected Entities
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {BRANDS.map((brand) => (
              <span key={brand.name} className="inline-flex items-center space-x-1.5 px-4 py-2 border border-slate-100 shadow-sm rounded-xl bg-white text-xs font-semibold text-slate-600">
                <img src={brand.logo} alt={brand.name} className="h-4 w-auto object-contain mr-1" />
                <span>{brand.name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
