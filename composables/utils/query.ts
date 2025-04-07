import type { UseQueryOptions, UseQueryReturn } from '@vue/apollo-composable'

type BaseReq = Record<string, unknown>
type QueryComposable<
  TRes, TReq extends BaseReq,
> = (
  req: MaybeRefOrGetter<TReq>, options?: MaybeRefOrGetter<UseQueryOptions<TRes, TReq>>
) => UseQueryReturn<TRes, TReq>

type ApolloError = NonNullable<UseQueryReturn<unknown, BaseReq>['error']['value']>

/**
 * useQueryを単なる非同期関数に変換
 * @returns queryの結果のPromiseを返す関数。エラーに関しては、
 * - handleErrorの引数を渡さない場合は、例外を投げる
 * - handleErrorの引数を渡す場合は、例外を投げずにコールバック内で処理する。コールバックの場合は型付きのエラーを利用可能
 */
export const createQueryPromiseFunc = <TRes, TReq extends BaseReq>(
  queryComposable: QueryComposable<TRes, TReq>,
) => {
  /**
   * queryを実行する非同期関数
   * @throws GraphQLError
   */
  function query(variables: TReq): Promise<TRes>
  /**
   * queryを実行する非同期関数。例外は投げず、コールバックで処理する。
   */
  function query(variables: TReq, handleError: (error: ApolloError) => void): Promise<TRes | undefined>
  async function query(variables: TReq, handleError?: (error: ApolloError) => void) {
    const { onResult, onError, stop } = queryComposable(variables)

    try {
      return await new Promise<TRes>((resolve, reject) => {
        onResult((result) => {
          resolve(result.data)
        })
        onError((error) => {
          reject(error)
        })
      }).finally(stop)
    }
    catch (e) {
      // 例外を投げるかどうかを制御
      if (handleError) {
        handleError(e as ApolloError)
      }
      else {
        throw e
      }
    }
  }

  return query
}
