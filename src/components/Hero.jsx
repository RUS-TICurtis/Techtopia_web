import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles, ChevronRight, ArrowRight } from "lucide-react";
import { BRAND_NAME } from "../types";

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
    }
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-0" id="hero-section">
      {/* Background shape matching template */}
      <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-t-[30px] -z-20 mx-4 md:mx-12" />
      <div 
        className="absolute inset-x-0 bottom-0 w-full h-full -z-10 opacity-30 bg-repeat-x"
        style={{ backgroundImage: "url('/assets/images/shapes/wave-line-shadow.png')", backgroundPosition: "bottom" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline matching template's "what we offering" pill */}
          <motion.div 
            variants={itemVariants}
            className="bg-white py-2 px-7 rounded-full text-primary font-bold text-sm tracking-wide uppercase inline-flex items-center gap-2 mb-6 shadow-sm border border-slate-100"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            Empowering Digital Futures
          </motion.div>

          {/* Majestic Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-neutral-dark leading-[1.1] mb-6 max-w-4xl mx-auto"
          >
            Ghana&apos;s Leading <br className="hidden md:block" />
            <span className="text-primary">Technology Solutions</span> Provider
          </motion.h1>

          {/* Persuasive Secondary Copy */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10 font-medium"
          >
            From custom software and web development to IT support and digital marketing — {BRAND_NAME} partners with businesses across Accra to build, scale, and secure their digital future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Link
              to="/contact"
              className="theme-btn flex items-center gap-2 group"
            >
              Get A Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors py-4 px-6 rounded-none border border-slate-200 hover:border-primary bg-white"
            >
              Explore Our Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Hero Thumbnail */}
          <motion.div 
            variants={imageVariants}
            className="inline-flex justify-center w-full max-w-5xl px-4"
          >
            <img 
              src="/assets/images/thumbs/banner-five-thumb.png" 
              alt="Dashboard Thumbnail" 
              className="w-full h-auto drop-shadow-2xl rounded-t-2xl md:rounded-t-[3rem]"
              onError={(e) => {
                e.currentTarget.src = "/assets/images/thumbs/coming-soon-img.png";
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
