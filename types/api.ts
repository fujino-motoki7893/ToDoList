// 共通のAPIレスポンス型
export interface ApiResponse<T = any> {
  data: T
  message?: string
  status: number
}

// エラーレスポンス型
export interface ApiError {
  message: string
  status: number
  errors?: Record<string, string[]>
}

// Item関連の型
export interface Item {
  id: number
  name: string | null
  content: string | null
}

export interface CreateItemRequest {
  name?: string
  content?: string
}

export interface UpdateItemRequest {
  name?: string
  content?: string
}

// ページネーション型
export interface PaginationMeta {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: PaginationMeta
}
