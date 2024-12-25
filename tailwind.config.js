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
      },
      boxShadow: {
        'custom-cyan': '0px -4px 6px rgba(6, 182, 212, 0.3), 0px 4px 6px rgba(6, 182, 212, 0.3), -4px 0px 6px rgba(6, 182, 212, 0.3), 4px 0px 6px rgba(6, 182, 212, 0.3)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require("flowbite-react/tailwind").plugin(),
  ],
}