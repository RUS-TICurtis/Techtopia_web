/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3772FF",
        secondary: "#8A4FFF",
        accentCyan: "#0D9488",
        accentGreen: "#10B981",
        accentPurple: "#7C3AED",
        neutralDark: "#0F172A",
        neutralLight: "#F8FAFC",
      }
    },
  },
  plugins: [],
}
