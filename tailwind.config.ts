import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
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
        stroke: "rgb(var(--silver-rgb) / 0.18)"
      },
      borderRadius: {
        panel: "1.25rem"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif"
        ]
      },
      boxShadow: {
        panel: "16px 16px 34px rgba(105,126,170,.18), -12px -12px 28px rgba(255,255,255,.9)",
        hover: "20px 20px 42px rgba(105,126,170,.22), -14px -14px 30px rgba(255,255,255,.96)"
      },
      backgroundImage: {
        "odin-grid": "radial-gradient(circle at 1px 1px, rgba(54, 114, 255, 0.13) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
