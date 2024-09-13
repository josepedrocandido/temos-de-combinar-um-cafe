// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#B40303', // Cor primária personalizada
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
