import type { useLazyQuery } from '@vue/apollo-composable'

type LazyQueryReturn<T, V extends Record<string, unknown>> = ReturnType<typeof useLazyQuery<T, V>>
export const waitLazyQuery = async <T, V extends Record<string, unknown>>(
  lazyQueryReturn: LazyQueryReturn<T, V>,
): Promise<[T | null, Omit<LazyQueryReturn<T, V>, 'load'>]> => {
  const { load, ...otherReturn } = lazyQueryReturn
  const result = await (load() || new Promise<T | null>(r => r(null)))
  return [result, otherReturn]
}
