import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeProvider';

export default function ThemeToggle() {
  const { darkness, setDarkness } = useTheme();
  const [showSlider, setShowSlider] = useState(false);
  const pressTimer = useRef(null);
  const containerRef = useRef(null);

  const handleToggle = () => {
    // If not showing slider, toggle between 0 and 100
    setDarkness(darkness > 50 ? 0 : 100);
  };

  const handleStartPress = (e) => {
    // Don't trigger on right click
    if (e.type === 'mousedown' && e.button !== 0) return;
    
    pressTimer.current = setTimeout(() => {
      setShowSlider(true);
    }, 500); // 500ms long press
  };

  const handleEndPress = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
    }
  };

  const handleDoubleClick = () => {
    setShowSlider(true);
  };

  // Close slider when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowSlider(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center" ref={containerRef}>
      <button
        onClick={handleToggle}
        onDoubleClick={handleDoubleClick}
        onMouseDown={handleStartPress}
        onMouseUp={handleEndPress}
        onMouseLeave={handleEndPress}
        onTouchStart={handleStartPress}
        onTouchEnd={handleEndPress}
        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-theme-surface/10 transition-colors focus:outline-none"
        aria-label="Toggle Dark Mode"
        title="Tap to toggle, Long-press or Double-click for slider"
      >
        {darkness > 50 ? (
          <Moon size={20} className="text-theme-heading" />
        ) : (
          <Sun size={20} className="text-theme-heading" />
        )}
      </button>

      {showSlider && (
        <div className="absolute top-full right-0 mt-2 p-4 bg-theme-surface border border-theme-border rounded-xl shadow-xl z-50 flex flex-col items-center space-y-3 min-w-[200px]">
          <span className="text-xs font-semibold text-theme-text uppercase tracking-widest">
            Darkness: {darkness}%
          </span>
          <input
            type="range"
            min="0"
            max="100"
            value={darkness}
            onChange={(e) => setDarkness(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-theme-border rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between w-full text-[10px] font-bold text-theme-text">
            <span>LIGHT</span>
            <span>DARK</span>
          </div>
        </div>
      )}
    </div>
  );
}
