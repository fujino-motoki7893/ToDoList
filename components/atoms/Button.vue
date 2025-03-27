<template>
  <button
    :disabled="props.isDisabled"
    @click="emits('onClick')"
  >
    {{ props.buttonText }}
  </button>
</template>

<script setup lang="ts">
// props
const props = withDefaults(defineProps<{
  buttonText?: string
  isDisabled?: boolean
}>(), {
  buttonText: 'default',
  isDisabled: false,
})

// emit
const emits = defineEmits<{
  (e: 'onClick'): void
}>()
</script>
