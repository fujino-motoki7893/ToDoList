<template>
  <div>
    <ItemList />
    題名
    <InputField />
    内容
    <InputField />
    <Button
      button-text="追加"
    />
  </div>
</template>

<script setup lang="ts">
import ItemList from '~/components/organisms/ItemList.vue'
</script>
