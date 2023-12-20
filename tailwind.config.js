/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px", // Small screens - mobile
      md: "768px", // Medium screens - tablet
      lg: "1024px", // Large screens - laptop
      xl: "1280px", // Extra large screens - desktop
    },

    extend: {},
  },
  plugins: [],
}

