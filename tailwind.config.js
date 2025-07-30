/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'sidebar-gradient': 'linear-gradient(to bottom, #FEF3E9, #FEF4EA, #FCEADF, #F9DED3, #F8E6DD)',
      },
      colors: {
        sidebarStart: '#FEF3E9',
        sidebarMid: '#FEF4EA',
        sidebarEnd: '#F8E6DD',
        menuActive: '#FFD7C0',
        menuHover: '#E7D2CE',
        customGreen: "#26BD6C",
        customRed: "#E6483D",
        customYellow: "#FAB005",
      },
    },
  },
  plugins: [],
}
