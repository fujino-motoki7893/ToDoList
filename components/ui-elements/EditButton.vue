<template>
  <button
    class="p-1 text-gray-500 hover:text-indigo-600 transition-colors"
    title="編集"
    @click="$emit('edit')"
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
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
defineEmits(['edit'])
</script>
