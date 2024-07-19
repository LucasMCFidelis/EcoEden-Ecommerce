/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: 'url(/images/sale.png)',
        offer: 'url(/images/offer.png)',
      },
    },
  },
  plugins: [],
}