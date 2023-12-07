/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx}', './index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
