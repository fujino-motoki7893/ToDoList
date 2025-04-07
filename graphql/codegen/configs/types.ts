import type { CodegenConfig } from '@graphql-codegen/cli'
import { withLog } from '../hook-util'
import { schema } from './shared/schema'

const outputPath = 'graphql/codegen/generated/types.ts'

const config: CodegenConfig = {
  overwrite: true,
  schema,
  documents: 'graphql/graphqls/**/*.graphql',
  generates: {
    [outputPath]: {
      plugins: [
        'typescript',
        {
          add: {
            // 自動生成されたコードの一行の長さと、コメントに含まれる全角空白を無視
            content: '/* eslint-disable max-len, no-irregular-whitespace */',
          },
        },
      ],
      config: {
        // GraphQLのScalarsにない型定義をここで追加
        scalars: {
          Byte: 'number',
          Date: 'Date',
          DateTime: 'string',
          Long: 'number',
          TimeSpan: 'string',
          UUID: 'string',
          Decimal: 'number',
        },
        avoidOptionals: true,
        skipTypename: false,
        exportSchemaAst: true,
        dedupeFragments: true,
        defaultScalarType: 'unknown',
      },
    },
  },
  hooks: {
    afterAllFileWrite: [
      withLog(`eslint --fix ./${outputPath}`),
    ],
  },
}

export default config
