import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function MouseSparkles() {
  const [sparkles, setSparkles] = useState([]);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches || 'ontouchstart' in window);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const addSparkle = useCallback((x, y, burst = false) => {
    const id = Date.now() + Math.random();
    const angle = Math.random() * Math.PI * 2;
    const speed = burst ? Math.random() * 60 + 30 : Math.random() * 20 + 10;
    
    const newSparkle = {
      id,
      x: x + Math.cos(angle) * (burst ? 10 : 5),
      y: y + Math.sin(angle) * (burst ? 10 : 5),
      targetX: Math.cos(angle) * speed,
      targetY: Math.sin(angle) * speed - (burst ? 40 : 20), // float up
      size: Math.random() * 10 + (burst ? 8 : 5),
      color: Math.random() > 0.5 ? "#3772FF" : "#F59E0B"
    };

    setSparkles((current) => [...current, newSparkle]);

    // Remove sparkle after animation completes
    setTimeout(() => {
      setSparkles((current) => current.filter((s) => s.id !== id));
    }, burst ? 600 : 800);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      // Throttle sparkle creation
      if (now - lastTime > 40) {
        addSparkle(e.clientX, e.clientY);
        lastTime = now;
      }
    };

    const handleMouseDown = (e) => {
      for (let i = 0; i < 8; i++) {
        addSparkle(e.clientX, e.clientY, true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isMobile, addSparkle]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[90] overflow-hidden">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: 0, x: sparkle.x, y: sparkle.y, rotate: 0 }}
            animate={{ 
              opacity: 0, 
              scale: 1.5, 
              x: sparkle.targetX,
              y: sparkle.targetY,
              rotate: 180 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute"
            style={{
              width: sparkle.size,
              height: sparkle.size,
              marginLeft: -sparkle.size / 2,
              marginTop: -sparkle.size / 2
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill={sparkle.color} />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
