<script setup lang="ts">
const model = defineModel<number | string>()

defineProps<{
  items: ({ id: number; name: string }[] | string[]),
  withKey: boolean
}>()
</script>

<template>
  <select v-model="model" class="text-center rounded-md bg-gray-200 text-black p-0">
    <option v-for="item in items" :value="withKey && typeof item === 'object' ? item.id : item">
      {{ withKey && typeof item === 'object' ? item.name : item }}
    </option>
  </select>
</template>

<style scoped>
</style>
