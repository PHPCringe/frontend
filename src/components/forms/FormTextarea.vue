<script setup lang="ts">

const props = defineProps({
    'label': {
        type: String,
        default: "Display Name"
    },
    'placeholder': {
        type: String,
        default: "Input your display name here"
    },
    rows: Number
})
</script>
<template>
<div class="form-textarea mb-6">
    <label for="form-input" class="font-bold text-black block mb-2">{{label}}</label>
    <textarea class="border border-zinc-400 rounded-md px-3 py-2 text-base w-full" :rows="rows"
                :placeholder="placeholder" ></textarea>
</div>
</template>