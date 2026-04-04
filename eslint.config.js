// eslint.config.js
import globals from "globals";

export default [
    {
        // 1. Define which files to lint
        files: ["**/*.js"],
        // 2. Set the language options (browser environment, modern JS)
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
            globals: {
                ...globals.browser,
                ...globals.jquery,
            },
        },
        // 3. Define your custom rules
        rules: {
            "no-var": "error",
            "prefer-const": "error",
            "eqeqeq": ["error", "always"],
            "no-console": "warn",
        },
    },
    {
        // 4. Ignore node_modules and other specific files/folders
        ignores: ["node_modules/**", "**/jquery-*.min.js"],
    },
];
