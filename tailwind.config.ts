import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg-rgb) / <alpha-value>)",
        panel: "rgb(var(--panel-rgb) / <alpha-value>)",
        text: "rgb(var(--text-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        blue: "rgb(var(--blue-rgb) / <alpha-value>)",
        silver: "rgb(var(--silver-rgb) / <alpha-value>)",
        stroke: "var(--stroke)",
      },
      borderRadius: { panel: "12px" },
      fontFamily: { sans: ["Manrope", "Noto Sans Arabic", "sans-serif"] },
      boxShadow: {
        panel: "0 12px 24px #1c3d6620",
        hover: "0 16px 30px #1c3d6628",
      },
    },
  },
  plugins: [],
};

export default config;
