// var tailwindcss = require('tailwindcss')
module.exports = {
  plugins: [
    require('postcss-cssnext'),
    // tailwindcss('./tailwind-config.js'),
    require('postcss-smart-import')
  ]
}
