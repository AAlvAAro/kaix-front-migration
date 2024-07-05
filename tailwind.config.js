/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors:{
                'primary': '#ffffff',
                'green': '#93F775',
                'darkGreen': '#164e05',
                'purple':'#9E70D8',
                'background': '#000000',
                'card':'#222222',
                'cardHover':'#4D4D4D',
                'lightTeal':'#94DBDA',
                'orange':'#AE563A',
                'inputBackground':'#f2f2f2',
                'inputText':'#8a8a8a',
                'chartLine':'#E4E4E433'
              },
        },
    },
    plugins: [],
}