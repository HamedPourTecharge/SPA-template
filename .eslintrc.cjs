module.exports = {
  parser: '@typescript-eslint/parser',
  // add the TypeScript parser
  plugins: ['svelte3', '@typescript-eslint' // add the TypeScript plugin
  ],
  overrides: [// this stays the same
  {
    files: ['*.svelte'],
    processor: 'svelte3/svelte3'
  }],
  rules: {
    // ...
    // "no-console": "error",
    "no-var": "error",
    "no-self-assign": "error",
    "no-unused-vars": "error",
    "no-alert": "error",
    "no-empty": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-extra-semi": "error",
    "semi": ["error", "never"],
    "comma-dangle": ["error", "never"]
  },
  ignorePatterns: ["dist/**/*"],
  settings: {
    'svelte3/typescript': () => require('typescript') // pass the TypeScript package to the Svelte plugin
    // // OR
    // 'svelte3/typescript': true, // load TypeScript as peer dependency
    // ...

  },
  extends: ["plugin:storybook/recommended"]
};