/* eslint-disable max-len */
import type { CodegenConfig } from '@graphql-codegen/cli'
import { withLog } from '../hook-util'
import { schema } from './shared/schema'

const outputPath = 'graphql/codegen/generated/named-operations-object.ts'

const config: CodegenConfig = {
  overwrite: true,
  schema,
  documents: 'graphql/graphqls/**/*.graphql',
  generates: {
    [outputPath]: {
      plugins: [
        'named-operations-object',
        {
          add: {
            content: `/* eslint-disable max-len */

/**
  GraphQLのQuery, Mutationの名前のEnum。 {@link [named-operations-object](https://the-guild.dev/graphql/codegen/plugins/typescript/named-operations-object)} pluginを利用して自動生成。
*/`,
          },
        },
      ],
    },
  },
  config: {
    identifierName: 'NAMED_OPERATIONS',
    useConsts: true,
  },
  hooks: {
    afterAllFileWrite: [
      withLog(`eslint --fix ./${outputPath}`),
    ],
  },
}

export default config
