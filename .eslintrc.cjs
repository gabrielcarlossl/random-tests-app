module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "no-unused-expressions": 0,
      "react/prop-types": [2, { "skipUndeclared": true }],
      "no-console": ["warn"],
      "jsx-quotes": ["error", "prefer-single"],
      "react/no-unsafe": ["error"],
      "no-use-before-define": "off",
      "no-unused-vars": "off"
  },
}
