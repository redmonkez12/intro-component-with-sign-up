/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: "#FF7979",
        purple: "#5E54A4",
        gray: "#BAB7D4",
        grayLight: "#DEDEDE",
        black: "#3D3B48",
        green: "#38CC8B",
        greenLight: "#77E2B3",
      },
    },
  },
  plugins: [],
}
