// @ts-check

// Severity Types
const OFF = 0;
// const WARN = 1;
const ERROR = 2;

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'standard-with-typescript',
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'next/core-web-vitals',
    'plugin:deprecation/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [{ name: 'Link', linkAttribute: 'href' }],
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
    '@typescript-eslint/consistent-type-imports': [
      ERROR,
      { fixStyle: 'separate-type-imports' },
    ],
    '@typescript-eslint/explicit-function-return-type': OFF,
    'import/first': ERROR,
    'import/newline-after-import': ERROR,
    'import/no-duplicates': ERROR,
    'jsx-a11y/anchor-has-content': [ERROR, { components: ['Link'] }],
    'react/jsx-no-leaked-render': [ERROR, { validStrategies: ['ternary'] }],
    'simple-import-sort/exports': ERROR,
    'simple-import-sort/imports': ERROR,
  },
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': OFF,
      },
    },
  ],
};
