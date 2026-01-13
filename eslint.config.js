import react from "eslint-plugin-react";
import jsdoc from "eslint-plugin-jsdoc";

export default [
  {
    files: ["**/*.jsx", "**/*.js"],
    plugins: {
      react,
      jsdoc
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
  "react/style-prop-object": "error",

  "no-restricted-syntax": [
    "error",
    {
      "selector": "CallExpression[callee.name='useState'] Literal",
      "message": "Inline literals in useState are not allowed. Use a named constant."
    }
  ],

  "camelcase": ["error", { "properties": "always" }],

  "jsdoc/require-jsdoc": [
    "error",
    {
      "publicOnly": true,
      "require": {
        "FunctionDeclaration": true,
        "ClassDeclaration": true
      }
    }
  ],

  "complexity": ["error", 10]
}
  }
];