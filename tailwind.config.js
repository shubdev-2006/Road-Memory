/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#080d1a",
        card: "#0e1726",
        cardHover: "#142036",
        elevated: "#162032",
        borderSubtle: "rgba(255, 255, 255, 0.08)",
        risk: {
          low: "#10b981",
          moderate: "#f59e0b",
          high: "#f97316",
          critical: "#ef4444"
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
