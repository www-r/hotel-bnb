module.exports = {
  plugins: ['import', 'prettier', 'react', 'react-hooks', 'jsx-a11y'], // 설치한 추가적인 규칙 설정
  extends: ['prettier'],
  env: {
    browser: true, // 실행 환경에 대해서 등록
    node: true,
    es2021: true,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },

  parserOptions: { ecmaVersion: 2020 },
  projectDependencies: false,
}
