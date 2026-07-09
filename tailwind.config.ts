import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#050505",
        black: "#050505",
        obsidian: "#080604",
        charcoal: "#12100D",
        gold: "#D4AF37",
        "gold-light": "#F0D879",
        bronze: "#8F6F22",
        cream: "#F8F1DF",
        ivory: "#100D09",
        ink: "#F8F1DF",
        mist: "#2A2118",
      },
      boxShadow: {
        premium: "0 18px 55px rgba(212, 175, 55, 0.12)",
        gold: "0 22px 70px rgba(212, 175, 55, 0.24)",
        luxury: "0 24px 80px rgba(0, 0, 0, 0.38)",
        "soft-card": "0 16px 46px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        "navy-radial":
          "linear-gradient(135deg, #050505 0%, #12100D 48%, #000000 100%)",
        "luxury-radial":
          "radial-gradient(circle at 18% 12%, rgba(212,175,55,0.20), transparent 32%), linear-gradient(135deg, #050505 0%, #12100D 52%, #000000 100%)",
        "premium-surface":
          "linear-gradient(180deg, #0B0906 0%, #12100D 100%)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
