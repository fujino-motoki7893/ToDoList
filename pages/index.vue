<template>
  <div>
    <div>
      <header>
        <Header />
      </header>
    </div>
    <div>
      <Home />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provideItemList } from '~/composables/domains/itemList'

provideItemList()
</script>
