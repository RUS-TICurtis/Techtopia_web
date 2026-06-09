import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck, Code, Sparkles, Database, Users } from "lucide-react";
import { BRAND_NAME, CORE_PHONE } from "../types";

export default function Hero() {
  // Stagger configurations for child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const rightVisualVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-neutral-light/30 to-neutral-light pt-12 pb-24 md:py-32" id="hero-section">
      {/* Dynamic blurred radial backdrop elements */}
      <div className="absolute top-1/4 left-1/10 w-[450px] h-[450px] bg-primary/8 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse pointer-events-none" />
      <div className="absolute top-1/3 right-1/10 w-[500px] h-[500px] bg-secondary/8 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* HERO LEFT CONTENT */}
        <motion.div 
          className="lg:col-span-6 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtle Trust Badge */}
          <motion.div 
            variants={badgeVariants}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 text-slate-800 border border-slate-200/50 text-xs font-bold uppercase tracking-wider mb-6 hover:bg-slate-950/5 transition-colors duration-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Premium Technology & IT Agency</span>
          </motion.div>

          {/* Majestic Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-dark leading-none mb-6"
          >
            Empowering Your Business With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Custom IT Solutions</span><span className="text-primary">.</span>
          </motion.h1>

          {/* Persuasive Secondary Copy */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-500 leading-relaxed max-w-xl mb-8 font-normal"
          >
            At {BRAND_NAME}, we craft custom software, high-performance web applications, and strategic digital experiences. Whether you are bootstrapping a startup or scaling an enterprise, our Accra-based technical team optimizes your operations with 24/7 proactive maintenance.
          </motion.p>

          {/* Action-Driving Call to Action (CTA) Container */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
          >
            <Link
              to="/contact"
              className="group bg-primary hover:bg-primary/95 text-white font-semibold py-4 px-8 rounded-xl text-center shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2.5"
              id="cta-get-quote-button"
            >
              <span>Get Your Free Scoping Consultation</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <Link
              to="/services"
              className="bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold py-4 px-8 rounded-xl text-center shadow-sm hover:border-slate-300 hover:shadow-md active:scale-[0.98] transition-all duration-200"
              id="cta-explore-services-button"
            >
              Explore Solutions
            </Link>
          </motion.div>

          {/* Trust points row */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t border-slate-200/60 pt-8"
          >
            <div className="flex items-center space-x-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-semibold text-slate-700">99.9% Uptime SLA Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-semibold text-slate-700">Dedicated 24/7 Accra Help Desk</span>
            </div>
          </motion.div>
        </motion.div>

        {/* HERO RIGHT VISUALS */}
        <motion.div 
          className="lg:col-span-6 relative"
          variants={rightVisualVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Visual Composition */}
          <div className="grid grid-cols-12 gap-4 relative select-none">
            
            {/* Main Interactive App Canvas */}
            <div className="col-span-8 bg-white p-6 rounded-3xl border border-slate-150/60 shadow-xl relative overflow-hidden group hover:shadow-2xl hover:border-slate-200 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-110" />
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-dark text-sm leading-none">{BRAND_NAME} Ecosystem</h3>
                    <span className="text-[10px] text-slate-400 font-semibold pt-1 block">Full-Stack Development</span>
                  </div>
                </div>
                <span className="bg-emerald-100 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Active</span>
              </div>

              {/* Stack mockup layout metrics */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Performance Rating</span>
                    <span>99.8%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "99.8%" }} />
                  </div>
                </div>

                {/* Sub features preview inside mock application dashboard */}
                <div className="pt-2 grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100/50 transition-colors duration-200">
                    <span className="text-[10px] text-slate-400 font-bold block mb-1">Architecture</span>
                    <span className="text-xs font-bold text-neutral-dark">Robust Scaling</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100/50 transition-colors duration-200">
                    <span className="text-[10px] text-slate-400 font-bold block mb-1">Databases</span>
                    <span className="text-xs font-bold text-neutral-dark">Secure Schema</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Retention Card */}
            <div className="col-span-4 bg-gradient-to-tr from-secondary to-primary p-6 rounded-3xl text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[175px] hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-10 -mt-10" />
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white mb-4">
                <Users className="w-4 h-4" />
              </div>
              <div className="mt-auto">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-white/70 block mb-1">Client Retention</span>
                <h4 className="text-4xl font-black text-white leading-none">100%</h4>
                <p className="text-[9px] text-white/80 font-medium whitespace-nowrap pt-1">Ghana & International</p>
              </div>
            </div>

            {/* Security Audit Protection Card */}
            <div className="col-span-4 bg-slate-900 text-white p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between min-h-[160px] border border-slate-800">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Compliance</span>
                <h4 className="text-lg font-bold text-white mt-1 leading-tight">Secure Cloud Isolation</h4>
                <span className="text-[9px] text-slate-500 font-medium block pt-1">ISO 27001 Prepared</span>
              </div>
            </div>

            {/* Micro Dynamic Resource Stat Card */}
            <div className="col-span-8 bg-white p-6 rounded-3xl border border-slate-150/60 shadow-xl group hover:shadow-2xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Database className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs font-bold text-neutral-dark">Enterprise Databases</span>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 divide-x divide-slate-100">
                <div className="pr-4">
                  <span className="text-[10px] text-slate-400 font-extrabold block uppercase tracking-wider">Database Type</span>
                  <span className="text-xs font-extrabold text-neutral-dark block mt-1">Direct Cloud SQL</span>
                </div>
                <div className="pl-4">
                  <span className="text-[10px] text-slate-400 font-extrabold block uppercase tracking-wider">Data Sync SLA</span>
                  <span className="text-xs font-extrabold text-neutral-dark block mt-1">Real-time / Instant</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
