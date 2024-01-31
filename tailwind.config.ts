import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blur-brand-linear-gradient":
          "linear-gradient(339deg, rgba(255, 213, 105, 0.08) 23.57%, rgba(252, 142, 79, 0.08) 50.76%, rgba(255, 105, 123, 0.08) 76.37%)",
        "brand-gradient":
          "linear-gradient(339deg, #FFD569, #FC8E4F, #FF697B)",
        "ecosystem-gradient": "linear-gradient(334deg, #EDBA37 -2.09%, #E8793A 49.81%, #F64C60 98.68%)",
        "brand-linear-gradient":
          "linear-gradient(339deg, #FFD569 23.57%, #FC8E4F 50.76%, #FF697B 76.37%)",
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
        "ppmori-semibold": ['var(--font-ppmori-semibold)'],
      },
    },
  },
  plugins: [],
};
export default config;