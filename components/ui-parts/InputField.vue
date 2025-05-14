<template>
  <div
    v-if="props.type === 'number'"
    class="relative"
  >
    <input
      v-model="model"
      type="number"
      :placeholder="placeholder"
      :disabled="props.isDisabled"
      class="w-full px-3 py-2 border border-gray-300 rounded-md
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
      @keydown.e.prevent
    >
  </div>
  <div
    v-else-if="!props.isTextArea"
    class="relative"
  >
    <input
      v-model="model"
      :type="props.type"
      :placeholder="placeholder"
      :disabled="props.isDisabled"
      class="w-full px-3 py-2 border border-gray-300 rounded-md
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
      :class="{ 'opacity-50 cursor-not-allowed': props.isDisabled }"
    >
  </div>
  <div
    v-else
    class="relative"
  >
    <textarea
      v-model="model"
      :placeholder="placeholder"
      :disabled="props.isDisabled"
      class="w-full px-3 py-2 border border-gray-300 rounded-md
      focus:outline-none focus:ring-2 focus:ring-indigo-500
      focus:border-indigo-500 transition duration-200 h-32 resize-none"
      :class="{ 'opacity-50 cursor-not-allowed': props.isDisabled }"
    />
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string | null>()

const props = withDefaults(defineProps<{
  type?: string
  placeholder?: string
  isDisabled?: boolean
  isTextArea?: boolean
  defaultValue?: string
}>(), {
  type: 'text',
  placeholder: '',
  isDisabled: false,
  isTextArea: false,
  defaultValue: '',
})

onMounted(() => {
  if (model.value === undefined) {
    model.value = props.defaultValue
  }
})
</script>
