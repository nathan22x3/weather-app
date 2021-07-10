module.exports = {
  purge: [
    './public/index.html',
    './src/features/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/containers/**/*.{js,jsx}',
  ],
  theme: {
    colors: {
      gray: {
        100: '#e7e7eb',
        200: '#a09fb1',
        300: '#88869d',
        400: '#6e707A',
        500: '#616475',
      },
      blue: '#3c47e9',
      yellow: '#ffec65',
      'dark-blue': {
        100: '#585676',
        200: '#1e213a',
        300: '#100e1d',
      },
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: () => ({
        clould: "url('assets/images/cloud-background.png')",
      }),
    },
  },
};
