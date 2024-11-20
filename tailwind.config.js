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
        'light-blue':'#4990E5',
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
        'yellow': '#FCFC8B',
        'ja-bg-color': '#8A5A9A',
        'cuup-bg-color': '#DB3760',
        'this-place-bg-color': '#540D6E',
        'faherty-bg-color': '#157145',
        'michael-stars-bg-color': '#84C318',
        'light-purple': '#ECBFFF',
        'light-green': '#3FB788',
        'light-blue': '#4990E5',
        'light-yellow': '#E5FF36',
      },
      backgroundImage: {
        'banner-gradient':'linear-gradient(331deg, #000 60.06%, #819400 136.75%)',
        'footer-gradient':'linear-gradient(155deg, rgba(0, 0, 0, 0.20) 23.13%, rgba(229, 255, 54, 0.20) 108.74%)',
        'about-background': 'linear-gradient(0deg, #4990E5 0%, #E5FF36 100%)',
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
