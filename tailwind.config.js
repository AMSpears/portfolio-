/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx,json}`,
    `./src/data/**/*.{json}`
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FCFC8B',
        'secondary': '#FFFFFF',
        'ja-primary': '#ACE4AA',
        'ja-secondary': '#FFFFFF',
        'cuup-primary': '#EDF2F4',
        'cuup-secondary': '#EDF2F4',
        'this-place-primary': '#EE4266',
        'this-place-secondary': '#F3FCF0',
        'faherty-primary': '#D1FAFF',
        'faherty-secondary': '#D1FAFF',
        'michael-stars-primary': '#5A3A37',
        'michael-stars-secondary': '#000000',
      },
      backgroundColor: {
        'primary': '#000000',
        'secondary': '#8A5A9A',
        'ja-bg-color': '#8A5A9A',
        'cuup-bg-color': '#DB3760',
        'this-place-bg-color': '#540D6E',
        'faherty-bg-color': '#157145',
        'michael-stars-bg-color': '#84C318'
      },
      backgroundImage: {
        'banner-gradient':'linear-gradient(331deg, #000 60.06%, #819400 136.75%)',
        'ja-background': 'url("../images/ja-background.jpg")',
        'cuup-background': 'url("../images/cuup-background.jpg")',
        'this-place-background': 'url("../images/this-place-background.jpg")',
        'faherty-background': 'url("../images/faherty-background.jpg")',
        'michael-stars-background': 'url("../images/michael-stars-background.jpg")'
      }
    },
  },
  plugins: [],
}
