<script setup lang="ts">
const emit = defineEmits(["click"]);
const props = defineProps({
    type: {
        type: String,
        default: "button"
    },
    to: {
        type: String,
        default: "/"
    },
    block: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
<router-link 
    v-if="type == 'link'" 
    :to="to" 
    :class="{'bg-gradient-primary text-white block text-center p-3 text-sm mt-4 rounded-md font-medium': true, 'block w-full': block}">
    <slot>
        Submit
    </slot>
</router-link>
<button v-else 
    @click.prevent="emit('click')"
    :class="{'bg-gradient-primary text-white block text-center p-3 text-sm mt-4 rounded-md font-medium': true, 'w-full': block}">
    <slot>
        Submit
    </slot>
</button>
</template>