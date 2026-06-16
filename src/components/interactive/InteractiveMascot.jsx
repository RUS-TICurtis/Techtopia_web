import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring } from "motion/react";

export default function InteractiveMascot({
  className = "fixed bottom-6 right-6 z-[100]",
  style = {},
  color = "var(--color-primary, #3772FF)",
  handColor = "#1e40af"
}) {
  const containerRef = useRef(null);
  const [isHiding, setIsHiding] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Springs for smooth pupil movement
  const pupilX = useSpring(0, { stiffness: 150, damping: 20 });
  const pupilY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      if (!isTyping && !isHiding) {
        targetX = e.clientX;
        targetY = e.clientY;
        updatePupils();
      }
    };

    const updatePupils = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angle = Math.atan2(targetY - centerY, targetX - centerX);
      const dist = Math.min(6, Math.hypot(targetX - centerX, targetY - centerY) / 50);

      // if hiding, reset pupils to center
      if (isHiding) {
        pupilX.set(0);
        pupilY.set(0);
      } else {
        pupilX.set(Math.cos(angle) * dist);
        pupilY.set(Math.sin(angle) * dist);
      }
    };

    const handleFocusIn = (e) => {
      const target = e.target;
      if (target.type === "password") {
        setIsHiding(true);
        updatePupils();
      } else if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        setIsTyping(true);
        const rect = target.getBoundingClientRect();
        targetX = rect.left + rect.width / 2;
        targetY = rect.top + rect.height / 2;
        updatePupils();
      }
    };

    const handleFocusOut = () => {
      setIsHiding(false);
      setIsTyping(false);
    };

    const handleInput = (e) => {
      const target = e.target;
      if (!isHiding && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        const rect = target.getBoundingClientRect();
        // Estimate typing progress to look left to right
        const valLength = target.value.length || 0;
        const offset = Math.min(valLength * 8, rect.width);
        targetX = rect.left + offset;
        targetY = rect.top + rect.height / 2;
        updatePupils();
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("focusin", handleFocusIn);
    window.addEventListener("focusout", handleFocusOut);
    window.addEventListener("input", handleInput);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Initial update
    updatePupils();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("focusout", handleFocusOut);
      window.removeEventListener("input", handleInput);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isTyping, isHiding, pupilX, pupilY]);

  return (
    <motion.div
      ref={containerRef}
      className={`pointer-events-none ${className}`}
      style={style}
      animate={{
        scale: isClicking ? 0.95 : 1,
        y: isHiding ? 5 : 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow */}
        <ellipse cx="50" cy="95" rx="30" ry="5" fill="rgba(0,0,0,0.1)" />
        
        {/* Body */}
        <motion.rect 
          x="15" 
          y="20" 
          width="70" 
          height="70" 
          rx="30" 
          fill={color}
        />

        {/* Left Eye */}
        <circle cx="35" cy="45" r="14" fill="white" />
        <motion.circle 
          cx="35" 
          cy="45" 
          r="6" 
          fill="#0f172a"
          style={{ x: pupilX, y: pupilY }}
          animate={{ scale: isHiding ? 0 : 1 }}
        />

        {/* Right Eye */}
        <circle cx="65" cy="45" r="14" fill="white" />
        <motion.circle 
          cx="65" 
          cy="45" 
          r="6" 
          fill="#0f172a"
          style={{ x: pupilX, y: pupilY }}
          animate={{ scale: isHiding ? 0 : 1 }}
        />

        {/* Left Hand */}
        <motion.g
          initial={false}
          animate={{
            x: isHiding ? 5 : 0,
            y: isHiding ? -35 : 10,
            rotate: isHiding ? 15 : 0
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <circle cx="25" cy="70" r="12" fill={handColor} />
        </motion.g>

        {/* Right Hand */}
        <motion.g
          initial={false}
          animate={{
            x: isHiding ? -5 : 0,
            y: isHiding ? -35 : 10,
            rotate: isHiding ? -15 : 0
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <circle cx="75" cy="70" r="12" fill={handColor} />
        </motion.g>

      </svg>
    </motion.div>
  );
}
