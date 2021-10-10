module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:nuxt/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  ignorePatterns: ["*.config.js", ".eslintrc.js", "test/*"],
  rules: {
    indent: ["error", 2],
    "no-console": 2,
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    semi: ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    "prettier/prettier": ["off"],
  },
};
