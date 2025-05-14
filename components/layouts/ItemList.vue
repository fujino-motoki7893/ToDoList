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
          <CheckBox
            v-if="!item.isEditing"
            v-model="item.completed"
          />
          <div
            v-if="!item.isEditing"
            class="flex flex-col sm:flex-row sm:items-center w-full"
          >
            <span
              class="font-medium text-gray-800 mr-2"
              :class="{ 'line-through': item.completed }"
            >
              {{ item.id }}. {{ item.name }}
            </span>
            <span
              class="text-gray-600 text-sm sm:ml-2"
              :class="{ 'line-through': item.completed }"
            >
              {{ item.content }}
            </span>
          </div>
          <div
            v-else
            class="flex flex-col space-y-2 w-full"
          >
            <div class="flex items-center">
              <span class="font-medium text-gray-800 mr-2">{{ item.id }}.</span>
              <input
                v-model="item.editName"
                class="border border-gray-300 rounded px-2 py-1 flex-grow"
                placeholder="タスク名"
              >
            </div>
            <input
              v-model="item.editContent"
              class="border border-gray-300 rounded px-2 py-1 w-full"
              placeholder="詳細"
            >
          </div>
        </div>

        <div class="flex space-x-2">
          <template v-if="!item.isEditing">
            <EditButton @edit="startEditing(item)" />
            <DeleteButton @delete="deleteItem(item.id)" />
          </template>
          <template v-else>
            <button
              class="p-1 text-green-500 hover:text-green-600 transition-colors"
              title="保存"
              @click="saveEditing(item)"
            >
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
            <button
              class="p-1 text-red-500 hover:text-red-600 transition-colors"
              title="キャンセル"
              @click="cancelEditing(item)"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </template>
        </div>
      </div>
    </TableRowWrapper>
  </div>
</template>

<script setup lang="ts">
import { injectItemList } from '~/composables/domains/itemList'

const {
  items,
  deleteItem,
  startEditing,
  saveEditing,
  cancelEditing,
} = injectItemList()
</script>
