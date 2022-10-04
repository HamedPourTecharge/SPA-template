const preprocess = require('svelte-preprocess');

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        // {
        //   name: "@storybook/addon-postcss",
        //   options: {
        //     postcssLoaderOptions:{
        //       cssLoaderOptions: {
        //         // When you have splitted your css over multiple files
        //         // and use @import('./other-styles.css')
        //         importLoaders: 1,
        //       },
        //       implementation: require("postcss"),
        //     }
        //   }
        // },
    ],
    "framework": "@storybook/svelte",
    "core": {
        "builder": "@storybook/builder-vite"
    },
    async svelteOptions() {
        let promisePreprocess = await import('../svelte.config.js').then((module) => {
            return module.default.preprocess;
        })
        return {
            "preprocess": promisePreprocess
        }
    },
    "features":
        {
            "storyStoreV7":
                true
        }
    ,
    "staticDirs":
        ["../public"],
    async viteFinal(config, {configType}) {
        config.build = {
            minify: false,
            sourcemap: true,
        }
        return config;
    }
}