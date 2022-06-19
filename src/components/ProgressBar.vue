
<script lang="ts" setup>

const props = defineProps({
    percentage: {
        type: Number,
        default: 50
    },
    size: {
        type: String,
        default: "sm"
    }
})

const height = ref('h-1')

if(props.size=='md') height.value = "h-3"
if(props.size=='lg') height.value = "h-4"

</script>
<template>

<div :class="{'progress-full | w-full relative bg-slate-200 rounded-full':true, [height]:true}" >
    <div :class="{'bg-gradient-to-r from-emerald-500 to-green-500 rounded-full absolute left-0 top-0':true, [height]:true}"  :style="{width: `${percentage}%`}"></div>
</div>

</template>