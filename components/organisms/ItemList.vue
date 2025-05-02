<template>
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <TableHeaderWrapper class="bg-indigo-600 p-4 text-lg font-bold text-white" />

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
          <button class="p-1 text-gray-500 hover:text-indigo-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg  "
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
          <button class="p-1 text-gray-500 hover:text-red-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5
                7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
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
