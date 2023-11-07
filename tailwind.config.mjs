/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      body: ["basier", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "#00BCD4",
        gold: "#FFC107",
      },
      opacity: {
        3: "0.03",
        5: "0.05",
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
        100: "1",
      },
    },
    listStyleType: {
      square: "square",
    },
  },
  plugins: [],
};
