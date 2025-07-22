<template>
  <div>
    <div>
      <header>
        <Header />
      </header>
    </div>
    <div class="flex justify-center">
      <img src="~/assets/image/think_fujino_edit.jpg">
    </div>
    <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-center mb-6 text-indigo-600">
        ToDoList
      </h1>

      <ItemList class="mb-8" />

      <div class="space-y-4">
        <ItemInput />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemList from '~/components/layouts/ItemList.vue'
import { provideItemList } from '~/composables/domains/itemList'

provideItemList()
</script>
