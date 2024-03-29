const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        variants: {},
        plugins: [],
    }
}