//#const defaultTheme = require('tailwindcss/defaultTheme')
//import defaultTheme from 'tailwindcss/defaultTheme'
export default {
    content: ["./index.html", "./src/**/*.{svelte,js,ts}"], // for unused CSS
    purge: false,
    theme: {
        extend: {
            colors: {
                'green-sr': '#008148',
                'yellow-sr': '#EDF060',
                'amber-sr': '#FF9B26',
                'red-sr': '#FF1D1D',
                'darkred-sr': '#BF0101',
                'blue-dark-sr': '#28303D',
                'grey-dark-sr': '#28303d',
                'orange-sr': '#E69638',
                'grey-background': '#EDEDED',
                'betting-tier': '#D7DA66',
                'regions': '#1A5C96',
                'days': '#E66BC6',
                'white-border': '#E6E6E6',
            },
            fontFamily: {
                'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', ],
                'serif': ['ui-serif', 'Georgia', ],
                'mono': ['ui-monospace', 'SFMono-Regular', ],
            },
        },
        variants: {
            extend: {},
        }
    }
}

