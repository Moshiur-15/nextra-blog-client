/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    require("flowbite-react/tailwind").content(),
  ],
  theme: {
    extend: {
      fontFamily:{
        lota: ["Lato", 'sans-serif'],
        lora: ["Lora", "serif"],
        oswald: ["Oswald", "sans-serif"],
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
    require("flowbite-react/tailwind").plugin(),
  ],
}