/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-blue)",
        darkblue: "var(--primary-dark-blue)",
        lightblue: "var(--primary-light-blue)",
        chrome: {
          light: "var(--chrome-light)",
          medium: "var(--chrome-medium)",
          dark: "var(--chrome-dark)",
        },
        accent: {
          white: "var(--accent-white)",
          black: "var(--accent-black)",
        },
      },
    },
  },
  plugins: [],
};
