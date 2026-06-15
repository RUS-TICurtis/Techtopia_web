import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
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
            Invest with confidence <br className="hidden md:block"/> Grow your future
          </motion.h1>

          {/* Persuasive Secondary Copy */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10 font-medium"
          >
            In today's competitive business landscape, the demand for efficient and cost-effective IT solutions from {BRAND_NAME} has never been more critical.
          </motion.p>

          {/* Store Badges matching template */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-14"
          >
            <a href="https://play.google.com/store/apps" className="hover:-translate-y-1 transition-transform duration-300 rounded-2xl shadow-lg hover:shadow-xl">
              <img src="/assets/images/icons/store-two1.png" alt="App Store" className="h-12 md:h-14 w-auto" />
            </a>
            <a href="https://www.apple.com/app-store" className="hover:-translate-y-1 transition-transform duration-300 rounded-2xl shadow-lg hover:shadow-xl">
              <img src="/assets/images/icons/store-two2.png" alt="Google Play" className="h-12 md:h-14 w-auto" />
            </a>
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
