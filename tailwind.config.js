/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    "./node_modules/tw-elements/dist/js/**/*.js",
    'node_modules/preline/dist/*.js',
],
  
  theme: {
    extend: {},
  },
  plugins: [
    require("preline/plugin"),
    require('flowbite/plugin'),
    require("daisyui"),
    require("tw-elements/dist/plugin.cjs"),

  ]
}

