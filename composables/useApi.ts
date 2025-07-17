import type { ApiResponse, ApiError } from '~/types/api'

export const useApi = () => {
  const config = useRuntimeConfig()

  const apiCall = async <T>(
    endpoint: string,
    options: {
      method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
      body?: any
      query?: Record<string, any>
      headers?: Record<string, string>
    } = {},
  ): Promise<T> => {
    try {
      const response = await $fetch<any>(endpoint, {
        baseURL: config.public.apiBase,
        method: options.method || 'GET',
        body: options.body,
        query: options.query,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        onResponseError({ response }) {
          throw createError({
            statusCode: response.status,
            statusMessage: response._data?.message || 'API Error',
          })
        },
      })

      // ApiResponse形式かどうかを判定
      if (response && typeof response === 'object' && 'data' in response) {
        return response.data as T
      }

      // 直接データが返される場合
      return response as T
    }
    catch (error: any) {
      console.error('API Error:', error)
      throw error
    }
  }

  return {
    get: <T>(endpoint: string, query?: Record<string, any>) =>
      apiCall<T>(endpoint, { method: 'GET', query }),

    post: <T>(endpoint: string, body?: any) =>
      apiCall<T>(endpoint, { method: 'POST', body }),

    put: <T>(endpoint: string, body?: any) =>
      apiCall<T>(endpoint, { method: 'PUT', body }),

    delete: <T>(endpoint: string) =>
      apiCall<T>(endpoint, { method: 'DELETE' }),
  }
}
