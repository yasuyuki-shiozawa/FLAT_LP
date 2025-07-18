import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7FB3D3",
          dark: "#6A9BC3",
          light: "#A0C4E1",
        },
        accent: {
          DEFAULT: "#FFB366",
          dark: "#E6A055",
          light: "#FFC88A",
        },
        text: {
          dark: "#2C3E50",
          gray: "#6B7280",
          light: "#9CA3AF",
        },
        background: {
          DEFAULT: "#FFFFFF",
          light: "#F8F9FA",
          gray: "#E5E7EB",
        },
        border: {
          DEFAULT: "#E0E0E0",
        },
        success: "#27AE60",
        error: "#E74C3C",
      },
      fontFamily: {
        sans: ["'Noto Sans JP'", "'Roboto'", "sans-serif"],
      },
      fontSize: {
        "h1": ["28px", { lineHeight: "1.4" }],
        "h2": ["24px", { lineHeight: "1.4" }],
        "h3": ["20px", { lineHeight: "1.5" }],
        "body": ["14px", { lineHeight: "1.6" }],
        "caption": ["12px", { lineHeight: "1.5" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "count-up": "countUp 2s ease-out",
        "bounce-arrow": "bounceArrow 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
}

export default config