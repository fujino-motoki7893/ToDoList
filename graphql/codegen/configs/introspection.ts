import type { CodegenConfig } from '@graphql-codegen/cli'
import { withLog } from '../hook-util'
import { schema } from './shared/schema'

const outputPath = 'graphql/codegen/generated/introspection.json'

const config: CodegenConfig = {
  overwrite: true,
  schema,
  documents: 'graphql/graphqls/**/*.graphql',
  generates: {
    [outputPath]: {
      plugins: [
        'introspection',
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
        withCompositionFunctions: true,
        vueCompositionApiImportFrom: 'vue',
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
