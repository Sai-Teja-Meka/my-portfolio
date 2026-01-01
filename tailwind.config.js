/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        background: "#0b0d14",
        primary: "#00ffff",    
        secondary: "#a855f7",  
        muted: "rgba(255,255,255,0.1)",
        "muted-foreground": "#94a3b8",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      }
    },
  },
  plugins: [],
}