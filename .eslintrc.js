module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:nuxt-recommended",
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "prettier"
    ],
    "rules": {
        indent: ["error", 2],
        "nuxt-no-cjs-in-config": "off",
        "no-console": 2,
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true,
                avoidEscape: true,
            }
        ],
        semi: ["error", "always"],
        "comma-dangle": ["error", "only-multiline"],
    }
};
