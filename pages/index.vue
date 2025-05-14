<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold text-center mb-6 text-indigo-600">
      ToDoList
    </h1>

    <ItemList class="mb-8" />

    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">題名</label>
        <InputField class="w-full" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">内容</label>
        <InputField
          class="w-full"
          :is-text-area="true"
        />
      </div>

      <Button
        button-text="追加"
        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium
        py-2 px-4 rounded-md transition duration-300 mt-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemList from '~/components/layouts/ItemList.vue'
import { provideItemList } from '~/composables/domains/itemList'

provideItemList()
</script>
