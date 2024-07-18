/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: 'url(/public/images/sale.png)',
        offer: 'url(/public/images/offer.png)',
      },
    },
  },
  plugins: [],
}