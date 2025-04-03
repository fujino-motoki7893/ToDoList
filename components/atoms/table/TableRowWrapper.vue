<template>
  <div class="row">
    <slot />
  </div>
</template>

<style scoped>
.row {
  box-sizing: border-box;
  min-height: 44px;
  display: flex;
  align-items: stretch;
}
</style>
