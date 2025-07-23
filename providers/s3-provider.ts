import { joinURL } from 'ufo'
import type { ProviderGetImage } from '@nuxt/image'

export const getImage: ProviderGetImage = (src, { modifiers, baseURL } = {}) => {
  const { width, height, format, quality } = modifiers || {}

  // S3の直接URL生成
  if (!baseURL) {
    throw new Error('S3 baseURL is required')
  }

  // パラメータを使用した画像最適化（CloudFrontやImageKitを使用する場合）
  const params = new URLSearchParams()

  if (width) params.set('w', width.toString())
  if (height) params.set('h', height.toString())
  if (format) params.set('f', format)
  if (quality) params.set('q', quality.toString())

  const url = joinURL(baseURL, src)
  const queryString = params.toString()

  return {
    url: queryString ? `${url}?${queryString}` : url,
  }
}
