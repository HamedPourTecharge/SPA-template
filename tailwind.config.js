//#const defaultTheme = require('tailwindcss/defaultTheme')
//import defaultTheme from 'tailwindcss/defaultTheme'
export default {
    content: ["./index.html", "./src/**/*.{svelte,js,ts}"], // for unused CSS
    purge: false,
    theme: {
        extend: {
            colors: {
            },
            fontFamily: {
                'sans': ['Montserrat', 'ui-sans-serif', 'system-ui' ],
                'serif': ['ui-serif', 'Georgia' ],
                'mono': ['ui-monospace', 'SFMono-Regular' ]
            }
        },
        variants: {
            extend: {}
        }
    }
}

