import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Layers } from "lucide-react";
import { INTEGRATIONS, BRAND_NAME } from "../types";

export default function Integrations() {
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
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Sync Ecosystem</span>
          <h1 className="text-4xl font-extrabold tracking-tight">App Integrations</h1>
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-slate-400 mt-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&rsaquo;</span>
            <span className="text-slate-200">Integrations</span>
          </div>
        </div>
      </section>

      {/* 2. INTEGRATIONS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-2xl mb-16">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">API Connectivity</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-dark mb-4 leading-tight">
              Elevate Your Brand With Custom Connections
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We sync your proprietary software and customer portals directly with world-class services, ensuring secure database records, real-time sync endpoints, and zero data leakage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTEGRATIONS.map((app) => (
              <div
                key={app.name}
                className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-150/70 shadow-sm flex items-center justify-center text-2xl mb-5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                    <span role="img" aria-label={app.name}>{app.icon}</span>
                  </div>
                  <h3 className="font-bold text-neutral-dark text-base mb-2">{app.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">{app.desc}</p>
                </div>
                
                <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider flex items-center space-x-1 select-none">
                  <span>API Supported</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC CALL OUT */}
      <section className="bg-neutral-dark text-white py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-1 text-center md:text-left">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Custom Endpoint Architecture</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Do you require connections to localized banking portals (e.g., MTN MoMo APIs, Hubtel, Zeepay) or custom proprietary ERP systems? Our lead programmers can implement secure, custom webhooks.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex items-center space-x-2 bg-primary hover:bg-primary/95 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md flex-shrink-0"
          >
            <span>Request Custom API Setup</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
