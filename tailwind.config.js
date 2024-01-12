/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px", // Add your custom breakpoint
      },
      fontSize: {
        xxs: "0.5rem",
        xxxs: "0.25rem",
        // Add your custom text sizes
      },
    },
  },
  plugins: [],
};
