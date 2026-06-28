import React, { useState, useEffect } from"react";
import { useLocation } from"react-router-dom";
import { motion, AnimatePresence } from"motion/react";
import Header from"./Header";
import Footer from"./Footer";
import { BRAND_NAME } from"../types";
import InteractiveMascot from"./interactive/InteractiveMascot";
import CircuitBackground from "./interactive/CircuitBackground";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Preloader timeout simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // Check if touch device (disable mascot on mobile)
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches || 'ontouchstart' in window);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <CircuitBackground />

      {/* 1. CUSTOM PRELOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="preloader-overlay"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="preloader-spinner" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary animate-pulse">
                Loading {BRAND_NAME}...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. INTERACTIVE MASCOTS & SPARKLES */}
      {!isMobile && !loading && (
        <>
          {/* TODO: BackgroundMascots is built but disabled — enable only after profiling scroll performance impact on lower-end devices. */}
          <InteractiveMascot className="fixed bottom-6 left-6 z-[100]" />
        </>
      )}

      {/* 3. APP WRAPPER */}
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
