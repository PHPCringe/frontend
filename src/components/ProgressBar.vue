
<script lang="ts" setup>

const props = defineProps({
    percentage: {
        type: Number,
        default: 50
    }
})

</script>
<template>

<div class="progress-full | w-full h-1 relative bg-slate-200 rounded-full">
    <div class="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full h-1 absolute left-0 top-0" :style="{width: `${percentage}%`}"></div>
</div>

</template>