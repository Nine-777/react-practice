// package.jsonに"type": "module"と設定されている場合は今回のように.cjs拡張子を付ける必要がある

/** @type {import("prettier").Config} */
const config = {
  // 配列やオブジェクトの最後の要素の後にもカンマを付ける
  trailingComma: 'all',
  // インデントのスペース数
  tabWidth: 2,
  // タブ文字の代わりにスペースを使用
  useTabs: false,
  // 文末にセミコロンを付与
  semi: true,
  // 文字列にシングルクォートを使用
  singleQuote: true,
  // JSXではダブルクォートを使用
  jsxSingleQuote: false,
  // アロー関数の引数を常に括弧で囲む
  arrowParens: 'always',
  // 1行の最大文字数
  printWidth: 100,
  // オブジェクトリテラルの括弧の間にスペースを入れる。例えば{ foo: bar }のような形式を採用。
  bracketSpacing: true,
  // 特定のファイルタイプに対する個別設定
  overrides: [
    {
      // HTMLファイルは長い行を許容
      files: '*.html',
      options: {
        printWidth: 360,
      },
    },
  ],
};

module.exports = config;
