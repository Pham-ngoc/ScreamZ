/** @type {import('tailwindcss').Config} */
export default {
  viewer: false,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {

    },
  },
  darkMode: 'class',

  plugins: [
    require('flowbite/plugin')
  ],
}

