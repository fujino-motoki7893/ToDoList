<template>
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <TableHeaderWrapper />
    <div
      v-if="items.length === 0"
      class="p-6 text-center text-gray-500"
    >
      タスクがありません。新しいタスクを追加してください。
    </div>

    <TableRowWrapper
      v-for="item in items"
      :key="item.id"
      class="hover:bg-indigo-50 transition-colors duration-150"
    >
      <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <div class="flex items-center space-x-3 w-full">
          <input
            type="checkbox"
            class="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          >
          <div class="flex flex-col sm:flex-row sm:items-center w-full">
            <span class="font-medium text-gray-800 mr-2">{{ item.id }}. {{ item.name }}</span>
            <span class="text-gray-600 text-sm sm:ml-2">{{ item.content }}</span>
          </div>
        </div>

        <div class="flex space-x-2">
          <EditButton />
          <DeleteButton />
        </div>
      </div>
    </TableRowWrapper>
  </div>
</template>

<script setup lang="ts">
import { mockData } from '@/repositories/domains/getItems'

// 繋ぎ込んでいない状態の動作確認のため、モックデータを使用
const items = ref(mockData)
console.log(items.value)

onMounted(async () => {
  try {
    const data = await $fetch('/graphql', {
      method: 'POST',
      body: {
        query: `
          query {
            items {
              content
              id
              name
            }
          }
        `,
      },
    })
    console.log(data)
  }
  catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>
