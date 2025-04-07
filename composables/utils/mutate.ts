import type { UseMutationOptions, UseMutationReturn } from '@vue/apollo-composable'

type BaseReq = Record<string, unknown>
type MutationComposable<
  TRes, TReq extends BaseReq,
> = (
  options?: UseMutationOptions<TRes, TReq>
) => UseMutationReturn<TRes, TReq>

type ApolloError = NonNullable<UseMutationReturn<unknown, BaseReq>['error']['value']>

/**
 * useMutationを単なる非同期関数に変換
 * @returns mutationの結果のPromiseを返す関数。エラーに関しては、
 * - handleErrorの引数を渡さない場合は、例外を投げる
 * - handleErrorの引数を渡す場合は、例外を投げずにコールバック内で処理する。コールバックの場合は型付きのエラーを利用可能
 */
export const createMutationPromiseFunc = <TRes, TReq extends BaseReq>(
  mutationComposable: MutationComposable<TRes, TReq>,
) => {
  /**
   * mutationを実行する非同期関数
   * @throws GraphQLError
   */
  function mutation(variables: TReq): Promise<TRes>
  /**
   * mutationを実行する非同期関数。例外は投げず、コールバックで処理する。
   */
  function mutation(variables: TReq, handleError: (error: ApolloError) => void): Promise<TRes | undefined>
  async function mutation(variables: TReq, handleError?: (error: ApolloError) => void) {
    const { mutate, onError } = mutationComposable(variables)

    try {
      return await new Promise<TRes | undefined>((resolve, reject) => {
        onError((error) => {
          reject(error)
        })
        mutate(variables).then((res) => {
          if (res && res.data) {
            resolve(res.data)
          }
          else {
            resolve(undefined)
          }
        })
      })
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

  return mutation
}
