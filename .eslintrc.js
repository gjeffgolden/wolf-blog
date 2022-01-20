module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    indent: ["error", 2],
    semi: ["error", "never"],
    "max-len": ["error", { code: 80, ignoreStrings: true }],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"]
  }
}
