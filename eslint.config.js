// eslint.config.js (eller .eslintrc.js)

export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  // Lägg in prettier sist i extends, så inaktiveras ESLint-regler som krockar
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: { react: { version: '18.3' } },
  rules: {
    'react/jsx-no-target-blank': 'off',
  },
}
