<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'success',
  },
  message: {
    type: String,
    default: 'Success',
  },
})
</script>

<template>
  <div class="alert px-4 mb-3 mt-3 py-2 rounded-md" :class="{ [`alert-${type}`]: true }">
    {{ message }}
  </div>
</template>

<style>
.alert-success {
    @apply bg-green-600 text-white;
}
.alert-danger {
    @apply bg-red-600 text-white;
}
</style>
