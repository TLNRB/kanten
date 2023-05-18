/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '560px',
      md: '768px',
      lg: '1060px',
      xl: '1200px',
      xxl: '1440px',
      xxxl: '1600px'
    },
    fontFamily: {
      'sans-serif': 'futura-pt',
      'sans-serif': 'acumin-pro-wide'
    },
    extend: {
      colors: {
        darkBG: '#181818',
        taintedBG: '#111111',
        lightText: '#F4F4F4',
        normalText: '#dddddd',
        darkerText: '#606060',
        darkText: '#282828',
        baseColor: '#1ECECE',
        hipHopColor: '#81F4D1',
        raveColor: '#A809E5',
        houseColor: '#FF0000',
        dancehallColor: '#FEFE00'
      }
    }
  },
  plugins: []
}
