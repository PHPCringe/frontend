<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
  },
  label: {
    type: String,
    default: 'Display Name',
  },
  placeholder: {
    type: String,
    default: 'Input your display name here',
  },
  type: {
    type: String,
    default: 'text',
  },
  prefix: {
    type: String,
  },
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form-input-group mb-6">
    <label for="form-input" class="font-bold text-black block mb-2">{{ label }}</label>
    <div class="form-input relative overflow-hidden">
      <span
        v-if="prefix"
        class="absolute left-1 top-50% translate-y--50% px-2 "
      >
        {{ prefix }}
      </span>
      <input
        id="form-input"
        :value="modelValue"
        :type="type"
        class="border border-zinc-400 rounded-md px-3 py-2 text-base w-full" :class="{
          'pl-10': prefix,
        }"
        :placeholder="placeholder"
        @input="emit('update:modelValue', ($event!.target as HTMLInputElement)!.value!)"
      >
    </div>
  </div>
</template>
