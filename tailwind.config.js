/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        "primary-text": '#fff',
        "secondary": '#A6FF96',
        'secondary-text': '#A6FF96'
      }
    },
  },
  plugins: [],
}

