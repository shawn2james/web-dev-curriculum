module.exports = {
  purge: {
    enabled: true,
    content: ['./public/index.html', './public/index.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },

      fontSize: {
        mammoth: ['9rem', { lineHeight: '1'}],
      },

      fontFamily: {
        body: ['"Nunito"'],
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
