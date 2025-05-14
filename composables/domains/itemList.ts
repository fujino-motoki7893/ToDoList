import type { Item } from '~/graphql/generated/graphql'
import { mockData } from '@/repositories/domains/getItems'

/**
 * アイテムリストの状態管理を行うコンポジション関数
 *
 * @returns アイテムリストの状態と操作メソッドを含むオブジェクト
 */
const useItemListState = () => {
  /** 元のアイテムリスト */
  const itemList = ref<Item[]>(mockData)

  /**
   * モックデータに編集状態と編集用フィールドを追加したアイテムリスト
   * 各アイテムに isEditing, editName, editContent プロパティを追加
   */
  const items = ref(mockData.map(item => ({
    ...item,
    isEditing: false,
    editName: item.name,
    editContent: item.content,
  })))

  /**
   * アイテムを削除する関数
   *
   * @param {number} id - 削除するアイテムのID
   * @example
   * // ID=1のアイテムを削除
   * deleteItem(1);
   */
  const deleteItem = (id: number) => {
    // 確認ダイアログを表示
    if (confirm('このアイテムを削除してもよろしいですか？')) {
      // 該当IDのアイテムを配列から削除
      items.value = items.value.filter(item => item.id !== id)
    }
  }

  /**
   * アイテムの編集モードを開始する関数
   *
   * @param {Item} item - 編集を開始するアイテム
   * @example
   * // itemの編集モードを開始
   * startEditing(item);
   */
  const startEditing = (item) => {
    // 編集前の値を保存
    item.editName = item.name
    item.editContent = item.content
    item.isEditing = true
  }

  /**
   * 編集中のアイテムの変更を保存する関数
   *
   * @param {Item} item - 保存するアイテム
   * @example
   * // 編集中のitemの変更を保存
   * saveEditing(item);
   */
  const saveEditing = (item) => {
    item.name = item.editName
    item.content = item.editContent
    item.isEditing = false
  }

  /**
   * アイテムの編集をキャンセルする関数
   *
   * @param {Item} item - 編集をキャンセルするアイテム
   * @example
   * // itemの編集をキャンセル
   * cancelEditing(item);
   */
  const cancelEditing = (item) => {
    item.isEditing = false
  }

  /**
 * 新しいアイテムを追加する関数
 *
 * @param {string} name - 追加するアイテムの名前
 * @param {string} content - 追加するアイテムの内容
 * @example
 * // 新しいアイテムを追加
 * addItem('新しいタスク', 'タスクの詳細');
 */
  const addItem = (name: string, content: string) => {
  // 新しいIDを生成（既存の最大ID + 1）
    const newId = items.value.length > 0
      ? Math.max(...items.value.map(item => item.id)) + 1
      : 1

    // 新しいアイテムを作成
    const newItem = {
      id: newId,
      name,
      content,
      completed: false,
      isEditing: false,
      editName: name,
      editContent: content,
    }

    // アイテムリストに追加
    items.value.push(newItem)
  }

  return {
    itemList,
    items,
    deleteItem,
    startEditing,
    saveEditing,
    cancelEditing,
    addItem,
  }
}

/** useItemListStateの戻り値の型を持つInjectionKey */
const useItemListStateKey: InjectionKey<ReturnType<typeof useItemListState>>
  = Symbol('useItemListStateKey')

/**
 * アイテムリストの状態をprovideする関数
 *
 * @returns useItemListState関数の戻り値
 * @example
 * // コンポーネントのsetup内で状態をprovide
 * const itemListState = provideItemList();
 */
export const provideItemList = () => {
  const state = useItemListState()
  provide(useItemListStateKey, state)
  return state
}

/**
 * アイテムリストの状態をinjectする関数
 *
 * @returns useItemListState関数の戻り値
 * @throws {Error} useItemListStateKeyがprovideされていない場合
 * @example
 * // 子コンポーネントのsetup内で状態をinject
 * const { items, deleteItem } = injectItemList();
 */
export const injectItemList = () => {
  const state = inject(useItemListStateKey)
  if (!state) throw new Error('No ItemList Key')
  return state
}
