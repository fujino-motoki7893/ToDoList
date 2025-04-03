<template>
  <div>
    <TableHeaderWrapper
      class="bg-gray-200 p-4 text-lg font-bold"
    >
      ItemListのヘッダーです。
    </TableHeaderWrapper>
    <TableRowWrapper>
      ItemListの内容です。
    </TableRowWrapper>
  </div>
</template>

<script setup lang="ts">
const query = Document
const variables = { limit: 5 }

onMounted(async () => {
  const { data } = await useAsyncQuery(query, variables)
  console.log(data)
})
</script>
