/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                poppins: 'Poppins',
            },
            colors: {
                dark: '#0A0A0A',
                darkBody: '#121212',
            },
        },
    },
    plugins: [],
}
