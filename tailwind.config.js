/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'logo-pattern': 'url(https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png)'
      },
      fontSize:{
        'xxs':".65rem"
      },
      colors:{
        brand:'#0095f6',
        facebook:'#385185',
        link:'#00376b'
      }
    },
  },
  plugins: [],
}
