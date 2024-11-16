/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        allura: ['Allura', 'cursive'], // Add Allura as a custom font family
      },
    },
  },
  plugins: [],
}

