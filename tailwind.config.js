/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Afacad Flux", "serif"],
        alata: ["Alata", "sans-serif"],
        nats: ["Afacad Flux", "sans-serif"],
        josefin: ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
