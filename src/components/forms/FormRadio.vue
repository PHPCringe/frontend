<script setup lang="ts">
const props = defineProps({
    name: String,
    value: String,
    id: String,
    label: String
})

</script>

<template>
<div class="radio | inline-block">
    <input type="radio" :name="name" :id="id">
    <label :for="id" class="ml-2">{{label}}</label>
</div>
</template>