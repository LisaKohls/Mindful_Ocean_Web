/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        colors: {
            'primary': '#163b49',
            'white': '#ffffff',
        },
        extend: {
            fontFamily:{
                'redhat' : ['Red Hat Display', 'sans-serif']
            },
            backgroundImage: {
                'hero-pattern': "url('./resources/Prototype_scroll.png')",
            },
        },
    },
    plugins: [],
}
