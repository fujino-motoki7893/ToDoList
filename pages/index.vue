<template>
  <div>
    <NuxtLayout name="custom">
      <template #header>
        Some header template content.
      </template>

      The rest of the page
      <Button />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})

const { data: home } = useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
})
</script>
