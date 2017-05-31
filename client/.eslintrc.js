module.exports = {
  extends: 'standard',
  plugins: ['standard', 'promise', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'no-useless-constructor': 0,
    'space-before-function-paren': 0
  }
}
