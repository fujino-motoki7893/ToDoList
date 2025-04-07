import type { UseMutationOptions } from '@vue/apollo-composable'
import type { NAMED_OPERATIONS } from '~/graphql/codegen/generated/named-operations-object'

type NamedOperations = typeof NAMED_OPERATIONS
type QueryNames = keyof NamedOperations['Query']
type MutationNames = keyof NamedOperations['Mutation']
type RefetchQueriesConfig = Record<MutationNames, QueryNames[]>
type RefetchQueriesInverseConfig = Record<QueryNames, MutationNames[]>

type FetchResultBase = Partial<Record<MutationNames, unknown>>
type RefetchQueries = Extract<NonNullable<UseMutationOptions<FetchResultBase, unknown>['refetchQueries']>, Function>

/**
 * {@link [useMutation](https://apollo.vuejs.org/api/use-mutation)} のrefetchQueriesに設定するクエリ名を返す関数。
 * @note refetchQueriesInverseConfigを適宜更新してください。
 * @note このファイルはクライアントで実行するコードで参照せずnuxt.configで参照するため、一旦ビルド時に関数がシリアライズされる。よって、この関数外のオブジェクトを参照できない事に注意する。
 */
export const refetchQueriesResolver: RefetchQueries = (result) => {
  if (!result.data) return []

  const refetchQueriesConfig: RefetchQueriesConfig = (() => {
    const key = '_refetchQueriesConfig' as const
    if (window && window[key]) return window[key]

    // クエリ名をkeyとし、そのクエリのrefetchが必要になるmutation名の配列をvalueに設定する
    const refetchQueriesInverseConfig: RefetchQueriesInverseConfig = {}

    // mutation名をキーとし、そのmutationによってrefetchが必要になるquery名の配列をvalueに設定したobjectを生成
    const config = Object.entries(refetchQueriesInverseConfig).reduce((acc, cur) => {
      const [key, mutationNames] = cur
      const queryName = key as QueryNames

      mutationNames.forEach((name) => {
        const querySet = new Set(acc[name] ?? [])
        querySet.add(queryName)
        acc[name] = [...querySet]
      })

      return acc
    }, {} as RefetchQueriesConfig)

    // 設定を凍結し、書き換え不可能なプロパティとして追加
    Object.values(config).forEach(qs => Object.freeze(qs))
    Object.freeze(config)
    Object.defineProperty(window, key, {
      value: config,
      writable: false,
      configurable: false,
      enumerable: false,
    })
    return config
  })()

  // result.dataは、実行したmutation名をkeyとし、mutationで返されるデータをそのvalueに持つオブジェクトになっている。
  // あらかじめ定義しておいたmutation名とrefetchが必要なquery名のマッピングから、mutation名を元にrefetchの対象を取り出して返却する。
  const mutationName = Object.keys(result.data)[0] as MutationNames
  if (!mutationName) {
    console.error('mutation名が不明なためrefetchをskipします')
  }
  return refetchQueriesConfig[mutationName] ?? []
}

declare global {
  interface Window {
    /**
     * apolloのrefetchに関する設定
     * @deprecated 共通処理の中で参照するため直接参照しない
     * @note クライアントサイドで1回だけ初期化される設定値のキャッシュ
     */
    _refetchQueriesConfig?: RefetchQueriesConfig
  }
}
