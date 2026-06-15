/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#60097d",
        secondary: "#242449",
        accentCyan: "#0D9488",
        accentGreen: "#10B981",
        accentPurple: "#7C3AED",
        neutralDark: "#0F0D1D",
        neutralLight: "#F3F7FB",
      }
    },
  },
  plugins: [],
}
