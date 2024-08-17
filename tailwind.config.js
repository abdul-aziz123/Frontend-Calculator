/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "main-background": "hsl(222, 26%, 31%)",
      "keypad-background": "hsl(223, 31%, 20%)",
      "screen-background": "hsl(224, 36%, 15%)",
      "key-background-blue": "hsl(225, 21%, 49%)",
      "key-shadow": "hsl(224, 28%, 35%)",
      "key-background-toggle": "hsl(6, 63%, 50%)",
      "key-shadow-red": "hsl(6, 70%, 34%)",
      "key-background-orange": "hsl(30, 25%, 89%)",
      "key-shadow-orange": "hsl(28, 16%, 65%)",
      "very-dark-grayish-blue": "hsl(221, 14%, 31%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
};
