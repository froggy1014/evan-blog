module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  extends: ["airbnb", "prettier"],
  plugins: ["react-hooks", "header"],
  ignorePatterns: [
    "build",
    "docs/api",
    "node_modules",
    "docs/_static",
    "static",
  ],
  rules: {
    "import/no-unresolved": [
      2,
      {
        ignore: ["^@theme", "^@docusaurus", "^@generated"],
      },
    ],
    "import/extensions": 0,
    "react/jsx-filename-extension": 0,
    "react-hooks/rules-of-hooks": 2,
    "react/prop-types": 0,
    "react/function-component-definition": [
      1,
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function",
      },
    ],
  },
};
