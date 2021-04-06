module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      green_1: '#32FF84',
      white: '#FFFFFF',
      yellow: '#E1C116',
      gray_1: '#E5E5E5',
      black: '#000000'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
