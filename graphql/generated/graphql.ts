/* eslint-disable max-len */
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddItemInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AddItemPayload = {
  __typename?: 'AddItemPayload';
  item: ItemDto;
};

export type Item = {
  __typename?: 'Item';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ItemDto = {
  __typename?: 'ItemDTO';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addItem: AddItemPayload;
};


export type MutationAddItemArgs = {
  input: AddItemInput;
};

export type Query = {
  __typename?: 'Query';
  items: Array<Item>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'Query', items: Array<{ __typename?: 'Item', content?: string | null, id: number, name?: string | null }> };


export const Document = gql`
    {
  items {
    content
    id
    name
  }
}
    `;