<script setup lang="ts">
const model = defineModel<string>()
</script>
<template>
    <input 
        v-model="model" 
        type="date"
        class="text-center rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-gray-800 focus:ring-gray-800 text-black"
    />
</template>
<style scoped></style>