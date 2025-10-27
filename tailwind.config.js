/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          dp: "#20173F",
          ds: "#2E2355",
        },
        gray: {
          0: "#F8F9FA",
          1: "#F1F3F5",
          2: "#E9ECEF",
          3: "#DEE2E6",
          4: "#CED4DA",
          5: "#ADB5BD",
          6: "#868E96",
          7: "#495057",
          8: "#343A40",
        },
        pink: {
          1: "#FFC0E2",
          2: "#FFAAD8",
        },
        "light-blue": "#00B7FF",
        accent: {
          yellow: "#FFE09C",
          pink: "#FF9C9C",
        },
        "dark-purple": "#928CAB",
      },
      fontSize: {
        // Display (가장 큰 텍스트)
        "display-xl": [
          "4.5rem",
          { lineHeight: "5rem", letterSpacing: "-0.25px" },
        ], // 72px
        "display-large": [
          "3.5625rem",
          { lineHeight: "4rem", letterSpacing: "-0.25px" },
        ], // 57px
        "display-medium": ["2.8125rem", { lineHeight: "3.25rem" }], // 45px
        "display-small": ["2.25rem", { lineHeight: "2.75rem" }], // 36px

        // Headline
        "headline-large": ["2rem", { lineHeight: "2.5rem" }], // 32px
        "headline-medium": ["1.75rem", { lineHeight: "2.25rem" }], // 28px
        "headline-small": ["1.5rem", { lineHeight: "2rem" }], // 24px

        // Title
        "title-large": ["1.375rem", { lineHeight: "1.75rem" }], // 22px
        "title-medium": [
          "1rem",
          { lineHeight: "1.5rem", letterSpacing: "0.15px" },
        ], // 16px
        "title-small": [
          "0.875rem",
          { lineHeight: "1.25rem", letterSpacing: "0.1px" },
        ], // 14px

        // Label
        "label-large": [
          "0.875rem",
          { lineHeight: "1.25rem", letterSpacing: "0.1px" },
        ], // 14px
        "label-medium": [
          "0.75rem",
          { lineHeight: "1rem", letterSpacing: "0.5px" },
        ], // 12px
        "label-small": [
          "0.6875rem",
          { lineHeight: "1rem", letterSpacing: "0.5px" },
        ], // 11px

        // Body
        "body-large": [
          "1rem",
          { lineHeight: "1.5rem", letterSpacing: "0.5px" },
        ], // 16px
        "body-medium": [
          "0.875rem",
          { lineHeight: "1.25rem", letterSpacing: "0.25px" },
        ], // 14px
        "body-small": [
          "0.75rem",
          { lineHeight: "1rem", letterSpacing: "0.4px" },
        ], // 12px
      },

      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
