/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        nats: ["Noto Sans", "sans-serif"],
        josefin: ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
