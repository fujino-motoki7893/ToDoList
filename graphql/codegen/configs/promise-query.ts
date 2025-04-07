import type { CodegenConfig } from '@graphql-codegen/cli'
import { withLog } from '../hook-util'
// 自動生成ファイルに依存するため、最初にエラーになり実行できない場合は named-operations-object の自動生成を行った後実行してください
import { NAMED_OPERATIONS } from '../generated/named-operations-object'
import { schema } from './shared/schema'

const queryNames = Object.values(NAMED_OPERATIONS.Query)

const outputPath = 'graphql/codegen/generated/promise-query.ts'

const config: CodegenConfig = {
  overwrite: true,
  schema,
  generates: {
    [outputPath]: {
      plugins: [
        './graphql/codegen/plugins/generateQueryPromiseFuncs.cjs',
      ],
    },
  },
  config: {
    queryNames,
  },
  hooks: {
    afterAllFileWrite: [
      withLog(`eslint --fix ./${outputPath}`),
    ],
  },
}

export default config
