import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: { react: { version: '18.3' } },
  rules: {
    'react/jsx-no-target-blank': 'off'
  },
}
