import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Auto-play the slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const active = TESTIMONIALS[activeIndex];

  return (
    <div className="w-full relative bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm">
      {/* Absolute quote mark on background */}
      <Quote className="absolute top-6 right-8 w-24 h-24 text-slate-100/70 select-none pointer-events-none" />

      <div className="relative z-1 flex flex-col justify-between h-full">
        {/* Rating stars layout */}
        <div className="flex items-center space-x-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Dynamic testimonial quote layout */}
        <div className="min-h-[160px] flex items-center mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed italic"
            >
              &ldquo;{active.quote}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Client representative profile & navigation dots bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-slate-100/80 gap-4">
          <div className="flex items-center space-x-4">
            {/* Visual avatar wrapper block */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center font-bold text-primary">
              {active.company.charAt(0)}
            </div>
            <div>
              <h5 className="font-bold text-neutral-dark">{active.author}</h5>
              <span className="text-xs font-semibold text-slate-400 block pt-0.5">
                {active.role} &mdash; <strong className="text-slate-600">{active.company}</strong>
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3 self-end sm:self-auto">
            {/* Dots Indicator */}
            <div className="flex space-x-2 mr-4">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    activeIndex === index ? "w-6 bg-primary" : "bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Tactile Buttons */}
            <div className="flex space-x-1.5">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl border border-slate-200 hover:border-primary hover:text-primary flex items-center justify-center transition-colors cursor-pointer text-slate-500"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl border border-slate-200 hover:border-primary hover:text-primary flex items-center justify-center transition-colors cursor-pointer text-slate-500"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
