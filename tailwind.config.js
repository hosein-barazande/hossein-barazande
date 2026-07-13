/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#07111F",
        surface: "#101B2D",
        "surface-hover": "#172538",

        primary: "#3B82F6",
        "primary-hover": "#2563EB",

        accent: "#06B6D4",

        foreground: "#F8FAFC",
        muted: "#94A3B8",

        border: "#243244",

        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
      },

      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },

      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,.25)",
        card: "0 10px 30px rgba(0,0,0,.25)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(.4,0,.2,1)",
      },
    },
  },

  plugins: [],
};