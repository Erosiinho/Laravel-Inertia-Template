<script setup lang="ts">

defineProps<{
    expanded: boolean
}>()

</script>

<template>
    <div :class="{'max-h-[1800px] opacity-100 transition-all duration-500 ease-in-out': expanded, 'max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out': !expanded}">
        <slot/>
    </div>
</template>

<style scoped>

</style>