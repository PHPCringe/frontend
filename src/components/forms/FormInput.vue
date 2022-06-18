<script lang="ts" setup>

const props = defineProps({
    'label': {
        type: String,
        default: "Display Name"
    },
    'placeholder': {
        type: String,
        default: "Input your display name here"
    },
    'type': {
        type: String,
        default: "text"
    }
})

</script>

<template>
    <div class="form-input mb-6">
        <label for="form-input" class="font-bold text-black block mb-2">{{label}}</label>
        <input :type="type" 
                class="border border-zinc-400 rounded-md px-3 py-2 text-base w-full"
                :placeholder="placeholder" 
                id="form-input">
    </div>
</template>