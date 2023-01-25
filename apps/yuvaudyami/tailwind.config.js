/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   100: "#F3D591",
        //   200: "#CEAB5C",
        //   300: "#67e8f9",
        //   400: "#22d3ee",
        //   500: "#06b6d4",
        //   600: "#0891b2",
        //   700: "#0e7490",
        //   800: "#155e75",
        //   900: "#164e63",
        // },
        light: "#fb7185",
        primary: "#f97316",

        secondary: "#a5f3fc",
        dark: "#075985",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translatey(0%)" },
          "100%": { transform: "translatey(-100%)" },
        },
      },
    },
  },

  plugins: [Myclass, require("@tailwindcss/line-clamp")],
};
