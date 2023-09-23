import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
      textColor: {
        black: "#131313",
        gray: "#353535",
        base: "#4F4F4F",
        label: "#7C7F84",
      },
      colors: {
        "light-gray": "#F5F5F5",
        accent: "#BFDCFE",
        accent2: "#6C7794",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
