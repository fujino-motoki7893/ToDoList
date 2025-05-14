import type { Item } from '~/graphql/generated/graphql'
import { mockData } from '@/repositories/domains/getItems'

const useItemListState = () => {
  const itemList = ref<Item[]>(mockData)

  // モックデータに編集状態と編集用フィールドを追加
  const items = ref(mockData.map(item => ({
    ...item,
    isEditing: false,
    editName: item.name,
    editContent: item.content,
  })))

  // 削除機能の実装
  const deleteItem = (id: number) => {
  // 確認ダイアログを表示
    if (confirm('このアイテムを削除してもよろしいですか？')) {
    // 該当IDのアイテムを配列から削除
      items.value = items.value.filter(item => item.id !== id)
    }
  }

  // 編集開始
  const startEditing = (item) => {
  // 編集前の値を保存
    item.editName = item.name
    item.editContent = item.content
    item.isEditing = true
  }

  // 編集保存
  const saveEditing = (item) => {
    item.name = item.editName
    item.content = item.editContent
    item.isEditing = false
  }

  // 編集キャンセル
  const cancelEditing = (item) => {
    item.isEditing = false
  }

  return {
    itemList,
    items,
    deleteItem,
    startEditing,
    saveEditing,
    cancelEditing,
  }
}

const useItemListStateKey: InjectionKey<ReturnType<typeof useItemListState>>
  = Symbol('useItemListStateKey')

// provide関数
export const provideItemList = () => {
  const state = useItemListState()
  provide(useItemListStateKey, state)
  return state
}

// inject関数
export const injectItemList = () => {
  const state = inject(useItemListStateKey)
  if (!state) throw new Error('No ItemList Key')
  return state
}
