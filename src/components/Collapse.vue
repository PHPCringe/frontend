<script setup lang="ts">

const props = defineProps({
    open: {
        type: Boolean,
        default: false
    }
})

const isOpen = ref(props.open)

const toggle = () => {
    isOpen.value = !isOpen.value
    console.log(!isOpen.value)
}
</script>
<template>
<div class="collapse | border-b border-gray-300">
    <div class="collapse__toggle | cursor-pointer  p-5 flex justify-between" @click="toggle">
        <div>
            <slot name="title">
                <h3>Manage Expenses</h3>
            </slot>
        </div>
        <div i="carbon-chevron-down"></div>
    </div>
    <transition name="slide-down">
        <div class="collapse__content | px-5 py-3" v-show="isOpen">
            <slot name="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </slot>
        </div>
    </transition>
</div>
</template>
<style>

.collapse__content {

}
</style>