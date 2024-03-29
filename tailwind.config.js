/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.tsx", "./components/**/*.tsx"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
