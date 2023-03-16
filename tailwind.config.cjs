/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'display': ['Fjalla One', 'sans-serif'],
      'body': ['"Open Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        'brandYellow': "#FFDF35",
        'brandRed': "#D82939",
        'brandTeal': "#15BDA8",
      },
      backgroundImage: {
        'hero': "url('/hero.jpg')",
      }
    }
  },
  plugins: []
};