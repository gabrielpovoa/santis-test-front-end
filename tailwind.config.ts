import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-header": "#2E3080",
        "light-hover-underlin,-green": "#07A74F",
        "gray-color": "#858585",
        "gray-color-lighter": "#686868",
        "white": "#FFFFFF",
        "black": "#000000",
        "light-gray": "#847F7F",
        "darken-green": "#005D5A",
        "lighet-gray": "#717171",
      },
    },
    height: {
      default: "44px",
    },
    width: {
      "input-width": "298px",
      "input-width-web": "600px",
      "input-height": "20px",
    },
    borderRadius: {
      "input-radius": "6px",
    },
    margin: {
      "input-my": "12px",
      "input-mr": '5rem',
    },
    Image: {
      'store-image-w': '17px',
      'store-image-h': '17px',
    },
    fontSize: {
      'beloweMenu': '1.2rem'
    }
  },
  plugins: [],
};
export default config;
