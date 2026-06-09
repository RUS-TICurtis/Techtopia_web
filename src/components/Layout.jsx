import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Header from "./Header";
import Footer from "./Footer";
import { BRAND_NAME } from "../types";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  
  // Custom cursor states
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [pathname]);

  // Preloader timeout simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // Check if touch device (disable custom cursor on mobile)
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches || 'ontouchstart' in window);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Track mouse position
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Smooth lagging trailing cursor loop
  useEffect(() => {
    if (isMobile) return;

    let animationFrameId;

    const updateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos, isMobile]);

  // Track if hovering link/button
  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, [isMobile]);

  return (
    <div className={`flex flex-col min-h-screen bg-neutral-light overflow-x-hidden ${!isMobile && !loading ? "cursor-none-active" : ""}`}>
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

      {/* 2. CUSTOM ANIMATED CURSOR */}
      {!isMobile && !loading && (
        <>
          <div
            className="custom-cursor-dot"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`
            }}
          />
          <div
            className="custom-cursor bg-primary/5 border-primary transition-all duration-150"
            style={{
              left: `${trailingPos.x}px`,
              top: `${trailingPos.y}px`,
              transform: `translate(-50%, -50%) scale(${isHovering ? 1.8 : 1})`,
              backgroundColor: isHovering ? "var(--color-primary-10, rgba(55, 114, 255, 0.15))" : "transparent"
            }}
          />
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
