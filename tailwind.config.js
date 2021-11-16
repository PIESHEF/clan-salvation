module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blurple': '#5865F2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
