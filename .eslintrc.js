module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // indent: ['error', 2],
    // 'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    // semi: ['error', 'never'],
    'react/prop-types': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['.eslintrc.js', 'gatsby-node.js', 'gatsby-config.js'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
}
