<template>
  <div>
    <TableHeaderWrapper
      class="bg-gray-200 p-4 text-lg font-bold"
    >
      ToDoList
    </TableHeaderWrapper>
    <TableRowWrapper
      v-for="item in items"
      :key="item.id"
    >
      <div class="flex items-center justify-between p-4 border-b border-gray-300">
        <div class="flex items-center">
          <input
            type="checkbox"
            class="mr-2"
          >
          <span>{{ item.id }}.  </span>
          <span>{{ item.name }}： </span>
          <span>{{ item.content }}</span>
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
