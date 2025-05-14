<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">題名</label>
    <InputField
      v-model="itemName"
      class="w-full"
    />
  </div>

  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">内容</label>
    <InputField
      v-model="itemContent"
      class="w-full"
      :is-text-area="true"
    />
  </div>

  <Button
    button-text="追加"
    class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium
        py-2 px-4 rounded-md transition duration-300 mt-4"
    @click="handleAddItem"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { injectItemList } from '~/composables/domains/itemList'

// アイテムリストの状態を取得
const { addItem } = injectItemList()

// 入力フィールドの値
const itemName = ref('')
const itemContent = ref('')

/**
 * 追加ボタンがクリックされたときの処理
 */
const handleAddItem = () => {
  // 題名が空の場合は追加しない
  if (!itemName.value.trim()) {
    alert('題名を入力してください')
    return
  }

  // アイテムを追加
  addItem(itemName.value.trim(), itemContent.value.trim())

  // 入力フィールドをクリア
  itemName.value = ''
  itemContent.value = ''
}
</script>
