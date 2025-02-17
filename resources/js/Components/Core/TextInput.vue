<script setup>
import { onMounted, ref } from 'vue';

const model = defineModel({
    type: String,
    required: true,
});

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        class="rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-gray-800 focus:ring-gray-800 text-black"
        v-model="model"
        ref="input"
    />
</template>
