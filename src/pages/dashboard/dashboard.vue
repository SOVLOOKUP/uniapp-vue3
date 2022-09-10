<script setup lang="ts">
const { setPageConfig } = usePageStore()

onShow(() => {
  setPageConfig({
    pageTitle: 'Dashboard',
  })
})
</script>

<template>
  <div class="p-6">
    hello world
  </div>
</template>
