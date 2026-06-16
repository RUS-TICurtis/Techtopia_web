import React from "react";
import { useScroll, useTransform, motion } from "motion/react";
import InteractiveMascot from "./InteractiveMascot";

export default function BackgroundMascots() {
  const { scrollY } = useScroll();
  
  // Parallax transforms for different mascots
  const y1 = useTransform(scrollY, [0, 1500], [0, 400]);
  const x1 = useTransform(scrollY, [0, 1500], [0, 300]);
  
  const y2 = useTransform(scrollY, [0, 1500], [0, -300]);
  const x2 = useTransform(scrollY, [0, 1500], [0, -200]);
  
  const y3 = useTransform(scrollY, [0, 1500], [0, -500]);
  const x3 = useTransform(scrollY, [0, 1500], [0, 250]);
  
  const y4 = useTransform(scrollY, [0, 1500], [0, 350]);
  const x4 = useTransform(scrollY, [0, 1500], [0, -400]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div style={{ y: y1, x: x1 }} className="absolute top-[10%] left-[5%]">
        <InteractiveMascot 
          className="relative"
          style={{ opacity: 0.15, transform: 'scale(1.8) rotate(-15deg)' }}
          color="#94a3b8"
          handColor="#64748b"
        />
      </motion.div>

      <motion.div style={{ y: y2, x: x2 }} className="absolute top-[40%] right-[10%]">
        <InteractiveMascot 
          className="relative"
          style={{ opacity: 0.1, transform: 'scale(0.8) rotate(25deg)' }}
          color="#cbd5e1"
          handColor="#94a3b8"
        />
      </motion.div>

      <motion.div style={{ y: y3, x: x3 }} className="absolute top-[80%] left-[20%]">
        <InteractiveMascot 
          className="relative"
          style={{ opacity: 0.08, transform: 'scale(2.5) rotate(10deg)' }}
          color="#e2e8f0"
          handColor="#cbd5e1"
        />
      </motion.div>

      <motion.div style={{ y: y4, x: x4 }} className="absolute top-[60%] right-[30%]">
        <InteractiveMascot 
          className="relative"
          style={{ opacity: 0.12, transform: 'scale(1.2) rotate(-5deg)' }}
          color="#94a3b8"
          handColor="#64748b"
        />
      </motion.div>
    </div>
  );
}
