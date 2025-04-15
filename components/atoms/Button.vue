<template>
  <button
    class="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700
    text-white font-medium rounded-md transition duration-200
    flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    :class="{
      'opacity-50 cursor-not-allowed': props.isDisabled,
      'text-sm': props.size === 'small',
      'text-lg': props.size === 'large',
    }"
    :disabled="props.isDisabled"
    @click="emits('onClick')"
  >
    <span
      v-if="props.icon && props.iconPosition === 'left'"
      class="mr-2"
    >
      <slot name="icon" />
    </span>
    {{ props.buttonText }}
    <span
      v-if="props.icon && props.iconPosition === 'right'"
      class="ml-2"
    >
      <slot name="icon" />
    </span>
  </button>
</template>

<script setup lang="ts">
// props
const props = withDefaults(defineProps<{
  buttonText?: string
  isDisabled?: boolean
  size?: 'small' | 'medium' | 'large'
  icon?: boolean
  iconPosition?: 'left' | 'right'
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
}>(), {
  buttonText: 'default',
  isDisabled: false,
  size: 'medium',
  icon: false,
  iconPosition: 'left',
  variant: 'primary',
})

// emit
const emits = defineEmits<{
  (e: 'onClick'): void
}>()
</script>
