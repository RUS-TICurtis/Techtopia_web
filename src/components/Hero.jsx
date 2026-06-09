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
          className="lg:col-span-6 relative flex justify-center py-6"
          variants={rightVisualVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-md md:max-w-lg select-none">
            {/* Main 3D Banner Image */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-150/40 bg-white p-3 shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="/assets/images/thumbs/banner-five-thumb.png" 
                alt="Techtopia Platform Mockup" 
                className="w-full h-auto rounded-2xl object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/assets/images/thumbs/coming-soon-img.png";
                }}
              />
            </div>
            
            {/* Floating SLA Retention Card overlay */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-tr from-secondary to-primary p-4 rounded-2xl text-white shadow-xl hover:scale-[1.02] transition-all duration-300 hidden sm:flex flex-col justify-between w-40 border border-white/15">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] uppercase font-extrabold tracking-widest text-white/80">Client Retention</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h4 className="text-2xl font-black text-white leading-none">100%</h4>
              <p className="text-[8px] text-white/70 font-semibold pt-1">Ghana & International</p>
            </div>

            {/* Floating Performance Indicator Card overlay */}
            <div className="absolute -top-6 -right-6 bg-slate-900 text-white p-4 rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-300 hidden sm:flex flex-col justify-between w-44 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[8px] uppercase font-bold text-slate-400 tracking-wider">Performance</span>
                <span className="text-emerald-450 text-[9px] font-bold text-emerald-400">99.8%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-1">
                <div className="h-full bg-primary rounded-full" style={{ width: "99.8%" }} />
              </div>
              <span className="text-[8px] text-slate-500 font-medium block">Active Cloud Sync</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
