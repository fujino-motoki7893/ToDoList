import type { CodegenConfig } from '@graphql-codegen/cli'
import * as dotenv from 'dotenv'

// .envファイルを読み込む
dotenv.config()

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NUXT_PUBLIC_BACKEND_DOMAIN || '',
  documents: './graphql/**/*.graphql',
  generates: {
    './graphql/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-vue-apollo',
        {
          add: {
            content: '/* eslint-disable max-len */',
          },
        },
      ],
      config: {
        withCompositionFunctions: true,
        vueCompositionApiImportFrom: 'vue',
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
