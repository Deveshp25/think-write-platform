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
        navy: "#0F172A",
        gold: "#D4AF37",
        ivory: "#F8F5EE",
        ink: "#172033",
        mist: "#E8ECF3",
      },
      boxShadow: {
        premium: "0 18px 55px rgba(15, 23, 42, 0.11)",
        gold: "0 22px 70px rgba(212, 175, 55, 0.24)",
        "soft-card": "0 12px 34px rgba(15, 23, 42, 0.075)",
      },
      backgroundImage: {
        "navy-radial":
          "linear-gradient(135deg, #0F172A 0%, #18243A 48%, #08111F 100%)",
        "premium-surface":
          "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,245,238,0.78) 100%)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
