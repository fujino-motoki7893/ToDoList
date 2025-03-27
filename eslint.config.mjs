import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // プロジェクトのコーディングルールを追加する
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: {
      // コードの長さを1行あたり120文字以内に制限
      'max-len': ['error', { code: 120 }],
      // 複数の連続した空行を禁止し、最大1行とする
      'no-multiple-empty-lines': ['error', { max: 1 }],
    },
  },
  // フォーマッタのカスタムルール
  stylistic.configs.customize({
    indent: 2, // インデントはスペース2
  }),
)
