<script setup lang="ts">
import {Link} from '@inertiajs/vue3';

defineProps<{
    link: boolean,
    href: string|null,
    hoverable: boolean
}>()

</script>
<template>
    <Link 
        v-if="link" 
        :href="href ? href : ''" 
        class="p-3 flex flex-row bg-gray-700 rounded-lg mb-4 cursor-pointer"
        :class="{' transition duration-150 ease-in-out hover:bg-gray-600': hoverable}"
    >
        <slot/>
    </Link>
    <div 
        v-else
        class="p-3 flex flex-row bg-gray-700 rounded-lg mb-4 cursor-pointer"
        :class="{' transition duration-150 ease-in-out hover:bg-gray-600': hoverable}"
    >
        <slot/>
    </div>
</template>
<style scoped>

</style>