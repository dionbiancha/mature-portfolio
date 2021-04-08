module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      green_1: '#32FF84',
      green_2: 'rgb(50,255,132, 0.1)',
      white: '#FFFFFF',
      yellow: '#E1C116',
      gray_1: '#E5E5E5',
      gray_2: ' #7C7C7C',
      gray_3: '#191919',
      gray_4: '#131313',
      black: '#000000',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
