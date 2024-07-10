import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/sections/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    // screens: {
    //   xs: "375px",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blur-brand-linear-gradient": "linear-gradient(339deg, rgba(255, 213, 105, 0.08) 23.57%, rgba(252, 142, 79, 0.08) 50.76%, rgba(255, 105, 123, 0.08) 76.37%)",
        "brand-gradient": "linear-gradient(339deg, #FFD569, #FC8E4F, #FF697B)",
        "brand-linear-gradient": "linear-gradient(0deg, rgba(255, 213, 105, 1), rgba(252, 142, 79, 1), rgba(255, 105, 123, 1))",
        "border-linear-gradient": "linear-gradient(180deg, rgba(160, 150, 114, 0.2) 0%, rgba(160, 150, 114, 0) 100%)",
        "black-linear-gradient": "linear-gradient(180deg, rgba(12, 10, 9, 0) 0%, #0C0A09 27.76%)",
      },
      colors: {
        "black-charcoal": "var(--black-charcoal)",
        "blur-dark-charcoal": "var(--blur-dark-charcoal)",
        "dark-charcoal": "var(--dark-charcoal)",
        "medium-charcoal": "var(--medium-charcoal)",
        "light-charcoal": "var(--light-charcoal)",
        "blur-grayish-brown": "var(--blur-grayish-brown)",
        "light-yellow": "var(--light-yellow)",
        "medium-gray": "var(--medium-gray)",
      },
      fontFamily: {
        "ppmori-semibold": ["var(--font-ppmori-semibold)"],
        "jetBrains-mono": ["var(--font-jetBrains-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
