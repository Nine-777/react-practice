# React Practice App
React + Vite + TypeScript

## 主なディレクトリ構成
```sh
public/  # .............. 処理にかけないファイルまとめ
src/  # ................. 処理にかけるファイルまとめ
├── main.tsx # .......... エントリーポイント（React実行開始ファイル）
├── App.tsx  # .......... ルートコンポーネント
├── pages/  # ........... ページコンポーネント
├── api/  # ............. WebAPI関連の処理まとめ
├── features/  # ........ 機能単位で管理するファイルまとめ
│   ├── comment/  # ..... コメント機能のファイルまとめ
│   └── post/  # ........ 投稿機能のファイルまとめ
├── components/  # ...... 汎用的なコンポーネントまとめ
├── types/  # ........... 汎用的な型定義まとめ
├── lib/  # ............. 汎用的な処理まとめ
└── vite-env.d.ts  # .... Viteの特殊な型定義や環境変数をTypeScriptに宣言するファイル
```

## Prettier関連の設定
[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)をインストールすると、プロジェクトのワークスペース設定（`.vscode/settings.json`）が自動的に適用されます。

### `.vscode/settings.json` の設定内容
- `editor.defaultFormatter`： プロジェクト全体のデフォルトフォーマッターをPrettierに設定
- `prettier.requireConfig`： Prettierの設定ファイルを必ず使用する
- `prettier.useEditorConfig`： プロジェクトのPrettier設定を優先する
- `editor.formatOnSave`： チーム内で保存時の自動整形を統一
- 言語別設定（JavaScript / TypeScript / json）： 各ファイルタイプでPrettierを優先使用

### 実行コマンドの設定
`package.json`の`"scripts"`に下記コマンドを追加済みです。

```sh
# すべてのファイルの整形を実行
yarn format

# 整形が必要なファイルがあるかチェック（CI用）
yarn format:check
```