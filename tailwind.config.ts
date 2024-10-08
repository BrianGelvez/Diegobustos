import type { Config } from "tailwindcss";
import { colorsDefault } from "./config/colors/intex"; 

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
      },
      colors: colorsDefault,
      boxShadow: {
        full: "0 3px 5px rgba(0, 0, 0, 0.15), 0 -3px 5px rgba(0, 0, 0, 0.1), 3px 0 5px rgba(0, 0, 0, 0.1), -3px 0 5px rgba(0, 0, 0, 0.1)",
        light:
          "0 1px 3px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.05), 1px 0 3px rgba(0, 0, 0, 0.05), -1px 0 3px rgba(0, 0, 0, 0.05)",
      },
      margin: {
        "top-layout": "10rem"
      },
      width: {
        "container":"calc(100% - 400px)"
      }
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
export default config;
