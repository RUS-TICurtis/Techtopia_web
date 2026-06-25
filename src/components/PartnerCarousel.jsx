import React from "react";
import { motion } from "motion/react";
import { BRANDS } from "../types";

export default function PartnerCarousel() {
  // Duplicate brands array multiple times to ensure seamless infinite looping on wider displays
  const duplicatedBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <div className="w-full overflow-hidden relative py-6 bg-white select-none flex">
      {/* Edge gradient overlays for smooth fade look */}
      <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex space-x-16 px-8 items-center">
            {BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 transition-all duration-300 pointer-events-auto"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-7 w-auto max-w-[120px] object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="font-display font-extrabold text-[11px] uppercase tracking-widest text-slate-800 whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
