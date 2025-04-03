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
  <div
    v-else
    class="input-field"
  >
    <textarea
      v-model="model"
      :placeholder="placeholder"
      :disabled="props.isDisabled"
      @focus="onFocus"
      @blur="onBlur"
    />
    <CancelButton
      v-if="clearable && !props.isDisabled && model"
      @click="onClickCancelButton"
    />
  </div>
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

// textarea時のフォーカス制御
const isFocused = ref<boolean>(false)
const onFocus = () => isFocused.value = true
const onBlur = () => isFocused.value = false
</script>
