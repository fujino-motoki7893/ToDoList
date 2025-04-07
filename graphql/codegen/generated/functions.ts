/* eslint-disable max-len */
import gql from 'graphql-tag'
import type * as Types from './types'

export type Unnamed_1_QueryVariables = Types.Exact<{ [key: string]: never }>

export type Unnamed_1_Query = { __typename?: 'Query', items: Array<{ __typename?: 'Item', content?: string | null, id: number, name?: string | null }> }

export const Document = gql`
    {
  items {
    content
    id
    name
  }
}
    `
