import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ChevronRight, ArrowRight } from "lucide-react";
import { BRAND_NAME } from "../types";

export default function Hero() {
  const slideshowImages = [
    "/assets/images/thumbs/app-download-thumb.png",
    "/assets/images/thumbs/service-details-img.png",
    "/assets/images/thumbs/project-details-img2.png",
    "/assets/images/thumbs/automation-thumb.png",
    "/assets/images/thumbs/workplace-tab-thumb.png",
    "/assets/images/thumbs/project-details-img1.png",
    "/assets/images/thumbs/revenue-chart.png",
    "/assets/images/thumbs/about-slide-img1.png"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

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
            className="bg-theme-surface py-2 px-7 rounded-full text-primary font-bold text-sm tracking-wide uppercase inline-flex items-center gap-2 mb-6 shadow-sm border border-theme-border"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            Empowering Digital Futures
          </motion.div>

          {/* Majestic Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-theme-heading leading-[1.1] mb-6 max-w-4xl mx-auto"
          >
            Ghana&apos;s Leading <br className="hidden md:block" />
            <span className="text-primary">Technology Solutions</span> Provider
          </motion.h1>

          {/* Persuasive Secondary Copy */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-theme-text leading-relaxed max-w-2xl mx-auto mb-10 font-medium"
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-theme-text hover:text-primary transition-colors py-4 px-6 rounded-none border border-theme-border hover:border-primary bg-theme-surface"
            >
              Explore Our Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Hero Thumbnail Slideshow */}
          <motion.div 
            variants={imageVariants}
            className="inline-flex justify-center w-full max-w-5xl px-4 relative mt-10"
          >
            {/* Floating Techtopia Brand Badge */}
            <div className="absolute -top-6 md:-top-8 z-20 left-1/2 -translate-x-1/2 bg-theme-surface/95 backdrop-blur-md shadow-xl px-5 py-2 md:px-6 md:py-3 rounded-full border border-theme-border animate-bounce-slow flex items-center gap-3">
              <img src="/assets/images/logo/Logomark.png" alt="Techtopia Mark" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
              <span className="font-extrabold text-theme-heading tracking-tight text-base md:text-lg">Techtopia</span>
            </div>

            <div className="w-full relative aspect-[4/3] md:aspect-[16/9] rounded-t-2xl md:rounded-t-[3rem] overflow-hidden drop-shadow-2xl bg-theme-bg border-t-4 border-l border-r border-theme-border">
              <AnimatePresence mode="popLayout">
                <motion.img 
                  key={currentSlide}
                  src={slideshowImages[currentSlide]}
                  alt={`Techtopia application view ${currentSlide + 1}`}
                  className="w-full h-full object-contain absolute inset-0 p-4 md:p-8"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  loading="eager"
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.src = "/assets/images/thumbs/coming-soon-img.png";
                  }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
