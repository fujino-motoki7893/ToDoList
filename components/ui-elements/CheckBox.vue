<template>
  <input
    type="checkbox"
    class="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
  >
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
}
</script>
