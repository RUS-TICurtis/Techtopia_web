import React, { useState, useRef } from "react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider({ 
  beforeImage = "/assets/images/thumbs/about-two.png", 
  afterImage = "/assets/images/thumbs/banner-five-thumb.png",
  beforeLabel = "Old Legacy System",
  afterLabel = "Techtopia Modern Solution"
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  const startDrag = () => setIsDragging(true);
  const endDrag = () => setIsDragging(false);

  return (
    <div className="my-12">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-theme-heading mb-2">Transformation Showcase</h3>
        <p className="text-theme-text text-sm">Drag the slider to compare before and after.</p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-ew-resize select-none border-4 border-white shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchMove={handleTouchMove}
        onTouchEnd={endDrag}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        {/* AFTER IMAGE (Background) */}
        <div className="absolute inset-0 bg-theme-bg">
          <img 
            src={afterImage} 
            alt={afterLabel} 
            className="w-full h-full object-cover"
            draggable={false}
            loading="eager"
          />
          <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {afterLabel}
          </span>
        </div>

        {/* BEFORE IMAGE (Clipped Foreground) */}
        <div 
          className="absolute inset-0 bg-slate-200 border-r-4 border-white/80"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt={beforeLabel} 
            className="w-full h-full object-cover filter grayscale opacity-80"
            draggable={false}
            loading="eager"
          />
          <span className="absolute top-4 left-4 bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {beforeLabel}
          </span>
        </div>

        {/* SLIDER HANDLE */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-theme-surface shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-10 h-10 bg-theme-surface rounded-full flex items-center justify-center shadow-xl text-primary pointer-events-auto cursor-ew-resize">
            <MoveHorizontal className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
