/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#FCFC8B',
        'secondary': '#FFFFFF',
      },
      backgroundColor: {
        'primary': '#000000',
      },
      backgroundImage: {
        'banner-gradient':'linear-gradient(331deg, #000 60.06%, #819400 136.75%)',
      }
    },
  },
  plugins: [],
}
