import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EC",
        "cream-dark": "#EFE8DA",
        ink: "#171512",
        charcoal: "#26221D",
        stone: "#8A8375",
        gold: "#B08B3F",
        "gold-light": "#D9BD87",
        line: "#E2DACB",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(23, 21, 18, 0.15)",
        card: "0 1px 2px rgba(23,21,18,0.04), 0 8px 24px -12px rgba(23,21,18,0.08)",
        "card-hover": "0 1px 2px rgba(23,21,18,0.05), 0 24px 48px -16px rgba(23,21,18,0.16)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
