/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '560px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px'
    },
    fontFamily: {
      'sans-serif': 'futura-pt',
      'sans-serif': 'acumin-pro-wide'
    },
    extend: {
      colors: {
        darkBG: '#181818',
        lightText: '#F4F4F4',
        darkerText: '#606060',
        darkText: '#282828',
        baseColor: '#ADFF00',
        hipHopColor: '#81F4D1',
        raveColor: '#A809E5',
        houseColor: '#FF0000',
        dancehallColor: '#FEFE00'
      }
    }
  },
  plugins: []
}
