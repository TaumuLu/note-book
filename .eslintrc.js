module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier', 'jest', 'simple-import-sort'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'import/no-anonymous-default-export': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/prefer-stateless-function': 0,
        'no-use-before-define': 0,
        'import/no-extraneous-dependencies': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/prop-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        'no-await-in-loop': 0,
        'no-restricted-syntax': 0,
        'interface-name': [0, 'never-prefix'],
        'import/extensions': [
          2,
          'ignorePackages',
          {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/prefer-default-export': 0,
        'class-methods-use-this': 0,
        'no-useless-constructor': 0,
        'import/no-cycle': 0,
        'react/destructuring-assignment': 0,
        'react/require-default-props': 0,
      },
    },
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    'jest/globals': true,
  },
  // settings: {
  //   'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //     },
  //   },
  // },
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
          // 这里是把 import './*.scss' 自动排序到最后。其它排序规则顺序都保持和依赖包里 defaultGroups 一样
          // 解决父组件样式覆盖不了子组件样式问题。如果 import './*.scss' 排在第一，子组件样式优先级会高于父组件
          // Side effect imports.
          ['^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
}
