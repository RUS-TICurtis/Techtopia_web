import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Load from localStorage or default to 0
  const [darkness, setDarkness] = useState(() => {
    const saved = localStorage.getItem('theme-darkness');
    if (saved !== null) {
      return parseInt(saved, 10);
    }
    return 0; // Default light
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('theme-darkness', darkness);
    // Apply to document
    document.documentElement.style.setProperty('--theme-darkness', `${darkness}%`);
  }, [darkness]);

  return (
    <ThemeContext.Provider value={{ darkness, setDarkness }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
