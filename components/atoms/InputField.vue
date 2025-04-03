<template>
  <div
    v-if="props.type === 'number'"
    class="input-wrapper"
  >
    <input
      v-model="model"
      type="number"
      :placeholder="placeholder"
      :disabled="props.isDisabled"
      @keydown.e.prevent
    >
  </div>
  <input
    v-else-if="!props.isTextArea"
    v-model="model"
    :type="props.type"
    :placeholder="placeholder"
    :disabled="props.isDisabled"
  >
</template>

<script setup lang="ts">
const model = defineModel<string | null>()

const props = withDefaults(defineProps<{
  type?: string
  placeholder?: string
}>(), {
  type: 'text',
  placeholder: '',
})

onMounted(() => {
  if (model.value === undefined) {
    model.value = props.defaultValue
  }
})
</script>
