import type { CodegenConfig } from '@graphql-codegen/cli'
import * as dotenv from 'dotenv'

// .envファイルを読み込む
dotenv.config()

const BACKEND_URL = process.env.NUXT_PUBLIC_BACKEND_DOMAIN || ''

export const schema: NonNullable<CodegenConfig['schema']> = [
  {
    [`${BACKEND_URL}`]: {
      headers: {},
    },
  },
]
