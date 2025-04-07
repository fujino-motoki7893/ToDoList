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
