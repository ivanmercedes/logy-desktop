/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'logy-browm': '#12131a',
        'logy-green': '#72d364',
        'logy-red': '#d36364',
        'logy-yellow': '#d3bb64',
        'logy-orange': '#FBDD73',
        'logy-blue': '#629dd4',
        'logy-card': '#23242A',
      },
    },
  },
  plugins: [],
}
