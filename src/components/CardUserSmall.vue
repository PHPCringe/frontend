<script setup lang="ts">
const props = defineProps({
    src: String,
    name: String,
    status: String
})
</script>
<template>
    <div class="card-user | bg-white shadow-xl p-5 text-center rounded-lg shadow-neutral-200">
        <img :src="src" alt="Adrian Lewis" class="w-15 h-15 object-cover rounded-lg mx-auto">
        <h5 class="text-gray-700 font-semibold my-2">{{name}}</h5>
        <p class="user-role text-sm text-gray-400">{{status}}</p>
    </div>
</template>